export function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
export function prime(n: number): number[] {
  if (n < 2) return [];
  const primes: number[] = [];
  const isPrime: boolean[] = Array(1 + n).fill(true);

  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return primes;
}
