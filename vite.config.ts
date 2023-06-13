import path from "path";

import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from 'vite-plugin-pwa'
import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    // VitePWA({
    //   srcDir: 'src',
    //   filename: 'sw.js',
    //   registerType: 'autoUpdate',
    //   injectRegister: 'script',
    //   workbox: {
    //     globPatterns: ["**/*"],
    //   },
    //   includeAssets: [
    //     "**/*",
    //   ],
    //   manifest: {
    //     "theme_color": "#f69435",
    //     "background_color": "#f69435",
    //     "display": "standalone",
    //     "scope": "/",
    //     "start_url": "/",
    //     "short_name": "Vite PWA",
    //     "description": "Vite PWA Demo",
    //     "name": "Vite PWA",
    //   },
    // })
  ],
  resolve: {
      alias: [
      {
        find: "~",
        replacement: path.resolve(path.resolve(__dirname), "src"),
      },
    ]
  }
});
