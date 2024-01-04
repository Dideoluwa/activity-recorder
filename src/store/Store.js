import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

export default createStore({
  strict: true,
  state: {
    openNav: false,
  },
  mutations: {
    navMenuHandler: (state, payload) => {
      state.openNav = payload;
    },
  },
  actions: {
    navMenuHandler: (context, payload) => {
      context.commit("navMenuHandler", payload);
    },
  },
  plugins: [new VuexPersistence().plugin],
});
