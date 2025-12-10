import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' /* DO NOT TOUCH THIS LINE */
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: '/schlaraffia-prototype/',
  plugins: [
    tailwindcss(), /* DO NOT TOUCH THIS LINE */
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
