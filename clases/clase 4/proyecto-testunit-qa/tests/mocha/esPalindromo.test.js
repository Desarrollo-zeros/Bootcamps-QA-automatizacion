const palindromo = require('../../testunit/esPalindromo');

describe('Prueba de un texto palindromo', () => {
    it('probar letras separadas', async () => {
        const { expect } = await import('chai');
        expect(palindromo("Anita lava la tina")).to.equal(true);
    });

    it('con palabra sin separar', async () => {
        const { expect } = await import('chai');
        expect(palindromo("ana")).to.equal(true);
    });
});
