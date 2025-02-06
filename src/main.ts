import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';

const app = createApp(App);
app.use(Vue3Toastify, {
    autoClose: 3000,
} as ToastContainerOptions);
app.use(router).mount('#app');
