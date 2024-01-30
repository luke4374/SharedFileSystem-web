// 路由数组
export const RouterList = [
  {
    // 一级路由
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', // 权限功能使用，给路由命名
  },
  {
    // 一级路由
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
  },
  {
    // 一级路由
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'default-page',
  },
]
