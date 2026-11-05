import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const root = fileURLToPath(new URL(".", import.meta.url))
const pagesBase = "/active-link-automation/"

export default defineConfig(({ command }) => ({
  base: command === "build" ? pagesBase : "/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "github-pages-404",
      apply: "build",
      closeBundle() {
        const dist = path.resolve(root, "dist")
        const index = path.join(dist, "index.html")
        if (fs.existsSync(index)) fs.copyFileSync(index, path.join(dist, "404.html"))
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(root, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 4317,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 4317,
    strictPort: true,
  },
}))
