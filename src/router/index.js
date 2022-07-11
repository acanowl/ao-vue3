import * as VueRouter from 'vue-router'
import routes from './router-maps'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router