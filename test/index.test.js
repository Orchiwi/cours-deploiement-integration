const { test, describe } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { add } = require('../src/index');

describe('Test de la fonction add', () => {
  test('additionne correctement deux nombres', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  test('additionne des nombres négatifs', () => {
    assert.strictEqual(add(-1, -1), -2);
  });

  test('dist/index.js est valide si présent', () => {
    const distPath = path.join(__dirname, '../dist/index.js');
    if (fs.existsSync(distPath)) {
      const distModule = require(distPath);
      assert.strictEqual(typeof distModule.add, 'function');
      assert.strictEqual(distModule.add(10, 20), 30);
    }
  });
});
