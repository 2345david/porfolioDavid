<template>
  <section id="certificaciones" class="section" aria-labelledby="cert-title">
    <div class="wrap">
      <div v-reveal class="section-head">
        <p class="section-eyebrow">04</p>
        <h2 id="cert-title" class="section-title">
          {{ ui('navCertificaciones') }}<span v-if="lista.length" class="cert__count">{{ lista.length }}</span>
        </h2>
        <p class="section-lead">{{ ui('certLead') }}</p>
      </div>

      <ul v-if="lista.length" class="cert__grid" role="list">
        <li v-for="(c, ci) in lista" :key="ci" v-reveal="ci * 80" class="cert">
          <div class="cert__top">
            <p class="cert__issuer">{{ c.emisor }}</p>
            <p v-if="c.estado === 'en-curso'" class="cert__state">{{ ui('enCurso') }}</p>
            <p v-else class="cert__date">{{ fecha(c.fecha) }}</p>
          </div>
          <h3 class="cert__name">{{ t(c.nombre) }}</h3>
          <ul v-if="c.habilidades && c.habilidades.length" class="tags" role="list">
            <li v-for="(h, hi) in c.habilidades" :key="hi" class="tag">{{ t(h) }}</li>
          </ul>
          <div class="cert__foot">
            <p v-if="c.credencial" class="cert__id">ID {{ c.credencial }}</p>
            <div v-if="c.url || c.pdf" class="cert__links">
              <a v-if="c.url" :href="c.url" class="link" target="_blank" rel="noopener noreferrer">
                {{ ui('verificar') }}<span class="sr-only">{{ ui('verificarSr', { nombre: t(c.nombre) }) }}</span>
              </a>
              <a v-if="c.pdf" :href="c.pdf" class="link" target="_blank" rel="noopener noreferrer">
                {{ ui('verCertificado') }}<span class="sr-only">{{ ui('verCertificadoSr', { nombre: t(c.nombre) }) }}</span>
              </a>
            </div>
          </div>
        </li>
      </ul>

      <div v-else class="cert__empty">
        <p class="cert__empty-title">{{ ui('certVacioTitulo') }}</p>
        <p>{{ ui('certVacioTexto') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { certificaciones } from '~/data/certificaciones.js'

export default {
  name: 'Certificaciones',
  setup() {
    const { t, ui, fecha } = useIdioma()
    return { t, ui, fecha }
  },
  computed: {
    lista() {
      // En curso primero, luego las obtenidas de más reciente a más antigua.
      return [...certificaciones].sort((a, b) => {
        if (a.estado !== b.estado) return a.estado === 'en-curso' ? -1 : 1
        return String(b.fecha).localeCompare(String(a.fecha))
      })
    },
  },
}
</script>

<style scoped>
.cert__count {
  display: inline-grid;
  place-items: center;
  min-width: 1.6em;
  height: 1.6em;
  margin-left: 0.4em;
  padding: 0 0.4em;
  vertical-align: 0.55em;
  border-radius: 999px;
  background: var(--accent);
  color: var(--accent-ink);
  font-family: var(--font-body);
  font-size: 0.4em;
  font-weight: 700;
  letter-spacing: 0;
}

.cert__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: 1rem;
}

.cert {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 1.5rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
}

.cert__top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  font-size: var(--step--1);
}
.cert__issuer { color: var(--muted); font-weight: 600; }
.cert__date { color: var(--muted); white-space: nowrap; }
.cert__state {
  white-space: nowrap;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--signal) 28%, transparent);
}

.cert__name {
  font-family: var(--font-display);
  font-size: var(--step-2);
  font-weight: 650;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.cert__foot {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 0.25rem;
}
.cert__links { display: flex; gap: 1.25rem; flex-wrap: wrap; margin-left: auto; }
.cert__id { font-family: var(--font-mono); font-size: 0.8125rem; color: var(--muted); }

.cert__empty {
  display: grid;
  gap: 0.375rem;
  max-width: 40rem;
  padding: 2rem;
  border: 1.5px dashed var(--line);
  border-radius: var(--radius);
  color: var(--muted);
}
.cert__empty-title {
  color: var(--ink);
  font-family: var(--font-display);
  font-size: var(--step-2);
  font-weight: 650;
  letter-spacing: -0.02em;
}
</style>
