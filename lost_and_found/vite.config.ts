import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
//import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 5050,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
        bypass: (req, res) => {
          if (req.headers && req.headers.referer)
            res.setHeader('referer', 'http://localhost:3000/')
        }
      },
    },
  }
  /*build:{
    outDir: path.resolve(__dirname, '../rlagksrufmy.github.io')
  }*/
})
