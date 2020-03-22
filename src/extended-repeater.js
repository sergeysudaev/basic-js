module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|"
  } = options;
  const additionArray = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    additionArray.push(String(addition));
  }
  let additionsWithSeparator = additionArray.join(additionSeparator);
  const result = [];
  for (let i = 0; i < repeatTimes; i++) {
    result.push(String(str) + additionsWithSeparator);
  }
  return result.join(separator);
};
