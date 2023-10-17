import { createRouter, createWebHashHistory } from 'vue-router';
import Home from  "@/pages/home/index.vue"
import Ticket from  "@/pages/ticket/index.vue"
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
            }
            
        ]
    
})
router.afterEach((to,from,next)=>{
    window.scrollTo(0,0)
})
export default router