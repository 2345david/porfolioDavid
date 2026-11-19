// https://nuxt.com/docs/api/configuration/nuxt-config
// Dirección oficial de la web. Si cambias de dominio, cámbiala aquí,
// en data/datosEstructurados.js y en public/sitemap.xml y robots.txt.
const SITIO = 'https://davurg.dev'
const titulo = 'David Ramos · Desarrollador frontend (Vue, Nuxt) en Málaga'
const descripcion =
  'Porfolio de David Ramos García, desarrollador de software en Babel (Málaga). Webs y apps con Vue, Nuxt y Tailwind; backend con Java, Python y SQL.'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@pinia/nuxt'],
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
  // La antigua dirección del currículum sigue funcionando y redirige a la nueva.
  routeRules: {
    '/curriculumPage': { redirect: { to: '/curriculum', statusCode: 301 } },
    // Caché larga para las fuentes: el navegador no las vuelve a descargar.
    '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },
  // Sirve los archivos comprimidos (gzip y brotli): la web pesa bastante menos.
  nitro: { compressPublicAssets: true },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: titulo,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: descripcion },
        { name: 'theme-color', content: '#2445e0' },
        { property: 'og:title', content: titulo },
        { property: 'og:description', content: descripcion },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'David Ramos' },
        { property: 'og:image', content: SITIO + '/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'es_ES' },
        { property: 'og:locale:alternate', content: 'en_GB' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'author', content: 'David Ramos García' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/png', href: '/icon-512.png', sizes: '512x512' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        // Fuentes propias: se precargan las dos principales para que no haya salto al cargar.
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/bricolage-grotesque-latin-opsz-normal.woff2', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/schibsted-grotesk-latin-wght-normal.woff2', crossorigin: '' },
      ],
      script: [
        {
          // Aplica el tema guardado antes de pintar, para evitar parpadeos.
          innerHTML:
            "try{var t=localStorage.getItem('tema');if(t)document.documentElement.dataset.theme=t}catch(e){}",
        },
      ],
    },
  },
})
