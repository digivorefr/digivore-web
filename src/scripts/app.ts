import Vue from 'vue';
import VueRouter from 'vue-router';
import router from 'scripts/router';
import Layout from 'scripts/components/Layout.vue';

// Requiring scss will include it in the Webpack's bundle process.
require('../styles/index.scss');

Vue.use(VueRouter);

const initialize = (): Vue => new Vue({
  components: {
    Layout,
  },
  router,
  render: (createElement) => createElement(Layout),
}).$mount('#app');

window.onload = initialize;

// Enables Hot Module Rendering.
if (module.hot) {
  module.hot.accept();
}
