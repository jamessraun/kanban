// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('semantic-ui-css/semantic.min.css')
require('semantic-ui-css/semantic.min.js')
import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import App from './App'
import router from './router'

import {store} from './store'

// explicit installation required in module environments
Vue.use(VueFire)
Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyBVdMk1nKaTDda4T7fxgDeK-1bNm0H3oaA",
  authDomain: "kanban-ae8fa.firebaseapp.com",
  databaseURL: "https://kanban-ae8fa.firebaseio.com",
  storageBucket: "kanban-ae8fa.appspot.com",
  messagingSenderId: "251677965223"
};

var app = Firebase.initializeApp(config)
Vue.prototype.$db = app.database()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
