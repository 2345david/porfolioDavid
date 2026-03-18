<template>
  <navbar
    image="laptop2.svg"
    text1="Inicio"
    text2="Sobre mí"
    text3="Habilidades"
    text4="Proyectos"
    text5="Contacto"
  />

  <!-- CONTENEDOR PRINCIPAL -->
  <div class="bg-[#0A0F1F] text-gray-200 min-h-screen overflow-hidden">

    <!-- HERO -->
    <section id="inicio" class="pt-32 px-6 md:px-32 flex flex-col lg:flex-row items-center justify-between gap-16">
      
      <!-- Texto -->
      <div class="max-w-2xl fade-in-up">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 drop-shadow-xl">
          Hola, soy David Ramos<br />Desarrollador Frontend & Backend
        </h1>

        <p class="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          También conocido como <span class="text-cyan-400 font-semibold">Davurg</span>.  
          Apasionado del <span class="text-purple-400 font-semibold">frontend</span> y la 
          <span class="text-purple-400 font-semibold">ciberseguridad</span>.  
          Siempre aprendiendo y creando proyectos que destaquen.
        </p>

        <buttons
          class="flex flex-col xl:flex-row gap-4 mt-8"
          text="LinkedIn"
          text2="Github"
          text3="CV"
          text4="Infojobs"
        />
      </div>

      <!-- Foto -->
      <div class="relative fade-in-up">
        <img
          src="/david.png"
          alt="david"
          class="w-56 md:w-64 rounded-full shadow-[0_0_25px_#22D3EE] hover:shadow-[0_0_45px_#A855F7] transition-all duration-700 animate-bounce-slow"
        />

        <div class="absolute inset-0 rounded-full border border-cyan-400/40 animate-glow"></div>
      </div>
    </section>

    <!-- SOBRE MÍ (TIMELINE) -->
    <section id="sobre-mi" class="pt-40 px-6 md:px-32 fade-in-up">
      <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500">
        Sobre mí
      </h2>

      <div class="relative border-l-2 border-cyan-400/40 ml-6 space-y-12">

        <div class="ml-6">
          <div class="w-4 h-4 bg-cyan-400 rounded-full absolute -left-2"></div>
          <h3 class="text-2xl font-bold text-cyan-300">Titulación</h3>
          <p class="text-gray-300 mt-2">
            ESO · Sistema Microinformatico y Redes · Desarrollo de Aplicaciones Multiplataforma
          </p>
        </div>

        <div class="ml-6">
          <div class="w-4 h-4 bg-purple-400 rounded-full absolute -left-2"></div>
          <h3 class="text-2xl font-bold text-purple-300">Proyectos</h3>
          <p class="text-gray-300 mt-2">
            Proyectos propios, trabajos de FCT y desarrollos profesionales.
          </p>
        </div>

        <div class="ml-6">
          <div class="w-4 h-4 bg-blue-400 rounded-full absolute -left-2"></div>
          <h3 class="text-2xl font-bold text-blue-300">Tecnologías</h3>
          <p class="text-gray-300 mt-2">
            HTML, CSS, JS, Nuxt, Tailwind, Java, MariaDB, Python, JavaFX, C, edición multimedia y ofimática.
          </p>
        </div>

      </div>
    </section>

    <!-- HABILIDADES -->
    <section id="habilidades" class="pt-40 px-6 md:px-32 fade-in-up">
      <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500">
        Habilidades
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

        <!-- Lenguajes -->
        <div class="bg-[#111827] p-8 rounded-xl border border-cyan-400/20 shadow-xl hover:border-cyan-400/60 transition-all">
          <h3 class="text-2xl font-bold text-cyan-300 mb-6 text-center">Lenguajes</h3>

          <div v-for="(item, i) in lenguajes" :key="i" class="mb-6">
            <p class="font-semibold">{{ item.name }}</p>
            <div class="w-full bg-gray-700 rounded-full h-3 mt-2">
              <div
                class="h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22D3EE]"
                :style="{ width: item.level + '%' }"
              ></div>
            </div>
          </div>
        </div>

        <!-- Otros -->
        <div class="bg-[#111827] p-8 rounded-xl border border-purple-400/20 shadow-xl hover:border-purple-400/60 transition-all">
          <h3 class="text-2xl font-bold text-purple-300 mb-6 text-center">Otros</h3>

          <div v-for="(item, i) in otros" :key="i" class="mb-6">
            <p class="font-semibold">{{ item.name }}</p>
            <div class="w-full bg-gray-700 rounded-full h-3 mt-2">
              <div
                class="h-3 rounded-full bg-purple-400 shadow-[0_0_10px_#A855F7]"
                :style="{ width: item.level + '%' }"
              ></div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- PROYECTOS -->
<section id="proyectos" class="pt-40 px-6 md:px-32 fade-in-up">
  <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-100">
    Proyectos
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

    <div
      v-for="(proyecto, index) in proyectos"
      :key="index"
      class="relative group rounded-xl overflow-hidden shadow-xl border border-cyan-400/20 hover:border-cyan-400/60 transition-all"
    >
      <!-- Imagen -->
      <img
        :src="proyecto.img"
        :alt="proyecto.alt"
        class="w-full h-full object-cover transition-all duration-500 group-hover:opacity-30"
      />

      <!-- Overlay -->
      <div
        class="absolute inset-0 flex flex-col justify-center items-center text-center px-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
      >
        <p class="text-gray-200 text-lg mb-4 drop-shadow-lg">
          {{ proyecto.text }}
        </p>

        <a :href="proyecto.link" target="_blank">
          <button
            class="bg-cyan-500 hover:bg-cyan-400 px-4 py-2 rounded-lg text-white font-semibold transition-transform hover:scale-105 shadow-lg"
          >
            Ver proyecto
          </button>
        </a>
      </div>
    </div>

  </div>
</section>


    <!-- CONTACTO (TERMINAL) -->
    <section id="contactos" class="pt-40 px-6 md:px-32 fade-in-up">
      <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500">
        Contáctame
      </h2>

      <div class="bg-black/60 p-8 rounded-xl border border-green-500/30 font-mono text-green-400 shadow-xl">
        <p>$ contact --send-message</p>
        <formulary />
      </div>
    </section>

    <back-button />
    <part-down />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lenguajes: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 70 },
        { name: "Nuxt", level: 90 },
        { name: "Tailwind", level: 90 },
        { name: "Java", level: 85 },
        { name: "MariaDB", level: 70 },
        { name: "Python", level: 60 },
        { name: "JavaFX", level: 80 },
        { name: "C", level: 60 }
      ],
      otros: [
        { name: "Edición de imágenes", level: 80 },
        { name: "Edición de video", level: 70 },
        { name: "Ofimática", level: 85 },
        {name: "Trabajo en equipo", level: 90},
        {name: "Resolución de problemas", level: 90},
        {name: "Aprendizaje autónomo", level: 95}
      ],
      proyectos: [
        { img: '/calculadora.png', alt: 'calculadora', text: 'Calculadora hecha con HTML, CSS y JS', link: 'https://github.com/2345david/calculadora' },
        { img: '/tasklist.png', alt: 'tasklist', text: 'App web para organizar tareas con Nuxt y Tailwind', link: 'https://github.com/2345david/taskList' },
        { img: '/tresEnRaya.png', alt: 'tres en rayas', text: 'Juego Tres en Raya hecho en HTML, CSS y JS', link: 'https://github.com/2345david/tres-en-raya' },
        { img: '/webVTC.jpeg', alt: 'web VTC', text: 'Página web profesional para empresa VTC', link: 'https://malagatranfercouk.com/' }
      ]
    };
  }
};
</script>

<style>
.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  animation: fadeUp 1.2s ease forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.animate-bounce-slow {
  animation: bounce-slow 3.5s ease-in-out infinite;
}


@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px #22D3EE; }
  50% { box-shadow: 0 0 40px #A855F7; }
}
.animate-glow {
  animation: glow 4s infinite ease-in-out;
}
</style>
