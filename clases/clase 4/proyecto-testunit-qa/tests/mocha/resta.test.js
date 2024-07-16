// tests/mocha/resta.test.js
const resta = require('../../resta');

describe('Pruebas Unitarias para la función resta', () => {
    it('resta 5 - 3 para igualar 2', async () => {
        const { expect } = await import('chai');
        expect(resta(5, 3)).to.equal(2);
    });

    it('resta -1 - -1 para igualar 0', async () => {
        const { expect } = await import('chai');
        expect(resta(-1, -1)).to.equal(0);
    });
});
