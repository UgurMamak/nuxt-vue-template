const state = () => ({
  authKey: null
});

const mutations = {
  setAuthKey(state, payload) {
    state.authKey = payload;
  }
};

const actions = {
  login(vuexContext, payload) {

    //firebase auth rest api (aratma şekli)

    var authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

    return this.$axios.post(`${authLink}${process.env.firebaseAPIKEY}`, {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    }).then(response => {
      console.log("then", response);

      localStorage.setItem("authKey",response.data.idToken);

      vuexContext.commit("setAuthKey", response.data.idToken);
    }).catch(error => {
      console.log("catch");
      return error.response;
    });
  },
  register(vuexContext, payload) {
    var authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

    return this.$axios.post(`${authLink}${process.env.firebaseAPIKEY}`, {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    }).then(response => {
      vuexContext.commit("setAuthKey", response.data.idToken);
    }).catch(error => {
      return error.response;
    });

  },
  initAuth(vuexContext,paylod){

  }
  /* initAuth(vuexContext, req) {
     let token;
     let expiresIn;
     if (req) {
       //server üzerinde çalışıyorsa

       if (!req.headers.cookie) {
         return
       }

       //Cookie üzerinde token elde etmek
       token = req.headers.cookie.split(';').find(c => c.trim().startsWith("authKey="));
       if (token) {
         token = token.split("=")[1];
       }


       expiresIn = req.headers.cookie.split(';').find(e => e.trim().startsWith("expiresIn="));
       if (expiresIn) {
         expiresIn = token.split("=")[1];
       }

     } else {
       //client üzerinde çalışıyorsa
       token = localStorage.getItem("authKey")
       expiresIn = localStorage.getItem("expiresIn")
     }

     if (new Date().getTime() > +expiresIn || !token) {
       vuexContext.commit("clearAuthKey");
     }


     vuexContext.commit('setAuthKey', token);
   },*/
};

const getters = {
  getAuthKey(state) {
    return state.authKey;
  },
  isAuthenticated(state) {
    return state.authKey != null
  }
};

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
