import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";

// 引入 Tailwind CSS 樣式
// import "../src/tailwind.css";
import "tailwindcss/tailwind.css";

// 引入VeeValidate 元件跟功能
import { configure } from "vee-validate";
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from "@vee-validate/i18n";
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

// 引入VeeValidate 元件
import { Field, Form, ErrorMessage } from "vee-validate";

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale("zh_TW");

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
