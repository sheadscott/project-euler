// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
const abundantNumbers = [];
let abundantSums = [];

const getFactorsOf = n => {
  let factors = 0;
  for (let i = 1; i < n; i++) {
    // console.log(n, i);
    if (n % i === 0) {
      // console.log("factor: ", i);
      factors += i;
    }
  }
  return factors;
};

const findAbundant = n => (getFactorsOf(n) > n ? n : null);

for (let i = 1; i < 28123; i++) {
  if (findAbundant(i)) abundantNumbers.push(i);
}

for (let i = 0; i < abundantNumbers.length; i++) {
  for (let j = 0; j < abundantNumbers.length; j++) {
    let sum = abundantNumbers[i] + abundantNumbers[j];
    if (sum < 28124) {
      // console.log(abundantSums.indexOf(sum));
      abundantSums.push(sum);
    }
  }
}

abundantSums = [...new Set(abundantSums)];

let notSumOfAbundant = 0;
let counter = 1;

while (counter < 28124) {
  if (abundantSums.indexOf(counter) < 0) {
    notSumOfAbundant += counter;
  }
  counter++;
}

console.log(notSumOfAbundant);

// console.log(abundantSums);

// for (i = 1; i < 10; i++) {
//   console.log(abundantSums[abundantSums.length - i]);
// }

// console.log(abundantSums.length);
// abundantNumbers.forEach(n => {
//   if (n % 2) console.log(n);
// });
// for (i = 0; i < 10; i++) {
//   abundantSums.sort((a, b) => a - b);
//   console.log(abundantSums[i]);
// }
