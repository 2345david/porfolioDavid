<template>
  <div class="cv-page">
    <div class="wrap cv-bar no-print">
      <NuxtLink to="/" class="btn btn--ghost"><UiIcon name="back" /> {{ ui('volverPorfolio') }}</NuxtLink>
      <div class="cv-bar__right">
        <button type="button" class="btn btn--ghost" :title="ui('cambiarIdioma')" @click="cambiarIdioma()">
          {{ idioma === 'es' ? 'EN' : 'ES' }}<span class="sr-only">, {{ ui('cambiarIdioma') }}</span>
        </button>
        <a :href="t(perfil.cv)" class="btn btn--primary" download><UiIcon name="download" /> {{ ui('descargarPDF') }}</a>
      </div>
    </div>

    <article class="sheet">
      <header class="sheet__head">
        <img class="sheet__photo" src="/Foto_david_curriculum.jpg" alt="David Ramos García" width="665" height="887" />
        <div>
          <h1 class="sheet__name">{{ perfil.nombreCompleto }}</h1>
          <p class="sheet__role">{{ t(perfil.rol) }}</p>
        </div>
      </header>

      <div class="sheet__grid">
        <aside class="sheet__aside">
          <section>
            <h2>{{ ui('cvContacto') }}</h2>
            <ul role="list" class="plain">
              <li>{{ perfil.ubicacion }}</li>
              <li><a :href="'mailto:' + perfil.email">{{ perfil.email }}</a></li>
              <li><a :href="enlaces.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a :href="enlaces.github" target="_blank" rel="noopener noreferrer">github.com/2345david</a></li>
              <li>{{ t(perfil.carne) }}</li>
            </ul>
          </section>

          <section v-for="(g, gi) in stack" :key="gi">
            <h2>{{ t(g.grupo) }}</h2>
            <ul role="list" class="plain">
              <li v-for="(i, ii) in g.items" :key="ii">{{ t(i) }}</li>
            </ul>
          </section>

          <section>
            <h2>{{ ui('cvIdiomas') }}</h2>
            <ul role="list" class="plain">
              <li v-for="(l, li) in perfil.idiomas" :key="li">{{ t(l) }}</li>
            </ul>
          </section>
        </aside>

        <div class="sheet__main">
          <section>
            <h2>{{ ui('cvPerfil') }}</h2>
            <p>{{ t(perfil.resumenCV) }}</p>
          </section>

          <section>
            <h2>{{ ui('cvExperiencia') }}</h2>
            <div v-for="(e, ei) in experiencia" :key="ei" class="entry">
              <div class="entry__head">
                <h3>{{ t(e.puesto) }}, {{ t(e.empresa) }}</h3>
                <p v-if="e.fechas" class="entry__when">{{ t(e.fechas) }}</p>
              </div>
              <p class="entry__where">{{ t(e.lugar) }}</p>
              <p v-if="e.texto">{{ t(e.texto) }}</p>
            </div>
          </section>

          <section>
            <h2>{{ ui('cvFormacion') }}</h2>
            <div v-for="(f, fi) in formacion" :key="fi" class="entry">
              <div class="entry__head">
                <h3>{{ t(f.titulo) }}</h3>
                <p class="entry__when">{{ f.fechas }}</p>
              </div>
              <p class="entry__where">{{ f.centro }}</p>
            </div>
          </section>

          <section v-if="certs.length">
            <h2>{{ ui('cvCertificaciones') }}</h2>
            <div v-for="(c, ci) in certs" :key="ci" class="entry">
              <div class="entry__head">
                <h3>{{ t(c.nombre) }}</h3>
                <p class="entry__when">{{ c.estado === 'en-curso' ? ui('enCurso') : fecha(c.fecha) }}</p>
              </div>
              <p class="entry__where">{{ c.emisor }}</p>
            </div>
          </section>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
// /curriculum en español y /resume en inglés. La antigua /curriculumPage redirige aquí (nuxt.config.ts).
definePageMeta({ alias: ['/resume'] })

const { idioma, t, ui, fecha, cambiarIdioma } = useIdioma()
// Quien entra por el enlace en inglés (/resume) lo ve directamente en inglés.
if (useRoute().path.startsWith('/resume')) idioma.value = 'en'
useHead(() => ({ title: ui('metaTituloCV') }))
</script>

<script>
import { perfil, enlaces, stack, experienciaCV, formacionCV } from '~/data/portfolio.js'
import { certificaciones } from '~/data/certificaciones.js'

export default {
  name: 'Curriculum',
  data: () => ({
    perfil,
    enlaces,
    stack: stack.filter((g) => !g.blandas),
    certs: certificaciones,
    experiencia: experienciaCV,
    formacion: formacionCV,
  }),
}
</script>

<style scoped>
.cv-page { padding-block: 1.5rem 4rem; }

.cv-bar {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
  max-width: 56rem;
  margin-bottom: 1.5rem;
}
.cv-bar__right { display: flex; gap: 0.75rem; flex-wrap: wrap; }

.sheet {
  max-width: 56rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: clamp(1.5rem, 1rem + 3vw, 3.5rem);
  margin-inline: max(var(--gutter), calc((100% - 56rem) / 2));
}

.sheet__head {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 0.5rem + 2vw, 2rem);
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--ink);
}
.sheet__photo {
  width: clamp(5rem, 4rem + 5vw, 7.5rem);
  aspect-ratio: 1;
  height: auto;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 12px;
}
.sheet__name {
  font-family: var(--font-display);
  font-size: clamp(2rem, 1.2rem + 3.5vw, 3.5rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.045em;
  font-variation-settings: 'opsz' 96;
}
.sheet__role { color: var(--accent); font-weight: 600; font-size: var(--step-1); margin-top: 0.5rem; }

.sheet__grid {
  display: grid;
  grid-template-columns: 14rem minmax(0, 1fr);
  gap: clamp(1.5rem, 1rem + 3vw, 3.5rem);
  padding-top: 2rem;
}

h2 {
  font-size: var(--step--1);
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 0.75rem;
}
section + section { margin-top: 2rem; }

.sheet__aside { font-size: 0.9375rem; }
.plain { list-style: none; padding: 0; display: grid; gap: 0.3rem; }
.plain a { overflow-wrap: anywhere; }

.sheet__main p { max-width: 38rem; }

.entry + .entry { margin-top: 1.25rem; }
.entry__head { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; flex-wrap: wrap; }
.entry h3 {
  font-family: var(--font-display);
  font-size: var(--step-1);
  font-weight: 650;
  letter-spacing: -0.015em;
  line-height: 1.25;
}
.entry__when { font-size: var(--step--1); color: var(--muted); white-space: nowrap; }
.entry__where { color: var(--muted); font-size: 0.9375rem; margin-bottom: 0.25rem; }

@media (max-width: 700px) {
  .sheet__grid { grid-template-columns: 1fr; }
  .sheet__main { order: -1; }
}

@media print {
  .cv-page { padding: 0; }
  .sheet { border: 0; border-radius: 0; padding: 0; margin: 0; max-width: none; }
  a { text-decoration: none; }
}
</style>
