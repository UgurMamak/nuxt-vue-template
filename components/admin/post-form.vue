<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <form style="width: 500px" @submit.prevent="onSubmit">
      <fieldset>
        <div class="form-group">
          <label>Yazar Adı</label>
          <input type="text" v-model="post.author" class="form-control" placeholder="Yazarın adını giriniz..">
        </div>
        <div class="form-group">
          <label>Baslık</label>
          <input type="text" v-model="post.title" class="form-control" placeholder="Yazının baslıgını giriniz..">
        </div>
        <div class="form-group">
          <label>Alt Baslık</label>
          <input type="text" v-model="post.subTitle" class="form-control" placeholder="Yazının alt baslıgını giriniz..">
        </div>
        <div class="form-group">
          <label for="exampleTextarea">Köse Yazısı</label>
          <textarea v-model="post.text" class="form-control" rows="5"></textarea>
        </div>
        <button @click="$router.push('/admin')" class="btn btn-danger">İptal</button>
        <button type="submit" class="btn btn-primary">Kaydet</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onSubmit() {
      // console.log(this.post);
      this.$emit("submit", this.post);
    }
  },
  props: {
    post: {
      type: Object,
      required: false,
      default: function () {
        return { title: null,
          subTitle: null,
          author: null,
          text: null }
      }
    }
  }
}
</script>

<style scoped>

</style>
