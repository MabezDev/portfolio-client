<template>
  <div class="hero is-primary">
    <div class="hero-body has-text-centered">
      <div class="title">{{ banner }}</div>
      <div class="subtitle">
        <a href="https://github.com/MabezDev">@MabezDev</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banner: 'Scott Mabin'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '@/style/custom.scss'
</style>

<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
