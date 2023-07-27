<script setup lang="ts">
import kitten from "../assets/kitten.webp"
import likeArrowSvg from "../svgs/arrow-up-svgrepo-com.svg"
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
                <button class="postButton">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20L12 4M12 4L18 10M12 4L6 10" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </button>
                <div class="likes">{{ post.likes }}</div>
                <button class="postButton">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </button>
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