const state = () => ({})

const mutations = {}

const actions = {
  login(vuexContext, payload) {

    //firebase auth rest api (aratma şekli)

    //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    console.log("login action run");
    console.log(payload);
    if (payload.email === "ugurmamak988@gmail.com" && payload.password === "123") {

    }

  },
  register(vuexContext, payload) {
    var authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

    return this.$axios.post(`${authLink}${process.env.firebaseAPIKEY}`, {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    });

  }
}

const getters = {}

export default {
  state, mutations, actions, getters
}


/*
Using state in project

this.$store.data.loadedPosts
Using mutations in project

this.$store.commit('data/setPosts', [{id: '1',...}, {id: '2',...}]);
Using actions in project

this.$store.dispatch('data/setPosts', [{id: '1',...}, {id: '2',...}]);
Using getters in project

this.$store.getters['data/loadedPosts'];
*/
