<template>
<section class="first-section">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">News Website</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" :class="activeTab === 0 ? 'active' : ''" aria-current="page" :to="{ name: 'Home'}">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :class="activeTab === 1 ? 'active' : ''" aria-current="page" :to="{ name: 'AddPost'}">Add Post</router-link>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-danger" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </section>
      </template>

<script>
    export default {
      props:{
        activeTab:{
          type: Number,
          default: 0
        }
      }
}
</script>