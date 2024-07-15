// tests/jest/suma.test.js
const suma = require('../../suma');

test('suma 1 + 2 para igualar 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('suma -1 + -1 para igualar -2', () => {
    expect(suma(-1, -1)).toBe(-2);
});
