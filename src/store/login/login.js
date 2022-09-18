import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const moduleLogin = {
    state: { login: "", password: "", token: "" },
    getters: {
        login: (state) => {
            return state.login;
        },
        password: (state) => {
            return state.password;
        },
        token: (state) => {
            return state.token;
        },
    },
    mutations: {
        setLogin(state, login) {
            state.login = login;
        },
        setPassword(state, password) {
            state.password = password;
        },
        setToken(state, token) {
            state.token = token;
        },
    },
    actions: {
        async generateToken({ state }) {
            axios.post("http://localhost:3000/login", {
                login: state.login,
                password: state.password
            })
                .then(function (response) {
                    state.token = response.data.token
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        async initializeLogin({ state }) {
            axios.get("http://localhost:3000/login", {
                headers: {
                    'x-access-token': state.token
                },
            })
                .then((response) => {
                    state.login = response.data[0].login;
                    state.password = response.data[0].password;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
};

export default moduleLogin;