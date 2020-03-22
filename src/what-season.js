module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (date instanceof Date && !date.hasOwnProperty("getMonth")) {
    const month = date.getMonth();
    if (month < 2 || month === 11) {
      return "winter";
    } else if (month >= 2 && month < 5) {
      return "spring";
    } else if (month >= 5 && month < 8) {
      return "summer";
    } else if (month >= 8 && month < 11) {
      return "autumn";
    }
  } else {
    throw new Error();
  }
};
