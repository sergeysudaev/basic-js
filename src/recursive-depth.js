module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level = 1;
    arr.forEach(item => {
      if (Array.isArray(item)) {
        level = Math.max(this.calculateDepth(item) + 1, level);
      }
    });
    return level;
  }
};
