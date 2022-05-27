import {createApp} from "vue";
import App from "./App.vue";
import Echo from "./libs/Echo.js";

window.App = createApp(App).mount('#app');
window.Echo = new Echo;
window.Echo.connect();