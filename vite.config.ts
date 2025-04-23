import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import path from "path";

// Async plugin setup
export default defineConfig(async () => {
  const plugins = [
    react(),
    themePlugin(),
    runtimeErrorOverlay(),
  ];

  // Enable cartographer only on Replit in dev
  if (
    process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
  ) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer());
  }

  return {
    root: path.resolve(__dirname, "client"), // Vite's root is /client
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    build: {
      outDir: path.resolve(__dirname, "dist/client"), // Output to dist/client
      emptyOutDir: true,
    },
    // You can remove `middlewareMode` in production builds
    server: {
      fs: {
        allow: ["."],
      },
    },
  };
});
