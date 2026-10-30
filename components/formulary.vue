<template>
  <form
    ref="form"
    class="form"
    :action="endpoint"
    method="post"
    novalidate
    @submit.prevent="enviar"
  >
    <div class="form__row">
      <div class="field">
        <label for="nombre">Nombre</label>
        <input id="nombre" v-model="nombre" type="text" name="name" autocomplete="name" required />
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" v-model="emailVisitante" type="email" name="correo" autocomplete="email" required />
      </div>
    </div>

    <div class="field">
      <label for="mensaje">Mensaje</label>
      <textarea
        id="mensaje"
        v-model="mensaje"
        name="comments"
        rows="5"
        placeholder="Cuéntame sobre el puesto o el proyecto"
        required
      ></textarea>
    </div>

    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_subject" value="Nuevo mensaje desde el porfolio" />

    <div class="form__foot">
      <button type="submit" class="btn btn--primary" :disabled="estado === 'enviando' || bloqueado">
        {{ estado === 'enviando' ? 'Enviando…' : 'Enviar mensaje' }}
      </button>
      <p class="form__status" :data-tipo="tipoAviso" role="status" aria-live="polite">{{ aviso }}</p>
    </div>
  </form>
</template>

<script>
const ESPERA_MINUTOS = 10
const MAX_ENVIOS = 2
const CLAVE = 'contactFormLimit'

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
  data() {
    return {
      endpoint: 'https://formsubmit.co/57e4ef7bc7190c56e56c23dd260ab95f',
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
        this.aviso = `Ya has enviado ${MAX_ENVIOS} mensajes. Podrás enviar otro en ${min} min.`
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
        this.aviso = 'Rellena nombre, un email válido y el mensaje.'
        form.reportValidity()
        return
      }

      this.estado = 'enviando'
      this.aviso = ''
      try {
        const res = await fetch(this.endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        })
        if (!res.ok) throw new Error(String(res.status))
        this.registrarEnvio()
        this.nombre = ''
        this.emailVisitante = ''
        this.mensaje = ''
        this.tipoAviso = 'ok'
        this.aviso = 'Mensaje enviado. Te responderé lo antes posible.'
        this.comprobarLimite()
      } catch (e) {
        this.tipoAviso = 'error'
        this.aviso = 'No se ha podido enviar. Escríbeme directamente al email de la izquierda.'
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
.form__status[data-tipo='ok'] { color: var(--ink); font-weight: 600; }
.form__status[data-tipo='error'] { color: #c0352b; font-weight: 600; }
</style>
