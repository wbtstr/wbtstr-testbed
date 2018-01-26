import Vue from 'vue';
import Buefy from 'buefy';

import App from './components/App.vue';
import store from './vuex/store.js';
import router from './router';

Vue.use(Buefy);

const app = new Vue({
    router,
    store,
    ...App
});

export { app, router, store };