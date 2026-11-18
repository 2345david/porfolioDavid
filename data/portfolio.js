// ─────────────────────────────────────────────────────────────
//  Todo el contenido del porfolio vive aquí.
//  Cambia textos, proyectos o experiencia en este archivo y la
//  web se actualiza sola: no hace falta tocar el diseño.
//
//  Los textos que se traducen van así:  { es: '...', en: '...' }
//  Si solo pones un texto normal, se muestra igual en los dos idiomas.
// ─────────────────────────────────────────────────────────────

export const perfil = {
  nombre: 'David Ramos',
  nombreCompleto: 'David Ramos García',
  alias: 'Davurg',
  rol: { es: 'Desarrollador de software', en: 'Software developer' },
  ubicacion: 'Coín, Málaga',
  email: 'ramosdavu2006@gmail.com',
  // CV que se descarga según el idioma de la web (se regenera con scripts/generar-cv.mjs).
  cv: { es: '/CV_david.pdf', en: '/CV_david_en.pdf' },
  // Lo que ve primero una empresa. Corto y concreto.
  intro: {
    es: 'Construyo interfaces con Vue, Nuxt y Tailwind, y trabajo también la parte de servidor con Java, Python y bases de datos SQL. Ahora mismo me estoy especializando en ciberseguridad.',
    en: 'I build interfaces with Vue, Nuxt and Tailwind, and I also work on the server side with Java, Python and SQL databases. Right now I am specialising in cybersecurity.',
  },
  ahora: {
    puesto: { es: 'Programador en Babel', en: 'Developer at Babel' },
    lugar: { es: 'Parque Tecnológico de Málaga', en: 'Málaga TechPark' },
  },
  datos: [
    {
      etiqueta: { es: 'Formación', en: 'Education' },
      valor: { es: 'Técnico Superior en DAM', en: 'Higher Diploma in Multiplatform App Development' },
    },
    {
      etiqueta: { es: 'Idiomas', en: 'Languages' },
      valor: { es: 'Español y valenciano nativos, inglés A2', en: 'Native Spanish and Valencian, English A2' },
    },
    {
      etiqueta: { es: 'Ahora aprendiendo', en: 'Currently learning' },
      valor: { es: 'Ciberseguridad', en: 'Cybersecurity' },
    },
  ],
  carne: { es: 'Carné de conducir B', en: 'Category B driving licence' },
  // Texto de "Perfil" de la página del currículum.
  resumenCV: {
    es: 'Desarrollador de software con formación en Desarrollo de Aplicaciones Multiplataforma y experiencia en equipos de desarrollo profesionales. Aprendo rápido, me adapto a nuevos retos y no dejo un problema hasta resolverlo. Trabajo de forma organizada, cumplo plazos bajo presión y cuido el detalle en cada proyecto.',
    en: 'Software developer trained in Multiplatform Application Development, with experience in professional development teams. I learn fast, adapt to new challenges and stick with a problem until it is solved. I work in an organised way, meet deadlines under pressure and pay attention to detail in every project.',
  },
  idiomas: [
    { es: 'Español, nativo', en: 'Spanish, native' },
    { es: 'Valenciano, nativo', en: 'Valencian, native' },
    { es: 'Inglés, A2', en: 'English, A2' },
  ],
}

export const enlaces = {
  linkedin: 'https://www.linkedin.com/in/david-ramos-garcia-a76686308/',
  github: 'https://github.com/2345david',
  infojobs: 'https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=3986392983853922276',
}

// Trayectoria, de lo más reciente a lo más antiguo.
// tipo: 'feat' (trabajo), 'release' (título terminado), 'init' (inicio)
// ambito (opcional): sale entre paréntesis, p. ej.  feat(dev):
// neutro: true  pinta el punto en gris, para trabajos fuera de la programación.
// fecha / hasta: 'AAAA-MM'. Si una fecha se deja vacía, no se muestra.
export const trayectoria = [
  {
    tipo: 'feat',
    ambito: 'dev',
    fecha: '2026-06',
    hasta: 'actualidad',
    titulo: { es: 'Programador en Babel', en: 'Developer at Babel' },
    lugar: { es: 'Parque Tecnológico de Málaga', en: 'Málaga TechPark' },
    texto: {
      es: 'Desarrollo de software dentro de un equipo profesional.',
      en: 'Software development as part of a professional team.',
    },
    actual: true,
  },
  {
    tipo: 'feat',
    ambito: { es: 'transporte', en: 'transport' },
    neutro: true,
    fecha: '2026-04',
    hasta: '2026-11',
    titulo: { es: 'Conductor de VTC', en: 'Private hire (VTC) driver' },
    lugar: {
      es: 'Empresa de dos autónomos, Málaga',
      en: 'Small business run by two self-employed partners, Málaga',
    },
    texto: {
      es: 'Traslados de clientes con vehículos de alta gama: puntualidad, trato directo con el cliente y organización de rutas y horarios.',
      en: 'Transporting clients in premium vehicles: punctuality, direct customer service and planning routes and schedules.',
    },
  },
  {
    tipo: 'release',
    fecha: '2026-06',
    titulo: {
      es: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
      en: 'Higher Diploma in Multiplatform Application Development',
    },
    lugar: 'IES Los Montecillos, Coín',
    texto: {
      es: 'Proyecto final: un videojuego de acción 2D en pixel art.',
      en: 'Final project: a 2D pixel-art action video game.',
    },
  },
  {
    tipo: 'feat',
    ambito: { es: 'hostelería', en: 'hospitality' },
    neutro: true,
    fecha: '2024-06',
    hasta: '2025-09',
    titulo: { es: 'Hostelería y producción', en: 'Hospitality and production' },
    lugar: 'El Atún, El Joomara, Mondat',
    texto: {
      es: 'Trabajo en equipo, trato con clientes y ritmo bajo presión mientras estudiaba el ciclo superior.',
      en: 'Teamwork, customer service and working at pace under pressure while studying for my higher diploma.',
    },
  },
  {
    tipo: 'feat',
    ambito: 'dev',
    fecha: '2024-03',
    hasta: '2024-06',
    titulo: {
      es: 'Prácticas de desarrollo frontend en Top Group Express',
      en: 'Frontend development internship at Top Group Express',
    },
    lugar: 'Coín, Málaga',
    texto: {
      es: 'Primer contacto con un equipo profesional: maquetación con HTML y CSS, aplicaciones con Nuxt, Tailwind y JavaScript, y tests con Vitest.',
      en: 'My first time in a professional team: layouts with HTML and CSS, apps with Nuxt, Tailwind and JavaScript, and testing with Vitest.',
    },
  },
  {
    tipo: 'release',
    fecha: '2024-06',
    titulo: {
      es: 'Técnico en Sistemas Microinformáticos y Redes',
      en: 'Vocational Diploma in Microcomputer Systems and Networks',
    },
    lugar: 'IES Serranía, Alozaina',
    texto: {
      es: 'Montaje y mantenimiento de equipos, redes locales y sistemas Windows y Linux.',
      en: 'Building and maintaining computers, local networks, and Windows and Linux systems.',
    },
  },
  {
    tipo: 'init',
    fecha: '2022-06',
    titulo: { es: 'Educación Secundaria Obligatoria', en: 'Secondary education (ESO)' },
    lugar: 'IES Ciudad de Coín',
  },
]

// Experiencia y formación de la página del currículum.
export const experienciaCV = [
  {
    puesto: { es: 'Programador', en: 'Developer' },
    empresa: 'Babel',
    lugar: { es: 'Parque Tecnológico de Málaga', en: 'Málaga TechPark' },
    fechas: { es: 'jun. 2026 – actualidad', en: 'Jun 2026 – present' },
    texto: {
      es: 'Desarrollo de software dentro de un equipo profesional.',
      en: 'Software development as part of a professional team.',
    },
  },
  {
    puesto: { es: 'Conductor de VTC', en: 'Private hire (VTC) driver' },
    empresa: { es: 'Empresa de dos autónomos', en: 'Two-partner small business' },
    lugar: 'Málaga',
    fechas: { es: 'abr. 2026 – nov. 2026', en: 'Apr 2026 – Nov 2026' },
    texto: {
      es: 'Traslados de clientes con vehículos de alta gama, trato directo con el cliente y organización de rutas y horarios.',
      en: 'Transporting clients in premium vehicles, direct customer service and planning routes and schedules.',
    },
  },
  {
    puesto: { es: 'Operario de producción', en: 'Production operative' },
    empresa: 'Mondat',
    lugar: 'Monda, Málaga',
    fechas: { es: 'jul. 2025 – sept. 2025', en: 'Jul 2025 – Sep 2025' },
    texto: {
      es: 'Trabajo en equipo en la línea de envasado de pan.',
      en: 'Teamwork on a bread packaging line.',
    },
  },
  {
    puesto: { es: 'Camarero', en: 'Waiter' },
    empresa: 'El Joomara',
    lugar: 'Coín, Málaga',
    fechas: { es: 'sept. 2024 – jul. 2025', en: 'Sep 2024 – Jul 2025' },
    texto: {
      es: 'Atención en barra, apoyo en cocina y trato con clientes.',
      en: 'Bar service, kitchen support and customer service.',
    },
  },
  {
    puesto: { es: 'Camarero', en: 'Waiter' },
    empresa: 'El Atún',
    lugar: 'Coín, Málaga',
    fechas: { es: 'jun. 2024 – sept. 2024', en: 'Jun 2024 – Sep 2024' },
    texto: { es: 'Servicio en sala y ayuda en cocina.', en: 'Table service and kitchen support.' },
  },
  {
    puesto: { es: 'Prácticas de desarrollo frontend', en: 'Frontend development intern' },
    empresa: 'Top Group Express',
    lugar: 'Coín, Málaga',
    fechas: { es: 'mar. 2024 – jun. 2024', en: 'Mar 2024 – Jun 2024' },
    texto: {
      es: 'Maquetación con HTML y CSS, desarrollo con Nuxt, Tailwind y JavaScript, y tests con Vitest.',
      en: 'Layouts with HTML and CSS, development with Nuxt, Tailwind and JavaScript, and testing with Vitest.',
    },
  },
]

export const formacionCV = [
  {
    titulo: {
      es: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
      en: 'Higher Diploma in Multiplatform Application Development',
    },
    centro: 'IES Los Montecillos, Coín',
    fechas: '2024 – 2026',
  },
  {
    titulo: {
      es: 'CFGM Sistemas Microinformáticos y Redes',
      en: 'Vocational Diploma in Microcomputer Systems and Networks',
    },
    centro: 'IES Serranía, Alozaina',
    fechas: '2022 – 2024',
  },
  {
    titulo: { es: 'Educación Secundaria Obligatoria', en: 'Secondary education (ESO)' },
    centro: 'IES Ciudad de Coín',
    fechas: '2018 – 2022',
  },
]

// Pon  destacado: true  en los proyectos que quieras ver en grande.
// Se muestran en el mismo orden que en esta lista.
// aporte (opcional): una frase sobre qué hiciste tú o qué problema resolviste.
//   Sale debajo del resumen en los proyectos destacados. Ejemplo:
//   aporte: { es: 'Lo hice yo solo, del diseño a la publicación.', en: 'Built it solo, from design to launch.' },
export const proyectos = [
  {
    titulo: { es: 'Web para una empresa de transfers', en: 'Website for an airport transfer company' },
    resumen: {
      es: 'Web corporativa para un servicio de traslados desde y hasta el aeropuerto de Málaga: presentación del servicio, galería de vehículos y formulario para contratar.',
      en: 'Company website for a transfer service to and from Málaga airport: service overview, vehicle gallery and booking form.',
    },
    contexto: { es: 'Cliente real, publicada', en: 'Real client, live' },
    img: '/malagatransfer.webp',
    alt: {
      es: 'Página de inicio de la web de transfers al aeropuerto de Málaga',
      en: 'Home page of the Málaga airport transfer website',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://malagatranfercouk.com/',
    destacado: true,
  },
  {
    titulo: { es: 'Videojuego 2D de acción', en: '2D action video game' },
    resumen: {
      es: 'Proyecto final del ciclo DAM: un juego de acción en pixel art con combates contra jefes, barras de vida y energía, y sistema de monedas.',
      en: 'Final project of my DAM diploma: a pixel-art action game with boss fights, health and energy bars, and a coin system.',
    },
    contexto: { es: 'Proyecto final de DAM', en: 'DAM final project' },
    img: '/cap_proyecto_TFG.webp',
    alt: {
      es: 'Combate contra el jefe Black Knight en el videojuego del proyecto final',
      en: 'Boss fight against the Black Knight in the final project video game',
    },
    stack: [{ es: 'Desarrollo de videojuegos', en: 'Game development' }, 'Pixel art'],
    codigo: 'https://github.com/2345david/ProyectoTFG/tree/main/ProyectoFinal2DAM',
    destacado: true,
  },
  {
    titulo: 'Docuchat AI',
    resumen: {
      es: 'Asistente de chatbot para la gestión de documentación técnica.',
      en: 'Chatbot assistant for managing technical documentation.',
    },
    contexto: {
      es: 'Proyecto personal para el certificado de IA de Santander',
      en: 'Personal project for the Santander AI certificate',
    },
    img: '/DocuchatAI.webp',
    alt: { es: 'Interfaz del asistente Docuchat AI', en: 'Docuchat AI assistant interface' },
    stack: ['Python', 'Ollama AI'],
    codigo: 'https://github.com/2345david/Docuchat_AI',
    destacado: true,
  },
  {
    titulo: { es: 'Mis Finanzas', en: 'Mis Finanzas (personal finance app)' },
    resumen: {
      es: 'Aplicación web para gestionar gastos e ingresos, con gráficos y filtros.',
      en: 'Web app to track expenses and income, with charts and filters.',
    },
    img: '/Misfinanzas.webp',
    alt: { es: 'Gráfico de barras de la aplicación Mis Finanzas', en: 'Bar chart in the Mis Finanzas app' },
    stack: ['Nuxt', 'Tailwind', 'Chart.js'],
    demo: 'https://web-finanzas-seven.vercel.app/',
    destacado: true,
  },
  {
    titulo: 'TaskList',
    resumen: {
      es: 'Gestor de tareas: crear, editar y borrar tareas con fecha.',
      en: 'Task manager: create, edit and delete dated tasks.',
    },
    img: '/tasklist.webp',
    alt: { es: 'Tarjeta de tarea en la aplicación TaskList', en: 'Task card in the TaskList app' },
    stack: ['Nuxt', 'Tailwind'],
    codigo: 'https://github.com/2345david/taskList',
  },
  {
    titulo: { es: 'Tres en raya', en: 'Tic-tac-toe' },
    resumen: {
      es: 'Partida a dos jugadores con nombres personalizados y marcador de rondas.',
      en: 'Two-player game with custom names and a round scoreboard.',
    },
    img: '/tresEnRaya.webp',
    alt: { es: 'Tablero del juego tres en raya', en: 'Tic-tac-toe game board' },
    stack: ['HTML', 'CSS', 'JavaScript'],
    codigo: 'https://github.com/2345david/tres-en-raya',
  },
]

export const stack = [
  {
    grupo: 'Frontend',
    items: [{ es: 'HTML y CSS', en: 'HTML and CSS' }, 'JavaScript', 'Vue', 'Nuxt', 'Tailwind CSS'],
  },
  {
    grupo: { es: 'Backend y datos', en: 'Backend and data' },
    items: ['Java', 'JavaFX', 'Python', 'C', { es: 'MySQL y MariaDB', en: 'MySQL and MariaDB' }],
  },
  {
    grupo: { es: 'Herramientas', en: 'Tools' },
    items: [{ es: 'Git y GitHub', en: 'Git and GitHub' }, 'Jira', 'Vitest', 'IntelliJ IDEA', 'VS Code', 'Linux'],
  },
  {
    grupo: { es: 'Forma de trabajar', en: 'How I work' },
    blandas: true, // no se muestra en la página del currículum
    items: [
      { es: 'Trabajo en equipo', en: 'Teamwork' },
      { es: 'Resolución de problemas', en: 'Problem solving' },
      { es: 'Aprendizaje autónomo', en: 'Self-directed learning' },
      { es: 'Edición de imagen y vídeo', en: 'Image and video editing' },
    ],
  },
]
