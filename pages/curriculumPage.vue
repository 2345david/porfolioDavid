<template>

  <div class="pt-20 pr-32 pl-32 bg-gray-200">
    <div class="flex items-center justify-center pb-20 gap-4">
      <button @click="downloadImage()" class="flex gap-1 text-[18px] items-center bg-yellow-600 px-4 py-1 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95">
        Descargar CV
      </button>
      <NuxtLink to="/">
        <button class="flex gap-1 text-[18px] items-center bg-yellow-600 px-4 py-1 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95">
          Volver
        </button>
      </NuxtLink>
    </div>
    <div class="flex gap-40">
      <img src="/dav.png" alt="foto" class="bg-gray-200 "/>
      <p class="flex items-center font-semibold text-[40px]">David Ramos García</p>
    </div>
    <div class="grid grid-cols-2 pt-10">
      <div class="flex flex-col">

        <div class="flex flex-col gap-4">
          <h1 class="text-xl pb-2">Contacto</h1>
          <div class="flex gap-4">
            <NuxtImg src="location.svg" width="30" class="bg-gray-700 p-1"/>
            <p>Calle Manuel García portal <br> Izquierdo 3ºC 29100 coin AN</p>
          </div>
          <div class="flex gap-4 items-center">
            <NuxtImg src="telephone.svg" width="30" class="bg-gray-700 p-1"/>
            <p>679 21 94 16</p>
          </div>
          <div class="flex gap-4 items-center pb-6">
            <NuxtImg src="atSing.svg" width="30" class="bg-gray-700 p-1"/>
            <p>ramosdavu2006@gmail.com</p>
          </div>
        </div>

        <div class="w-[500px]">
          <hr class="border-black p-2">
        </div>

        <div class="flex flex-col pb-8">
          <H1 class="text-xl p-2">Aptitudes</H1>
          <p>
            Soy un chico con muchas ganas de<br>aprender, ordenador,
            cabezota en el<br>sentido de que hasta que no termine lo<br>
            que empece no paro, putual,se<br>trabajar en equipo, estoy en constane<br>
            aprendizaje ya que sigo estudiando por<br>cuenta propia, tengo ambición<br>
            profesional, se manejo de office(excel,<br>word, powerpoint), sobre todo el word<br>
            y soy resolverdor de problemas.
          </p>
        </div>

        <div class="w-[500px]">
          <hr class="border-black p-2">
        </div>

        <div>
          <h1 class="text-xl p-2">Idiomas</h1>
          <p><b>Español, Valenciano</b><br>Idiomas nativos</p>
          <div class="flex flex-col pt-4">
            <div class="flex gap-[420px]">
              <p class="flex pb-2">Ingles:</p>
              <p>A2</p>
            </div>
            <div class="w-[500px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-blue-600 h-2.5 rounded-full" style="width: 35%"></div>
            </div>
            <p class="flex pt-2 pb-4">Basico</p>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <h1 class="text-xl p-2">Formación</h1>
        <div class="flex flex-col gap-8 p-4">
          <div class="flex gap-2">
            <p><strong>Ies ciudad de Coin</strong></p>
            <p>|</p>
            <p>09/2019 - 06/2022</p>
          </div>
          <div class="flex flex-col gap-2">
            <p><Strong>La ESO:</strong></p>
            <p>La ESO</p>
          </div>

          <div class="flex gap-2">
            <p><Strong>Ies Serrania</Strong></p>
            <p>|</p>
            <p>09/2022 - 06/2024</p>
          </div>
          <div class="flex flex-col gap-2">
            <p><strong>Sistema Microinformatico y redes:</strong></p>
            <p>Curso de grado medio</p>
          </div>

        </div>

        <div class="w-[500px] p-4">
          <hr class="border-black p-2">
        </div>

        <div class="flex flex-col gap-4 p-4">
          <H1 class="text-xl">Historial Laboral</H1>

          <div class="flex flex-col gap-2">
            <p><strong>Dependiente</strong></p>
            <p>El tentempie</p>
            <p>
              Reponedor de productos ademas de atención al cliente<br>
              Tengo el carnet de manipulador de alimentos.
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p><strong>Top Group Express - Estudiante en prácticas</strong></p>
            <p class="flex gap-2">Coin, Málaga | 03/2024 - 06/2024</p>
            <p>
              Lo que he echo en la empresa a sido aprender a poder manejarme
              con el tema del front-end, aprendiendo a programar mejor en
              HTML y CSS,<br> ademas de aprender Nuxt, tailwind, JavaScript y Vitest.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>


</template>

<script>
export default {
  name: 'curriculum',
  methods: {
    downloadImage() {
      const link = document.createElement('a');
      link.href = '/myCurriculum.png';
      link.download = 'myCurriculum.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
</script>