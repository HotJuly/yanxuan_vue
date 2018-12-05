import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import './mock/mockServer';

Vue.config.productionTip = false


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
