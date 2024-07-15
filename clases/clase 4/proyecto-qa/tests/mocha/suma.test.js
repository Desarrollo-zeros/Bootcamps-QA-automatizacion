// tests/mocha/suma.test.js
const suma = require('../../suma');

describe('Pruebas Unitarias para la función suma', () => {
    it('suma 1 + 2 para igualar 3', async () => {
        const { expect } = await import('chai');
        expect(suma(1, 2)).to.equal(3);
    });

    it('suma -1 + -1 para igualar -2', async () => {
        const { expect } = await import('chai');
        expect(suma(-1, -1)).to.equal(-2);
    });
});
