import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'  // 👈 Add this

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 Fix alias for @
    },
  },
  plugins: [vue()],
})
