// 统一管理用户相关接口
import request from '@/utils/request'
import type { loginForm, loginRespData, userInfoRespData } from './type'

enum API {
  LOGIN_URI = '/user/login',
  USERINFO_URI = '/user/info',
}

// 暴露接口方法
// 登录接口
export const reqLogin = (data: loginForm) => {
  return request.post<any, loginRespData>(API.LOGIN_URI, data)
}

export const reqUserInfo = () => {
  return request.get<any, userInfoRespData>(API.USERINFO_URI)
}
