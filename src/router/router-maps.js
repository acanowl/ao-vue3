export const homeRouters = [
  {
    name: 'TodoList',
    path: '/todo-list',
    component: () => import('@/pages/todo-list')
  },
  {
    name: 'DragBox',
    path: '/drag-box',
    component: () => import('@/pages/drag-box'),
    children: [
      {
        name: 'DragBoxDemo1',
        path: '/drag-box/demo1',
        component: () => import('@/pages/drag-box/demo1')
      },
      {
        name: 'DragBoxDemo2',
        path: '/drag-box/demo2',
        component: () => import('@/pages/drag-box/demo2')
      }
    ]
  }
]

const routerMap = [
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/pages/home'),
    children: homeRouters,
    redirect: '/todo-list'
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/home'
  }
]

export default routerMap