import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import vercel from "vite-plugin-vercel"

export default defineConfig({
  plugins: [react(), vercel()],
  vercel: {
    prerender: async () => ({
      '/': { },                      // Root landing page
      '/partners': { },              // Partners page
      '/events/cs-expo': { },        // CS Expo page
      '/events/dev-day': { },        // Dev Day page
      '/events': { },                // Events page
      '/projects/collection': { },   // Collection page
    }),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
