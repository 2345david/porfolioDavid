<template>

  <div class="flex justify-center items-center gap-6">

    <a href="https://www.linkedin.com/in/david-ramos-garcia-a76686308/" target="_blank" rel="noopener noreferrer">

        <button class="flex justify-center items-center gap-1 text-[18px] bg-yellow-600 px-4 py-1 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95"><NuxtImg src="linkedin.svg" width="30"/> {{text}}</button>

    </a>

    <a href="https://github.com/2345david" target="_blank" rel="noopener noreferrer">

      <button class="flex items-center gap-1 text-[18px] bg-yellow-600 px-4 py-1.5 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95"><NuxtImg src="github.svg" width="25"/> {{text2}}</button>

    </a>

    <a href="https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=3986392983853922276" target="_blank" rel="noopener noreferrer">

      <button class="flex items-center gap-1 text-[18px] bg-yellow-600 px-4 py-1.5 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95"><NuxtImg src="infojobs.png" width="25"/> {{text4}}</button>

    </a>

    <NuxtLink to="curriculumPage">
      <button class="flex gap-1 text-[18px] items-center bg-yellow-600 px-4 py-1 hover:bg-yellow-500 rounded transition-transform transform hover:scale-95">

          <NuxtImg src="curriculum.svg" width="20"/>
          {{text3}}
      </button>
    </NuxtLink>
  </div>

</template>

<script>
export default {
  name: "buttons",
  props:{
    text:{
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
    }
  },
  methods: {
    downloadImage() {
      const link = document.createElement('a');
      link.href = '/fotoCurriculum.jpeg';
      link.download = 'fotoCurriculum.jpeg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
</script>