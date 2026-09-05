// Fetches a LOCAL bundled asset (never an external URL) and converts it
// to a base64 data URI. This is required so exported .pptx files embed
// the logos correctly and the app keeps working fully offline once
// installed — see Section H of the project plan.
export async function toBase64(assetPath) {
  const res = await fetch(assetPath);
  if (!res.ok) {
    throw new Error(`Could not load bundled asset: ${assetPath}`);
  }
  const blob = await res.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
