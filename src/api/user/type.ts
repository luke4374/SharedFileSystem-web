// 登录接口需要携带的参数 ts类型限定
export interface loginForm {
  username: string
  password: string
}

// 登录接口返回的数据类型
interface responseDataType {
  token: string
}
export interface loginRespData {
  code: number
  data: responseDataType
}

// 返回用户信息接口数据类型
interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string // 用户角色描述
  roles: string[] // 角色信息
  buttons: string[]
  routes: string[]
  token: string
}

export interface userInfoRespData {
  code: number
  data: userInfo
}
