import { createApp } from "vue"
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from "./components/HelloWorld.vue"
import AddPost from "./components/AddPost.vue"
import news1 from "./components/news1.vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './components/news.css'
import { Vue } from 'vue'
import { BIconWindowSidebar, BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import axios from "axios";

let Api = axios.create({
    baseURL: 'http://exam.tlancer.net/api',
})
Api.defaults.withCredentials = true

window.Api = Api

const routes = [
    {
        path: '/',
        component: HelloWorld,
        name: 'Home',
    },
    {
        path: '/add-post',
        component: AddPost,
        name: 'AddPost',
    }, 
    {
        path: '/news-1',
        component: news1,
        name: 'news1',
    }, 
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})



createApp(App).use(router).mount('#app')
