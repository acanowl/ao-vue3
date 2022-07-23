import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import '@/assets/css/index.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router).mount('#app')
