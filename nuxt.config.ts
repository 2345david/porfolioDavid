// https://nuxt.com/docs/api/configuration/nuxt-config
const titulo = 'David Ramos · Desarrollador de software'
const descripcion =
  'Porfolio de David Ramos García, programador en Babel (Málaga). Frontend con Vue, Nuxt y Tailwind; backend con Java, Python y SQL.'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
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
        { property: 'og:image', content: '/david.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=JetBrains+Mono:wght@400;500&family=Schibsted+Grotesk:ital,wght@0,400..700;1,400&display=swap',
        },
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
