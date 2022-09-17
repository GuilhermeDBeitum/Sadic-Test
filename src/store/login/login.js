import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

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

            let token = ''

            Axios
                .get("http://localhost:3000/login", {
                    headers: {
                        'x-access-token': token
                    },
                })
                .then((response) => {
                    state.login = response.data[0].login;
                    state.password = response.data[0].password;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};

export default moduleLogin;