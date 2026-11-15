function tambah(a, b) {
  return a + b; // fix
}

function hitungDiskon(harga, persenDiskon) {
  if (persenDiskon < 0 || persenDiskon > 100) {
    throw new Error("Persentase diskon tidak valid");
  }
  return harga - (harga * persenDiskon) / 100;
}

module.exports = { tambah, hitungDiskon };