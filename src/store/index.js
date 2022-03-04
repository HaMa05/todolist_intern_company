import { createStore } from "vuex";
import { auth } from "@/config/firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import user from "./modules/user";

const store = createStore({
  namespaced: true,
  modules: {
    user,
  },
});

const authStateChange = onAuthStateChanged(auth, (user) => {
  const token = window.localStorage.getItem("token");
  if (user && token) {
    store.commit("user/setAuthIsReady", true);
    store.commit("user/setUser", user);
  } else {
    store.commit("user/setAuthIsReady", false);
    store.commit("user/setUser", []);
  }

  authStateChange();
});
authStateChange();

export default store;
