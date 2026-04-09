// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm", "cjs"],
	dts: true,
	minify: true,
	bundle: true,
	clean: true,
	outExtension({ format }) {
		return {
			js: format === "cjs" ? ".cjs" : ".js",
		};
	},
	noExternal: [/.*/], // Bundle all runtime dependencies for a single-file entry.
});
