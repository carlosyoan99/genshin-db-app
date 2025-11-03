import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // Abre el navegador automáticamente
  },
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets',  // Configuración para assets
  },
  // Configuración para alias (opcional)
  resolve: {
    alias: {
      '@': '/src',
      '@images': '/public/images'
    }
  }
})
