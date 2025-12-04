import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    port: 4420,
    host: true,
    allowedHosts: ['flower_pages', '.flower_pages'],
  },
})