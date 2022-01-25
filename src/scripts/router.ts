import VueRouter, { RouteConfig } from 'vue-router';
import Home from 'scripts/pages/Home.vue';

const routes: RouteConfig[] = [
  { path: '/', component: Home, name: 'Home' },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
