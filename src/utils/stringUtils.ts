export const formatPhoneNumber = (input: string) => {
  const digitsOnly = input.replace(/\D/g, "");

  let formatted = "";
  if (digitsOnly.length > 0) {
    formatted += "+" + digitsOnly.substring(0, 2);
    if (digitsOnly.length > 2) {
      formatted += " " + digitsOnly.substring(2, 4);
    }
    if (digitsOnly.length > 4) {
      formatted += " " + digitsOnly.substring(4, 7);
    }
    if (digitsOnly.length > 7) {
      formatted += " " + digitsOnly.substring(7, 11);
    }
  }

  return formatted;
};
