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
      services: path.resolve(__dirname, "./src/services/"),
      hocs: path.resolve(__dirname, "./src/hocs"),
      controllers: path.resolve(__dirname, "./src/controllers"),
      api: path.resolve(__dirname, "./src/api"),
    },
  },
  plugins: [handlebars()],
});
