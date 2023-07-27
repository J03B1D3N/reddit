import { createRouter, createWebHistory } from 'vue-router'
import postDetail from "../views/PostDetail.vue"
import FeedVue from '@/components/Feed.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: FeedVue,
    },
    {
      path: '/post/:id',
      name: 'postDetail',
      component: postDetail,
      props: true
    }
    
  ]
})

export default router
