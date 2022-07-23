
const routerMap = [
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/pages/home'),
    children: [
      {
        name: 'TodoList',
        path: '/todo-list',
        component: () => import('@/pages/todo-list')
      }
    ],
    redirect: '/todo-list'
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/home'
  }
]

export default routerMap