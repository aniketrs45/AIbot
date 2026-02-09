import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        sidebar: resolve(__dirname, "sidebar.html"),
        background: resolve(__dirname, "src/background.ts"),
        contentScript: resolve(__dirname, "src/contentScript.ts")
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === "contentScript") {
            return "contentScript.js";
          }
          if (chunk.name === "background") {
            return "background.js";
          }
          return "assets/[name]-[hash].js";
        }
      }
    }
  }
});
