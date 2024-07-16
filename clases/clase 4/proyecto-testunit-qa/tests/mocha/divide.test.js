// tests/mocha/divide.test.js
const divide = require('../../divide');

/**
 * TÍTULO: División de números en Mocha
 * HISTORIA DE USUARIO:
 *   COMO usuario de la calculadora,
 *   QUIERO dividir dos números,
 *   PARA obtener el resultado de la división.
 *
 * CRITERIOS DE ACEPTACIÓN:
 *   - Debe retornar un resultado exacto cuando se divide un número positivo por otro positivo.
 *   - Debe lanzar un error al intentar dividir por cero.
 *
 * PRECONDICIONES:
 *   - Entrada de solo números reales.
 *
 * SUPUESTOS:
 *   - No se intentará dividir cero por cero en estas pruebas.
 *
 * ESCENARIOS DE PRUEBA:
 *   - Dividir 6 / 2 debe retornar 3.
 *   - Dividir 5 / 2 debe retornar 2.5.
 *   - Dividir por cero debe lanzar un error específico.
 *
 * NOTAS:
 *   - Se utiliza 'chai' para la verificación de expectativas.
 */
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
