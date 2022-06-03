import Vue from 'vue'
import VueRouter from 'vue-router'
import indexHome from '../components/pages/Home.vue'
import projectsHome from '../components/pages/ProjectsHome.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'indexHome',
        component: indexHome
    },
    {
        path: '/projects/:id',
        name: 'projectsHome',
        component: projectsHome
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
