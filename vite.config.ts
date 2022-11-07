import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import path from "path";
// @ts-ignore
import OptimizationPersist from "vite-plugin-optimize-persist";
// @ts-ignore
import PkgConfig from "vite-plugin-package-config";

export default defineConfig({
  base: "https://silenzion.github.io/To-Do-Vue3-ts-/",
  plugins: [vue(), OptimizationPersist(), PkgConfig()],
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
    outDir: path.resolve(__dirname, "output"),
    emptyOutDir: true,
  },
});
