import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import App from "./App.vue";
import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://options-trader-94906.firebaseio.com/";

Vue.filter("currency", (value) => {
  return "$" + value.toLocaleString();
});

Vue.filter("roll", (value) => {
  if (value) {
    const sign = Math.sign(value.pnl) == 1 ? "+ " : "- ";
    return "x " + value.count + " | " + sign + value.pnl;
  } else {
    return "-";
  }
});

Vue.filter("wheel", (value) => {
  if (value) {
    return (
      "$: " +
      value.costBasis +
      " | " +
      "CC: " +
      value.CC +
      " | CSP: " +
      value.CSP
    );
  } else {
    return "-";
  }
});

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
