import { createApp } from 'vue'
import App from './App.vue'
import header from './header.vue'
import './style.css'

const app = createApp(App)

app.component('the-header', header)

app.mount('#app')