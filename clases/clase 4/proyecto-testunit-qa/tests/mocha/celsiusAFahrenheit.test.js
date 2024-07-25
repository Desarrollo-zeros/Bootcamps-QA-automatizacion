const celsiusAFahrenheit = require("../../testunit/celsiusAFahrenheit");



describe('Converción celsius a grados fahrenheit', () => {
    it('50 grados celsius a Fahrenheit son 122', async () => {
        const { expect } = await import('chai');
        expect(celsiusAFahrenheit(50)).equal(122);
    });

    it('51 grados celsius a Fahrenheit son 123.8', async () => {
        const { expect } = await import('chai');
        expect(celsiusAFahrenheit(51)).equal(123.8);
    });

});