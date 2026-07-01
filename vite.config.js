import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/previx/', // <-- AGREGA ESTA LÍNEA (incluye las barras diagonales)
})