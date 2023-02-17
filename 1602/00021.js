// Faktor Persekutuan Terbesar

// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. 
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

function fpb(angka1, angka2) {
  // you can only write your code here!
  let divisor = 2;
  let gcd = 1;

  if (angka1 < 2 || angka2 < 2) {
    return 1;
  }

  while (angka1 >= divisor && angka2 >= divisor) {
    if (angka1 % divisor === 0 && angka2 % divisor === 0) {
      gcd = divisor;
    }
    divisor++;
  }

  return gcd;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1