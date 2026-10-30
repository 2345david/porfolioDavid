<template>
  <div>
    <a class="skip" href="#trayectoria">Saltar al contenido</a>
    <navbar :cv="perfil.cv" />

    <main>
      <!-- ── PORTADA ─────────────────────────────────────────── -->
      <section id="inicio" class="hero">
        <div class="wrap hero__grid">
          <h1 class="hero__name">
            <span class="hero__line"><span>David</span></span>
            <span class="hero__line"><span>Ramos</span></span>
            <span class="sr-only">, {{ perfil.rol }}</span>
          </h1>

          <figure class="hero__portrait">
            <img src="/david.png" alt="Ilustración de David programando con auriculares" width="422" height="424" />
          </figure>

          <div class="hero__body">
            <p class="hero__now">
              <span class="hero__dot" aria-hidden="true"></span>
              <span><strong>{{ perfil.ahora.puesto }}</strong>, {{ perfil.ahora.lugar }}</span>
            </p>
            <p class="hero__intro">{{ perfil.intro }}</p>

            <div class="hero__cta">
              <a href="#proyectos" class="btn btn--primary">Ver proyectos</a>
              <NuxtLink to="/curriculumPage" class="btn btn--ghost">Ver currículum</NuxtLink>
            </div>

            <ul class="hero__social" role="list">
              <li>
                <a :href="enlaces.linkedin" target="_blank" rel="noopener noreferrer">
                  <UiIcon name="linkedin" /> LinkedIn
                </a>
              </li>
              <li>
                <a :href="enlaces.github" target="_blank" rel="noopener noreferrer">
                  <UiIcon name="github" /> GitHub
                </a>
              </li>
              <li>
                <a :href="enlaces.infojobs" target="_blank" rel="noopener noreferrer">
                  <UiIcon name="briefcase" /> InfoJobs
                </a>
              </li>
            </ul>
          </div>

          <dl class="hero__facts">
            <div>
              <dt>Base</dt>
              <dd>{{ perfil.ubicacion }}</dd>
            </div>
            <div v-for="d in perfil.datos" :key="d.etiqueta">
              <dt>{{ d.etiqueta }}</dt>
              <dd>{{ d.valor }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <!-- ── TRAYECTORIA (git log) ───────────────────────────── -->
      <section id="trayectoria" class="section" aria-labelledby="tray-title">
        <div class="wrap">
          <div class="section-head">
            <h2 id="tray-title" class="section-title">Trayectoria</h2>
            <p class="section-lead">Mi historial, contado como se lee un repositorio: lo último arriba.</p>
          </div>

          <ol class="log" role="list">
            <li
              v-for="(t, i) in trayectoria"
              :key="i"
              class="log__item"
              :class="['log__item--' + t.tipo, { 'is-head': t.actual }]"
            >
              <div class="log__when">
                <time :datetime="t.fecha">{{ fecha(t.fecha) }}</time>
                <span v-if="t.hasta"> – {{ t.hasta === 'actualidad' ? 'hoy' : fecha(t.hasta) }}</span>
              </div>
              <div class="log__graph" aria-hidden="true"><span class="log__node"></span></div>
              <div class="log__body">
                <p class="log__commit">
                  <span class="log__type">{{ t.tipo }}:</span>
                  <span v-if="t.actual" class="log__head">HEAD</span>
                </p>
                <h3 class="log__title">{{ t.titulo }}</h3>
                <p class="log__place">{{ t.lugar }}</p>
                <p v-if="t.texto" class="log__text">{{ t.texto }}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <!-- ── PROYECTOS ───────────────────────────────────────── -->
      <section id="proyectos" class="section" aria-labelledby="proy-title">
        <div class="wrap">
          <div class="section-head">
            <h2 id="proy-title" class="section-title">Proyectos</h2>
            <p class="section-lead">Desde una web en producción para un cliente hasta el videojuego con el que cerré el ciclo.</p>
          </div>

          <div class="featured">
            <article v-for="(p, i) in destacados" :key="p.titulo" class="feature" :class="{ 'feature--flip': i % 2 }">
              <a
                class="feature__media"
                :href="p.demo || p.codigo"
                target="_blank"
                rel="noopener noreferrer"
                tabindex="-1"
                aria-hidden="true"
              >
                <img :src="p.img" :alt="p.alt" loading="lazy" />
              </a>
              <div class="feature__body">
                <p v-if="p.contexto" class="feature__context">{{ p.contexto }}</p>
                <h3 class="feature__title">{{ p.titulo }}</h3>
                <p class="feature__text">{{ p.resumen }}</p>
                <ul class="tags" role="list">
                  <li v-for="s in p.stack" :key="s" class="tag">{{ s }}</li>
                </ul>
                <div class="feature__links">
                  <a v-if="p.demo" :href="p.demo" class="btn btn--primary" target="_blank" rel="noopener noreferrer">
                    <UiIcon name="external" /> Ver la web
                  </a>
                  <a
                    v-if="p.codigo"
                    :href="p.codigo"
                    class="btn"
                    :class="p.demo ? 'btn--ghost' : 'btn--primary'"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <UiIcon name="code" /> Ver el código
                  </a>
                </div>
              </div>
            </article>
          </div>

          <h3 class="minor-title">Más proyectos</h3>
          <ul class="minor" role="list">
            <li v-for="p in otros" :key="p.titulo" class="mini">
              <div class="mini__media">
                <img :src="p.img" :alt="p.alt" loading="lazy" />
              </div>
              <div class="mini__body">
                <h4 class="mini__title">
                  <a :href="p.codigo || p.demo" target="_blank" rel="noopener noreferrer">{{ p.titulo }}</a>
                </h4>
                <p class="mini__text">{{ p.resumen }}</p>
                <ul class="tags" role="list">
                  <li v-for="s in p.stack" :key="s" class="tag">{{ s }}</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <!-- ── STACK ───────────────────────────────────────────── -->
      <section id="stack" class="section" aria-labelledby="stack-title">
        <div class="wrap">
          <div class="section-head">
            <h2 id="stack-title" class="section-title">Stack</h2>
            <p class="section-lead">Con lo que trabajo a diario y lo que he usado en proyectos.</p>
          </div>
          <div class="stack">
            <div v-for="g in stack" :key="g.grupo" class="stack__group">
              <h3 class="stack__title">{{ g.grupo }}</h3>
              <ul role="list">
                <li v-for="item in g.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ── CERTIFICACIONES ─────────────────────────────────── -->
      <certificaciones />

      <!-- ── CONTACTO ────────────────────────────────────────── -->
      <section id="contacto" class="section contact" aria-labelledby="contact-title">
        <div class="wrap contact__grid">
          <div class="contact__intro">
            <h2 id="contact-title" class="contact__title">¿Hablamos?</h2>
            <p class="section-lead">
              Si buscas a alguien para tu equipo o tienes un proyecto en mente, escríbeme.
            </p>
            <a class="contact__mail" :href="'mailto:' + perfil.email">
              <UiIcon name="mail" />
              <span>{{ perfil.email }}</span>
            </a>
            <a class="link" :href="enlaces.linkedin" target="_blank" rel="noopener noreferrer">O escríbeme por LinkedIn</a>
          </div>
          <formulary />
        </div>
      </section>
    </main>

    <part-down />
    <back-button />
  </div>
</template>

<script>
import { perfil, enlaces, trayectoria, proyectos, stack } from '~/data/portfolio.js'

const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic']

export default {
  name: 'Inicio',
  data: () => ({ perfil, enlaces, trayectoria, stack }),
  computed: {
    destacados() {
      return proyectos.filter((p) => p.destacado)
    },
    otros() {
      return proyectos.filter((p) => !p.destacado)
    },
  },
  methods: {
    fecha(f) {
      const [a, m] = String(f).split('-')
      return m ? `${MESES[Number(m) - 1]} ${a}` : a
    },
  },
}
</script>

<style scoped>
.skip {
  position: absolute;
  left: 1rem;
  top: -4rem;
  z-index: 100;
  padding: 0.75rem 1rem;
  background: var(--accent);
  color: var(--accent-ink);
  border-radius: 8px;
}
.skip:focus { top: 1rem; }

/* ── Portada ─────────────────────────────────────────── */
.hero { padding-block: clamp(2rem, 1rem + 4vw, 4.5rem) clamp(3.5rem, 2rem + 4vw, 6rem); }

.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(16rem, 24rem);
  grid-template-areas:
    'name portrait'
    'body portrait'
    'facts facts';
  column-gap: clamp(2rem, 1rem + 4vw, 5rem);
}

.hero__name {
  grid-area: name;
  font-family: var(--font-display);
  font-size: var(--step-hero);
  font-weight: 800;
  line-height: 0.86;
  letter-spacing: -0.055em;
  font-variation-settings: 'opsz' 96;
  margin-left: -0.04em;
}
.hero__line { display: block; overflow: hidden; padding-bottom: 0.06em; }
.hero__line > span {
  display: block;
  animation: subir 0.9s cubic-bezier(0.2, 0.7, 0.1, 1) both;
}
.hero__line:nth-child(2) > span { animation-delay: 0.08s; }

@keyframes subir {
  from { transform: translateY(105%); }
  to { transform: translateY(0); }
}

.hero__portrait {
  grid-area: portrait;
  align-self: end;
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 18px;
  background: var(--accent);
  overflow: hidden;
  isolation: isolate;
}
.hero__portrait::before {
  /* rejilla sutil, como papel milimetrado */
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image:
    linear-gradient(color-mix(in srgb, var(--accent-ink) 14%, transparent) 1px, transparent 1px),
    linear-gradient(90deg, color-mix(in srgb, var(--accent-ink) 14%, transparent) 1px, transparent 1px);
  background-size: 28px 28px;
}
.hero__portrait img {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 112%;
  max-width: none;
  height: auto;
  transform: translateX(-50%);
  animation: aparecer 1s 0.25s cubic-bezier(0.2, 0.7, 0.1, 1) both;
}
@keyframes aparecer {
  from { opacity: 0; transform: translate(-50%, 6%); }
  to { opacity: 1; transform: translate(-50%, 0); }
}

.hero__body {
  grid-area: body;
  display: grid;
  gap: 1.5rem;
  align-content: start;
  padding-top: clamp(1.5rem, 1rem + 2vw, 2.5rem);
  max-width: 38rem;
}

.hero__now {
  display: flex;
  align-items: baseline;
  gap: 0.625rem;
  font-size: var(--step-0);
}
.hero__dot {
  flex: none;
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--signal) 30%, transparent);
  transform: translateY(-0.05em);
}

.hero__intro {
  font-size: var(--step-1);
  line-height: 1.55;
  color: var(--muted);
}

.hero__cta { display: flex; flex-wrap: wrap; gap: 0.75rem; }

.hero__social { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; list-style: none; padding: 0; }
.hero__social a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding-block: 0.375rem;
  color: var(--muted);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.hero__social a:hover { color: var(--ink); }
.hero__social svg { width: 1.125rem; height: 1.125rem; }

.hero__facts {
  grid-area: facts;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: clamp(3rem, 2rem + 3vw, 4.5rem);
  padding-top: 1.5rem;
  border-top: 1px solid var(--ink);
}
.hero__facts dt { font-size: var(--step--1); color: var(--muted); margin-bottom: 0.25rem; }
.hero__facts dd { font-weight: 600; line-height: 1.4; }

@media (max-width: 860px) {
  .hero__grid {
    grid-template-columns: minmax(0, 1fr) clamp(7rem, 30vw, 11rem);
    grid-template-areas:
      'name portrait'
      'body body'
      'facts facts';
    column-gap: 1rem;
  }
  .hero__portrait { align-self: end; border-radius: 14px; }
  .hero__facts { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .hero__facts { grid-template-columns: 1fr; gap: 1rem; }
}

/* ── Trayectoria ─────────────────────────────────────── */
.log { list-style: none; padding: 0; }
.log__item {
  display: grid;
  grid-template-columns: 11.5rem 2rem minmax(0, 1fr);
  column-gap: 1rem;
}
.log__when {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--muted);
  padding-top: 0.35rem;
  text-align: right;
}
.log__graph {
  position: relative;
  display: flex;
  justify-content: center;
}
.log__graph::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--line);
}
.log__item:first-child .log__graph::before { top: 0.7rem; }
.log__item:last-child .log__graph::before { bottom: auto; height: 0.7rem; }
.log__node {
  position: relative;
  margin-top: 0.4rem;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  background: var(--paper);
  border: 2px solid var(--accent);
}
.log__item--release .log__node { background: var(--accent); }
.log__item--chore .log__node,
.log__item--init .log__node { border-color: var(--muted); }
.log__item.is-head .log__node {
  background: var(--signal);
  border-color: var(--signal);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--signal) 28%, transparent);
}

.log__body { padding-bottom: 2.75rem; max-width: 40rem; }
.log__item:last-child .log__body { padding-bottom: 0; }

.log__commit {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  margin-bottom: 0.25rem;
}
.log__type { color: var(--accent); font-weight: 500; }
.log__item--chore .log__type,
.log__item--init .log__type { color: var(--muted); }
.log__head {
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  background: var(--signal);
  color: #1b1600;
  font-weight: 500;
  font-size: 0.75rem;
}
.log__title {
  font-family: var(--font-display);
  font-size: var(--step-2);
  font-weight: 650;
  line-height: 1.15;
  letter-spacing: -0.02em;
}
.log__place { color: var(--muted); margin-top: 0.125rem; }
.log__text { margin-top: 0.625rem; max-width: 34rem; }

@media (max-width: 640px) {
  .log__item {
    grid-template-columns: 1.25rem minmax(0, 1fr);
    grid-template-areas: 'graph when' 'graph body';
    column-gap: 0.875rem;
  }
  .log__graph { grid-area: graph; }
  .log__when { grid-area: when; text-align: left; padding-top: 0.2rem; }
  .log__body { grid-area: body; padding-top: 0.25rem; }
  .log__node { margin-top: 0.3rem; }
}

/* ── Proyectos ───────────────────────────────────────── */
.featured { display: grid; gap: clamp(3rem, 2rem + 4vw, 6rem); }

.feature {
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
  gap: clamp(1.5rem, 1rem + 3vw, 4rem);
  align-items: center;
}
.feature--flip { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); }
.feature--flip .feature__media { order: 2; }

.feature__media {
  display: block;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--surface);
  aspect-ratio: 16 / 9;
}
.feature__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.1, 1);
}
.feature:hover .feature__media img { transform: scale(1.025); }

.feature__body { display: grid; gap: 1rem; align-content: center; }
.feature__context { color: var(--muted); font-weight: 600; font-size: var(--step--1); }
.feature__title {
  font-family: var(--font-display);
  font-size: var(--step-3);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
}
.feature__text { color: var(--muted); }
.feature__links { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.5rem; }

.minor-title {
  font-family: var(--font-display);
  font-size: var(--step-2);
  font-weight: 650;
  letter-spacing: -0.02em;
  margin: clamp(4rem, 3rem + 4vw, 6rem) 0 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--line);
}
.minor {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}
.mini { display: grid; gap: 1rem; align-content: start; position: relative; }
.mini__media {
  aspect-ratio: 16 / 10;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--line);
}
.mini__media img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
.mini__body { display: grid; gap: 0.5rem; }
.mini__title {
  font-family: var(--font-display);
  font-size: var(--step-1);
  font-weight: 650;
  letter-spacing: -0.015em;
}
.mini__title a { text-decoration: none; }
.mini__title a::after { content: ''; position: absolute; inset: 0; border-radius: var(--radius); }
.mini__title a:hover { color: var(--accent); }
.mini__text { color: var(--muted); font-size: 0.9375rem; }
.mini .tags { margin-top: 0.25rem; }

@media (max-width: 860px) {
  .feature,
  .feature--flip { grid-template-columns: 1fr; }
  .feature--flip .feature__media { order: 0; }
  .minor { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .minor { grid-template-columns: 1fr; }
}

/* ── Stack ───────────────────────────────────────────── */
.stack {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid var(--ink);
}
.stack__group { padding: 1.25rem 1.5rem 0 0; }
.stack__group + .stack__group { padding-left: 1.5rem; border-left: 1px solid var(--line); }
.stack__title {
  font-size: var(--step--1);
  color: var(--muted);
  font-weight: 600;
  margin-bottom: 1rem;
}
.stack ul { list-style: none; padding: 0; display: grid; gap: 0.375rem; }
.stack li {
  font-family: var(--font-display);
  font-size: var(--step-1);
  font-weight: 550;
  letter-spacing: -0.01em;
  line-height: 1.35;
}

@media (max-width: 860px) {
  .stack { grid-template-columns: 1fr 1fr; row-gap: 2rem; }
  .stack__group:nth-child(3) { padding-left: 0; border-left: 0; }
}
@media (max-width: 480px) {
  .stack { grid-template-columns: 1fr; }
  .stack__group + .stack__group { padding-left: 0; border-left: 0; }
}

/* ── Contacto ────────────────────────────────────────── */
.contact__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(2.5rem, 1.5rem + 4vw, 6rem);
  align-items: start;
}
.contact__intro { display: grid; gap: 1.25rem; justify-items: start; }
.contact__title {
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 1.5rem + 4vw, 4.75rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.05em;
  font-variation-settings: 'opsz' 96;
}
.contact__mail {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  max-width: 100%;
  font-family: var(--font-display);
  font-size: clamp(1.125rem, 0.9rem + 1vw, 1.5rem);
  font-weight: 650;
  color: var(--accent);
  text-decoration: none;
  overflow-wrap: anywhere;
}
.contact__mail:hover span { text-decoration: underline; text-underline-offset: 0.2em; }
.contact__mail svg { width: 1.3em; height: 1.3em; flex: none; }

@media (max-width: 860px) {
  .contact__grid { grid-template-columns: 1fr; }
}
</style>
