import Vue from "vue";
import Vuex from "vuex";

import moduleLogin from "./login/login.js";
import moduleJoke from "./joke/joke.js";

Vue.use(Vuex);


const store = new Vuex.Store({
  modules: {
    modlogin: moduleLogin,
    modjoke: moduleJoke,
  },
});

export default store;
