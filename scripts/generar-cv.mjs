// Genera el CV (español e inglés) a partir de data/portfolio.js.
// Uso:  node scripts/generar-cv.mjs
// Luego abre scripts/cv_es.html y scripts/cv_en.html en Chrome e imprime a PDF
// (A4, sin márgenes, sin encabezados) y guárdalos como public/CV_david.pdf y public/CV_david_en.pdf.

import fs from 'fs'
import { perfil, enlaces, stack, experienciaCV, formacionCV } from '../data/portfolio.js'
import { certificaciones } from '../data/certificaciones.js'

const L = {
  es: { contacto: 'Contacto', perfil: 'Perfil', exp: 'Experiencia', form: 'Formación', cert: 'Certificaciones', idiomas: 'Idiomas', habilidades: 'Competencias', web: 'Porfolio' , meses:['ene.','feb.','mar.','abr.','may.','jun.','jul.','ago.','sept.','oct.','nov.','dic.']},
  en: { contacto: 'Contact', perfil: 'Profile', exp: 'Experience', form: 'Education', cert: 'Certifications', idiomas: 'Languages', habilidades: 'Soft skills', web: 'Portfolio', meses:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] },
}
const foto = 'data:image/jpeg;base64,' + fs.readFileSync(new URL('../public/Foto_david_curriculum.jpg', import.meta.url)).toString('base64')
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;')

for (const lang of ['es', 'en']) {
  const t = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v[lang] ?? v.es : v)
  const l = L[lang]
  const fecha = (f) => { const [a, m] = String(f).split('-'); return m ? `${l.meses[m - 1]} ${a}` : a }
  const tecnico = stack.filter((g) => !g.blandas)
  const blandas = stack.find((g) => g.blandas)
  const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>
  @page { size: A4; margin: 0 }
  * { box-sizing: border-box; margin: 0; padding: 0 }
  body { font-family: 'Inter', sans-serif; color: #14171f; font-size: 9.4pt; line-height: 1.42; width: 210mm; height: 297mm; display: grid; grid-template-columns: 64mm 1fr; }
  aside { background: #f1f2f4; padding: 14mm 8mm 12mm 11mm; display: flex; flex-direction: column; gap: 6.5mm }
  main { padding: 13mm 13mm 10mm 11mm; display: flex; flex-direction: column; gap: 5.2mm }
  .foto { width: 34mm; height: 34mm; object-fit: cover; object-position: center 20%; border-radius: 4mm }
  h1 { font-family: 'Inter Display', 'Inter'; font-size: 25pt; font-weight: 800; letter-spacing: -0.03em; line-height: 1 }
  .rol { color: #2445e0; font-weight: 600; font-size: 12pt; margin-top: 2mm }
  h2 { font-size: 8.3pt; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; color: #2445e0; margin-bottom: 2.2mm; padding-bottom: 1.2mm; border-bottom: 1px solid #d8dbe1 }
  aside h2 { border-bottom-color: #c9cdd6 }
  ul { list-style: none; display: grid; gap: .8mm }
  aside li { font-size: 9pt; overflow-wrap: anywhere }
  a { color: inherit; text-decoration: none }
  .g + .g { margin-top: 2.5mm }
  .g b { display: block; font-size: 8.3pt; color: #586070; font-weight: 600; margin-bottom: .6mm }
  .entry + .entry { margin-top: 2.8mm }
  .head { display: flex; justify-content: space-between; gap: 4mm; align-items: baseline }
  h3 { font-size: 10.4pt; font-weight: 650; line-height: 1.3 }
  .when { color: #586070; font-size: 8.6pt; white-space: nowrap }
  .where { color: #586070; font-size: 8.8pt }
  .txt { margin-top: .5mm }
  </style></head><body>
  <aside>
    <img class="foto" src="${foto}">
    <section><h2>${l.contacto}</h2><ul>
      <li>${esc(perfil.ubicacion)}</li>
      <li><a href="mailto:${perfil.email}">${perfil.email}</a></li>
      <li><a href="${enlaces.linkedin}">linkedin.com/in/david-ramos-garcia</a></li>
      <li><a href="${enlaces.github}">github.com/2345david</a></li>
      <li>${esc(t(perfil.carne))}</li>
    </ul></section>
    <section><h2>Stack</h2>${tecnico.map((g) => `<div class="g"><b>${esc(t(g.grupo))}</b>${g.items.map(t).map(esc).join(' · ')}</div>`).join('')}</section>
    <section><h2>${l.habilidades}</h2><ul>${blandas.items.map((i) => `<li>${esc(t(i))}</li>`).join('')}</ul></section>
    <section><h2>${l.idiomas}</h2><ul>${perfil.idiomas.map((i) => `<li>${esc(t(i))}</li>`).join('')}</ul></section>
  </aside>
  <main>
    <header><h1>${esc(perfil.nombreCompleto)}</h1><p class="rol">${esc(t(perfil.rol))}</p></header>
    <section><h2>${l.perfil}</h2><p>${esc(t(perfil.resumenCV))}</p></section>
    <section><h2>${l.exp}</h2>${experienciaCV.map((e) => `<div class="entry"><div class="head"><h3>${esc(t(e.puesto))} · ${esc(t(e.empresa))}</h3><span class="when">${esc(t(e.fechas))}</span></div><p class="where">${esc(t(e.lugar))}</p>${e.texto ? `<p class="txt">${esc(t(e.texto))}</p>` : ''}</div>`).join('')}</section>
    <section><h2>${l.form}</h2>${formacionCV.map((f) => `<div class="entry"><div class="head"><h3>${esc(t(f.titulo))}</h3><span class="when">${esc(f.fechas)}</span></div><p class="where">${esc(f.centro)}</p></div>`).join('')}</section>
    ${certificaciones.length ? `<section><h2>${l.cert}</h2>${certificaciones.map((c) => `<div class="entry"><div class="head"><h3>${esc(t(c.nombre))}</h3><span class="when">${c.estado === 'en-curso' ? (lang === 'es' ? 'En curso' : 'In progress') : fecha(c.fecha)}</span></div><p class="where">${esc(c.emisor)}</p></div>`).join('')}</section>` : ''}
  </main></body></html>`
  fs.writeFileSync(new URL(`./cv_${lang}.html`, import.meta.url), html)
}
