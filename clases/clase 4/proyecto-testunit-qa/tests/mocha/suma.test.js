// tests/mocha/suma.test.js
const suma = require('../../suma');

/**
 * TÍTULO: Suma de números en Mocha
 * HISTORIA DE USUARIO:
 *   COMO usuario de la calculadora,
 *   QUIERO sumar dos números,
 *   PARA obtener el total acumulado.
 *
 * CRITERIOS DE ACEPTACIÓN:
 *   - La suma de dos números positivos debe ser exacta.
 *   - La suma de dos números negativos debe ser correcta y reflejar el comportamiento esperado de la suma en negativo.
 *
 * PRECONDICIONES:
 *   - Solo números enteros o de punto flotante son aceptados.
 *
 * SUPUESTOS:
 *   - No se contempla la entrada de otros tipos de datos como cadenas o valores nulos.
 *
 * ESCENARIOS DE PRUEBA:
 *   - Sumar 1 + 2 debe retornar 3.
 *   - Sumar -1 + -1 debe retornar -2.
 *
 * NOTAS:
 *   - Se importa 'chai' para usar 'expect' en las pruebas.
 */
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
