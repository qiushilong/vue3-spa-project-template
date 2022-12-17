import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

createApp(App).use(router).use(store).use(i18n).mount("#app");
