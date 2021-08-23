<template>
  <div>
    <Header/>
    <Banner/>
    <h1>Default Layout</h1>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
/*import Header from "~/components/common/Header";
import Footer from "~/components/common/Footer";
import Banner from "~/components/common/Banner";*/
import {Fragment} from 'vue-fragment'

export default {
  components: {Fragment}
  /* components: {
     Header,
     Footer,
     Banner
   }*/

}

</script>

<style scoped>

</style>
