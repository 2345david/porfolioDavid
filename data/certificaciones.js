// ─────────────────────────────────────────────────────────────
//  CERTIFICACIONES
//
//  Para añadir una nueva, copia un bloque { ... } dentro de la
//  lista y rellena los campos. Se ordenan solas por fecha.
//
//  nombre       Nombre exacto del certificado
//  emisor       Quién lo emite (Cisco, Google, Microsoft, AWS, freeCodeCamp...)
//  fecha        'AAAA-MM'  (fecha de obtención, o de inicio si está en curso)
//  estado       'obtenida' o 'en-curso'
//  url          (opcional) Enlace para verificar la credencial
//  credencial   (opcional) ID de la credencial
//  habilidades  (opcional) Lista corta de lo que acredita
//
//  nombre y habilidades admiten traducción: { es: '...', en: '...' }
//
//  Ejemplo (bórrale las // para activarlo):
//
//  {
//    nombre: 'Introduction to Cybersecurity',
//    emisor: 'Cisco Networking Academy',
//    fecha: '2026-11',
//    estado: 'obtenida',
//    url: 'https://www.credly.com/badges/...',
//    habilidades: ['Ciberseguridad', 'Redes'],
//  },
// ─────────────────────────────────────────────────────────────

export const certificaciones = [
  // Añade aquí tus certificaciones
  {
    nombre: {
      es: 'Cursor con Python: desarrollo inteligente con IA',
      en: 'Cursor with Python: AI-assisted development',
    },
    emisor: 'Santander Open Academy',
    fecha: '2026-10',
    estado: 'obtenida',
    habilidades: [{ es: 'IA', en: 'AI' }, 'Python', 'Cursor'],
    pdf: '/certificaciones/certificacionSantander.pdf',
  },]
