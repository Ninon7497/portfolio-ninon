<script setup>
import {ref} from 'vue';
const question = ref('')
const emit = defineEmits(['updateQuestion'])
const handler = ()=>{
  if (question.value.length > 0){
    emit('updateQuestion', question.value)
    question.value =""
  } 
}
window.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        handler()
      }
});
</script>

<template>
    <div class="w-full  h-1/6 flex items-center justify-center relative">
      <div class="w-full"><input class=" mx-auto w-full h-11 rounded-xl bg-gray-50 p-6 focus:border-red focus:border-solid focus:border" v-model = "question" placeholder="À vous..."></div>
      <div class="relative right-10 hover:cursor-pointer" @click="handler"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 448 384"><path fill="currentColor" d="M0 384V235l320-43L0 149V0l448 192z"/></svg></div>
    </div>    
</template>