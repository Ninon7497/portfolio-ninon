<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
const props = defineProps(['reponse', 'isthink'])
</script>

<template>
    <div class="w-full h-1/8 mt-5">
        <div v-if="props.isthink" class="flex justify-center items-center"><PulseLoader/></div>
        <div v-else class = "p-4 text-justify flex animate-fade">
            <!-- <img src="/agent.png" alt="agent icone" class="w-12 h-12 mr-3"> -->
            <p>{{props.reponse}}</p>
        </div>
    </div>

</template>