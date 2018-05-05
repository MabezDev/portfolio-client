<template>
  <base-content>
      <template v-if="posts.length == 0">
        <p>I should probably, write some blog posts...</p>
      </template>
      <template v-else>
        <div>List goes here</div>
      </template>
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
      posts: []
    }
  }
}
</script>

<style>

</style>
