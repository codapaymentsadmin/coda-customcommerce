import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";
import postcssNested from "postcss-nested";

export default defineConfig({
	plugins: [tailwindcss()],
	css: {
		postcss: {
			plugins: [autoprefixer(), postcssNested()],
		},
	},
	build: {
		outDir: "./",
		rollupOptions: {
			input: {
				script: "./assets/scripts/global.js",
				style: "./assets/styles/style.css",
			},
			output: {
				entryFileNames: "script.js",
				assetFileNames: "style.css",
			},
			watch: {
				exclude: ["script.js", "style.css", "node_modules/**"],
				skipWrite: false,
			},
		},
	},
	server: {
		watch: {
			ignored: ["**/script.js", "**/style.css", "**/node_modules/**"],
		},
	},
});
