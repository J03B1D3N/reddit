import { defineStore } from "pinia";

type postType = {
    id: string,
    subreddit: string,
    op: string,
    title:string,
    data: string,
    img: string,
    likes: number,
    comments: object[],
    shares: number
    
} 

export const usePostData = defineStore('postData',{
    state: () => {
        return {
                id: "",
                subreddit: "",
                op: "",
                title: "",
                data: "",
                img: "",
                likes: 0,
                comments: [{}],
                shares: 0
        }
    },
    actions: {
        update(post:postType) {
            this.id = post.id,
            this.subreddit = post.subreddit,
            this.op = post.op,
            this.title = post.title,
            this.data = post.data,
            this.img = post.img,
            this.likes = post.likes,
            this.comments = post.comments,
            this.shares = post.shares
        }
    }
})