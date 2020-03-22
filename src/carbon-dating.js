const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActivityToFloatNumber = parseFloat(sampleActivity, 10);
  if (
    !sampleActivity ||
    typeof sampleActivity !== "string" ||
    sampleActivityToFloatNumber <= 0 ||
    !Number(sampleActivityToFloatNumber) ||
    sampleActivityToFloatNumber >= MODERN_ACTIVITY
  ) {
    return false;
  } else {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / sampleActivityToFloatNumber) /
        (0.693 / HALF_LIFE_PERIOD)
    );
  }
};
