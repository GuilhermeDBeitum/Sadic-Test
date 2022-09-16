import Vue from "vue";
import Vuex from "vuex";

import moduleLogin from "./login";
import moduleJoke from "./joke";

Vue.use(Vuex);


const store = new Vuex.Store({
  modules: {
    modlogin: moduleLogin,
    modjoke: moduleJoke,
  },
});

export default store;
