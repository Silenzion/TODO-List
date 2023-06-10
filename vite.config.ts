import vue from "@vitejs/plugin-vue";
import path from "path";
import OptimizationPersist from "vite-plugin-optimize-persist";
import PkgConfig from "vite-plugin-package-config";
import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "./",

  plugins: [vue(), OptimizationPersist(), PkgConfig()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ['tests/**/*.spec.ts'],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },

  build: {
    outDir: path.resolve(__dirname, "docs"),
    emptyOutDir: true,
  },
});
