// tests/jest/resta.test.js
const resta = require('../../resta');

test('resta 5 - 3 para igualar 2', () => {
    expect(resta(5, 3)).toBe(2);
});

test('resta -1 - -1 para igualar 0', () => {
    expect(resta(-1, -1)).toBe(0);
});
