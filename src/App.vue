<script setup>
import {defineAsyncComponent} from 'vue'
const ThreeBackground = defineAsyncComponent(() => import('@components/ThreeBackground.vue'))
const Navbar = defineAsyncComponent(() => import('@components/Navbar.vue'))
const HeroSection = defineAsyncComponent(() => import('@components/HeroSection/HeroSection.vue'))
const AboutMe = defineAsyncComponent(() => import('@components/AboutMe.vue'))
const AboutSite = defineAsyncComponent(() => import('@components/AboutSite.vue'))
const Contact = defineAsyncComponent(() => import('@components/Contact.vue'))
</script>

<template>
  <ThreeBackground/>
  <Navbar/>
  <HeroSection/>
  <AboutMe/>
  <AboutSite/>
  <Contact/>
</template>
