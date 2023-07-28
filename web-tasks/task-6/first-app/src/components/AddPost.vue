<template>
<div>
         <Navbar :activeTab="1"></Navbar>
    <div>
        <form>
            <div class="form-group">
              <label for="exampleInputEmail1" style="margin-top: 50px; margin-left: 420px;">Title</label>
              <input v-model="title" type="txt" class="form-control" style="width: 500px; height: 50px; margin-left: 420px;" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write Post Title Here">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" style="margin-top: 50px; margin-left: 420px;">Post</label>
              <input v-model="content" type="txt" class="form-control" style="width: 500px; height: 200px; margin-left: 420px;" id="exampleInputPassword1" placeholder="Write Your Post Here">
            </div>
            <button type="submit" style="margin-top: 20px; margin-left: 520px" class="btn btn-primary w-25">Submit</button>
            <button type="submit" class="btn btn-primary" @click="getNews()">add news</button>
          </form>
    </div>
</div>
    
</template>

<script>
import Navbar from "@/includes/Navbar.vue"

export default {
components: {Navbar}, 
data(){
    return{
        title: '',
        content: ''
    }
},

methods: {
    submit(){
        Api.defaults.headers.common["Authorization"] = 'Bearer ${this.title}'
    },

    getNews(){
        Api.get('news').then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log('error', error)
        })
    }
  }
}
</script>