<script setup>
import ChatbotContainer from '@components/Chatbot/ChatbotContainer.vue'

const tab_img = [
  { url_img: "/techno/vuejs.jpg", url_site: "https://vuejs.org/" },
  { url_img: "/techno/tailwind.jpg", url_site: "https://tailwindcss.com/" },
  { url_img: "/techno/threejs.png", url_site: "https://threejs.org/" },
  { url_img: "/techno/gsap.png", url_site: "https://gsap.com/" },
  { url_img: "/techno/fastapi.avif", url_site: "https://fastapi.tiangolo.com/" },
  { url_img: "/techno/langgraph.png", url_site: "https://www.langchain.com/langgraph" }
]
</script>

<template>
  <div id="a propos de ce site" class="min-h-screen w-full py-16 overflow-hidden" style="background-color: #A1C4E2">
    <div class="w-11/12 lg:w-5/6 mx-auto flex flex-col lg:flex-row justify-between gap-10 animate__animated animate__fadeIn">
      
      <!-- Texte -->
      <div class="flex flex-col w-full lg:w-1/2 mt-10">
        <h1 class="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 transition-all duration-500 hover:scale-105">
          Les technos utilisées pour ce site
        </h1>
        <p class="text-[18px] md:text-[19px] text-white text-justify leading-relaxed px-2 drop-shadow-md">
          Voici toutes les technologies que j'ai utilisées pour développer ce site.  
          Je n'ai pas la prétention de maîtriser toutes ces technos, je suis encore en phase d'apprentissage et de découverte.
        </p>
      </div>

      <!-- Logos -->
      <div class="flex flex-wrap justify-center items-center gap-6 w-full lg:w-1/2 animate__animated animate__fadeInRight animate__delay-1s">
        <div
          v-for="(sr, index) in tab_img"
          :key="index"
          class="transition transform hover:scale-105 hover:shadow-lg hover:shadow-blue-200 rounded-xl p-2 bg-white"
        >
          <a :href="sr.url_site" target="_blank">
            <img :src="sr.url_img" alt="tech logo" class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain rounded-xl" />
          </a>
        </div>
      </div>

    </div>
  </div>
</template>
