import Vue from "vue";
import Vuex from "vuex";
import Api from "../../../services/joke/api";

Vue.use(Vuex);

const moduleJoke = {
    state: { joke: null },
    getters: {
        joke: (state) => {
            return state.joke;
        },
    },
    actions: {
        async listJoke({ state }) {
            state.joke = await Api;
        },
    }
};

export default moduleJoke;