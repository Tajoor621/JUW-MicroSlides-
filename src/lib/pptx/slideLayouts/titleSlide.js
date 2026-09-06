import { toBase64 } from "../loadAsset.js";
import { academicClean } from "../../themes/academic-clean.js";
import sealUrl from "../../../assets/logos/juw-seal.png?url";
import microUrl from "../../../assets/logos/microbiology-logo.png?url";

const SLIDE_W = 10;
const SLIDE_H = 5.63;

/**
 * Builds the fixed branded title slide. Logo placement, border, and
 * accent bar are NEVER exposed to the theme/font pickers or to any
 * AI-generated content — only the four text fields vary.
 */
export async function buildTitleSlide(pres, data) {
  const theme = academicClean; // Phase 1: only theme implemented
  const slide = pres.addSlide();

  const sealData = await toBase64(sealUrl);
  const microData = await toBase64(microUrl);

  slide.background = { color: theme.frameColor };

  // Reddish-brown outer border
  slide.addShape("rect", {
    x: 0.05,
    y: 0.05,
    w: SLIDE_W - 0.1,
    h: SLIDE_H - 0.1,
    fill: { type: "none" },
    line: { color: theme.borderColor, width: 3 },
  });

  // Inner white content area
  slide.addShape("rect", {
    x: 0.25,
    y: 0.25,
    w: SLIDE_W - 0.5,
    h: SLIDE_H - 0.5,
    fill: { color: theme.white },
    line: { type: "none" },
  });

  // University seal — top-left
  slide.addImage({
    data: sealData,
    x: 0.35,
    y: 0.35,
    w: 1.1,
    h: 1.1,
  });

  // Department microscope logo — top-right
  slide.addImage({
    data: microData,
    x: SLIDE_W - 1.45,
    y: 0.35,
    w: 1.1,
    h: 1.1,
  });

  // Accent bar above the text block
  slide.addShape("rect", {
    x: 5.4,
    y: 3.55,
    w: 0.5,
    h: 0.08,
    fill: { color: theme.accentColor },
    line: { type: "none" },
  });

  const lines = [
    { text: data.courseTitle.toUpperCase(), size: 16 },
    { text: data.courseCode.toUpperCase(), size: 13 },
    { text: `PREPARED BY: ${data.preparedBy.toUpperCase()}`, size: 13 },
    { text: (data.department || "DEPARTMENT OF MICROBIOLOGY").toUpperCase(), size: 13 },
  ];

  slide.addText(
    lines.map((line, i) => ({
      text: line.text,
      options: {
        breakLine: true,
        fontSize: line.size,
        color: theme.textDark,
        fontFace: theme.headingFont,
        align: "right",
      },
    })),
    { x: 4.5, y: 3.7, w: 4.9, h: 1.6, valign: "top" }
  );

  return slide;
}
