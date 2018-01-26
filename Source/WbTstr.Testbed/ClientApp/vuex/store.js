import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },

    mutations: {
        decrement(state) {
            state.count -= 1;
        },

        reset(state) {
            state.count = 0;
        },

        increment(state) {
            state.count += 1;
        },
    },
});

export default store;