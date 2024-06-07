<template>
  <button
      v-show="visible"
      @click="scrollToTop"
      class="fixed bottom-16 right-10  bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
  >
    ↑
  </button>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.toggleVisibility)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.toggleVisibility)
  },
  methods: {
    toggleVisibility() {
      this.visible = window.scrollY > 200
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>