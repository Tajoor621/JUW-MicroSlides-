import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// "./" (relative base) means this build works correctly no matter what
// your GitHub repo is named or renamed to, and regardless of trailing
// characters — there is no longer a string here that needs to match
// your repo name. Logo assets are imported via Vite's ?url mechanism
// (see titleSlide.js and SlidePreview.svelte) so they resolve correctly
// under this base automatically, with no manual path-building needed.
export default defineConfig({
  base: "./",
  plugins: [svelte()],
});
