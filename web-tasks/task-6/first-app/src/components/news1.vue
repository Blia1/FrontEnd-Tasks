<template>
      <div>
     <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="styles/styles.cssfirst-app/src/components/news.css">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
     <title>News</title>
 </head>
 <body> 
  
  <!--Navbar-->
  
  <Navbar></Navbar>

  <section id="news1-bg">
    
    <!--Content-->

    <div class="card" id="news-card-11">
        <div class="card-header">
          <b>NEWS 1</b>
        </div>
        <ul class="list-group list-group-flush" id="first">
          <li class="list-group-item" id="first">
            <b>Title:</b>
            {{ targetNewsItem ? targetNewsItem.title : 'No news item found with the specified id.' }}
          </li>
          </ul>
          <ul class="list-group list-group-flush" id="second">
          <li class="list-group-item" id="second"> 
            <b>Content:</b>
            {{ targetNewsItem ? targetNewsItem.content : 'No news item found with the specified id.' }}
          </li>
        </ul>
      </div>
      </section>

    </body>
</html>
    

</div>
</template>

<script>

import Navbar from "@/includes/Navbar.vue"
import news1 from '../components/news1.vue';
import { BIconAppIndicator } from "bootstrap-vue";

export default {
    components: {Navbar}, 

data(){ 
    return{
        id: 1,
        news: []
    }
},

     methods: {
        getNews(){
            Api.get('/news').then((data) => {
                this.news = data.data;
                this.fetchTargetNewsItem(this.id);
            })
                .catch((error) => {
                console.log('error', error)
            });
        },

        fetchTargetNewsItem(targetId) {
      this.targetNewsItem = this.news.find((item) => item.id === targetId);
        },

     },

     computed: {
    targetNewsItem() {
      return this.news.find((item) => item.id === this.id);
    },

  },

  mounted() {
    this.getNews();
  },

}

</script>