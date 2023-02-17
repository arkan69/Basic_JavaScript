// Angka Prima

// Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. 
// Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.

function angkaPrima(angka) {
  // you can only write your code here!
  if (angka < 2) {
    return false;
  }
  
  // Check if the angkaber is 2 or 3
  if (angka === 2 || angka === 3) {
    return true;
  }
  
  // Check if the angkaber is divisible by 2 or 3
  if (angka % 2 === 0 || angka % 3 === 0) {
    return false;
  }
  
  // Check if the angkaber is divisible by any angkaber up to its square root
  for (let i = 5; i <= Math.sqrt(angka); i += 6) {
    if (angka % i === 0 || angka % (i + 2) === 0) {
      return false;
    }
  }
  
  // If the angkaber passes all the above tests, it's prime
  return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false