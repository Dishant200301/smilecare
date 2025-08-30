import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080,
      fs: { strict: false }
    },
    preview: {
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    build: {
      outDir: "dist",
      emptyOutDir: true,
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
