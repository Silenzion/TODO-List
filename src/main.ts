import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/styles/index.scss";
import App from "@/App.vue";

const app = createApp(App).use(createPinia());

app.mount("#app");
