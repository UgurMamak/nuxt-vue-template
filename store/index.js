/*
console.log(process.env.testVar1);
console.log(process.env.baseURL);
*/

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state, {payload}) {
    state.counter = state.counter + payload;
  },
  decrement(state, {payload}) {
    state.counter = state.counter + payload;
  },
  updateCounter(state, payload) {
    state.counter = state.counter + payload;
  }
}

export const getters = {
  getCounter(state) {
    return state.counter;
  }
}


export const actions = {
  nuxtServerInit(vuexContext, context) {
    //context.app.$axios.get()
    //console.log("nuxtServerInit",context);
  },

  getPosts(vuexContext) {
    return this.$axios.$get('https://jsonplaceholder.typicode.com/posts');
  }
};
