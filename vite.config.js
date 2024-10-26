import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ecomerce-CoderHouse/',
  esbuild: {
    loader: 'jsx', // Usa JSX en todos los archivos que usen esta extensión
    include: /src\/.*\.jsx?$/, // Apunta a todos los archivos .js y .jsx en `src`
  }
})


