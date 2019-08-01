// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

function negi(arr, index) {
  const length = arr.length;
  if (Math.abs(index) >= length) {
    index = index % length;
  }
  return index < 0 ? arr[length + index] : arr[index];
}

const isLeap = year => year % 400 === 0 || (year % 4 === 0 && year % 100 != 0);

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let year = 1900;
let day = 0;
let sundays = 0;

while (year < 2001) {
  months[1] = isLeap(year) ? 29 : 28;
  for (let i = 0; i < months.length; i++) {
    // console.log("This month starts on: ", negi(days, day));
    if (year > 1900 && negi(days, day) === "Sunday") sundays++;
    remainder = months[i] % 7;
    day += remainder;
  }

  year++;
}

console.log(sundays);
