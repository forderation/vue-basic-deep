import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import App from './App.vue';

const app = createApp(App);
const insAxios = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 3000,
    headers: {'Content-Type': 'application/json',}
})
app.use(VueAxios, insAxios);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
