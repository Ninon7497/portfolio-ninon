import {fileURLToPath,URL} from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve:{
    alias:{'@components':fileURLToPath(new URL('./src/components',import.meta.url)),}
  }
})
