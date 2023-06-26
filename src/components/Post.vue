<script setup lang="ts">
import kitten from "../assets/kitten.webp"
// subreddit: which subredit was it posted to || user that posted the post || when did they post
// title: title text && tag (discussion, question ...)
// img?
// data: some text
// likes: number
// coments: object[]

// share and save buttons.
type postType = {
    subreddit: string,
    op: string,
    title:string,
    data: string,
    img: string,
    likes: number,
    comments: object[],
    shares: number
}

const post:postType = {
    subreddit: "r/cats",
    op: "what-the-fric",
    title: "How cute is little doozer over here?",
    data: "found this little guy out in the parking lot near the house. Going to take him in and make him a part of our family!",
    img: kitten,
    likes: 0,
    comments: [],
    shares: 15
}

</script>


<template>


    <div class="post border-solid rounded border-black border-2 p-5 text-white bg-zinc-800">
        <a href="#" class="sub">{{ post.subreddit }}</a>    
        <div class="title font-bold">{{ post.title }}</div> 
        <img :src="post.img" alt="image of the user" class="max-w-md max-h-md">
        <div class="socials flex justify-between mt-2 items-center">
            <div class="likes flex gap-1 items-center">
                <button class="postButton">like</button>
                <div class="likes">{{ post.likes }}</div>
                <button class="postButton">dislike</button>
            </div>
            <button class="comments postButton">
                comments: {{ post.comments.length }}
            </button>
            <div class="shares postButton">
                <button>Share! {{ post.shares }}</button>
            </div>
        </div>
    </div>

</template>