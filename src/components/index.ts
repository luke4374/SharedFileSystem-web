// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
// 引入element-plus全局组件
import * as ElementPlusIconVue from '@element-plus/icons-vue'

// 全局组件对象
const allGlobalComponent = { SvgIcon }
// 对外暴露插件对象
export default {
  // 入口use方法调用install
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  install(app) {
    // 注册项目中全部的全局组件
    Object.keys(allGlobalComponent).forEach((element) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      app.component(element, allGlobalComponent[element])
    })
    for (const [key, component] of Object.entries(ElementPlusIconVue)) {
      app.component(key, component)
    }
  },
}
