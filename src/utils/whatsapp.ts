export const WA_NUMBER = "6285117704082";
export const WA_DEFAULT_MSG = "Halo Admin Beraskuini, saya ingin pesan beras.";

export const getWhatsAppLink = (message: string = WA_DEFAULT_MSG) => {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
};
