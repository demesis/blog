

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import installElementPlus from './plugins/element'
import axios from "axios"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
// installElementPlus(app)

// 配置后端端口
let ifDEV = process.env.NODE_ENV === 'development'
const baseURL = ifDEV ? 'http://localhost:80' : ''

axios.defaults.baseURL = baseURL

axios.defaults.withCredentials = true //让axios携带cookie

app.config.globalProperties.$axios = axios
app.use(store).use(router).use(ElementPlus).mixin({
    data() {
        return {
            baseURL
        }
    }
}).mount('#app')

