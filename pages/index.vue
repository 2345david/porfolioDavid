<template>
  <navbar
    image="laptop2.svg"
    text1="Inicio"
    text2="Sobre mi"
    text3="Habilidades"
    text4="Proyectos"
    text5="Contacto"
  />
<div class="pt-20 pr-32 pl-32 bg-blue-900 bg-opacity-30">
  <section  class="opacity-0 translate-y-20 transition-all duration-1000">
    <div  class="flex gap-40">
      <div id="inicio" class="flex flex-col pt-72 w-[500px] gap-4">
        <p>
          Me llamo David Ramos García, aunque me suelen llamar <b>Davu</b>. Soy un estudiante
          apasionado por la ciberseguridad, pero, actualmente tengo conocimientos, del <b>Frontend</b>.
          Con ganas de <b>aprender</b> y dedicarme a lo que me <b>apasiona</b>.
        </p>
        <buttons
          text="Linkelin"
          text2="Github"
          text3="Curriculum"
        />
      </div>
      <div class="flex flex-col gap-20 pt-20 justify-center items-center">
        <img src="/david.png" alt="david" width="150px"/>
        <p class="flex font-mono font-semibold text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900">Futuro Analista <br> de seguridad</p>
      </div>
    </div>
  </section>

  <section id="sobre-mi" class="opacity-0 translate-y-20 transition-all duration-1000">
    <div class="flex font-col">
      <div class="flex relative items-center pt-[200px] bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-[40px]">
        <p>Sobre mi</p>
      </div>

    <div  class="flex pt-[240px] items-center">
      <div class="absolute">
        <img src="/globo.png" alt="globo" width="360px"/>
      </div>
      <div class="flex relative pl-24 pb-20 text-white">
        <p>Titulación ESO <br> SMR</p>
      </div>

      <div class="flex pt-[340px] items-center">
        <div class="absolute">
          <img src="/globo.png" alt="globo" width="360px"/>
        </div>
        <div class="flex relative pl-[110px] pb-20 text-white">
          <p>Algunos proyectos</p>
        </div>
      </div>

      <div class="flex pt-[20px] items-center">
        <div class="absolute">
          <img src="/globo.png" alt="globo" width="360px"/>
        </div>
        <div class="flex relative pl-[100px] pb-20 text-white">
          <p>Manejo de tecnologias</p>
        </div>
      </div>
    </div>
    </div>
  </section>

  <section  class="opacity-0 translate-y-20 transition-all duration-1000">
    <div class="flex flex-col pt-20">
      <p id="habilidades"  class="flex justify-end text-[40px] pt-52 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700">Habilidades</p>
      <div class="grid grid-cols-2 p-6">
        <div class="flex flex-col gap-2">
          <p class="flex items-center justify-center text-[30px] bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900">Lenguajes</p>
          <div class="flex pt-4">
            <img src="/pantalla.png" width="4000" alt="pantalla" />
          </div>
        </div>
        <div>
          <p class="flex text-[30px] items-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900">Otros</p>
          <div class="flex pt-4">
            <img src="/pantallaOtros.png" width="4000" alt="pantalla" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section  class="opacity-0 translate-y-20 transition-all duration-1000">
        <div id="proyectos" class="flex flex-col pt-40">
          <p  class="flex text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900">Proyectos</p>
          <p>Tengo unos cuantos proyectos pero son cosas algo sencillitas pero algo es algo, <b>pienso seguir avanzando</b></p>
        </div>
    <div class="flex flex-row-reverse items-center pt-8 gap-10">
        <div>
          <img src="/calculadora.png" alt="calculadora" width="200"/>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-[20px]">Hice una calculadora con HTML, CSS y Javascript</p>
          <a href="https://github.com/2345david/calculadora">
            <button class="flex justify-center items-center gap-1 text-[18px] bg-yellow-600 px-4 py-1 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95">VER</button>
          </a>
        </div>
    </div>

    <div class="pt-8">
      <hr class="border-black">
    </div>

    <div class="flex items-center pt-8 gap-10">
      <div>
        <img src="/tasklist.png" alt="lista de tareas" width="200"/>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-[20px]">Hice una app web para poder añadir tareas y tener una lista de tareas<br>Lo hice con Nuxt, Tailwind y Javascript</p>
        <a href="https://github.com/2345david/taskList">
          <button class="flex justify-center items-center gap-1 text-[18px] bg-yellow-600 px-4 py-1 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95">VER</button>
        </a>
      </div>
    </div>
    <div class="pt-8">
      <hr class="border-black">
    </div>


    <div class="flex flex-row-reverse items-center pt-8 gap-10 pb-8">
      <div>
        <img src="/tresEnRaya.png" alt="tres en rayas" width="200"/>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-[20px]">Hice el juego tres en rayas, y esta echo en HTML, CSS y Javascript</p>
        <a href="https://github.com/2345david/tres-en-raya">
          <button class="flex justify-center items-center gap-1 text-[18px] bg-yellow-600 px-4 py-1 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95">VER</button>
        </a>
      </div>
    </div>
  </section>

  <section  class="opacity-0 translate-y-20 transition-all duration-1000">
    <div id="contactos" class="flex flex-col pt-52">
      <p class="flex text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900">Contactame</p>
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