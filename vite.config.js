import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    cors({
      origin: '*', // o la URL que desees permitir
      // puedes agregar otros encabezados aquí si es necesario
    })],
  
})
