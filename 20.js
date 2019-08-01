const factorial = x => {
  if (x > 1) {
    x *= factorial(x - 1n);
  }
  return x;
};

console.log(
  factorial(100n)
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b)
);
