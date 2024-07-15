// tests/jest/divide.test.js
const divide = require('../../divide');

test('divide 6 / 2 para igualar 3', () => {
    expect(divide(6, 2)).toBe(3);
});

test('divide 5 / 2 para igualar 2.5', () => {
    expect(divide(5, 2)).toBe(2.5);
});

test('lanza un error cuando se intenta dividir por cero', () => {
    expect(() => divide(5, 0)).toThrow('No se puede dividir por cero');
});
