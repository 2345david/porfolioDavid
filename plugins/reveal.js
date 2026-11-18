// Directiva v-reveal: el elemento aparece con un fundido suave al entrar en pantalla.
// Uso:  <div v-reveal>   o con retraso en ms:  <div v-reveal="120">
// Respeta la opción del sistema "reducir movimiento".
export default defineNuxtPlugin((nuxtApp) => {
  let observer = null

  const getObserver = () => {
    if (observer || typeof window === 'undefined' || !('IntersectionObserver' in window)) return observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observer.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )
    return observer
  }

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: () => ({}),
    mounted(el, binding) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const obs = getObserver()
      if (!obs) return
      // Lo que ya se ve al cargar no se oculta, para que no parpadee.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return
      if (binding.value) el.style.transitionDelay = binding.value + 'ms'
      el.classList.add('reveal')
      obs.observe(el)
    },
    unmounted(el) {
      if (observer) observer.unobserve(el)
    },
  })
})
