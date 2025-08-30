import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  return {
    // Dev server config
    server: {
      host: "::",
      port: 8080,
      fs: { strict: false },
    },

    // Preview (vite preview)
    preview: {
      port: 8080,
    },

    // Plugins
    plugins: [
      react(),
      mode === "development" && componentTagger(), // only in dev
    ].filter(Boolean),

    // Build config
    build: {
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },

    // Path alias
    resolve: {
      alias: [
        {
          find: /^@\/(.*)$/,
          replacement: path.resolve(__dirname, "src") + "/$1",
        },
      ],
      dedupe: ["react", "react-dom"],
    },

    // Important for SPA routing (fixes /services/... redirect issue on Render/Netlify)
    base: "/", 
  };
});
