<template>
  <div>
    <h2>Page2</h2>
    <div class="container">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
      <div class="m-4">
        <h5>{{ counter }}</h5>
        <button class="btn btn-primary" @click="increment">+1</button>
        <button class="btn btn-primary" @click="decrement">-1</button>

        <button class="btn btn-secondary" @click="updateCounter(+1)">+1</button>
        <button class="btn btn-secondary" @click="updateCounter(-1)">-1</button>
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  layout:'customLayout',
  methods: {
    updateCounter(data) {
      this.$store.commit('updateCounter', data);
    },
    ...mapMutations({
      increment: {
        type: 'increment',
        payload: 1
      },
      decrement: {
        type: 'decrement',
        payload: -1
      },
    })
  },
  computed: {
    ...mapGetters({
      counter: 'getCounter'
    })
  },
}
</script>

<style scoped>

</style>
