<template>
  <section>
    <div class="container has-text-centered">
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
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.missing-header {
  margin-top: 20%;
}
</style>
