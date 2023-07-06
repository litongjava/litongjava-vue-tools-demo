import Vue from 'vue'
import App from './App.vue'
import LitongjavaVueTools from 'litongjava-vue-tools';
Vue.use(LitongjavaVueTools);

Vue.config.productionTip = false;

new Vue({
  render: function (h) {
    return h(App)
  },
}).$mount('#app');
