import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace "hello-vite" with the actual repo name
export default defineConfig({
  base: "/news-letter/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
