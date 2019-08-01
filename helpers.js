export const isPrime = n => {
  if (n === 2) return true;
  for (i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) return;
  }
  return true;
};
