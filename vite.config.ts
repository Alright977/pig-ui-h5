import { defineConfig, } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// PX to REM plugin
import postcssPxtorem from "postcss-pxtorem"

export default defineConfig({
  plugins: [vue()],
  css : {
    postcss : {
      plugins : [postcssPxtorem]
    }
  },
  resolve:{
    //设置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      },
  }
})
