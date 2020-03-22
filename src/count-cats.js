module.exports = function countCats(backyard) {
  return backyard.reduce((resultAcc, firstDimension) => {
    return (
      firstDimension.reduce((acc, secondDimension) => {
        return secondDimension === "^^" ? acc + 1 : acc;
      }, 0) + resultAcc
    );
  }, 0);
};
