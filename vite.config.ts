import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()], // Remove tailwindcss() plugin
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split node_modules into a separate chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
