<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-24 mb-1" v-for="post in posts" :key="post.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
            <NuxtLink :to="'/posts/'+post.id" tag="a" class="card-link">Post Detay</NuxtLink>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  async asyncData(context) {
    const posts = await context.store.dispatch('getPosts');
    return {posts}
  }
}
</script>
