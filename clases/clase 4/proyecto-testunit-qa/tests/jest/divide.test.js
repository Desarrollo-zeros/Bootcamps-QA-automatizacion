// tests/jest/divide.test.js
const divide = require('../../testunit/divide');

/**
 * TÍTULO: División de números
 * HISTORIA DE USUARIO:
 *   COMO usuario de la calculadora,
 *   QUIERO dividir dos números,
 *   PARA obtener el cociente de la operación.
 *
 * CRITERIOS DE ACEPTACIÓN:
 *   - Debe devolver el cociente correcto cuando ambos números son positivos.
 *   - Debe manejar divisiones que resulten en fracciones.
 *   - Debe lanzar un error cuando el divisor es cero.
 *
 * PRECONDICIONES:
 *   - Los números ingresados deben ser válidos y reales.
 *
 * SUPUESTOS:
 *   - La división por números negativos o cero se maneja fuera de estos tests.
 *
 * ESCENARIOS DE PRUEBA:
 *   - Dividir 6 / 2 debe retornar 3.
 *   - Dividir 5 / 2 debe retornar 2.5.
 *   - Intentar dividir por cero debe lanzar un error "No se puede dividir por cero".
 *
 * NOTAS:
 *   - La función no debe aceptar cadenas de texto o valores no numéricos como entrada.
 */
test('divide 6 / 2 para igualar 3', () => {
    expect(divide(6, 2)).toBe(3);
});
test('divide 5 / 2 para igualar 2.5', () => {
    expect(divide(5, 2)).toBe(2.5);
});
test('lanza un error cuando se intenta dividir por cero', () => {
    expect(() => divide(5, 0)).toThrow('No se puede dividir por cero');
});
