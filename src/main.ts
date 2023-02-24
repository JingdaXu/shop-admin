import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// 加载全局样式
import './styles/index.scss'
// const a_b = 'dsa'
// console.log(a_b)
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
