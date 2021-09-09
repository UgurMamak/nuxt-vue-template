<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
      <NuxtLink :to="'/posts/'+post.id" tag="a" class="card-link">Post Detay</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    post:{
      required:true
    }
  }
}
</script>

<style scoped>

</style>
