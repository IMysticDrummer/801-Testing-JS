const suma = require('./suma');

describe('test de la función suma', () => {
  test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
  });

  test('sumar 0 + 0 debe ser 0', () => {
    expect(suma(0, 0)).toBe(0);
  });
});
