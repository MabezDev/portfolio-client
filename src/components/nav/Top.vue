<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- <a class="navbar-item" :href="appConfig.brand_url">
        <img :src="appConfig.brand_img" alt="Richard Paul Russell Ltd" width="112" height="28">
      </a> -->
      <a role="button" class="navbar-burger" :class="{ 'is-active': showMobileMenu }" @click="showMobileMenu = !showMobileMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': showMobileMenu }">
      <div class="navbar-start">
        <router-link v-on:click.native="showMobileMenu = false" class="navbar-item" :to="'/'">
          <span class="icon">
            <i class="fas fa-home" title="Home"></i>
          </span>
        </router-link>
        <router-link v-on:click.native="showMobileMenu = false" class="navbar-item" :to="'/blog'">Blog</router-link>
        <router-link v-on:click.native="showMobileMenu = false" class="navbar-item" :to="'/projects'">Projects</router-link>
      </div>
      <div class="navbar-end">
        <a v-on:click.native="showMobileMenu = false" class="navbar-item" target="_blank" :href="appConfig.contactLinks.github">
          <span class="icon">
            <i class="fab fa-github" title="github"></i>
          </span>
        </a>
        <a v-on:click.native="showMobileMenu = false" class="navbar-item" target="_blank" :href="appConfig.contactLinks.linkedin">
          <span class="icon">
            <i class="fab fa-linkedin-in" title="linkedIn"></i>
          </span>
        </a>
        <a v-on:click.native="showMobileMenu = false" class="navbar-item" target="_blank" :href="appConfig.contactLinks.email">
          <span class="icon">
            <i class="fas fa-at" title="Email"></i>
          </span>
        </a>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  data () {
    return {
      showMobileMenu: false
    }
  }
}

</script>

<style>
a,
a:active,
a:focus {
  outline: none;
}
</style>
