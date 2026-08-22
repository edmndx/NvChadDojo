import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["vim.localhost.com"],
  },
  preview: {
    allowedHosts: ["vim.localhost.com"],
  },
});
