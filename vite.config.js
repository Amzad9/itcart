import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassDts from 'vite-plugin-sass-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sassDts()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bootstrap/scss/bootstrap";`
      }
    }
  }
})
