<template>
  <base-content class="has-text-centered">
      <h1 class="title missing-header">
        Oops, looks like this page doesn't exist
      </h1>
      <router-link :to="'/'">
        <p class="content">Back to
            <span class="icon">
              <i class="fas fa-home" title="Home"></i>
            </span>
        </p>
      </router-link>
  </base-content>
</template>

<script>
import BaseContent from '@/components/content/BaseContent'
export default {
  components: {
    BaseContent
  }
}
</script>

<style>
.missing-header {
  margin-top: 20%;
}
</style>
