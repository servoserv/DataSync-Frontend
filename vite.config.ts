
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'https://your-backend-url.onrender.com',
        changeOrigin: true,
        secure: true,
      },
      '/ws-api': {
        target: process.env.VITE_API_URL || 'https://your-backend-url.onrender.com',
        changeOrigin: true,
        ws: true,
        secure: true,
      },
    },
  }
});
