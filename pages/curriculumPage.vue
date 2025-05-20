<template>
  <div class="pt-20 px-4 sm:px-10 md:px-20 lg:px-32 bg-gray-200">
    <div class="flex flex-col md:flex-row items-center justify-center pb-10 gap-4">
      <button @click="downloadImage()" class="flex gap-1 text-[16px] md:text-[18px] items-center bg-yellow-600 px-4 py-1 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95">
        Descargar CV
      </button>
      <NuxtLink to="/">
        <button class="flex gap-1 text-[16px] md:text-[18px] items-center bg-yellow-600 px-4 py-1 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95">
          Volver
        </button>
      </NuxtLink>
    </div>
    <div class="flex flex-col md:flex-row items-center gap-6 md:gap-40">
      <img src="/dav.png" alt="foto" class="w-32 h-32 md:w-auto md:h-auto bg-gray-200 rounded-full"/>
      <p class="flex items-center font-semibold text-[24px] md:text-[40px]">David Ramos García</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 pt-10 gap-6">
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

        <div class="w-full md:w-[500px]">
          <hr class="border-black p-2">
        </div>

        <div class="flex flex-col pb-8">
          <h1 class="text-xl font-semibold">Aptitudes</h1>
          <p>
            Soy un chico con muchas ganas de<br>aprender, ordenado,
            cabezota en el<br>sentido de que hasta que no termine lo<br>
            que empecé no paro, puntual,se<br>trabajar en equipo, estoy en constante<br>
            aprendizaje ya que sigo estudiando por<br>cuenta propia, tengo ambición<br>
            profesional, se manejar el office(excel,<br>word, powerpoint), sobre todo el word<br>
            y soy resolverdor de problemas.
          </p>
        </div>

        <div class="w-full md:w-[500px]">
          <hr class="border-black p-2">
        </div>

        <div>
          <h1 class="text-xl font-semibold">Idiomas</h1>
          <p><b>Español, Valenciano</b><br>Idiomas nativos</p>
          <div class="flex flex-col pt-4">
            <div class="flex gap-8">
              <p class="flex pb-2">Ingles:</p>
              <p>A2</p>
            </div>
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
            <p><Strong>Educacion secundaria obligatoria:</strong></p>
            <p>La ESO</p>
          </div>

          <div class="flex gap-2">
            <p><Strong>Ies Serrania</Strong></p>
            <p>|</p>
            <p>09/2022 - 06/2024</p>
          </div>
          <div class="flex flex-col gap-2">
            <p><strong>Sistema Microinformatico y redes:</strong></p>
            <p>Ciclo formativo de grado medio</p>
            <p><strong>Carnet de manipulador de alimentos</strong></p>
          </div>

          <div class="flex gap-2">
            <p><Strong>Ies Montecillos</Strong></p>
            <p>|</p>
            <p>09/2024 - sigo cursando</p>
          </div>
          <div class="flex flex-col gap-2">
            <p><strong>Desarrollo de aplicaciones multiplataformas web:</strong></p>
            <p>Ciclo formativo de grado superior</p>
          </div>

        </div>

        <div class="w-full md:w-[500px] p-4">
          <hr class="border-black p-2">
        </div>

        <div class="flex flex-col gap-4 p-4">
          <h1 class="text-xl">Historial Laboral</h1>

          <div class="flex flex-col gap-2">
            <p><strong>Dependiente - El tentempie</strong></p>
            <p>
              Reponedor de productos ademas de atención al cliente<br>
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p><strong>Top Group Express - Estudiante en prácticas</strong></p>
            <p class="flex gap-2">Coin, Málaga | 03/2024 - 06/2024</p>
            <p>
              Lo que he hecho en la empresa ha sido aprender a poder manejarme
              con el tema del front-end, aprendiendo a programar mejor en
              HTML y CSS,<br> además de aprender Nuxt, Tailwind, JavaScript y Vitest.
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p><strong>El atun -  camarero</strong></p>
            <p class="flex gap-2">Coin, Málaga | 06/2024 - 09/2024</p>
            <p>
              He sido camarero y ayudante de cocina
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p><strong>El joomara</strong></p>
            <p class="flex gap-2">Coin, Málaga | 09/2024 - sigo actualmente</p>
            <p>
              Soy camarero
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
      link.href = '/myCurriculum.jpg';
      link.download = 'myCurriculum.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr !important;
  }
  .w-full {
    width: 100% !important;
  }
}
</style>
