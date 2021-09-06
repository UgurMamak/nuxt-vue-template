<template>
  <ul class="list-group">
    <li href="#" v-for="comment in comments"  class="list-group-item list-group-item-action">
      <comment-card :comment="comment"/>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    comments:{}
  }
}
</script>

<style scoped>

</style>
