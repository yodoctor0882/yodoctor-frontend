import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "VITE_API_URL", 
  },
});