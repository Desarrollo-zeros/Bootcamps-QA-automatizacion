// tests/jest/resta.test.js
const resta = require('../../testunit/resta');

/**
 * TÍTULO: Resta de números
 * HISTORIA DE USUARIO:
 *   COMO usuario de la calculadora,
 *   QUIERO restar dos números,
 *   PARA determinar la diferencia entre ellos.
 *
 * CRITERIOS DE ACEPTACIÓN:
 *   - Debe devolver el resultado correcto de restar dos números positivos.
 *   - Debe devolver el resultado correcto de restar dos números negativos, incluyendo casos donde el resultado es cero.
 *
 * PRECONDICIONES:
 *   - Los números ingresados deben ser números reales y válidos.
 *
 * SUPUESTOS:
 *   - La operación no se aplica a datos no numéricos.
 *
 * ESCENARIOS DE PRUEBA:
 *   - Restar 5 - 3 debe retornar 2.
 *   - Restar -1 - -1 debe retornar 0.
 *
 * NOTAS:
 *   - La prueba asume que los números son ingresados correctamente por el usuario.
 */
test('resta 5 - 3 para igualar 2', () => {
    expect(resta(5, 3)).toBe(2);
});
test('resta -1 - -1 para igualar 0', () => {
    expect(resta(-1, -1)).toBe(0);
});
