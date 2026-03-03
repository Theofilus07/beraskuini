export function getWhatsAppLink(message?: string) {
  const phone = "6285117704082";
  const baseUrl = `https://wa.me/${phone}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}
