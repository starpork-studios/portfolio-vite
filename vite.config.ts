import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      include: ['tailwind.config.cjs', 'node_modules/**'],
    },
  },
  plugins: [react(), svgr()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "tailwind.config": path.resolve(__dirname, "./tailwind.config.cjs"),
    },
  },
  optimizeDeps: {
    include: ["tailwind.config"],
  },
});
