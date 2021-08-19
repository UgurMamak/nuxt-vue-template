<template>
  <div>
    <h3>Page3</h3>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'page-3',
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
