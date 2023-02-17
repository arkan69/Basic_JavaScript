// Mengelompokkan Hewan

// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. 
// Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. 
// Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

function groupAnimals(animals) {
  // you can only write your code here!

  // membuat objek baru untuk menyimpan kelompok hewan
  const groups = {};

  // looping untuk setiap nama hewan pada array
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];

    // menagmbil huruf pertama dari nama hewan
    const firstLetter = animal[0];

    // jika grup untuk nama tertentu belum ada, makan akan dibuat
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }

    // menambahkan nama hewan ke group yang sesuai
    groups[firstLetter].push(animal);
  }

  // mengambl kunci dari objek grup dan digolongkan sesuai alfabet
  const groupKeys = Object.keys(groups).sort();

  // membuat array di dalam array, dimana setiap subarray berisi nama hewan yang dikelompokkan
  const result = [];
  for (let i = 0; i < groupKeys.length; i++) {
    const groupKey = groupKeys[i];
    result.push(groups[groupKey]);
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]