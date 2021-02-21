import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery';
import {
  ValidationObserver,
  ValidationProvider,
  configure,
  localize,
  extend,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import zhTW from 'vee-validate/dist/locale/zh_TW.json';
import VueSweetalert2 from 'vue-sweetalert2';
import Paginate from 'vuejs-paginate';
import App from './App.vue';
import router from './router';
import './bus';
import 'bootstrap';
import store from './store';

Vue.config.productionTip = false;

// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
localize('tw', zhTW);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('Loading', Loading);
Vue.component('Paginate', Paginate);
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
window.$ = $;

new Vue({
  created() {
    AOS.init();
  },
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
