import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import awsconfig from "./aws-exports";
import Amplify from "aws-amplify";
import "@/assets/tailwind.css";
Amplify.configure(awsconfig);
import "@aws-amplify/ui-vue";
import Vuelidate from "vuelidate";
import store from "@/store";
import Toast from "vue-toastification";
import "@/assets/notification.css";
import "tabler-icons/iconfont/tabler-icons.css";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

const options = {
  position: "bottom-left",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: false,
  rtl: false,
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: true,
  filterToasts: toasts => {
    // Keep track of existing types
    const types = {};
    return toasts.reduce((aggToasts, toast) => {
      // Check if type was not seen before
      if (!types[toast.type]) {
        aggToasts.push(toast);
        types[toast.type] = true;
      }
      return aggToasts;
    }, []);
  }
};

Vue.use(Toast, options);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
