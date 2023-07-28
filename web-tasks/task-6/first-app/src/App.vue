<template>
    <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AddPost from './components/AddPost.vue' 
import news1 from "./components/news1.vue"

export default {
    name: 'App',
    components: {
        HelloWorld,
        AddPost,
    }
}
</script>

<style>

</style>
