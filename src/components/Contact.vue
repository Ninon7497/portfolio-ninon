<script setup>
</script>

<template>
  <div id="contact" class="bg-indigo-50 min-h-screen w-full py-16 overflow-hidden">
    <div class="w-11/12 lg:w-3/4 mx-auto animate__animated animate__fadeIn">
      <!-- Titre -->
      <h1 class="text-4xl md:text-6xl font-bold text-indigo-900 text-center mb-6 transition duration-500 hover:scale-105">
        Pour me contacter
      </h1>

      <!-- Ligne décorative -->
      <div class="my-10 w-[150px] mx-auto">
        <hr class="border-indigo-300">
      </div>

      <!-- Icônes -->
      <div class="flex flex-col md:flex-row justify-center items-center gap-16 mt-10 animate__animated animate__fadeInUp animate__delay-1s">
        <!-- Email -->
        <div class="flex flex-col items-center transition transform hover:scale-105 hover:shadow-lg p-4 rounded-xl bg-white">
          <a href="mailto:ninonroche74@gmail.com" target="_blank">
            <img src="/email.svg" class="w-[100px] hover:cursor-pointer mb-2" />
          </a>
          <h2 class="text-center text-indigo-900 font-medium text-lg">ninonroche74@gmail.com</h2>
        </div>

        <!-- LinkedIn -->
        <div class="flex flex-col items-center transition transform hover:scale-105 hover:shadow-lg p-4 rounded-xl bg-white">
          <a href="https://www.linkedin.com/in/ninon-roche-65b540346/" target="_blank">
            <img src="/linkedIn.svg" class="w-[90px] hover:cursor-pointer mb-2" />
          </a>
          <h2 class="text-center text-indigo-900 font-medium text-lg mt-1">LinkedIn</h2>
        </div>
      </div>
    </div>
  </div>
</template>
