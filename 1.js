// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

let total = 0;
let n = 1000000;

while (n > 0) {
  if (n % 3 === 0 || n % 5 === 0) {
    // console.log(n);
    total += n;
  }
  n--;
}

// for (let i = 3; i <= n; i += 3) {
//   // console.log("three: ", i);
//   total += i;
// }

// for (let i = 5; i <= n; i += 5) {
//   // console.log("five", i);
//   if (i % 3 !== 0) {
//     total += i;
//   }
// }

console.log(total);
