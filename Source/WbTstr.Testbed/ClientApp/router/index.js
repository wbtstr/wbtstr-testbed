import Vue from 'vue';
import VueRouter from 'vue-router';

import Counter from '../components/Counter.vue';
import Home from '../components/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/counter', component: Counter },
  ]
});

export default router;