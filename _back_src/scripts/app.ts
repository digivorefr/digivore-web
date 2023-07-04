import Vue from 'vue';
import VueRouter from 'vue-router';
import router from 'scripts/router';
import Layout from 'scripts/components/Layout.vue';

// Requiring assets here will include it in the Webpack's bundle process.
require('../styles/index.scss');
require('../images/icons/favicon-32x32.png');
require('../images/icons/favicon-16x16.png');
require('../images/icons/apple-icon-180x180.png');

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
