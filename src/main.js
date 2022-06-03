import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router/index.js'

Vue.config.productionTip = false
AOS.init();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
