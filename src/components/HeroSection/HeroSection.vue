<script setup>
import HeroContent from '@components/HeroSection/HeroContent.vue'
import HeroImage from '@components/HeroSection/HeroImage.vue'
</script>

<template>
  <section class="min-h-screen relative z-1 overflow-hidden" ref="section" id="home">
    <div class="px-16 flex justify-center">
      <article class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full py-20">
        <header class="flex flex-col justify-center text-center md:text-left">
          <HeroContent />
          <!-- Ce bloc sera caché sur les écrans inférieurs à 'lg' -->
          <a
            href="https://www.lecole-cci.fr/"
            target="_blank"
            class="w-[200px] hidden lg:block"
          >
            <img
              src="/ecole.png"
              alt="logo école"
              class="w-[200px] h-[200px] rounded-full mt-20 hover:cursor-pointer"
            />
          </a>
        </header>

        <figure class="relative flex items-center justify-center">
          <HeroImage />
        </figure>
      </article>
    </div>
  </section>
</template>
