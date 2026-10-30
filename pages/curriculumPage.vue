<template>
  <div class="cv-page">
    <div class="wrap cv-bar no-print">
      <NuxtLink to="/" class="btn btn--ghost"><UiIcon name="back" /> Volver al porfolio</NuxtLink>
      <a :href="perfil.cv" class="btn btn--primary" download><UiIcon name="download" /> Descargar PDF</a>
    </div>

    <article class="sheet">
      <header class="sheet__head">
        <img class="sheet__photo" src="/Foto_david_curriculum.jpg" alt="David Ramos García" width="665" height="887" />
        <div>
          <h1 class="sheet__name">{{ perfil.nombreCompleto }}</h1>
          <p class="sheet__role">{{ perfil.rol }}</p>
        </div>
      </header>

      <div class="sheet__grid">
        <aside class="sheet__aside">
          <section>
            <h2>Contacto</h2>
            <ul role="list" class="plain">
              <li>{{ perfil.ubicacion }}</li>
              <li><a :href="'mailto:' + perfil.email">{{ perfil.email }}</a></li>
              <li><a :href="enlaces.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a :href="enlaces.github" target="_blank" rel="noopener noreferrer">github.com/2345david</a></li>
              <li>Carné de conducir B</li>
            </ul>
          </section>

          <section v-for="g in stack" :key="g.grupo">
            <h2>{{ g.grupo }}</h2>
            <ul role="list" class="plain">
              <li v-for="i in g.items" :key="i">{{ i }}</li>
            </ul>
          </section>

          <section>
            <h2>Idiomas</h2>
            <ul role="list" class="plain">
              <li>Español, nativo</li>
              <li>Valenciano, nativo</li>
              <li>Inglés, A2</li>
            </ul>
          </section>
        </aside>

        <div class="sheet__main">
          <section>
            <h2>Perfil</h2>
            <p>
              Desarrollador de software con formación en Desarrollo de Aplicaciones Multiplataforma y experiencia en
              equipos de desarrollo profesionales. Aprendo rápido, me adapto a nuevos retos y no dejo un problema hasta
              resolverlo. Trabajo de forma organizada, cumplo plazos bajo presión y cuido el detalle en cada proyecto.
            </p>
          </section>

          <section>
            <h2>Experiencia</h2>
            <div v-for="e in experiencia" :key="e.puesto + e.empresa" class="entry">
              <div class="entry__head">
                <h3>{{ e.puesto }}, {{ e.empresa }}</h3>
                <p class="entry__when">{{ e.fechas }}</p>
              </div>
              <p class="entry__where">{{ e.lugar }}</p>
              <p v-if="e.texto">{{ e.texto }}</p>
            </div>
          </section>

          <section>
            <h2>Formación</h2>
            <div v-for="f in formacion" :key="f.titulo" class="entry">
              <div class="entry__head">
                <h3>{{ f.titulo }}</h3>
                <p class="entry__when">{{ f.fechas }}</p>
              </div>
              <p class="entry__where">{{ f.centro }}</p>
            </div>
          </section>

          <section v-if="certs.length">
            <h2>Certificaciones</h2>
            <div v-for="c in certs" :key="c.nombre" class="entry">
              <div class="entry__head">
                <h3>{{ c.nombre }}</h3>
                <p class="entry__when">{{ c.estado === 'en-curso' ? 'En curso' : c.fecha }}</p>
              </div>
              <p class="entry__where">{{ c.emisor }}</p>
            </div>
          </section>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { perfil, enlaces, stack } from '~/data/portfolio.js'
import { certificaciones } from '~/data/certificaciones.js'

export default {
  name: 'Curriculum',
  data: () => ({
    perfil,
    enlaces,
    stack: stack.filter((g) => g.grupo !== 'Forma de trabajar'),
    certs: certificaciones,
    experiencia: [
      {
        puesto: 'Programador',
        empresa: 'Babel',
        lugar: 'Parque Tecnológico de Málaga',
        fechas: 'jun. 2026 – actualidad',
        texto: 'Desarrollo de software dentro de un equipo profesional.',
      },
      {
        puesto: 'Prácticas de desarrollo frontend',
        empresa: 'Top Group Express',
        lugar: 'Coín, Málaga',
        fechas: 'mar. 2024 – jun. 2024',
        texto: 'Maquetación con HTML y CSS, desarrollo con Nuxt, Tailwind y JavaScript, y tests con Vitest.',
      },
      {
        puesto: 'Operario de producción',
        empresa: 'Mondat',
        lugar: 'Monda, Málaga',
        fechas: 'jul. 2025 – sept. 2025',
        texto: 'Trabajo en equipo en la línea de envasado de pan.',
      },
      {
        puesto: 'Camarero',
        empresa: 'El Joomara',
        lugar: 'Coín, Málaga',
        fechas: 'sept. 2024 – jul. 2025',
        texto: 'Atención en barra, apoyo en cocina y trato con clientes.',
      },
      {
        puesto: 'Camarero',
        empresa: 'El Atún',
        lugar: 'Coín, Málaga',
        fechas: 'jun. 2024 – sept. 2024',
        texto: 'Servicio en sala y ayuda en cocina.',
      },
    ],
    formacion: [
      { titulo: 'CFGS Desarrollo de Aplicaciones Multiplataforma', centro: 'IES Los Montecillos, Coín', fechas: '2024 – 2026' },
      { titulo: 'CFGM Sistemas Microinformáticos y Redes', centro: 'IES Serranía, Alozaina', fechas: '2022 – 2024' },
      { titulo: 'Educación Secundaria Obligatoria', centro: 'IES Ciudad de Coín', fechas: '2018 – 2022' },
    ],
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
