import { createApp } from 'vue';
import App from './App.vue';
import vuetify from '/plugins/vuetify';
import router from './router/index';
import store from './store'
const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(store);

app.mount('#app');