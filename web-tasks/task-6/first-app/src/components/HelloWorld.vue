<template>
     <div>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>News</title>
</head>
<body>
    
    <Navbar :activeTab="0"></Navbar>

      <!--Cards-->

      <section class="bg-color">

      <section class="second-section">
        <div class="card1">
      <div class="card bg-danger" id="card1">
        <img v-bind:src="CardImg1" class="card-img-top1" id="first-image-top">
        <div class="card-body">
               <p class="card-text">First News</p>
               <router-link class="nav-link" aria-current="page" :to="{ name: 'news1'}"><button class="btn btn-dark w-50" style="margin-left: 70px;">Visit</button></router-link>
        </div>
      </div>
    </div>

    <div class="card2">
      <div class="card bg-danger" id="card2">
        <img v-bind:src="CardImg2" class="card-img-top2" id="second-image-top">
        <div class="card-body">
          <p class="card-text">Second News</p>
        </div>
      </div>
    </div>

    <div class="card3">
      <div class="card bg-danger" id="card3">
        <img v-bind:src="CardImg3" class="card-img-top3" id="third-image-top" alt="third image">
        <div class="card-body">
          <p class="card-text">Third News</p>
        </div>
      </div>
    </div>
    </section>

    <!--third Section-->

    <h4 id="title1">Whats Hot</h4>

    <section class="third-section">
        <div class="sec-sec-img1">
            <img v-bind:src="CardImg4" id="sec-sec-img1" alt="">
            <div class="overlay1">
              <div class="text">Street Art</div>
            </div>
        </div>

        <div class="sec-sec-img2">
            <img id="sec-sec-img2" v-bind:src="CardImg5" alt="">
            <div class="overlay2">
              <div class="text2">NYC</div>
            </div>
        </div>

        <div class="sec-sec-img3">
            <img id="sec-sec-img3" v-bind:src="CardImg6" alt="">
            <div class="overlay3">
              <div class="text3">Food</div>
            </div>
        </div>

        <div class="sec-sec-img4">
            <img id="sec-sec-img4" v-bind:src="CardImg7" alt="">
            <div class="overlay4">
              <div class="text4">NYC</div>
            </div>
        </div>
    </section>

    <!--fourth Section-->

    <section class="fourth-section">
      <h4 id="video-txt">VIDEO</h4>
      <iframe id="video" src="https://www.youtube.com/embed/h3fUgOKFMNU" title="New York in 8K ULTRA HD - Capital of Earth (60FPS)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </section>

  <section class="end">
    <h4 id="end-txt">Made In 2023</h4>
</section>
</section>

</body>
</html>
     </div>
</template>

<script>

import Navbar from '@/includes/Navbar.vue';

export default {
  components: {Navbar},
  name: 'HelloWorld',
  data() {
    return {
      CardImg1: require("../components/Images/1.jpg"),
      CardImg2: require("../components/Images/2.jpg"),
      CardImg3: require("../components/Images/3.jpg"),
      CardImg4: require("../components/Images/4.jpg"),
      CardImg5: require("../components/Images/5.jpg"),
      CardImg6: require("../components/Images/6.jpg"),
      CardImg7: require("../components/Images/7.jpg")
    }
  }

}

</script>