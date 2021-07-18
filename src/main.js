import '@fortawesome/fontawesome-free/css/all.css' // libreria font-awesome 
import '@fortawesome/fontawesome-free/js/all.js' // libreria font-awesome 
import 'bootstrap'; // libreria bootstrap js
import 'bootstrap/dist/css/bootstrap.min.css';  // css bootstrap
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
