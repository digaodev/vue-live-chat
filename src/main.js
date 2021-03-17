import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// import global css
import './assets/main.css'
import { auth } from "./services/firebase";

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    .use(router)
    .mount("#app");  
  }
});

