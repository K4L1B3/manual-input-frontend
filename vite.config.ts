import react from "@vitejs/plugin-react";
import path from "path";
import type { ResolvedConfig, UserConfigExport } from "vite";
import { defineConfig, loadEnv } from "vite";
// https://vitejs.dev/config/
export default (config: ResolvedConfig): UserConfigExport => {
  process.env = Object.assign(
    process.env,
    loadEnv(config.mode, process.cwd(), ""),
  );

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: Number(process.env.VITE_PORT) || 5173,
    },
  });
};
