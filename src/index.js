module.exports = function solveEquation(equation) {
  // your implementation
  let valuetArray = equation.match(/-?\s?\d+/g);;
  let a = parseInt(valuetArray[0]);
  let b = parseInt(valuetArray[2].replace(' ', ''));
  let c = parseInt(valuetArray[3].replace(' ', ''));
  let resultArray = [];
  resultArray[0] = Math.round((-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a));
  resultArray[1] = Math.round((-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a));
  return resultArray.sort((left, right) => {return left - right});
}
