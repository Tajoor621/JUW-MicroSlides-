import pptxgen from "pptxgenjs";
import { buildTitleSlide } from "./slideLayouts/titleSlide.js";

const SLIDE_W = 10;
const SLIDE_H = 5.63;

/**
 * Phase 1 scope: builds a deck containing only the branded title slide.
 * Phase 2 will loop over deck.slides for the remaining slide types and
 * call applyBranding() on each (see Section F of the project plan).
 */
export async function buildDeck({ courseTitle, courseCode, preparedBy, department }) {
  const pres = new pptxgen();
  pres.defineLayout({ name: "JUW_WIDE", width: SLIDE_W, height: SLIDE_H });
  pres.layout = "JUW_WIDE";

  await buildTitleSlide(pres, { courseTitle, courseCode, preparedBy, department });

  const fileName = `${courseTitle.trim().replace(/\s+/g, "_") || "JUW-Microslides"}.pptx`;
  await pres.writeFile({ fileName });
}
