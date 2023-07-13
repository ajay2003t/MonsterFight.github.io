import { createRouter,createWebHistory } from "vue-router";
import game from '../components/game.vue'
import about from '../components/about.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'game',
            component: game
        },
        {
            path: '/about',
            name: 'about',
            component: about
        }
    ]

}
)
export default router