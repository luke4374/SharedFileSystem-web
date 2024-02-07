import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
//@ts-expect-error 忽略ts语法检查
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 自定义全局组件注册
import globalComponents from '@/components'
// 全局样式
import '@/styles/index.scss'
// 引入路由
import router from './router'
// 引入pinia全局仓库
import pinia from "./store";

const app = createApp(App)
// 注册使用 ElementPlus 插件
app.use(ElementPlus, {
  locale: zhCn, // 配置中文包
})
// 自定义全局组件挂载, use方法会触发install方法
app.use(globalComponents)
// 注册使用路由模板
app.use(router)
// 注册pinia
app.use(pinia)
// 应用挂载
app.mount('#app')

console.log(import.meta.env)
