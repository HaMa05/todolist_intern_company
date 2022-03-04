import { createApp } from "vue";
import App from "./App.vue";
import { registerGlobalComponents } from "@/config/globalComponent.js";
import router from "./route";

// import tailwind
import "@/config/tailwind.css";

const app = createApp(App);
console.log(import.meta.env.VITE_APP_ID);

registerGlobalComponents(app);

app.use(router);

app.mount("#app");
