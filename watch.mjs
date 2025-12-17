import { watch } from "fs";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

let building = false;
let queued = false;

async function build() {
	if (building) {
		queued = true;
		return;
	}

	building = true;
	console.log("\x1b[36m[watch]\x1b[0m Building...");

	try {
		await execAsync("vite build");
		console.log("\x1b[32m[watch]\x1b[0m Build complete!");
	} catch (error) {
		console.error("\x1b[31m[watch]\x1b[0m Build failed:", error.message);
	}

	building = false;

	if (queued) {
		queued = false;
		build();
	}
}

// Watch directories
const watchDirs = ["./assets/scripts", "./assets/styles"];

console.log("\x1b[36m[watch]\x1b[0m Watching for changes...");
console.log(
	"\x1b[90m" + watchDirs.map((d) => `  - ${d}`).join("\n") + "\x1b[0m"
);

// Initial build
build();

// Watch for changes
watchDirs.forEach((dir) => {
	watch(dir, { recursive: true }, (eventType, filename) => {
		if (filename) {
			console.log(
				`\x1b[33m[watch]\x1b[0m ${eventType}: ${dir}/${filename}`
			);
			build();
		}
	});
});
