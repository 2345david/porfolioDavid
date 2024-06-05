<template>
  <div :class="{ 'border-b pb-4': isBorderVisible }" class="text-white bg-blue-900 bg-opacity-90 border-gray flex flex-row items-center justify-between pt-4 pr-5 pl-5 fixed top-0 start-0 w-full z-20 pb-4">
    <div class="flex items-center justify-center gap-2">
      <div>
        <NuxtImg :src="image"
          width="60"
        />
      </div>
      <div class="text-[25px] text-white font-semibold hover:text-white">
        Davurg.dev
      </div>
    </div>
    <div class="flex xl:gap-56 md:gap-4 flex-row-reverse sm:gap-4 lg:gap-4 items-center xl:flex-row md:flex-row-reverse lg:flex-row-reverse sm:flex-row-reverse">
      <div>
        <button @click="toggleMenu" class="burger-button block xl:hidden">
          <NuxtImg width="40" class="burger-button block xl:hidden" src="https://www.svgrepo.com/show/374767/picklist-type.svg"/>
        </button>

        <div v-if="isMenuOpen" class="fixed inset-0 flex justify-center items-center bg-gray-200 bg-opacity-96 z-50">
          <nav class="flex flex-col items-center space-y-4" @click.stop>
            <button @click="toggleMenu" class="absolute top-4 right-4 text-gray-600">
              <NuxtImg width="40" src="https://www.svgrepo.com/show/517454/letter-uppercase-square-x.svg"/>
            </button>
            <div class="flex flex-col justify-center items-center gap-4">
              <span @click="scrollToSection('#inicio')" class="hover:text-orange-500 text-[50px] text-black hover:border-b hover:border-orange-500">{{text1}}</span>
              <span @click="scrollToSection('#sobre-mi')" class="hover:text-orange-500 text-[50px] text-black hover:border-b hover:border-orange-500">{{text2}}</span>
              <span @click="scrollToSection('#habilidades')" class="hover:text-orange-500 text-[50px] text-black hover:border-b hover:border-orange-500">{{text3}}</span>
              <span @click="scrollToSection('#proyectos')" class="hover:text-orange-500 text-[50px] text-black hover:border-b hover:border-orange-500">{{text4}}</span>

            </div>
          </nav>
        </div>

        <div v-else class="items-center justify-center flex flex-row xl:gap-8">
          <div class="flex-row gap-1  p-1 rounded hidden xl:block">
            <div class="flex flex-row gap-4">
              <div class="flex justify-center items-center gap-16 pr-20">
                <span @click="scrollToSection('#inicio')" class="hover:text-orange-500 text-[20px] text-white hover:border-b hover:border-orange-500">{{text1}}</span>
                <span @click="scrollToSection('#sobre-mi')" class="hover:text-orange-500 text-[20px] text-white hover:border-b hover:border-orange-500">{{text2}}</span>
                <span @click="scrollToSection('#habilidades')" class="hover:text-orange-500 text-[20px] text-white hover:border-b hover:border-orange-500">{{text3}}</span>
                <span @click="scrollToSection('#proyectos')" class="hover:text-orange-500 text-[20px] text-white hover:border-b hover:border-orange-500">{{text4}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: "navbar",
  data: () => ({
    isBorderVisible: false,
    isMenuOpen: false
  }),
  methods: {
    scrollToSection(id) {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      this.isMenuOpen = false;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.isBorderVisible = window.scrollY >= 60 ;
    }
  },


  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },



  props: {
    text1:{
      type: String,
      default: ""
    },
    text2:{
      type: String,
      default: ""
    },
    text3:{
      type: String,
      default: ""
    },
    text4:{
      type: String,
      default: ""
    },
    text5:{
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
  }
}
</script>