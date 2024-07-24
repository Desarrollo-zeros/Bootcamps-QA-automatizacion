// tests/mocha/resta.test.js
const resta = require('../../testunit/resta');

/**
 * TÍTULO: Resta de números en Mocha
 * HISTORIA DE USUARIO:
 *   COMO usuario de la calculadora,
 *   QUIERO restar dos números,
 *   PARA entender la diferencia entre ellos.
 *
 * CRITERIOS DE ACEPTACIÓN:
 *   - Debe calcular correctamente la resta entre dos números positivos.
 *   - Debe calcular correctamente la resta cuando ambos números son negativos.
 *
 * PRECONDICIONES:
 *   - Se espera que los números sean valores enteros o flotantes.
 *
 * SUPUESTOS:
 *   - No se considera la entrada de caracteres no numéricos.
 *
 * ESCENARIOS DE PRUEBA:
 *   - Restar 5 - 3 debe resultar en 2.
 *   - Restar -1 - -1 debe resultar en 0.
 *
 * NOTAS:
 *   - Se importa 'chai' para manejar las expectativas.
 */
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
