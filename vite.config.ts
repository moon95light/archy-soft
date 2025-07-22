import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   server: {
      host: '127.0.0.1',
      port: 5173
   },
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
