import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Org site: https://danqing-ai.github.io/
export default defineConfig({
  base: '/',
  plugins: [vue()],
})
