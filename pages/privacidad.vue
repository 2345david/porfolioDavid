<template>
  <div class="priv">
    <div class="wrap priv__bar">
      <NuxtLink to="/" class="btn btn--ghost"><UiIcon name="back" /> {{ ui('volverPorfolio') }}</NuxtLink>
      <button type="button" class="btn btn--ghost" :title="ui('cambiarIdioma')" @click="cambiarIdioma()">
        {{ idioma === 'es' ? 'EN' : 'ES' }}<span class="sr-only">, {{ ui('cambiarIdioma') }}</span>
      </button>
    </div>

    <main class="wrap priv__main">
      <p class="section-eyebrow">RGPD</p>
      <h1 class="priv__title">{{ ui('privTitulo') }}</h1>
      <p class="priv__date">{{ ui('privActualizada') }}</p>

      <section v-for="(s, i) in privacidad" :key="i" class="priv__block">
        <h2>{{ t(s.titulo) }}</h2>
        <p>
          <template v-for="(trozo, j) in partes(t(s.texto))" :key="j">
            <a v-if="trozo === '{email}'" :href="'mailto:' + perfil.email">{{ perfil.email }}</a>
            <template v-else>{{ trozo }}</template>
          </template>
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
// /privacidad en español y /privacy en inglés.
definePageMeta({ alias: ['/privacy'] })

const { idioma, t, ui, cambiarIdioma } = useIdioma()
if (useRoute().path.startsWith('/privacy')) idioma.value = 'en'
useHead({ meta: [{ name: 'robots', content: 'noindex' }] })
</script>

<script>
import { perfil } from '~/data/portfolio.js'
import { privacidad } from '~/data/privacidad.js'

export default {
  name: 'Privacidad',
  data: () => ({ perfil, privacidad }),
  methods: {
    partes(texto) {
      return texto.split(/(\{email\})/)
    },
  },
}
</script>

<style scoped>
.priv { padding-block: 1.5rem 5rem; }
.priv__bar { display: flex; justify-content: space-between; gap: 0.75rem; max-width: 46rem; margin-bottom: 3rem; }
.priv__main { max-width: 46rem; }
.priv__title {
  font-family: var(--font-display);
  font-size: var(--step-4);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.03em;
  margin-top: 0.75rem;
}
.priv__date { color: var(--muted); font-size: var(--step--1); margin-top: 0.75rem; }
.priv__block { margin-top: 2.25rem; }
.priv__block h2 {
  font-family: var(--font-display);
  font-size: var(--step-1);
  font-weight: 650;
  letter-spacing: -0.015em;
  margin-bottom: 0.5rem;
}
.priv__block p { color: var(--muted); }
.priv__block a { color: var(--accent); text-decoration: underline; text-underline-offset: 0.15em; }
</style>
