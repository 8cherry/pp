import {createApp} from 'vue'
import App from './App.vue'
import {router} from "@/router.js";
import {createPinia} from "pinia";
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button";
import '@/assets/base.css';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

const pinia = createPinia()


app.use(router);
app.use(pinia);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            // prefix: 'p',
            darkModeSelector: 'light-mode',
            // cssLayer: false
        }
    }
});
app.use(ToastService);

app.mount('#app')
