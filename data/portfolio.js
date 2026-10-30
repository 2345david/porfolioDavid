// ─────────────────────────────────────────────────────────────
//  Todo el contenido del porfolio vive aquí.
//  Cambia textos, proyectos o experiencia en este archivo y la
//  web se actualiza sola: no hace falta tocar el diseño.
// ─────────────────────────────────────────────────────────────

export const perfil = {
  nombre: 'David Ramos',
  nombreCompleto: 'David Ramos García',
  alias: 'Davurg',
  rol: 'Desarrollador de software',
  ubicacion: 'Coín, Málaga',
  email: 'ramosdavu2006@gmail.com',
  cv: '/CV_david.pdf',
  // Lo que ve primero una empresa. Corto y concreto.
  intro:
    'Construyo interfaces con Vue, Nuxt y Tailwind, y trabajo también la parte de servidor con Java, Python y bases de datos SQL. Ahora mismo me estoy especializando en ciberseguridad.',
  ahora: {
    puesto: 'Programador en Babel',
    lugar: 'Parque Tecnológico de Málaga',
  },
  datos: [
    { etiqueta: 'Formación', valor: 'Técnico Superior en DAM' },
    { etiqueta: 'Idiomas', valor: 'Español y valenciano nativos, inglés A2' },
    { etiqueta: 'Otros', valor: 'Carné de conducir B' },
  ],
}

export const enlaces = {
  linkedin: 'https://www.linkedin.com/in/david-ramos-garcia-a76686308/',
  github: 'https://github.com/2345david',
  infojobs: 'https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=3986392983853922276',
}

// Trayectoria, de lo más reciente a lo más antiguo.
// tipo: 'feat' (trabajo), 'release' (título terminado), 'chore' (otros), 'init' (inicio)
export const trayectoria = [
  {
    tipo: 'feat',
    fecha: '2026-06',
    hasta: 'actualidad',
    titulo: 'Programador en Babel',
    lugar: 'Parque Tecnológico de Málaga',
    texto: 'Desarrollo de software dentro de un equipo profesional.',
    actual: true,
  },
  {
    tipo: 'release',
    fecha: '2026-06',
    titulo: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    lugar: 'IES Los Montecillos, Coín',
    texto: 'Proyecto final: un videojuego de acción 2D en pixel art.',
  },
  {
    tipo: 'chore',
    fecha: '2024-06',
    hasta: '2025-09',
    titulo: 'Hostelería y producción',
    lugar: 'El Atún, El Joomara, Mondat',
    texto: 'Trabajo en equipo, trato con clientes y ritmo bajo presión mientras estudiaba el ciclo superior.',
  },
  {
    tipo: 'release',
    fecha: '2024-06',
    titulo: 'Técnico en Sistemas Microinformáticos y Redes',
    lugar: 'IES Serranía, Alozaina',
    texto: 'Montaje y mantenimiento de equipos, redes locales y sistemas Windows y Linux.',
  },
  {
    tipo: 'feat',
    fecha: '2024-03',
    hasta: '2024-06',
    titulo: 'Prácticas de desarrollo frontend en Top Group Express',
    lugar: 'Coín, Málaga',
    texto: 'Primer contacto con un equipo profesional: maquetación con HTML y CSS, aplicaciones con Nuxt, Tailwind y JavaScript, y tests con Vitest.',
  },
  {
    tipo: 'init',
    fecha: '2022-06',
    titulo: 'Educación Secundaria Obligatoria',
    lugar: 'IES Ciudad de Coín',
  },
]

// Pon  destacado: true  en los proyectos que quieras ver en grande.
// Se muestran en el mismo orden que en esta lista.
export const proyectos = [
  {
    titulo: 'Web para una empresa de transfers',
    resumen:
      'Web corporativa para un servicio de traslados desde y hasta el aeropuerto de Málaga: presentación del servicio, galería de vehículos y formulario para contratar.',
    contexto: 'Cliente real, publicada',
    img: '/malagatransfer.png',
    alt: 'Página de inicio de la web de transfers al aeropuerto de Málaga',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://malagatranfercouk.com/',
    destacado: true,
  },
  {
    titulo: 'Videojuego 2D de acción',
    resumen:
      'Proyecto final del ciclo DAM: un juego de acción en pixel art con combates contra jefes, barras de vida y energía, y sistema de monedas.',
    contexto: 'Proyecto final de DAM',
    img: '/cap_proyecto_TFG.png',
    alt: 'Combate contra el jefe Black Knight en el videojuego del proyecto final',
    stack: ['Desarrollo de videojuegos', 'Pixel art'],
    codigo: 'https://github.com/2345david/ProyectoTFG/tree/main/ProyectoFinal2DAM',
    destacado: true,
  },
  {
    titulo: 'Docuchat AI',
    resumen: 'Asistente de chatbot para la gestión de documentación técnica.',
    contexto: 'Proyecto personal para el certificado de IA de Santander',
    img: '/DocuchatAI.png',
    alt: 'Interfaz del asistente Docuchat AI',
    stack: ['Python', 'Ollama AI'],
    codigo: 'https://github.com/2345david/Docuchat_AI',
    destacado: true,
  },
  {
    titulo: 'Mis Finanzas',
    resumen: 'Aplicación web para gestionar gastos e ingresos, con gráficos y filtros.',
    img: '/Misfinanzas.png',
    alt: 'Gráfico de barras de la aplicación Mis Finanzas',
    stack: ['Nuxt', 'Tailwind', 'Chart.js'],
    demo: 'https://web-finanzas-seven.vercel.app/',
    destacado: true,
  },
  {
    titulo: 'TaskList',
    resumen: 'Gestor de tareas: crear, editar y borrar tareas con fecha.',
    img: '/tasklist.png',
    alt: 'Tarjeta de tarea en la aplicación TaskList',
    stack: ['Nuxt', 'Tailwind'],
    codigo: 'https://github.com/2345david/taskList',
  },
  {
    titulo: 'Tres en raya',
    resumen: 'Partida a dos jugadores con nombres personalizados y marcador de rondas.',
    img: '/tresEnRaya.png',
    alt: 'Tablero del juego tres en raya',
    stack: ['HTML', 'CSS', 'JavaScript'],
    codigo: 'https://github.com/2345david/tres-en-raya',
  }
]

export const stack = [
  { grupo: 'Frontend', items: ['HTML y CSS', 'JavaScript', 'Vue', 'Nuxt', 'Tailwind CSS'] },
  { grupo: 'Backend y datos', items: ['Java', 'JavaFX', 'Python', 'C', 'MySQL y MariaDB'] },
  { grupo: 'Herramientas', items: ['Git y GitHub', 'Jira', 'Vitest', 'IntelliJ IDEA', 'VS Code', 'Linux'] },
  { grupo: 'Forma de trabajar', items: ['Trabajo en equipo', 'Resolución de problemas', 'Aprendizaje autónomo', 'Edición de imagen y vídeo'] },
]
