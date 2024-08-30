import { createApp } from 'vue'
import './index.css'
import 'primeicons/primeicons.css'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';


const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')
