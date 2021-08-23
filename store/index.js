/*
console.log(process.env.testVar1);
console.log(process.env.baseURL);
*/

import Vuex from "vuex";
import auth from "./auth";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth
    }
  });
}

export default createStore;
