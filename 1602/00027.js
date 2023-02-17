// Tukar Besar Kecil

// Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. 
// Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  let result = '';
  for (let i = 0; i < kalimat.length; i++) {
    let charCode = kalimat.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letter
      result += String.fromCharCode(charCode + 32);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letter
      result += String.fromCharCode(charCode - 32);
    } else {
      // Non-letter character
      result += kalimat[i];
    }
  }
  return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"