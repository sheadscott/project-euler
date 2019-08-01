// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
// let counter = 20;
// const maxNum = 20;
// let found = false;

// while (!found) {
//   for (let i = maxNum; i > 0; i--) {
//     if (counter % i !== 0) {
//       console.log("broke", i);
//       break;
//     } else if (i === 2) {
//       found = true;
//       console.log(counter);
//     }
//   }
//   counter += 20;
// }

let found = false;
const maxNum = 2520;
let counter = 20;

while (!found) {
  for (let i = 19; i > 0; i--) {
    if (counter % i !== 0) {
      console.log("broke", i, counter);
      break;
    } else if (i === 16) {
      found = true;
      console.log(counter);
    }
  }
  counter += maxNum;
  // console.log(counter);
}
