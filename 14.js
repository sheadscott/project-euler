// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.
function collatz(n) {
  let i = 1;
  // 3(1) + 1 = 4 / 2 = 2 / 2 = 1
  if (n === 1) return 4;
  while (n != 1) {
    n = n % 2 ? 3 * n + 1 : n / 2;
    i++;
  }
  return i;
}
function euler14() {
  let counter = 1;
  let longestChain = [0, 0];
  while (counter < 1000000) {
    let terms = collatz(counter);
    // console.log(terms);
    if (terms > longestChain[0]) {
      longestChain = [terms, counter];
    }
    counter++;
  }
  return longestChain;
}

// console.log(collatz());
console.log(euler14());

const range = (n, predicate = i => i) => {
  if (!n instanceof Number) return [];
  return [...Array(n).keys()].filter(i => predicate(i));
};
