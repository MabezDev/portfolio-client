<template>
    <base-content>
      <div class="hero is-danger is-small">
        <div class="hero-body has-text-centered">
          <div class="title">{{ banner }}</div>
          <div class="subtitle">
            <a href="https://github.com/MabezDev">@MabezDev</a>
            </div>
        </div>
      </div>
    </base-content>
</template>

<script>
import BaseContent from '@/components/content/BaseContent'
export default {
  components: {
    BaseContent
  },
  data () {
    return {
      banner: 'Scott Mabin'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
