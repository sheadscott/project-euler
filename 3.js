// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const isPrime = n => {
  for (i = 2; i < n; i++) {
    if (n % i === 0) return;
  }
  return true;
};

// const findLargestPrimeFactor = n => {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0 && isPrime(n / i)) {
//       return n / i;
//     }
//   }
// };

const findLargestPrimeFactor = n => {
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      n = n / i;
      console.log(i, n);
      if (n === 1) {
        return i;
      }
    }
  }
};

console.log(findLargestPrimeFactor(600851475143));
