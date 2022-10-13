import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mkcert(),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#ee4d2d',
          'heading-color': '#fff',
          'font-family': 'Roboto, Arial, Helvetica, sans-serif',
        },
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 9999,
    https: true,
  },
})
