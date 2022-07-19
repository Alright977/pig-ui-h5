import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 动态改变font-size
import 'amfe-flexible'

import router from '@/router'
import store from '@/store'
const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
