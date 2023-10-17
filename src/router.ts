import { createRouter, createWebHashHistory } from 'vue-router';
import Home from  "@/pages/home/index.vue"
import Introduce from "@/pages/introduce/index.vue"
import Global from "@/pages/global/index.vue"
import News from "@/pages/news/index.vue"
import newsDetails from "@/pages/news/details.vue"
import Gfdz from "@/pages/gfdz/index.vue"
import Cnsystem from "@/pages/cnsystem/index.vue"
import Service from "@/pages/service/index.vue"
import Download from "@/pages/download/index.vue"
import Concact from "@/pages/concact/index.vue"
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
            }
            
        ]
    
})
router.afterEach((to,from,next)=>{
    window.scrollTo(0,0)
})
export default router