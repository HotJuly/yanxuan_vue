import Vue from 'vue';
import App from './App';
import router from './router';
import AppHeader from './components/AppHeader/AppHeader.vue';
import store from './store';

import './filter';
import './mock/mockServer';

Vue.config.productionTip = false

Vue.component('AppHeader',AppHeader);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
