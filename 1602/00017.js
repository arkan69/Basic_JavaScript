// Target Terdekat

// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
// Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
// Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

function targetTerdekat(arr) {
  // you can only write your code here!
  var i = 0;
  var xIndices = [];
  var oIndex = -1;
  
  while (i < arr.length) {
    if (arr[i] === 'x') {
      xIndices.push(i);
    } else if (arr[i] === 'o') {
      oIndex = i;
    }
    i++;
  }
  
  if (oIndex === -1 || xIndices.length === 0) {
    return 0;
  }
  
  var closestDistance = 1000000;
  for (i = 0; i < xIndices.length; i++) {
    var distance = xIndices[i] - oIndex;
    if (distance < 0) {
      distance = -distance;
    }
    if (distance < closestDistance) {
      closestDistance = distance;
    }
  }
  
  return closestDistance;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2