import BootstrapVue from "bootstrap-vue";
import Vue from "vue";
import App from "./App.vue";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount("#app");
