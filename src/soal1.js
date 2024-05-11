const rumus = require("./rumus");

// Penggunaan rumus luas dan keliling persegi
const sisiPersegi = 8;

console.log("Luas Persegi:", rumus.luasPersegi(sisiPersegi));
console.log("Keliling persegi", rumus.kelilingPersegi(sisiPersegi));

// Pengunaan rumus luas dan keliling persegi panjang
const panjangPersegiPanjang = 10;
const lebarPersegiPanjang = 8;

console.log(
  "Luas Persegi Panjang",
  rumus.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)
);
console.log(
  "Keliling Persegi Panjang",
  rumus.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)
);
