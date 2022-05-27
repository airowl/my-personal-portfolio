import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false
AOS.init();

new Vue({
  render: h => h(App),
}).$mount('#app')
