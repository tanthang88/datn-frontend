import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList:[
        {
          libName:'antd',
          style(name){
            //use less
            return `antd/es/${name}/style/index.js`
          },
      },
    ]
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server:{
    host: '0.0.0.0',
    port: 9999,
  }
})
