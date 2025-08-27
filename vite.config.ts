import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  console.log("Vite mode:", mode); // Optional: check build mode

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      // Only run componentTagger in development
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    build: {
      outDir: "dist",      // Ensure deployment looks here
      emptyOutDir: true,   // Clear old builds before building
      sourcemap: false,    // Optional: set true if you need source maps
      rollupOptions: {
        // Optional: fine-tune output if needed
        output: {
          manualChunks: undefined,
        },
      },
    },
    resolve: {
      alias: [
        {
          find: /^@\/(.*)$/,
          replacement: path.resolve(__dirname, "src") + "/$1",
        },
      ],
    },
  };
});
