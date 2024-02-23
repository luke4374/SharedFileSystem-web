// 创建用户相关的仓库
import { defineStore } from 'pinia'
// 引入登录接口
import { reqLogin } from '@/api/user'
// ts数据类型
import type { loginForm, loginRespData } from '@/api/user/type'
import { UserState } from './types/statetypes'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
import { RouterList } from '@/router/routers'

// 用户数据、逻辑仓库
const useUserStore = defineStore('User', {
  // 数据存储位置
  state: (): UserState => {
    return {
      token: GET_TOKEN('TOKEN'), // 用户标识token
      menuRouters: RouterList, // 仓库存储生成菜单需要的路由数组
    }
  },
  // 处理异步&逻辑方法
  actions: {
    // 用户登录
    async userLogin(data: loginForm) {
      const res: loginRespData = await reqLogin(data)
      // 成功
      // console.log(456, res);
      if (res.code == 200) {
        this.token = res.data.token as string
        // 本地持久化token，可用pinia-plugin-persistedstate插件
        SET_TOKEN(res.data.token as string)
        // async 函数返回成功的promise
        return 'login success'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
      // 失败
    },
  },
  getters: {},
})

export default useUserStore
