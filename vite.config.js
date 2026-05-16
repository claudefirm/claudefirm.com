import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    allowedHosts: ["marketing-site-dev.foursli.de", ".foursli.de"],
    hmr: {
      host: "marketing-site-dev.foursli.de",
      clientPort: 443,
      protocol: "wss",
    },
  },
})
