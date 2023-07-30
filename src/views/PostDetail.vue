<template>
    <div class="post border-solid rounded border-white border-2 p-5 text-white bg-zinc-800 w-3/5 flex flex-col items-center">
        <div class="flex gap-5">
            <a href="#" class="sub">{{ postData.subreddit }}</a>
            <div>posted by {{ postData.op }}</div>
        </div>
        <div class="title font-bold">{{ postData.title }}</div>
            <img :src="postData.img" alt="image of the user" class="w-4/5   h-4/5">
        <div class="socials flex gap-5 justify-between mt-2 items-center">
            <div class="likes flex gap-1 items-center">
                <button class="postButton">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20L12 4M12 4L18 10M12 4L6 10" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </button>
                <div class="likes">{{postData?.likes }}</div>
                <button class="postButton">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </button>
            </div>
            <div class="shares postButton">
                <button>Share! {{ postData.shares }}</button>
            </div>
        </div>
        <div class="w-full flex flex-col gap-5">

            <!-- //text input -->
            <form v-if="signedIn.status" action="post" id="form" class="flex flex-col gap-1">
                <label for="comment">comment as {{ user?.email }}</label>
                <textarea ref="textArea" v-model="input" name="comment" id="comment" cols="30" rows="5" class="w-full p-1 bg-inherit border border-white rounded" placeholder="What are your thougts?"></textarea>
                <button @click="handlePost"  class="bg-orange-600 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded">Post</button>
            </form>

            <!-- //comments -->
            <div v-for="comment in postData.comments" v-bind:key="comment.id" class="p-2 text-white bg-zinc-800 w-3/5 flex flex-col gap-2 comment rounded">
                <div class="text-xs">{{ comment.op }}</div>
                <div>{{ comment.data }}</div>
                <div class="flex items-center gap-1">
                    <div class="flex">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20L12 4M12 4L18 10M12 4L6 10" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        {{ comment.likes }}
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="flex items-center reply border border-transparent p-1" @click="handleReply">
                        <svg width="20px" height="20px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.1631 5H15.8381C17.8757 5.01541 19.5151 6.67943 19.5001 8.717V13.23C19.5073 14.2087 19.1254 15.1501 18.4384 15.8472C17.7515 16.5442 16.8158 16.9399 15.8371 16.947H9.1631L5.5001 19V8.717C5.49291 7.73834 5.8748 6.79692 6.56175 6.09984C7.24871 5.40276 8.18444 5.00713 9.1631 5Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        reply
                    </div>
                </div>
        
            </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { usePostData } from '@/stores/postData';
import { ref } from 'vue';
import uniqId from 'uniqid'
import { getAuth } from "firebase/auth";
import { useSignedInStatus } from '@/stores/signedInstatus';
import {auth, provider} from "../firebase.js"
import { signInWithPopup } from 'firebase/auth';

const signedIn = useSignedInStatus()

const user = auth.currentUser;


const postData = usePostData()
const input = ref('')
type commentType = {
    op: string,
    data: string,
    timestamp: string,
    likes: number,
    id: string
}

function handlePost(e:Event) {
    e.preventDefault();
    postData.comments = [...postData.comments, {id: uniqId(), data: input.value, op: user.email, likes:0}]
    input.value = ''
}


function handleReply(e:Event) {
    if(signedIn.status){
        input.value = `@${e.target.parentNode.parentNode.children[0].textContent} `
        const commentInput = document.getElementById('comment')
        commentInput?.focus()
    } else {
        signInWithPopup(auth, provider)

        .then((result) => {
        input.value = `@${e.target.parentNode.parentNode.children[0].textContent} `
        const commentInput = document.getElementById('comment')
        commentInput?.focus()
        
        }).catch((error) => {
       
        });

    }
   
}


</script>



<style scoped>

</style>