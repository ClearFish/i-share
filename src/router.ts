import { createRouter, createWebHashHistory } from 'vue-router';
import Home from  "@/pages/home/index.vue"
import Ticket from  "@/pages/ticket/index.vue"
import Promotion from  "@/pages/promotion/index.vue"
import Order from "@/pages/order/index.vue"
import Mine from "@/pages/mine/index.vue"
const router = createRouter({
        history:createWebHashHistory(),
        routes:[
            {
                name:'home',
                path:"/",
                redirect:'/home',
                children:[
                    {
                        name:'home',
                        path:"/home",
                        component:Home
                    }
                ]
            },
            {
                name:'ticket',
                path:'/ticket',
                component:Ticket
            },
            {
                name:'promotion',
                path:'/promotion',
                component:Promotion
            },
            {
                name:'order',
                path:'/order',
                component:Order
            },
            {
                name:'mine',
                path:'/mine',
                component:Mine
            }
        ]
    
})
router.afterEach((to,from,next)=>{
    window.scrollTo(0,0)
})
export default router