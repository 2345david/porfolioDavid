<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="wrap nav__inner">
      <a href="#inicio" class="nav__brand" @click="cerrar">
        <span class="nav__mark" aria-hidden="true">DR</span>
        <span>David Ramos</span>
      </a>

      <nav class="nav__links" :class="{ 'is-open': abierto }" :aria-label="ui('navSecciones')">
        <a
          v-for="s in secciones"
          :key="s.id"
          :href="'#' + s.id"
          :aria-current="activa === s.id ? 'true' : null"
          @click="cerrar"
        >{{ ui(s.clave) }}</a>
        <a :href="cv" class="nav__cv-mobile" download>{{ ui('descargarCV') }}</a>
      </nav>

      <div class="nav__actions">
        <button
          type="button"
          class="nav__lang"
          :title="ui('cambiarIdioma')"
          @click="cambiarIdioma()"
        >
          <span :class="{ 'is-active': idioma === 'es' }">ES</span>
          <span class="nav__lang-sep" aria-hidden="true">/</span>
          <span :class="{ 'is-active': idioma === 'en' }">EN</span>
          <span class="sr-only">, {{ ui('cambiarIdioma') }}</span>
        </button>
        <button
          type="button"
          class="nav__icon"
          :aria-label="oscuro ? ui('temaClaro') : ui('temaOscuro')"
          @click="cambiarTema"
        >
          <UiIcon :name="oscuro ? 'sun' : 'moon'" />
        </button>
        <a :href="cv" class="btn btn--primary nav__cv" download>
          <UiIcon name="download" /> CV
        </a>
        <button
          type="button"
          class="nav__icon nav__toggle"
          :aria-expanded="abierto ? 'true' : 'false'"
          :aria-label="ui('abrirMenu')"
          @click="abierto = !abierto"
        >
          <UiIcon :name="abierto ? 'close' : 'menu'" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    cv: { type: String, default: '/CV_david.pdf' },
  },
  setup() {
    const { idioma, ui, cambiarIdioma } = useIdioma()
    return { idioma, ui, cambiarIdioma }
  },
  data: () => ({
    scrolled: false,
    abierto: false,
    oscuro: false,
    activa: '',
    secciones: [
      { id: 'trayectoria', clave: 'navTrayectoria' },
      { id: 'proyectos', clave: 'navProyectos' },
      { id: 'stack', clave: 'navStack' },
      { id: 'certificaciones', clave: 'navCertificaciones' },
      { id: 'contacto', clave: 'navContacto' },
    ],
  }),
  mounted() {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll, { passive: true })

    const html = document.documentElement
    this.oscuro =
      html.dataset.theme === 'dark' ||
      (!html.dataset.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) this.activa = e.target.id
          })
        },
        { rootMargin: '-45% 0px -50% 0px' }
      )
      this.secciones.forEach((s) => {
        const el = document.getElementById(s.id)
        if (el) this.observer.observe(el)
      })
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    if (this.observer) this.observer.disconnect()
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 8
    },
    cerrar() {
      this.abierto = false
    },
    cambiarTema() {
      this.oscuro = !this.oscuro
      const tema = this.oscuro ? 'dark' : 'light'
      document.documentElement.dataset.theme = tema
      try {
        localStorage.setItem('tema', tema)
      } catch (e) {
        /* sin almacenamiento: el tema dura hasta recargar */
      }
    },
  },
}
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 40;
  height: var(--nav-h);
  background: color-mix(in srgb, var(--paper) 88%, transparent);
  backdrop-filter: saturate(1.4) blur(12px);
  -webkit-backdrop-filter: saturate(1.4) blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s;
}
.nav--scrolled { border-bottom-color: var(--line); }

.nav__inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--step-1);
  letter-spacing: -0.02em;
  text-decoration: none;
  margin-right: auto;
}
.nav__mark {
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

.nav__links {
  display: flex;
  gap: 0.25rem;
}
.nav__links a {
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  text-decoration: none;
  color: var(--muted);
  font-weight: 500;
  font-size: 0.9375rem;
  transition: color 0.2s, background-color 0.2s;
}
.nav__links a:hover { color: var(--ink); }
.nav__links a[aria-current='true'] { color: var(--ink); background: var(--accent-soft); }
.nav__cv-mobile { display: none; }

.nav__actions { display: flex; align-items: center; gap: 0.5rem; }
.nav__icon {
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  transition: border-color 0.2s;
}
.nav__icon:hover { border-color: var(--ink); }
.nav__icon svg { width: 1.15rem; height: 1.15rem; }
.nav__cv { min-height: 2.75rem; }

.nav__lang {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  height: 2.75rem;
  padding: 0 0.875rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.2s;
}
.nav__lang:hover { border-color: var(--ink); }
.nav__lang .is-active { color: var(--accent); font-weight: 700; }
.nav__lang-sep { opacity: 0.5; }

@media (max-width: 400px) {
  .nav__brand span:not(.nav__mark) { display: none; }
}
.nav__toggle { display: none; }

@media (max-width: 900px) {
  .nav__toggle { display: grid; }
  .nav__cv { display: none; }
  .nav__links {
    position: fixed;
    inset: var(--nav-h) 0 auto 0;
    flex-direction: column;
    gap: 0;
    padding: 0.5rem var(--gutter) 1.5rem;
    background: var(--paper);
    border-bottom: 1px solid var(--line);
    transform: translateY(-0.5rem);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
  }
  .nav__links.is-open { opacity: 1; transform: none; visibility: visible; }
  .nav__links a {
    font-family: var(--font-display);
    font-size: var(--step-3);
    font-weight: 600;
    color: var(--ink);
    padding: 0.625rem 0;
    border-radius: 0;
    letter-spacing: -0.02em;
  }
  .nav__links a[aria-current='true'] { background: none; color: var(--accent); }
  .nav__cv-mobile { display: block; color: var(--accent) !important; }
}
</style>
