<template>
  <div class="err">
    <header class="err__bar wrap">
      <NuxtLink to="/" class="err__brand" @click.prevent="volver('/')">
        <span class="err__mark" aria-hidden="true">DR</span>
        <span>David Ramos</span>
      </NuxtLink>
      <button type="button" class="err__lang" :title="ui('cambiarIdioma')" @click="cambiarIdioma()">
        <span :class="{ 'is-active': idioma === 'es' }">ES</span>
        <span aria-hidden="true">/</span>
        <span :class="{ 'is-active': idioma === 'en' }">EN</span>
        <span class="sr-only">, {{ ui('cambiarIdioma') }}</span>
      </button>
    </header>

    <main class="err__main wrap">
      <p class="err__code" aria-hidden="true">{{ codigo }}</p>
      <p class="err__git">
        <span class="err__prompt">$</span> git checkout {{ ruta }}<br />
        <span class="err__fatal">{{ es404 ? ui('error404Git', { ruta }) : ui('errorGit') }}</span>
      </p>
      <h1 class="err__title">{{ es404 ? ui('error404Titulo') : ui('errorTitulo') }}</h1>
      <p class="err__text">{{ es404 ? ui('error404Texto') : ui('errorTexto') }}</p>
      <div class="err__cta">
        <button type="button" class="btn btn--primary" @click="volver('/')">
          <UiIcon name="back" /> {{ ui('errorInicio') }}
        </button>
        <button type="button" class="btn btn--ghost" @click="volver('/#proyectos')">
          {{ ui('verProyectos') }}
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
const props = defineProps({ error: { type: Object, default: () => ({}) } })
const { idioma, ui, cambiarIdioma } = useIdioma()

const codigo = computed(() => props.error?.statusCode || 404)
const es404 = computed(() => codigo.value === 404)
const ruta = computed(() => {
  const r = props.error?.url || useRoute().fullPath || '/'
  return r.length > 40 ? r.slice(0, 40) + '…' : r
})

const volver = (destino) => clearError({ redirect: destino })
</script>

<style scoped>
.err { min-height: 100vh; min-height: 100dvh; display: flex; flex-direction: column; }

.err__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-h);
}
.err__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--step-1);
  letter-spacing: -0.02em;
  text-decoration: none;
}
.err__mark {
  display: grid;
  place-items: center;
  width: 2.125rem;
  height: 2.125rem;
  border-radius: 8px;
  background: var(--accent);
  color: var(--accent-ink);
  font-size: 0.875rem;
  letter-spacing: 0;
}
.err__lang {
  display: inline-flex;
  gap: 0.25rem;
  height: 2.75rem;
  align-items: center;
  padding: 0 0.875rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  cursor: pointer;
}
.err__lang:hover { border-color: var(--ink); }
.err__lang .is-active { color: var(--accent); font-weight: 700; }

.err__main {
  flex: 1;
  display: grid;
  align-content: center;
  justify-items: start;
  gap: 1.25rem;
  padding-block: 3rem 5rem;
}
.err__code {
  font-family: var(--font-display);
  font-size: clamp(7rem, 3rem + 20vw, 16rem);
  font-weight: 800;
  line-height: 0.8;
  letter-spacing: -0.06em;
  font-variation-settings: 'opsz' 96;
  color: var(--accent);
  margin-left: -0.05em;
  animation: subir 0.9s cubic-bezier(0.2, 0.7, 0.1, 1) both;
}
@keyframes subir {
  from { opacity: 0; transform: translateY(12%); }
  to { opacity: 1; transform: none; }
}
.err__git {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--muted);
  padding: 0.875rem 1.125rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  max-width: 100%;
  overflow-wrap: anywhere;
}
.err__prompt { color: var(--accent); }
.err__fatal { color: color-mix(in srgb, #e5484d 82%, var(--ink)); }
.err__title {
  font-family: var(--font-display);
  font-size: var(--step-4);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.03em;
  margin-top: 0.5rem;
}
.err__text { color: var(--muted); font-size: var(--step-1); max-width: 34rem; }
.err__cta { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.5rem; }
</style>
