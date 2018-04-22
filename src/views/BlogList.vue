<template>
  <section class="section">
    <template v-if="posts.length == 0">
      <p>I should probably, write some blog posts...</p>
    </template>
    <template v-else>
      <div>List goes here</div>
    </template>
  </section>
</template>

<script>
export default {
  data () {
    return {
      posts: []
    }
  }
}
</script>

<style>

</style>
