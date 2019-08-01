// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?
const primes = [];

const isPrime = n => {
  if (n === 2) return true;
  for (i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) return;
  }
  return true;
};

let counter = 2;
while (primes.length < 10001) {
  if (isPrime(counter)) {
    primes.push(counter);
  }
  counter++;
}

console.log(primes[primes.length - 1]);
