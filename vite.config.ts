import { defineConfig, } from 'vite'
import vue from '@vitejs/plugin-vue'

// PX to REM plugin
import postcssPxtorem from "postcss-pxtorem"

export default defineConfig({
  plugins: [vue()],
  css : {
    postcss : {
      plugins : [postcssPxtorem]
    }
  }
})
