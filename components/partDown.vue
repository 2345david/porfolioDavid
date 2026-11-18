<template>
  <footer class="footer">
    <div class="wrap">
      <div class="footer__top">
        <div class="footer__intro">
          <p class="footer__role">{{ t(perfil.rol) }} · {{ perfil.ubicacion }}</p>
          <a class="footer__mail" :href="'mailto:' + perfil.email">{{ perfil.email }}</a>
        </div>

        <nav class="footer__col" :aria-label="ui('navSecciones')">
          <p class="footer__head">{{ ui('navSecciones') }}</p>
          <ul role="list">
            <li v-for="s in secciones" :key="s.id"><a :href="'#' + s.id">{{ ui(s.clave) }}</a></li>
          </ul>
        </nav>

        <div class="footer__col">
          <p class="footer__head">{{ ui('footerOtros') }}</p>
          <ul role="list">
            <li><a :href="enlaces.github" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a :href="enlaces.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a :href="enlaces.infojobs" target="_blank" rel="noopener noreferrer">InfoJobs</a></li>
            <li><NuxtLink :to="ui('rutaCV')">{{ ui('curriculum') }}</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© {{ year }} {{ perfil.nombreCompleto }}</p>
        <p class="footer__meta">
          <NuxtLink :to="ui('rutaPrivacidad')">{{ ui('privacidad') }}</NuxtLink>
          <span aria-hidden="true">·</span>
          <span>{{ ui('footerHecho') }}</span>
        </p>
      </div>
    </div>

  </footer>
</template>

<script>
import { perfil, enlaces } from '~/data/portfolio.js'

export default {
  name: 'PartDown',
  setup() {
    const { t, ui } = useIdioma()
    return { t, ui }
  },
  data: () => ({
    perfil,
    enlaces,
    year: new Date().getFullYear(),
    secciones: [
      { id: 'trayectoria', clave: 'navTrayectoria' },
      { id: 'proyectos', clave: 'navProyectos' },
      { id: 'stack', clave: 'navStack' },
      { id: 'certificaciones', clave: 'navCertificaciones' },
      { id: 'contacto', clave: 'navContacto' },
    ],
  }),
}
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--ink);
  padding-top: clamp(3rem, 2rem + 3vw, 4.5rem);
  color: var(--muted);
  font-size: 0.9375rem;
  padding-bottom: 2rem;
}

.footer__top {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: 2.5rem;
}
.footer__intro { display: grid; gap: 0.75rem; align-content: start; justify-items: start; }
.footer__role { font-size: var(--step-0); }
.footer__mail {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 0.9rem + 1.4vw, 1.875rem);
  font-weight: 650;
  letter-spacing: -0.02em;
  color: var(--ink);
  text-decoration: none;
  overflow-wrap: anywhere;
  background: linear-gradient(currentColor, currentColor) 0 100% / 0 2px no-repeat;
  transition: background-size 0.35s cubic-bezier(0.2, 0.7, 0.1, 1);
}
.footer__mail:hover { background-size: 100% 2px; }

.footer__head {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.875rem;
}
.footer__col ul { display: grid; gap: 0.5rem; list-style: none; padding: 0; margin: 0; }
.footer__col a { color: var(--ink); text-decoration: none; font-weight: 500; transition: color 0.2s; }
.footer__col a:hover { color: var(--accent); }
.footer__meta { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.footer__meta a { color: inherit; transition: color 0.2s; }
.footer__meta a:hover { color: var(--ink); }

.footer__bottom {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  flex-wrap: wrap;
  margin-top: clamp(2.5rem, 2rem + 2vw, 4rem);
  padding-top: 1.25rem;
  border-top: 1px solid var(--line);
  font-size: var(--step--1);
}


@media (max-width: 760px) {
  .footer__top { grid-template-columns: 1fr 1fr; }
  .footer__intro { grid-column: 1 / -1; }
}
</style>
