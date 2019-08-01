// function factorial(num) {
//   if (num < 0) return -1;
//   else if (num == 0) return 1;
//   else {
//     return num * factorial(num - 1);
//   }
// }

const factorial = x => {
  if (x > 1) {
    x *= factorial(x - 1);
  }
  return x;
};

function getNumberOfRoutes(gridSize) {
  return factorial(gridSize * 2) / (factorial(gridSize) * factorial(gridSize));
}

console.log(getNumberOfRoutes(20));
