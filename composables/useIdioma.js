// ─────────────────────────────────────────────────────────────
//  Idioma de la web (español / inglés).
//  La web arranca SIEMPRE en español; el botón ES/EN del menú
//  cambia el idioma solo para la visita actual.
// ─────────────────────────────────────────────────────────────
import { textos } from '~/data/textos.js'
import { DOMINIO } from '~/data/datosEstructurados.js'

const MESES = {
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

export function useIdioma() {
  const idioma = useState('idioma', () => 'es')

  // Traduce un valor de contenido: { es: '...', en: '...' } o texto normal.
  const t = (v) => {
    if (v && typeof v === 'object' && !Array.isArray(v)) return v[idioma.value] ?? v.es
    return v
  }

  // Textos fijos de la interfaz (botones, títulos...). Admite {variables}.
  const ui = (clave, vars = {}) => {
    const txt = textos[idioma.value]?.[clave] ?? textos.es[clave] ?? clave
    return txt.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '')
  }

  // 'AAAA-MM' -> 'jun 2026' / 'Jun 2026'
  const fecha = (f) => {
    const [a, m] = String(f || '').split('-')
    if (!a) return ''
    return m ? `${MESES[idioma.value][Number(m) - 1]} ${a}` : a
  }

  const cambiarIdioma = (nuevo) => {
    idioma.value = nuevo || (idioma.value === 'es' ? 'en' : 'es')
  }

  // Dirección oficial de cada página, para que Google no la cuente doble
  // (davurg.dev y porfoliodavid.pages.dev muestran lo mismo).
  const ruta = useRoute()

  const urlOficial = () => DOMINIO + (ruta.path === '/' ? '/' : ruta.path.replace(/\/$/, ''))

  useHead(() => ({
    htmlAttrs: { lang: idioma.value },
    link: [{ rel: 'canonical', href: urlOficial() }],
    title: textos[idioma.value].metaTitulo,
    meta: [
      { name: 'description', content: textos[idioma.value].metaDescripcion },
      { property: 'og:title', content: textos[idioma.value].metaTitulo },
      { property: 'og:description', content: textos[idioma.value].metaDescripcion },
      { property: 'og:url', content: urlOficial() },
    ],
  }))

  return { idioma, t, ui, fecha, cambiarIdioma }
}
