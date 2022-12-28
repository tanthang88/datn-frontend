import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: '**/*.jsx',
      jsxRuntime: 'classic',
    }),
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
          'heading-color': '#000000',
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
  // resolve: {
  //   alias: {
  //     '~': path.resolve(__dirname, 'node_modules'),
  //     '@': path.resolve(__dirname, 'src'),
  //   },
  // },
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
