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
        <ul class="list-group">
          <li href="#" v-for="comment in comments" key="comment.id" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{ comment.name }}</h5>
            </div>
            <p class="mb-1">{{ comment.body }}</p>
            <small class="text-muted">{{ comment.email }}</small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  async asyncData(context) {
    let comments = await context.$axios.$get(`https://jsonplaceholder.typicode.com/comments?postId=${context.params.postId}`);

    let post = await context.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${context.params.postId}`);

    return {comments, post};
  }

}
</script>

<style scoped>

</style>
