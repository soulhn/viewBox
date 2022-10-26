import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus"; //ElementPlus
import ko from "element-plus/dist/locale/ko.mjs"; //ElementPlus 한글
//.use(ElementPlus, { locale: ko }) 사용
createApp(App).use(store).use(router).use(ElementPlus, { locale: ko }).mount("#app");
