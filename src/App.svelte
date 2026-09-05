<script>
  import TopicInput from "./lib/components/TopicInput.svelte";
  import SlidePreview from "./lib/components/SlidePreview.svelte";
  import { buildDeck } from "./lib/pptx/buildDeck.js";

  let courseTitle = "Microbial Enzyme Technology";
  let courseCode = "MIC-4511";
  let preparedBy = "Ms. Noor";
  let department = "DEPARTMENT OF MICROBIOLOGY";

  let exporting = false;
  let exportError = "";

  async function handleExport() {
    exporting = true;
    exportError = "";
    try {
      await buildDeck({ courseTitle, courseCode, preparedBy, department });
    } catch (err) {
      console.error(err);
      exportError = "Export failed — check the browser console for details.";
    } finally {
      exporting = false;
    }
  }
</script>

<main class="min-h-screen bg-gray-100 py-8 px-4">
  <div class="max-w-5xl mx-auto">
    <header class="mb-6">
      <h1 class="text-2xl font-semibold text-gray-800">JUW-Microslides</h1>
      <p class="text-sm text-gray-500">
        Phase 1 MVP — branded title slide, live preview, and PPTX export
      </p>
    </header>

    <div class="grid md:grid-cols-2 gap-6">
      <TopicInput bind:courseTitle bind:courseCode bind:preparedBy bind:department />

      <div class="space-y-4">
        <SlidePreview {courseTitle} {courseCode} {preparedBy} {department} />

        <button
          on:click={handleExport}
          disabled={exporting}
          class="w-full bg-[#8B4A3B] hover:bg-[#733D30] disabled:opacity-50 text-white font-medium py-2.5 rounded shadow"
        >
          {exporting ? "Building .pptx…" : "Export .pptx"}
        </button>

        {#if exportError}
          <p class="text-sm text-red-600">{exportError}</p>
        {/if}
      </div>
    </div>
  </div>
</main>
