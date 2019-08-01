// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// Find number sets whose sums == 1000

function euler9() {
  for (let a = 1; a < 1000; a++) {
    for (let b = 2; b < 1000; b++) {
      for (let c = 3; c < 1000; c++) {
        if (a + b + c === 1000 && a ** 2 + b ** 2 === c ** 2) {
          return [a, b, c];
        }
      }
    }
  }
}

const euler9Revised = n => {
  for (let a = 1; a < n; a++) {
    for (let b = 2; b < n; b++) {
      c = Math.sqrt(a ** 2 + b ** 2);
      // console.log(a, b, c);
      if (a + b + c === 1000) {
        return [a, b, c];
      }
    }
  }
};

// console.log(euler9Revised(1000).reduce((av, cv) => av * cv));
console.log(euler9().reduce((av, cv) => av * cv));
