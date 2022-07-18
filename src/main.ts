import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 动态改变font-size
import 'amfe-flexible'

import router from '../src/router'

createApp(App).use(router).mount('#app')
