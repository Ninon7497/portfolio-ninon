<script setup>
import Chatbox from '@components/Chatbot/Chatbox.vue'
import MessageContainer from '@components/Chatbot/MessageContainer.vue'
import {ref} from 'vue';
const response = ref("Bonjour. Je suis prêt à répondre à vos questions sur Ninon Roche.")
const isthinking = ref(false)
function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
  }

const id = uuidv4()

const request = async (question) => {
    isthinking.value = true
    try {
        const callChatbot = await fetch("https://dav74-chatbot-ninon.hf.space/request",{
            method : "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({id : id, query : question}),
        });
        const rep = await callChatbot.json();
        response.value = rep.response;
        
    }
    catch (error) {
        console.log("erreur : ",error)
        response.value = "Désolé, suite à une erreur interne, je ne suis pas en mesure de répondre à votre question pour le moment" ;
    }
    isthinking.value = false;
}

</script>
<template>
    <div class =  "flex flex-col w-1/2 h-full">
        <MessageContainer  :reponse="response" :isthink="isthinking"/>
        <Chatbox @update-question="question => request(question)"/>
    </div>
</template>