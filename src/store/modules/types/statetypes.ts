import type { RouteRecordRaw } from 'vue-router'
// 小仓库返回的state类型
export interface UserState {
  token: string | null
  menuRouters: RouteRecordRaw[]
}
