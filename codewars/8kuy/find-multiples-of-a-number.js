// DESCRIPTION:

//SOLUTION:
function findMultiples(integer, limit) {
  let arr = [];
  if (integer < limit && integer > 0) {
    if (limit % integer === 0) {
      let tempResult = limit / integer;
      for (let i = 1; i < tempResult + 1; i++) {
        arr.push(i * integer);
      }
    } else if (limit % integer !== 0) {
      let calcRemainder = limit % integer;
      let result = (limit - calcRemainder) / integer;
      for (let i = 1; i < result + 1; i++) {
        arr.push(i * integer);
      }
    }
  }
  return arr;
}
