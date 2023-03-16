import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import elementPlus from './plugins/element-plus'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 创建app实例
const app = createApp(App)
// 创建pinia实例
const pinia = createPinia()
// 挂载ElementPlusIconsVue
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 使用pinia、router、elementplus
app.use(pinia)
  .use(router)
  .use(elementPlus)
  .mount('#app')
