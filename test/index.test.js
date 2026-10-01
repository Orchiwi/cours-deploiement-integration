const { test, describe } = require('node:test');
const assert = require('node:assert');
const { add } = require('../src/index');

describe('Test de la fonction add', () => {
  test('additionne correctement deux nombres', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  test('additionne des nombres négatifs', () => {
    assert.strictEqual(add(-1, -1), -2);
  });
});
