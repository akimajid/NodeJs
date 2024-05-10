// Rumus Luas Persegi
const luasPersegi = (sisi) => {
  return sisi * sisi;
};

// Rumus Keliling Persegi
const kelilingPersegi = (sisi) => {
  return 4 * sisi;
};

// Rumus Luas Persegi Panjang
const luasPersegiPanjang = (panjang, lebar) => {
  return panjang * lebar;
};

// Rumus Keliling Persegi Panjang
const kelilingPersegiPanjang = (panjang, lebar) => {
  return 2 * (panjang + lebar);
};

// Export module
module.exports = {
  luasPersegi,
  kelilingPersegi,
  luasPersegiPanjang,
  kelilingPersegiPanjang,
};
