// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    minify: true,
    bundle: true,
    noExternal: [/.*/], // This tells tsup to bundle EVERYTHING
});