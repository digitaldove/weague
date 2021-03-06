import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import fontPlugin from "vite-plugin-fonts";

export default defineConfig({
  resolve: {
    alias: [{ find: "src", replacement: "/src" }],
  },
  plugins: [
    solidPlugin(),
    fontPlugin({
      google: {
        preconnect: true,
        families: ["Lexend"],
      },
    }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
