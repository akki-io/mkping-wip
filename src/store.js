import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    email: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setEmail(state, email) {
      state.email = email;
    }
  }
});
