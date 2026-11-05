import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/active-link-automation/" : "/",
  server: {
    host: "0.0.0.0",
    port: 47321,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 47322,
    strictPort: true,
  },
}));
