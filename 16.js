// Uses Javascript's Bigint primitive type which is
// denoted by the n at the end of the integers

function powerNR(base, exp) {
  var result = 1n;
  while (exp--) {
    result *= base;
  }
  return result;
}

const powerDigitSum = powerNR(2n, 1000n)
  .toString()
  .split("")
  .map(Number)
  .reduce((av, cv) => av + cv, 0);

console.log(powerDigitSum);
