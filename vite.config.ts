
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./shared"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
    }
  },
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'https://your-backend-url.onrender.com',
        changeOrigin: true,
        secure: true
      }
    }
  }
});
