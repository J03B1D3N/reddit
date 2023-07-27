<template>
    <div class="post border-solid rounded border-black border-2 p-5 text-white bg-zinc-800">
        <a href="#" class="sub">{{ postData?.subreddit }}</a>    
        <div class="title font-bold">{{ postData?.title }}</div>
            <img :src="postData?.img" alt="image of the user" class="max-w-md max-h-md">
        <div class="socials flex justify-between mt-2 items-center">
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
            <button class="comments postButton">
                <!-- comments: {{ comments.length }} -->
            </button>
            <div class="shares postButton">
                <button>Share! {{ postData.shares }}</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePostData } from '@/stores/postData';

const postData = usePostData()
console.log(postData)

</script>



<style scoped>

</style>