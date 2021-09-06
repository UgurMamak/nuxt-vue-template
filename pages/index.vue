<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-24 mb-1" v-for="post in posts" :key="post.id">
        <PostCard :post="post"/>
      </div>
    </div>
  </div>
</template>

<script>
import postCard from "@/components/post/post-card"

export default {
  components: {
    postCard
  },
  async asyncData(context) {
    const posts = await context.store.dispatch('getPosts');
    return {posts}
  }
}
</script>
