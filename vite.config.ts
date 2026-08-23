import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/prefeitura-rincao-estudos-2026/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/content/library/lessons/')) return 'editorial-lessons'
          if (id.includes('@supabase')) return 'supabase'
          if (id.includes('lucide-react')) return 'icons'
          if (id.includes('react-router') || id.includes('react-dom') || id.includes('/react/')) return 'react'
        },
      },
    },
  },
})
