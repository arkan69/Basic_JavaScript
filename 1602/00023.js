// Ubah Huruf

// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
// Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. 
// Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

function ubahHuruf(kata) {
  // you can only write your code here!
  let result = '';
  for (let i = 0; i < kata.length; i++) {
    let charCode = kata.charCodeAt(i);
    if (charCode === 122) {
      // 'z' should be replaced with 'a'
      charCode = 97;
    } else {
      // add 1 to the character code to get the next letter
      charCode++;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu