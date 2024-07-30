import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";

// 引入 Tailwind CSS 樣式
import "../src/tailwind.css";

// 引入VeeValidate 元件
import { Field, Form, ErrorMessage } from "vee-validate";
// 引入 vue-mobile-detection
// import VueMobileDetection from "vue-mobile-detection";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

// 掛載 Global 的 VeeValidate 元件
app.component("VField", Field);
app.component("VForm", Form);
app.component("ErrorMessage", ErrorMessage);

// app.use(VueMobileDetection);
app.use(pinia);
app.use(router);
app.mount("#app");
