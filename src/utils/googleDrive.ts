/**
 * Converts a Google Drive sharing link or ID into a direct image source URL.
 * Supports standard sharing links and direct IDs.
 */
export function getGoogleDriveDirectLink(linkOrId: string): string {
  if (!linkOrId) return "";
  
  // If it's already a direct link or a local path, return as is
  if (linkOrId.startsWith("/") || linkOrId.startsWith("http") && !linkOrId.includes("drive.google.com")) {
    return linkOrId;
  }

  // Extract ID from various Google Drive link formats
  const idMatch = linkOrId.match(/(?:id=|\/d\/|file\/d\/)([\w-]+)/);
  const id = idMatch ? idMatch[1] : linkOrId;

  // Return the direct link format that works best for <img> tags
  return `https://lh3.googleusercontent.com/d/${id}`;
}
