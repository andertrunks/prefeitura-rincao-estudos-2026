import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/prefeitura-rincao-estudos-2026/',
  plugins: [react()],
})
