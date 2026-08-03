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
      <h3 class="text-2xl font-bold text-cyan-300 mb-8 text-center">Lenguajes</h3>

      <div class="flex flex-wrap gap-3 justify-center">
        <span
          v-for="(item, i) in lenguajes"
          :key="i"
          class="px-4 py-2 rounded-full border border-cyan-400/30 text-gray-200 text-sm font-medium
                 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_12px_#22D3EE66]
                 transition-all duration-300 cursor-default"
        >
          {{ item.name }}
        </span>
      </div>
    </div>

    <!-- Otros -->
    <div class="bg-[#111827] p-8 rounded-xl border border-purple-400/20 shadow-xl hover:border-purple-400/60 transition-all">
      <h3 class="text-2xl font-bold text-purple-300 mb-8 text-center">Otros</h3>

      <div class="flex flex-wrap gap-3 justify-center">
        <span
          v-for="(item, i) in otros"
          :key="i"
          class="px-4 py-2 rounded-full border border-purple-400/30 text-gray-200 text-sm font-medium
                 hover:border-purple-400 hover:text-purple-300 hover:shadow-[0_0_12px_#A855F766]
                 transition-all duration-300 cursor-default"
        >
          {{ item.name }}
        </span>
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
        { name: "HTML"},
        { name: "CSS"},
        { name: "JavaScript"},
        { name: "Nuxt"},
        { name: "Tailwind"},
        { name: "Java"},
        { name: "MariaDB"},
        { name: "Python"},
        { name: "JavaFX"},
        { name: "C"}
      ],
      otros: [
        { name: "Edición de imágenes"},
        { name: "Edición de video", },
        { name: "Ofimática"},
        {name: "Trabajo en equipo"},
        {name: "Resolución de problemas"},
        {name: "Aprendizaje autónomo"},
        {name: "Manejo de uso de Jira"}
      ],
      proyectos: [
        { img: '/calculadora.png', alt: 'calculadora', text: 'Calculadora hecha con HTML, CSS y JS', link: 'https://github.com/2345david/calculadora' },
        { img: '/tasklist.png', alt: 'tasklist', text: 'App web para organizar tareas con Nuxt y Tailwind', link: 'https://github.com/2345david/taskList' },
        { img: '/tresEnRaya.png', alt: 'tres en rayas', text: 'Juego Tres en Raya hecho en HTML, CSS y JS', link: 'https://github.com/2345david/tres-en-raya' },
        { img: '/webVTC.jpeg', alt: 'web VTC', text: 'Página web profesional para empresa VTC', link: 'https://malagatranfercouk.com/' },
        { img: '/cap_proyecto_TFG.png', alt: 'cap proyecto', text: 'Proyecto de FCT para el ciclo superior', link: 'https://github.com/2345david/ProyectoTFG/tree/main/ProyectoFinal2DAM'}
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
