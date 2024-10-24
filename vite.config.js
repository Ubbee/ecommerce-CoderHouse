import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ecomerce-CoderHouse/', 
  build: {
    rollupOptions: {
      external: ['history', 'sweetalert2', 'sweetalert2/dist/sweetalert2.min.css']
    }
  }
})

