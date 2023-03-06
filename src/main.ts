import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { createPinia } from 'pinia'
import elementPlus from './plugins/element-plus'
import router from './router'
// 加载全局样式
import './styles/index.scss'
// const pinia = createPinia()

createApp(App)
//   .use(pinia)
  .use(router)
  .use(elementPlus)
  .mount('#app')
