<template>
  <svg
    viewBox="0 0 24 24"
    :fill="solid ? 'currentColor' : 'none'"
    :stroke="solid ? 'none' : 'currentColor'"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path v-for="(d, i) in paths" :key="i" :d="d" />
  </svg>
</template>

<script>
const ICONOS = {
  github: {
    solid: true,
    d: ['M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3'],
  },
  linkedin: {
    solid: true,
    d: ['M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z'],
  },
  briefcase: { d: ['M3 7.5h18v12H3z', 'M8.5 7.5V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2.5', 'M3 13h18'] },
  download: { d: ['M12 4v11', 'm7 10.5 5 5 5-5', 'M5 20h14'] },
  external: { d: ['M14 4h6v6', 'M20 4 11 13', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5'] },
  code: { d: ['m8 7-5 5 5 5', 'm16 7 5 5-5 5'] },
  mail: { d: ['M3 5.5h18v13H3z', 'm3.5 6 8.5 7 8.5-7'] },
  up: { d: ['M12 20V5', 'm6 11 6-6 6 6'] },
  sun: { d: ['M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M12 2v2', 'M12 20v2', 'm4.9 4.9 1.4 1.4', 'm17.7 17.7 1.4 1.4', 'M2 12h2', 'M20 12h2', 'm4.9 19.1 1.4-1.4', 'm17.7 6.3 1.4-1.4'] },
  moon: { d: ['M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z'] },
  menu: { d: ['M4 7h16', 'M4 12h16', 'M4 17h16'] },
  close: { d: ['m6 6 12 12', 'M18 6 6 18'] },
  back: { d: ['M20 12H5', 'm11 6-6 6 6 6'] },
}

export default {
  name: 'UiIcon',
  props: {
    name: { type: String, required: true },
  },
  computed: {
    icono() {
      return ICONOS[this.name] || { d: [] }
    },
    paths() {
      return this.icono.d
    },
    solid() {
      return !!this.icono.solid
    },
  },
}
</script>
