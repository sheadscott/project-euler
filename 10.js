// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const isPrime = n => {
  if (n === 2) return true;
  for (i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) return;
  }
  return true;
};

function sumPrimesBelow(limit) {
  let acc = 0;

  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) {
      acc += i;
    }
  }
  return acc;
}

console.log(sumPrimesBelow(2000000));
