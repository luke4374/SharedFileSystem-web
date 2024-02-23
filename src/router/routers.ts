// 路由数组
export const RouterList = [
  {
    // 一级路由
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', // 权限功能使用，给路由命名
    meta: {
      title: '登录',
      hidden: true, // 该路由是否隐藏
    },
  },
  {
    // 一级路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: 'layout',
      hidden: false,
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '主页',
          hidden: false,
        },
      },
      {
        path: '/test',
        component: () => import('@/views/login/index.vue'),
        meta: {
          title: 'Test',
          hidden: false,
        },
      },
    ],
  },
  {
    // 一级路由
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '错误页',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'default-page',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
]
