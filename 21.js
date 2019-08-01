// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

let counter = 1;
const factors = [];
let amicables = 0;

while (counter <= 10000) {
  let counterFactors = [];
  for (let i = 1; i < Math.sqrt(counter) + 0.001; i++) {
    if (counter % i === 0) {
      counterFactors.push(i + counter / i);
    }
  }
  factors.push([counter, counterFactors.reduce((a, b) => a + b) - counter]);
  counter++;
}

factors.forEach((element, i, arr) => {
  const reversed = [element[1], element[0]];
  if (
    arr[element[1] - 1] &&
    element[1] !== 1 &&
    element[0] !== element[1] &&
    arr[element[1] - 1][1] === reversed[1]
  ) {
    amicables += element[0];
  }
});

console.log(amicables);
