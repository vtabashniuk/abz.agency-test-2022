const phoneNumberOutputFormatting = number => {
  const formatted = Array.from(number);
  formatted.splice(3, 0, ' (');
  formatted.splice(7, 0, ') ');
  formatted.splice(11, 0, ' ');
  formatted.splice(14, 0, ' ');
  return formatted.join('');
};

export default phoneNumberOutputFormatting;