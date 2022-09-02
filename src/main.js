import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import '@/assets/css/index.scss'

const app = createApp(App)

import { createPinia } from 'pinia'
import piniaPluginPresist from 'pinia-plugin-persist'
const pinia = createPinia()
pinia.use(piniaPluginPresist)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus).use(pinia)
app.use(router).mount('#app')
