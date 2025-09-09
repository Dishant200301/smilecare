// vite.config.ts
import { defineConfig } from "file:///D:/Project/my-app/tayzeniq/zenlight-clone-site/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Project/my-app/tayzeniq/zenlight-clone-site/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "file:///D:/Project/my-app/tayzeniq/zenlight-clone-site/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/Project/my-app/tayzeniq/zenlight-clone-site/vite.config.ts";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = path.dirname(__filename);
var vite_config_default = defineConfig(({ mode }) => {
  return {
    // Dev server config
    server: {
      host: "::",
      port: 8080,
      fs: { strict: false }
    },
    // Preview (vite preview)
    preview: {
      port: 8080
    },
    // Plugins
    plugins: [
      react(),
      mode === "development" && componentTagger()
      // only in dev
    ].filter(Boolean),
    // Build config
    build: {
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: void 0
        }
      }
    },
    // Path alias
    resolve: {
      alias: [
        {
          find: /^@\/(.*)$/,
          replacement: path.resolve(__dirname, "src") + "/$1"
        }
      ],
      dedupe: ["react", "react-dom"]
    },
    // Important for SPA routing (fixes /services/... redirect issue on Render/Netlify)
    base: "/"
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0XFxcXG15LWFwcFxcXFx0YXl6ZW5pcVxcXFx6ZW5saWdodC1jbG9uZS1zaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0XFxcXG15LWFwcFxcXFx0YXl6ZW5pcVxcXFx6ZW5saWdodC1jbG9uZS1zaXRlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0L215LWFwcC90YXl6ZW5pcS96ZW5saWdodC1jbG9uZS1zaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJ1cmxcIjtcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xuXG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgX19kaXJuYW1lID0gcGF0aC5kaXJuYW1lKF9fZmlsZW5hbWUpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgLy8gRGV2IHNlcnZlciBjb25maWdcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6IFwiOjpcIixcbiAgICAgIHBvcnQ6IDgwODAsXG4gICAgICBmczogeyBzdHJpY3Q6IGZhbHNlIH0sXG4gICAgfSxcblxuICAgIC8vIFByZXZpZXcgKHZpdGUgcHJldmlldylcbiAgICBwcmV2aWV3OiB7XG4gICAgICBwb3J0OiA4MDgwLFxuICAgIH0sXG5cbiAgICAvLyBQbHVnaW5zXG4gICAgcGx1Z2luczogW1xuICAgICAgcmVhY3QoKSxcbiAgICAgIG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiBjb21wb25lbnRUYWdnZXIoKSwgLy8gb25seSBpbiBkZXZcbiAgICBdLmZpbHRlcihCb29sZWFuKSxcblxuICAgIC8vIEJ1aWxkIGNvbmZpZ1xuICAgIGJ1aWxkOiB7XG4gICAgICBvdXREaXI6IFwiZGlzdFwiLFxuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBtYW51YWxDaHVua3M6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIFBhdGggYWxpYXNcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczogW1xuICAgICAgICB7XG4gICAgICAgICAgZmluZDogL15AXFwvKC4qKSQvLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSArIFwiLyQxXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZGVkdXBlOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcbiAgICB9LFxuXG4gICAgLy8gSW1wb3J0YW50IGZvciBTUEEgcm91dGluZyAoZml4ZXMgL3NlcnZpY2VzLy4uLiByZWRpcmVjdCBpc3N1ZSBvbiBSZW5kZXIvTmV0bGlmeSlcbiAgICBiYXNlOiBcIi9cIiwgXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1UsU0FBUyxvQkFBb0I7QUFDblcsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHVCQUF1QjtBQUo2SyxJQUFNLDJDQUEyQztBQU05UCxJQUFNLGFBQWEsY0FBYyx3Q0FBZTtBQUNoRCxJQUFNLFlBQVksS0FBSyxRQUFRLFVBQVU7QUFFekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsU0FBTztBQUFBO0FBQUEsSUFFTCxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixJQUFJLEVBQUUsUUFBUSxNQUFNO0FBQUEsSUFDdEI7QUFBQTtBQUFBLElBR0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQTtBQUFBLElBR0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUyxpQkFBaUIsZ0JBQWdCO0FBQUE7QUFBQSxJQUM1QyxFQUFFLE9BQU8sT0FBTztBQUFBO0FBQUEsSUFHaEIsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ04sY0FBYztBQUFBLFFBQ2hCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBR0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWEsS0FBSyxRQUFRLFdBQVcsS0FBSyxJQUFJO0FBQUEsUUFDaEQ7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQUEsSUFDL0I7QUFBQTtBQUFBLElBR0EsTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
