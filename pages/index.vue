<template>
  <navbar
      image="laptop2.svg"
      text1="Inicio"
      text2="Sobre mi"
      text3="Habilidades"
      text4="Proyectos"
      text5="Contacto"
  />

  <div id="inicio" class="pt-20 px-6 md:px-32 bg-blue-900 bg-opacity-30">
    <section class="opacity-0 translate-y-20 transition-all duration-1000">
      <div  class="flex flex-col-reverse lg:flex-row gap-10 lg:gap-40 h-full pt-28 justify-center items-center">
        <div class="flex flex-col w-full lg:w-[500px] gap-4 justify-center">
          <p>
            Me llamo David Ramos García, aunque me suelen llamar <b>Davurg</b>. Soy un estudiante
            apasionado por la ciberseguridad, pero, actualmente tengo conocimientos del <b>Frontend</b>.
            Con ganas de <b>aprender</b> y dedicarme a lo que me <b>apasiona</b>.
          </p>
          <buttons
              class="flex flex-col xl:flex-row 2xl:flex-row lg:flex-row md:flex-row sm:flex-row sm:f"
              text="Linkelin"
              text2="Github"
              text3="Curriculum"
          />
        </div>
        <div class="flex flex-col gap-6 lg:gap-20 justify-center items-center">
          <img src="/david.png" alt="david" class="w-36 md:w-48 lg:w-60" />
          <p class="flex font-mono font-semibold text-2xl md:text-3xl lg:text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900">Futuro programador <br> profesional</p>
        </div>
      </div>
    </section>

    <section id="sobre-mi" class="opacity-0 translate-y-20 transition-all duration-1000">
      <div class="container h-full pt-36 ">
        <div class="text-center pb-16">
          <h2 class="text-4xl text-white font-bold text-gradient bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800">Sobre mí</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white text-gray-800 shadow-lg rounded-lg p-8 transform hover:-translate-y-2 transition-transform">
            <h3 class="text-2xl font-semibold pb-4">Titulación</h3>
            <p class="text-lg">ESO <br> Sistema microinformatico y redes</p>
          </div>
          <div class="bg-white text-gray-800 shadow-lg rounded-lg p-8 transform hover:-translate-y-2 transition-transform">
            <h3 class="text-2xl font-semibold pb-4">Algunos proyectos</h3>
            <p class="text-lg">Los proyectos que tengo son echos en mi epoca de FCT, pero pienso hacer proyectos mas grandes</p>
          </div>
          <div class="bg-white text-gray-800 shadow-lg rounded-lg p-8 transform hover:-translate-y-2 transition-transform">
            <h3 class="text-2xl font-semibold pb-4">Manejo de tecnologías</h3>
            <p class="text-lg">Manejo de aplicaciones ofimaticas, edicion de imagenes y videos y mas</p>
          </div>
        </div>
      </div>
    </section>

    <section class="opacity-0 translate-y-20 transition-all duration-1000">
      <div class="flex flex-col h-full">
        <p id="habilidades" class="flex justify-end text-2xl md:text-3xl lg:text-[40px] pt-52 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700">Habilidades</p>
        <div class="grid grid-cols-1 md:grid-cols-2 p-6">
          <div class="flex flex-col gap-2">
            <p class="flex items-center justify-center text-2xl md:text-3xl lg:text-[30px] bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900">Lenguajes</p>
            <div class="flex pt-4">
              <img src="/pantalla.png" class="w-full" alt="pantalla" />
            </div>
          </div>
          <div>
            <p class="flex text-2xl md:text-3xl lg:text-[30px] items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900">Otros</p>
            <div class="flex pt-4">
              <img src="/pantallaOtros.png" class="w-full" alt="pantalla" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="opacity-0 translate-y-20 transition-all duration-1000">
      <div id="proyectos" class="flex flex-col h-full pt-36">
        <p class="flex text-2xl md:text-3xl lg:text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900">Proyectos</p>
        <p>Tengo unos cuantos proyectos pero son cosas algo sencillitas pero algo es algo, <b>pienso seguir avanzando</b></p>
      </div>
      <div class="flex flex-col lg:flex-row-reverse items-center pt-8 gap-10">
        <div>
          <img src="/calculadora.png" alt="calculadora" class="w-36 md:w-48 lg:w-60" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-lg md:text-xl">Hice una calculadora con HTML, CSS y Javascript</p>
          <a href="https://github.com/2345david/calculadora">
            <button class="flex justify-center items-center gap-1 text-base md:text-lg bg-yellow-600 px-4 py-1 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95">VER</button>
          </a>
        </div>
      </div>

      <div class="pt-8">
        <hr class="border-black">
      </div>

      <div class="flex flex-col lg:flex-row items-center pt-8 gap-10">
        <div>
          <img src="/tasklist.png" alt="lista de tareas" class="w-36 md:w-48 lg:w-60" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-lg md:text-xl">Hice una app web para poder añadir tareas y tener una lista de tareas<br>Lo hice con Nuxt, Tailwind y Javascript</p>
          <a href="https://github.com/2345david/taskList">
            <button class="flex justify-center items-center gap-1 text-base md:text-lg bg-yellow-600 px-4 py-1 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95">VER</button>
          </a>
        </div>
      </div>
      <div class="pt-8">
        <hr class="border-black">
      </div>

      <div class="flex flex-col lg:flex-row-reverse items-center pt-8 gap-10 pb-8">
        <div>
          <img src="/tresEnRaya.png" alt="tres en rayas" class="w-36 md:w-48 lg:w-60" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-lg md:text-xl">Hice el juego tres en rayas, y está hecho en HTML, CSS y Javascript</p>
          <a href="https://github.com/2345david/tres-en-raya">
            <button class="flex justify-center items-center gap-1 text-base md:text-lg bg-yellow-600 px-4 py-1 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95">VER</button>
          </a>
        </div>
      </div>
    </section>

    <section id="contactos" class="opacity-0 translate-y-20 transition-all duration-1000">
      <div  class="flex flex-col h-full pt-36">
        <p class="flex text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900">Contactame</p>
        <div>
          <formulary />
        </div>
      </div>
    </section>

    <back-button />
  </div>
  <part-down />
</template>

<script>
export default {
  mounted() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-20');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });
  }
};
</script>

<style>
p{}
</style>