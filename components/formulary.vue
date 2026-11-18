<template>
  <form
    ref="form"
    class="form"
    :action="FORM_URL"
    method="post"
    novalidate
    @submit.prevent="enviar"
  >
    <div class="form__row">
      <div class="field">
        <label for="nombre">{{ ui('formNombre') }}</label>
        <input id="nombre" v-model="nombre" type="text" name="name" autocomplete="name" required />
      </div>
      <div class="field">
        <label for="email">{{ ui('formEmail') }}</label>
        <input id="email" v-model="emailVisitante" type="email" name="email" autocomplete="email" required />
      </div>
    </div>

    <div class="field">
      <label for="mensaje">{{ ui('formMensaje') }}</label>
      <textarea
        id="mensaje"
        v-model="mensaje"
        name="message"
        rows="5"
        :placeholder="ui('formPlaceholder')"
        required
      ></textarea>
    </div>

    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_subject" value="Nuevo mensaje desde el porfolio" />

    <div class="form__foot">
      <button type="submit" class="btn btn--primary" :disabled="estado === 'enviando' || bloqueado">
        {{ estado === 'enviando' ? ui('formEnviando') : ui('formEnviar') }}
      </button>
      <p class="form__status" :data-tipo="tipoAviso" role="status" aria-live="polite">{{ aviso }}</p>
    </div>

    <p class="form__legal">
      {{ ui('formLegal') }}
      <NuxtLink :to="ui('rutaPrivacidad')">{{ ui('formLegalEnlace') }}</NuxtLink>.
    </p>
  </form>
</template>

<script>
const ESPERA_MINUTOS = 10
const MAX_ENVIOS = 2
const CLAVE = 'contactFormLimit'

// FormSubmit: la dirección normal sirve si el navegador envía el formulario sin JavaScript;
// para enviarlo con fetch (sin salir de la página) hay que usar la versión /ajax/.
const ID_FORMSUBMIT = '57e4ef7bc7190c56e56c23dd260ab95f'
const FORM_URL = `https://formsubmit.co/${ID_FORMSUBMIT}`
const AJAX_URL = `https://formsubmit.co/ajax/${ID_FORMSUBMIT}`

function leerLimite() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE) || 'null')
  } catch (e) {
    return null
  }
}
function guardarLimite(valor) {
  try {
    if (valor) localStorage.setItem(CLAVE, JSON.stringify(valor))
    else localStorage.removeItem(CLAVE)
  } catch (e) {
    /* sin almacenamiento disponible */
  }
}

export default {
  name: 'Formulary',
  setup() {
    const { ui } = useIdioma()
    return { ui }
  },
  data() {
    return {
      FORM_URL,
      nombre: '',
      emailVisitante: '',
      mensaje: '',
      estado: 'idle',
      aviso: '',
      tipoAviso: '',
      bloqueado: false,
    }
  },
  mounted() {
    this.comprobarLimite()
  },
  methods: {
    comprobarLimite() {
      const datos = leerLimite()
      if (!datos) {
        this.bloqueado = false
        return
      }
      const pasados = (Date.now() - datos.firstSubmit) / 60000
      if (pasados >= ESPERA_MINUTOS) {
        guardarLimite(null)
        this.bloqueado = false
      } else if (datos.count >= MAX_ENVIOS) {
        this.bloqueado = true
        const min = Math.ceil(ESPERA_MINUTOS - pasados)
        this.tipoAviso = 'info'
        this.aviso = this.ui('formLimite', { max: MAX_ENVIOS, min })
      }
    },
    registrarEnvio() {
      const datos = leerLimite()
      const ahora = Date.now()
      if (!datos || (ahora - datos.firstSubmit) / 60000 >= ESPERA_MINUTOS) {
        guardarLimite({ firstSubmit: ahora, count: 1 })
      } else {
        guardarLimite({ firstSubmit: datos.firstSubmit, count: datos.count + 1 })
      }
    },
    async enviar() {
      this.comprobarLimite()
      if (this.bloqueado) return

      const form = this.$refs.form
      if (!form.checkValidity()) {
        this.tipoAviso = 'error'
        this.aviso = this.ui('formIncompleto')
        form.reportValidity()
        return
      }

      this.estado = 'enviando'
      this.aviso = ''
      try {
        const res = await fetch(AJAX_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: this.nombre,
            email: this.emailVisitante, // FormSubmit lo usa como "responder a"
            message: this.mensaje,
            _subject: 'Nuevo mensaje desde el porfolio',
            _template: 'table',
            _captcha: 'false',
          }),
        })
        const datos = await res.json().catch(() => ({}))
        if (!res.ok || String(datos.success) !== 'true') throw new Error(datos.message || String(res.status))
        this.registrarEnvio()
        this.nombre = ''
        this.emailVisitante = ''
        this.mensaje = ''
        this.tipoAviso = 'ok'
        this.aviso = this.ui('formOk')
        this.comprobarLimite()
      } catch (e) {
        this.tipoAviso = 'error'
        this.aviso = this.ui('formError')
      } finally {
        this.estado = 'idle'
      }
    },
  },
}
</script>

<style scoped>
.form { display: grid; gap: 1.25rem; }
.form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
@media (max-width: 560px) { .form__row { grid-template-columns: 1fr; } }

.field { display: grid; gap: 0.4rem; }
.field label { font-weight: 600; font-size: 0.9375rem; }
.field input,
.field textarea {
  width: 100%;
  font: inherit;
  color: var(--ink);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0.75rem 0.875rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.field textarea { resize: vertical; min-height: 8rem; }
.field input::placeholder,
.field textarea::placeholder { color: var(--muted); opacity: 0.8; }
.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 22%, transparent);
}

.form__foot { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.form__foot .btn:disabled { opacity: 0.55; cursor: not-allowed; }
.form__status { font-size: 0.9375rem; color: var(--muted); }
.form__legal { font-size: 0.8125rem; line-height: 1.5; color: var(--muted); max-width: 34rem; }
.form__legal a { color: inherit; text-decoration: underline; text-underline-offset: 0.15em; }
.form__legal a:hover { color: var(--ink); }
.form__status[data-tipo='ok'] { color: var(--ink); font-weight: 600; }
.form__status[data-tipo='error'] { color: #c0352b; font-weight: 600; }
</style>
