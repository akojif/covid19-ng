import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueResource from "vue-resource";
import Chakra, { CThemeProvider, CReset } from "@chakra-ui/vue";

import moment from "moment";
Vue.use(moment);

// Import FontAwesome icons
import { faAlignLeft, faSearch } from "@fortawesome/free-solid-svg-icons";

import "./registerServiceWorker";

Vue.use(vueResource);
Vue.use(Chakra, {
  icons: {
    // Here we state that we use `fa`
    // icons library for Chakra's
    // internal icon parser
    iconPack: "fa",
    iconSet: {
      faAlignLeft,
      faSearch
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(CThemeProvider, [h(CReset), h(App)])
}).$mount("#app");
