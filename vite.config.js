import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
  host: 'localhost',
  port: 5173,
  open: true
},
  build: {
  target: 'esnext',
  minify: 'esbuild',
  cssCodeSplit: true,
  chunkSizeWarningLimit: 1000,
  rollupOptions: {
    output: {
      manualChunks: {
        'vendor-react': ['react', 'react-dom'],
        'vendor-icons': ['lucide-react']
      }
    }
  }
}
})
