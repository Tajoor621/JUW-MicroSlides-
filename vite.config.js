import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// NOTE: "base" must match your GitHub repo name EXACTLY, including case —
// GitHub Pages URLs are case-sensitive path segments. Repo: JUW-MicroSlides
// If you ever rename the repo, update this string to match.
export default defineConfig({
  base: "/JUW-MicroSlides/",
  plugins: [svelte()],
});
