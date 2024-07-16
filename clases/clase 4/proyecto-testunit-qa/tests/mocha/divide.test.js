// tests/mocha/divide.test.js
const divide = require('../../divide');

describe('Pruebas de Integración para la función divide', () => {
    it('divide 6 / 2 para igualar 3', async () => {
        const { expect } = await import('chai');
        expect(divide(6, 2)).to.equal(3);
    });

    it('divide 5 / 2 para igualar 2.5', async () => {
        const { expect } = await import('chai');
        expect(divide(5, 2)).to.equal(2.5);
    });

    it('lanza un error cuando se intenta dividir por cero', async () => {
        const { expect } = await import('chai');
        expect(() => divide(5, 0)).to.throw('No se puede dividir por cero');
    });
});
