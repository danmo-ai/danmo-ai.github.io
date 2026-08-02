import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Site: https://danmo.work (GitHub Pages)
export default defineConfig({
  base: '/',
  plugins: [vue()],
})
