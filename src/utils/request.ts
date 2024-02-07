// AXIOS 二次封装作为请求与响应的拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 利用axios对象的create方法，创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_DEV_API,
  timeout: 5000,
})

// request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  // config配置对象中的headers请求头,访问发送给服务器端的参数
  return config
})

// response相应拦截器
request.interceptors.response.use(
  (Success_response) => {
    // 成功响应的回调
    console.log('SUCCESS', Success_response.data)
    return Success_response.data
  },
  (Fail_response) => {
    // 失败的回调,处理http网络错误
    console.log(Fail_response.data)

    let message = ''
    const status = Fail_response.response.status
    switch (status) {
      case 401:
        message = 'TOKEN已过期'
        break
      case 403:
        message = '权限不足，无法访问'
        break
      case 404:
        message = '访问资源不存在'
        break
      case 500:
        message = '服务器异常'
        break
      default:
        message = '网络异常，请刷新重试'
        break
    }
    // 提示错误信息
    ElMessage({
      type: 'error',
      message,
    })

    return Promise.reject(Fail_response)
  },
)
// 对外暴露
export default request
