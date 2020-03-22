module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsCount = Math.pow(2, disksNumber) - 1;
  return {
    turns: turnsCount,
    seconds: turnsCount / (turnsSpeed / 3600)
  };
};
