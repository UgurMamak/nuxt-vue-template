<template>
  <div>
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ comment.name }}</h5>
    </div>
    <p class="mb-1">{{ comment.body }}</p>
    <small class="text-muted">{{ comment.email }}</small>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      required: true
    }
  }
}
</script>

<style scoped>

</style>
