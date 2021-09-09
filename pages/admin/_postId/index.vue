<template>
  <PostForm is-update="true"
            @submit="updatePost($event)"
            :post="fetchedPost"/>
</template>

<script>
import PostForm from "@/components/admin/post-form";

export default {
  components: {
    PostForm
  },
  async asyncData(context) {
    var fetchedPost = await context.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${context.params.postId}`)
    return {fetchedPost}
  },
  methods: {
    updatePost(editedPost) {
      console.log("editedPost", editedPost);
      /*this.$store.dispatch('updatePost', {...editedPost, id:this.$route.params.postId}).then(res=>{
        this.$router.push('/admin')
      });*/
    }
  }
}
</script>

<style scoped>

</style>
