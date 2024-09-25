import "./assets/main.css";
import "primeicons/primeicons.css";
import Toast from "vue-toastification"; // Add this line
import "vue-toastification/dist/index.css"; // Add this line
import router from "./router";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(Toast); // Add this line
app.mount("#app");
