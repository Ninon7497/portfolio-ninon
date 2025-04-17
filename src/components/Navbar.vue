<script setup>
import {ref, onMounted} from 'vue'
import gsap from 'gsap'
const menuItems=['Home','A mon propos', 'A propos de ce site', 'contact'];
const nav = ref(null);
const openButton = ref(null);
const closeButton = ref(null);
const menuLinks = ref(null);

let tl = gsap.timeline({defaults:{duration:0.5, ease:'expo.inOut'}}).pause()

onMounted(()=>{
    tl.to(openButton.value,{opacity:0})
    .to(nav.value,{right:0})
    .to(nav.value,{height:'100vh'},'-=0.5')
    .to(menuLinks.value,{opacity:1, pointerEvents:'all',stagger:0.2},'-=0.1')
    .to(closeButton.value,{opacity:1, pointerEvents:'all'},'-=0.1')
})

const toggleMenu = () => {
    if (tl.reversed()){
        tl.play();
    } else {
        tl.restart();
    }
}

const closeMenu = () => {
    tl.reverse();
}

</script>
<template>
    <div class="relative z-30 p-5">
        <button 
        ref="openButton"
        class=" fixed bg-gradient-to-r from-secondary to-primary w-12 h-12 rounded-full p-2 cursor-pointer
        text-white" @click="toggleMenu">
        <font-awesome-icon :icon="['fas', 'bars']" class="font-bold text-xl"/>
        </button>
        <nav ref="nav" class="fixed top-0 right-[-200vw] w-full bg-[#060b18] flex justify-center items-center h-screen
        transition-all duration-1000 ease-in-out" @click="closeMenu">
        <button 
        ref="closeButton"
        class="bg-gradient-to-r from-secondary to-primary w-12 h-12 rounded-full p-2 cursor-pointer
        text-white absolute top-5 left-5  opacity-0 pointer-events-none">
        <font-awesome-icon :icon="['fas', 'xmark']" class="font-bold text-xl"/>
        </button>
        <ul class="list-none">
            <li class="my-12" v-for="(item, index) in menuItems" :key="index">
                <a :href="`#${item.toLocaleLowerCase()}`" class="text-white text-2xl font-medium opacity-0 pointer-events-none transition-opacity"
                :style="{tansitionDely:`${index*0.2}s`}"
                ref="menuLinks"
                @click="closeMenu"
                >{{ item }}</a>
            </li>

        </ul>
        </nav>

    </div>  
</template>