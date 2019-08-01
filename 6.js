// The sum of the squares of the first ten natural numbers is,

// 1 ** 2 + 2 ** 2 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10) ** 2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const range = n => [...Array(n + 1).keys()];
const seq = range(100);

const sumTheSquares = () => seq.reduce((acc, cur) => acc + cur ** 2);
const squareTheSum = () => seq.reduce((acc, cur) => acc + cur) ** 2;

console.log(squareTheSum() - sumTheSquares());
