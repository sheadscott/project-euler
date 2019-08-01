// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// const isPalindrome = n => {
//   const a = n.toString().split("");
//   const halfway = Math.floor(a.length / 2);
//   const front = a.slice(0, halfway).join("");
//   const back = a
//     .slice(-halfway)
//     .reverse()
//     .join("");
//   return front === back;
// };

const palindromes = [];

const findLargestPalindrome = counterStart => {
  const isPalindrome = value =>
    value
      .split("")
      .reverse()
      .join("") === value;
  let counter = counterStart;

  while (counter > 0) {
    for (let i = counter; i > 1; i--) {
      const product = i * counter;
      if (product === 906609) console.log(i, counter);
      if (isPalindrome(product.toString())) {
        // console.log(product, i, counter);
        palindromes.push(product);
      }
    }
    counter--;
  }

  return Math.max(...palindromes);
};

console.log(findLargestPalindrome(999));

// https://projecteuler.net/thread=4&page=8#322246
// felipe.saggion
//My solution
// function problem4() {
//   const isPalindrome = (value) => value.split('').reverse().join('') === value;
//   let largest = -1;
//   let value;
//   for (let i = 0; i <= 999; i++) {
//       for (let j = 0; j <= 999; j++) {
//           value = i * j;
//           if (isPalindrome(value.toString()) && value > largest) {
//               largest = value;
//           }
//       }
//   }
//   return largest;
// }
