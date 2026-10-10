import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Run on port 3000 so it matches the CORS setting in the backend
export default defineConfig({ plugins: [react()], server: { port: 3000 } });
