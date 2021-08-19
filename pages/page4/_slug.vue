<template>
  <div>
    <h4>Page4 parametre page</h4>
    <h5>Id= {{ this.id }}</h5>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    return {
      id: context.params.slug
    }
  }
}
</script>

<style scoped>

</style>
