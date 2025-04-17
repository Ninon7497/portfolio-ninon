<script setup>
import ChatbotContainer from '@components/Chatbot/ChatbotContainer.vue'
</script>

<template>
  <div id="a mon propos" class="bg-indigo-50 min-h-screen w-full py-16 overflow-hidden">
    <div class="w-11/12 lg:w-3/4 mx-auto flex justify-between items-center max-lg:flex-col gap-10 animate__animated animate__fadeIn">
      
      <div class="flex flex-col w-full lg:w-1/2 mt-10">
        <h1 class="text-4xl md:text-6xl font-bold text-indigo-900 mb-6 transition-all duration-500 hover:scale-105">
          Parlons un peu de... moi
        </h1>
        <p class="text-[18px] md:text-[19px] text-black text-justify mb-8 leading-relaxed px-2">
          Vous avez la possibilité de télécharger mon CV, mais aussi de poser des questions au chatbot qui connaît (presque) tout de moi.
        </p>
        <a href="/mon-cv.pdf" download>
            <button
  type="button"
  class="transition transform hover:scale-105 hover:shadow-lg duration-300 w-[250px] text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
>
  Télécharger mon CV
</button>

        </a>
      </div>

      <div class="w-full lg:w-1/2 flex justify-center animate__animated animate__fadeInRight animate__delay-1s">
        <ChatbotContainer class="shadow-xl rounded-2xl p-4 bg-white max-w-md w-full transition duration-500 hover:scale-[1.02]" />
      </div>
    </div>
  </div>
</template>
