<template>
  <div class="pt-10 pb-10 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">

    <!-- Texto -->
    <div class="flex flex-col justify-center items-center gap-2 text-green-400 font-mono text-center px-4">

  <p class="font-semibold 
            text-[22px] 
            sm:text-[26px] 
            md:text-[30px] 
            lg:text-[34px] 
            xl:text-[40px] 
            leading-tight">
    $ ¿Quieres_crear_un_proyecto?
  </p>

  <p class="font-medium 
            text-[16px] 
            sm:text-[18px] 
            md:text-[20px] 
            pb-2">
    $ no_dudes_en_contactarme
  </p>

</div>


    <!-- Terminal -->
    <div class="bg-black/70 border border-green-500/30 rounded-md shadow-lg p-6 font-mono text-green-300">

      <p class="mb-4">$ iniciar_formulario --modo=terminal</p>

      <!-- Mensaje dinámico -->
      <p v-if="statusMessage" class="mb-4 text-green-400">
        {{ statusMessage }}<span class="animate-blink">_</span>
      </p>

      <form 
        id="contactForm"
        @submit.prevent="sendForm"
        action="https://formsubmit.co/57e4ef7bc7190c56e56c23dd260ab95f" 
        method="post" 
        class="space-y-6"
      >

        <!-- Nombre -->
        <div>
          <label for="nombre" class="block text-green-400 mb-1">$ introducir --nombre</label>
          <input 
            type="text" 
            name="name" 
            id="nombre" 
            placeholder="Escribe tu nombre..."
            class="w-full bg-black/40 border border-green-500/40 text-green-300 px-3 py-2 rounded-md focus:outline-none focus:border-green-400 focus:shadow-[0_0_10px_#22ff22] transition-all"
            required
          >
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-green-400 mb-1">$ introducir --email</label>
          <input 
            type="email" 
            name="correo" 
            id="email" 
            placeholder="tuemail@ejemplo.com"
            class="w-full bg-black/40 border border-green-500/40 text-green-300 px-3 py-2 rounded-md focus:outline-none focus:border-green-400 focus:shadow-[0_0_10px_#22ff22] transition-all"
            required
          >
        </div>

        <!-- Comentario -->
        <div>
          <label for="comments" class="block text-green-400 mb-1">$ introducir --mensaje</label>
          <textarea 
            name="comments" 
            id="comments" 
            placeholder="Escribe tu mensaje..."
            rows="4"
            class="w-full bg-black/40 border border-green-500/40 text-green-300 px-3 py-2 rounded-md resize-none focus:outline-none focus:border-green-400 focus:shadow-[0_0_10px_#22ff22] transition-all"
            required
          ></textarea>
        </div>

        <!-- Botón -->
        <button 
          type="submit"
          class="w-full bg-green-600 hover:bg-green-500 text-black font-bold py-3 rounded-md transition-all hover:shadow-[0_0_15px_#22ff22] hover:scale-[1.02]"
        >
          ejecutar --enviar
        </button>

        <p class="text-green-500 text-sm mt-2">(El envío puede tardar unos segundos...)</p>

        <!-- FormSubmit config -->
        <input type="hidden" name="_captcha" value="false"/>
      </form>

      <p class="mt-6">$ esperando_respuesta<span class="animate-blink">_</span></p>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusMessage: ""
    };
  },
  methods: {
    async sendForm() {
      this.statusMessage = "$ procesando";

      const form = document.getElementById("contactForm");
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        this.statusMessage = "$ mensaje_enviado ✔";
        form.reset();
      } else {
        this.statusMessage = "$ error_en_el_envio ❌";
      }
    }
  }
};
</script>

<style scoped>
@keyframes blink {
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
}
.animate-blink {
  animation: blink 1s infinite;
}
</style>
