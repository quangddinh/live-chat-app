import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { projectAuth } from "./firebase/config";

let app;
// fix redirect when refresh page
projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
            .use(router)
            .mount("#app");
    }
});
