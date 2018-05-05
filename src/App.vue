<template>
  <div id="app">
    <top-banner></top-banner>
    <router-view/>
  </div>
</template>

<script>
// import Http from '@/js/conf'
import TopBanner from '@/components/nav/Top'
export default {
  data () {
    return {
      landing: true
    }
  },
  components: {
    TopBanner
  }
}
</script>

<style lang="scss">
  @import '@/style/custom.scss';
</style>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
