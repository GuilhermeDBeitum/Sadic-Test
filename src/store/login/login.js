import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const SET_LOGIN = "SET_LOGIN";
const SET_PASSWORD = "SET_PASSWORD";
const SET_TOKEN = "SET_TOKEN";

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
        [SET_LOGIN](state, login) {
            state.login = login;
        },
        [SET_PASSWORD](state, password) {
            state.password = password;
        },
        [SET_TOKEN](state, token) {
            state.token = token
            localStorage.setItem("tokenCached", token)
        },
    },
    actions: {
        async generateToken({ state, commit }) {
            await axios.post("http://localhost:3000/login", {
                login: state.login,
                password: state.password
            })
                .then(function (response) {
                    commit(SET_TOKEN, response.data.token)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
};

export default moduleLogin;