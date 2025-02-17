import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),  // Update here to just 'dist'
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,  // Increase chunk size warning limit
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
