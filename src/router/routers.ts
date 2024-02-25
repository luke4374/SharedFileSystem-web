// 路由数组
export const RouterList = [
  {
    // 一级路由
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', // 权限功能使用，给路由命名
    meta: {
      title: '登录', // 左侧菜单标题
      hidden: true, // 该路由是否隐藏
      icon: null, // 菜单图标
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
      icon: 'Avatar',
    },
    redirect: '/home', // 重定向至home
    children: [
      // 子路由
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    // 一级路由layout
    path: '/rpt',
    component: () => import('@/layout/index.vue'),
    name: 'rpt',
    children: [
      {
        // 必须在layout组件下，否则跳到单独页面
        path: '/reports',
        component: () => import('@/views/reports/index.vue'),
        name: 'report',
        meta: {
          title: '报表',
          hidden: false,
          icon: 'Document',
        },
      },
    ],
  },
  {
    // 权限管理一级路由
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'AccessControlList',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock',
    },
    children: [
      {
        path: '/acl/userMng',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'UserMng',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/roleMng',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'RoleMng',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/menuMng',
        component: () => import('@/views/acl/menulist/index.vue'),
        name: 'MenuMng',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },
  {
    // 设置一级路由
    path: '/set',
    component: () => import('@/layout/index.vue'),
    // name: 'settings',
    children: [
      {
        path: '/settings',
        component: () => import('@/views/settings/index.vue'),
        name: 'settings',
        meta: {
          title: '设置',
          icon: 'Setting',
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
