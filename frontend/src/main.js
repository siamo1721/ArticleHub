import { createApp } from 'vue';
import App from './App.vue';
import vuetify from '/plugins/vuetify';
import router from './router/index';
import store from './store'
import components from './components/UI'
const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(store);
components.forEach(component =>{
    app.component(component.name, component);
})

app.mount('#app');