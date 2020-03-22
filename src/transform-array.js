module.exports = function transform(arr) {
  let result = [];
  try {
    arr.forEach((item, index) => {
      switch (item) {
        case "--discard-next":
          if (index < arr.length - 1) {
            arr.shift();
          }
          break;
        case "--discard-prev":
          if (result.length) {
            result.pop();
          }
          break;
        case "--double-next":
          if (index < arr.length - 1) {
            result.push(arr[index + 1]);
          }
          break;
        case "--double-prev":
          if (index > 0) {
            result.push(arr[index - 1]);
          }
          break;
        default:
          result.push(item);
      }
    });
    return result;
  } catch (e) {
    throw new Error();
  }
};
