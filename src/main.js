import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import '@/assets/css/index.scss'

import { createPinia } from 'pinia'
import piniaPluginPresist from 'pinia-plugin-persist'
const pinia = createPinia()
pinia.use(piniaPluginPresist)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus).use(pinia)
app.use(router).mount('#app')
