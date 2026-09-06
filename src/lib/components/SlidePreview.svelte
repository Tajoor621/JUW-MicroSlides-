<script>
  import { academicClean } from "../themes/academic-clean.js";
  import sealUrl from "../../assets/logos/juw-seal.png?url";
  import microUrl from "../../assets/logos/microbiology-logo.png?url";

  export let courseTitle = "";
  export let courseCode = "";
  export let preparedBy = "";
  export let department = "DEPARTMENT OF MICROBIOLOGY";

  const theme = academicClean;
</script>

<!--
  This preview approximates the exported .pptx layout using percentage
  positions derived from the same inch coordinates used in
  titleSlide.js (10in x 5.63in slide). It won't be pixel-perfect to
  PowerPoint's renderer, but it should visually match closely enough
  for live editing feedback. See Section F, step 5.
-->
<div
  class="relative w-full aspect-[10/5.63] rounded shadow-lg overflow-hidden"
  style="background-color: #{theme.frameColor}; border: 2px solid #{theme.borderColor};"
>
  <!-- inner white content area -->
  <div
    class="absolute bg-white"
    style="left: 2.5%; top: 4.4%; width: 95%; height: 91.1%;"
  >
    <!-- university seal, top-left -->
    <img
      src={sealUrl}
      alt="Jinnah University for Women seal"
      class="absolute object-contain"
      style="left: 3.5%; top: 6.2%; width: 11%; height: 19.5%;"
    />

    <!-- microbiology logo, top-right -->
    <img
      src={microUrl}
      alt="Department of Microbiology logo"
      class="absolute object-contain"
      style="right: 3.5%; top: 6.2%; width: 11%; height: 19.5%;"
    />

    <!-- accent bar -->
    <div
      class="absolute"
      style="left: 54%; top: 63.1%; width: 5%; height: 1.4%; background-color: #{theme.accentColor};"
    ></div>

    <!-- bottom-right text block -->
    <div
      class="absolute text-right"
      style="left: 45%; top: 65.7%; width: 49%; height: 28.4%; font-family: '{theme.headingFont}', serif; color: #{theme.textDark};"
    >
      <p class="text-base font-medium leading-snug">
        {courseTitle.toUpperCase() || "COURSE TITLE"}
      </p>
      <p class="text-sm leading-snug mt-1">
        {courseCode.toUpperCase() || "COURSE CODE"}
      </p>
      <p class="text-sm leading-snug mt-1">
        PREPARED BY: {preparedBy.toUpperCase() || "NAME"}
      </p>
      <p class="text-sm leading-snug mt-1">
        {department.toUpperCase()}
      </p>
    </div>
  </div>
</div>
