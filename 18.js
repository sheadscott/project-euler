// By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

// 3
// 7 4
// 2 4 6
// 8 5 9 3

// That is, 3 + 7 + 4 + 9 = 23.

// Find the maximum total from top to bottom of the triangle below:

// 75
// 95 64
// 17 47 82
// 18 35 87 10
// 20 04 82 47 65
// 19 01 23 75 03 34
// 88 02 77 73 07 63 67
// 99 65 04 28 06 16 70 92
// 41 41 26 56 83 40 80 70 33
// 41 48 72 33 47 32 37 16 94 29
// 53 71 44 65 25 43 91 52 97 51 14
// 70 11 33 28 77 73 17 78 39 68 17 57
// 91 71 52 38 17 14 91 43 58 50 27 29 48
// 63 66 04 68 89 53 67 30 73 16 69 87 40 31
// 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

const pyramidString = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`;

const pyramidArray = pyramidString
  .split("\n")
  .map(a => a.split(" "))
  .map(a => a.map(Number));

// console.log(pyramidArray);

function findLargestSum(arr) {
  index = arr.length - 2;
  while (index > -1) {
    arr[index].forEach(function(n, i) {
      const nextRow = arr[index + 1];
      const higherNum = Math.max(nextRow[i], nextRow[i + 1]);
      arr[index][i] = n + higherNum;
      // console.log(n, i);
    });
    index--;
  }
  return arr[0];
}

console.log(findLargestSum(pyramidArray));

// console.log(pyramidArray);

// function findLargestSum(arr, testIndex, testRows) {
//   let counter = 0;
//   let index = 0;
//   let total = 0;
//   while (counter < testRows) {
//     if (arr[counter].length - 1 < testIndex) {
//       total += arr[counter][arr[counter].length - 1];
//     } else {
//       console.log(arr[counter]);
//       console.log(arr[counter][1], Number.isInteger(arr[counter][1]));
//       total += arr[counter][testIndex];
//       console.log("Total!!", total);
//       // total += arr[counter][testIndex];
//     }
//     console.log("Total, Counter: ", total, counter);
//     counter++;
//   }
//   arr = arr.slice(testRows);
//   console.log(arr);
//   arr.forEach(function(array, i) {
//     if (arr[i + 1]) {
//       // console.log(arr[i + testIndex + 1]);
//       total += array[index];
//       // console.log(total);
//       nextChoice = arr[i + 1].slice(index, index + 2);
//       index = nextChoice[0] > nextChoice[1] ? index : index + 1;
//     } else {
//       total += array[index];
//       console.log(total);
//     }
//   });

//   return total;
// }

// const totalArray = [];
// for (let i = 0; i < 15; i++) {
//   for (let j = 0; j < 15; j++) {
//     totalArray.push(findLargestSum(pyramidArray, j, i));
//   }
//   // totalArray.push(findLargestSum(pyramidArray, 0, i));
// }
// console.log(Math.max(...totalArray));
// function findLargestSum(arr) {
//   let index = 0;
//   let total = 0;
//   arr.forEach(function(array, i) {
//     if (arr[i + 2]) {
//       total += array[index];
//       // Get the two adjacent numbers from the row below
//       const nextChoice = arr[i + 1].slice(index, index + 2);
//       const secondNextChoice = arr[i + 2].slice(index, index + 3);
//       const path1a = nextChoice[0] + secondNextChoice[0];
//       const path1b = nextChoice[0] + secondNextChoice[1];
//       const path2a = nextChoice[1] + secondNextChoice[1];
//       const path2b = nextChoice[1] + secondNextChoice[2];
//       const path1 = path1a > path1b ? path1a : path1b;
//       const path2 = path2a > path2b ? path2a : path2b;
//       index = path1 > path2 ? 0 : 1;
//       console.log(path1, path2, nextChoice[0], nextChoice[1], index);
//     } else
//     if (arr[i + 1]) {
//       total += array[index];
//       nextChoice = arr[i + 1].slice(index, index + 2);
//       index = nextChoice[0] > nextChoice[1] ? index : index + 1;
//     } else {
//       total += array[index];
//       console.log(total);
//     }
//   });

//   return total;
// }
