<template>
  <div>
    <h3>Page3Id</h3>
    <h5>$route.params.page3Id= {{ $route.params.page3Id }}</h5>
    <h5>asyncData-routeId= {{ this.routeId }}</h5>
    <h5>asyncData-parametre2= {{ this.parametre2 }}</h5>
  </div>
</template>

<script>
export default {

  data() {
    return {
      var1: "value-1"
    }
  },

  async asyncData(context) {
    //SSR
    //this keywordü kullanamayız.
    //this keywordü kullanılamadığı için store'a erişemeyiz.
    //SSR işlem yapar fakat asyncData "data" içindeki property'ler ile birleşerek kullanılır.
    console.log("asyncData run");
    console.log(context.params.page3Id);
    const routeId = context.params.page3Id;
    const parametre2 = "value2";
    return {routeId, parametre2};
  },

  async fetch() {
    //SSR
    //this keywordü kullanılabilir.
    //store erişilebilir.
    // Fetch hiç bir şekilde "data" ile birleşmez. Sadece SSR üzerinde render yapar ve biz içinde store güncelleyene kadar bekler.
    console.log("fetch run");
    console.log(this.var1);
    const parametre3 = "value3";
    return {parametre3}
  }


}
</script>

<style scoped>

</style>
