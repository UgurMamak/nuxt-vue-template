<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h4>Post Detay</h4>
        <div class="card">
          <h5 class="card-header">{{ post.title }}</h5>
          <div class="card-body">
            <p class="card-text">{{ post.body }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h4>Yorumlar</h4>
        <comment-list :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import commentList from "@/components/comment/comment-list"

export default {
  components: {
    commentList
  },
  async asyncData(context) {
    let comments = await context.$axios.$get(`https://jsonplaceholder.typicode.com/comments?postId=${context.params.postId}`);

    let post = await context.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${context.params.postId}`);

    return {comments, post};
  }
}
</script>

<style scoped>

</style>
