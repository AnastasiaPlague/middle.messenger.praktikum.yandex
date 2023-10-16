import { defineConfig } from "vite";
import path from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      pages: path.resolve(__dirname, "./src/pages"),
      const: path.resolve(__dirname, "./src/const"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [handlebars()],
});
