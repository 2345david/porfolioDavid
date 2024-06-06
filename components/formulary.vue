<template>
  <div class="pt-10 pb-10 grid grid-cols-2">
    <div class="flex flex-col justify-center">
      <p class="font-semibold text-[40px]">¿Quieres que hagamos <br> algun proyecto?</p>
      <p class="font-medium text-[20px]">No dudes en contactarme</p>
    </div>
    <div class="bg-white rounded-md shadow-md p-6">
      <form action="https://formsubmit.co/57e4ef7bc7190c56e56c23dd260ab95f" method="post" class="space-y-4">
        <div>
          <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre:</label>
          <input type="text" name="name" id="nombre" placeholder="Inserte el nombre" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico:</label>
          <input type="email" name="correo" id="email" placeholder="Inserte el correo" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required>
        </div>

        <div>
          <label for="comments" class="block text-sm font-medium text-gray-700">Comentario:</label>
          <textarea name="comments" id="comments" placeholder="Inserte el comentario" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" rows="3" required></textarea>
        </div>

        <button type="submit" class="inline-block bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Enviar</button>
        <p>(Suele tardar un poquito en enviarse porfavor se paciente)</p>


        <input type="hidden" name="_captcha" value="false"/>
      </form>
    </div>
  </div>
</template>

<script>
async function submitForm() {
  const formData = new FormData(document.getElementById('contactForm'));
  const response = await fetch('https://formsubmit.co/57e4ef7bc7190c56e56c23dd260ab95f', {
    method: 'POST',
    body: formData
  });

  if (response.ok) {
    alert('¡El formulario se envió correctamente!');

    document.getElementById('contactForm').reset();
  } else {
    alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
  }
}
</script>
<style scoped>
p{}
</style>