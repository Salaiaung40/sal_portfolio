import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import VueNativeSock from "vue-native-websocket";
// import $ from 'jquery'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(VueNativeSock, "ws://localhost:9090");
// Vue.use(BootstrapVue);
// var $ = require('jquery')
var Scrollactive = require("vue-scrollactive");
Vue.use(Scrollactive);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

var firebaseConfig = {
  apiKey: "AIzaSyC-Bz3n31G7mgpzd1ipHxlrLsbuo2wywLE",
  authDomain: "contact-form-cc17e.firebaseapp.com",
  databaseURL: "https://contact-form-cc17e.firebaseio.com",
  projectId: "contact-form-cc17e",
  storageBucket: "contact-form-cc17e.appspot.com",
  messagingSenderId: "849564447345",
  appId: "1:849564447345:web:5e7a0be35674a227cde1d0",
  measurementId: "G-S7QX2H45LP",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
