import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { auth } from "@/firebase";

Vue.config.productionTip = false

auth.onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch('setUsuario', user);  
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});



