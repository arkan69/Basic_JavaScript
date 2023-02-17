// Check AB

// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
// function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
// Jika tidak ditemukan sama sekali, kembalikan nilai false.

function checkAB(num) {
  // you can only write your code here!
  let aIndex = -1;
  let bIndex = -1;
  let distance = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === 'a') {
      aIndex = i;
      if (bIndex !== -1) {
        distance = aIndex - bIndex;
      }
    }
    else if (num[i] === 'b') {
      bIndex = i;
      if (aIndex !== -1) {
        distance = bIndex - aIndex;
      }
    }

    if (distance >= 3) {
      return true;
    }
  }

  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false