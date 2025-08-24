import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwind from "tailwindcss";

import { VitePWA } from "vite-plugin-pwa";

// Add PWA configuration
const pwaConfig = {
  registerType: "autoUpdate",
  includeAssets: ["logo-color.svg"],
  workbox: {
    globPatterns: ["**/*.{js,css,html,png,jpg,gif,svg}"], // Include your asset types
    navigateFallback: "/", // The fallback for client-side routing
    navigateFallbackAllowlist: [/^(?!\/__).*/], // Allowlist for navigateFallback
    runtimeCaching: [
      {
        urlPattern: /\.(png|jpg|gif|svg)$/, // Define the regex pattern for your assets
        handler: "StaleWhileRevalidate", // Caching strategy
      },
    ],
  },
  manifest: {
    name: "Shopo",
    short_name: "Shopo",
    description: "Shopo",
    start_url: "/",
    display: "standalone",
    background_color: "#FFBB38",
    theme_color: "#FFBB38",
    icons: [
      {
        src: "/192.png",
        sizes: "192x192",
        purpose: "any maskable",
      },
      {
        src: "/512.png",
        sizes: "512x512",
        purpose: "maskable any",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), VitePWA(pwaConfig), tailwind()],
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
});
