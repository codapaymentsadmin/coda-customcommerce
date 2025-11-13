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
	server: {
		watch: {
			ignored: [
				'node_modules/**',
				'**/script.js',
				'**/style.css',
				'**/.git/**',
			]
		}
	},
	build: {
		outDir: "./",
		watch: {
			include: ['assets/**', 'templates/**'],
			exclude: ['node_modules/**', 'script.js', 'style.css'],
		},
		rollupOptions: {
			input: {
				script: "./assets/scripts/index.js",
				style: "./assets/styles/style.css",
			},
			output: {
				entryFileNames: "script.js",
				assetFileNames: "style.css",
			},
		},
	},
});
