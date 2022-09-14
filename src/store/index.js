import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleLogin = {
  state: { login: null, password: null },
  getters: {
    login: (state) => {
      return state.login;
    },
    password: (state) => {
      return state.password;
    },
  },
  mutations: {
    setLogin(state, login) {
      state.login = login;
    },
    setPassword(state, password) {
      state.password = password;
    },
  },
  actions: {
    async initializeLogin({ state }) {
      state.login = 'admin@admin.com'
      state.password = "admin123"
      Axios
        .get("http://localhost:3000/login")
        .then((response) => {
          state.login = response.data.login;
          state.password = response.data.password;
        })
        .catch(() => {
          Vue.toasted.error(
            "Algo está errado e já estamos resolvendo, tente novamente mais tarde!"
          );
        });
    },
  },
};

const store = new Vuex.Store({
  modules: {
    modlogin: moduleLogin,
  },
});

export default store;
