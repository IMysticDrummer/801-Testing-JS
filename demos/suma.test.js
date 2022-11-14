const suma = require('./suma');

describe('test de la función suma con valores positivos', () => {
  test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
  });

  test('sumar 0 + 0 debe ser 0', () => {
    expect(suma(0, 0)).toBe(0);
  });
});

describe('test de la función suma con valores negaticos', () => {
  test('sumar -1 + -1 es igual a -2', () => {
    expect(suma(-1, -1)).toBe(-2);
  });

  describe('test de la función suma con valores negaticos muy grandes', () => {
    test('sumar -10000000 + -10000000 es igual a -20000000', () => {
      expect(suma(-10000000, -10000000)).toBe(-20000000);
    });
  });
});
