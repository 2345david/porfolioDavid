<template>
  <button
    type="button"
    class="to-top no-print"
    :class="{ 'is-visible': visible }"
    aria-label="Volver arriba"
    :tabindex="visible ? 0 : -1"
    @click="subir"
  >
    <UiIcon name="up" />
  </button>
</template>

<script>
export default {
  name: 'BackButton',
  data: () => ({ visible: false }),
  mounted() {
    window.addEventListener('scroll', this.comprobar, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.comprobar)
  },
  methods: {
    comprobar() {
      this.visible = window.scrollY > 700
    },
    subir() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.to-top {
  position: fixed;
  right: clamp(1rem, 3vw, 2rem);
  bottom: clamp(1rem, 3vw, 2rem);
  z-index: 30;
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink);
  cursor: pointer;
  opacity: 0;
  transform: translateY(0.5rem);
  pointer-events: none;
  transition: opacity 0.25s, transform 0.25s, border-color 0.2s;
}
.to-top.is-visible { opacity: 1; transform: none; pointer-events: auto; }
.to-top:hover { border-color: var(--ink); }
.to-top svg { width: 1.2rem; height: 1.2rem; }
</style>
