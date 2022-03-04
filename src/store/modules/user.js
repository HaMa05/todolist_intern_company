import { auth } from "@/config/firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// state
const state = () => ({
  user: null,
  authIsReady: false,
});

// getters
const getters = {
  getUser: (state) => {
    return state.user;
  },
};

// mutations
const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setAuthIsReady(state, payload) {
    state.authIsReady = payload;
  },
};

// actions
const actions = {
  async register(_, { email, password }) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        _.commit("setUser", userCredential.user);
        window.localStorage.setItem("token", userCredential.user.accessToken);
      })
      .catch((err) => {
        throw new Error("NOT REGISTER", err);
      });
  },
  async login(_, { email, password }) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        _.commit("setUser", userCredential.user);
        window.localStorage.setItem("token", userCredential.user.accessToken);
      })
      .catch((error) => {
        throw new Error("NOT LOGIN", err);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
