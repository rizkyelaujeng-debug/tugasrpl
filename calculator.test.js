const test = require('node:test');
const assert = require('node:assert');
const { tambah, hitungDiskon } = require('./calculator');

test('Pengujian fungsi tambah', () => {
  assert.strictEqual(tambah(2, 3), 5);
});

test('Pengujian fungsi hitungDiskon', () => {
  assert.strictEqual(hitungDiskon(100000, 20), 80000);
});