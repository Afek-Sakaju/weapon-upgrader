import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(() => ({
  plugins: [react()],
  base: "weapon-upgrader",
  esbuild: {
    loader: "jsx",
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".ts": "tsx",
      },
    },
  },
  resolve: {
    alias: [
      { find: "@src", replacement: path.resolve(__dirname, "./src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "@base-components",
        replacement: path.resolve(__dirname, "./src/base-components"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "./src/utils"),
      },
      {
        find: "@layouts",
        replacement: path.resolve(__dirname, "./src/layouts"),
      },
      {
        find: "@validations",
        replacement: path.resolve(__dirname, "./src/validations"),
      },
    ],
  },
  server: {
    open: true,
    port: 3000,
  },
}));
