import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use root base in development so `npm run dev` serves at `/` locally.
  // Use the repo path when building for production so GitHub Pages serves assets correctly.
  base: mode === 'development' ? '/' : '/SA-Driving-Website---Ram-K-Leo-S-Arnav-C/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
