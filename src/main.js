import { createApp } from "vue";
import App from "./App.vue";
import { registerGlobalComponents } from "@/config/globalComponent.js";
import router from "./route";
import store from "./store";

// import tailwind
import "@/config/tailwind.css";

const app = createApp(App);

registerGlobalComponents(app);

app.use(store);
app.use(router);

app.mount("#app");
