import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import TurboSnap from "vite-plugin-turbosnap";

export default defineConfig({
    plugins: [
    react(),
    TurboSnap({
      rootDir: process.cwd(),
    }),
  ],
  server: {
    host: true,
    allowedHosts: [],
    proxy: {
    },
  },
})