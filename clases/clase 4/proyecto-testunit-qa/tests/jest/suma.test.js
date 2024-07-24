// tests/jest/suma.test.js
const suma = require('../../testunit/suma');
/**
 * TÍTULO: Suma de números
 * HISTORIA DE USUARIO:
 *   COMO usuario de la calculadora,
 *   QUIERO sumar dos números,
 *   PARA obtener el resultado de la adición.
 *
 * CRITERIOS DE ACEPTACIÓN:
 *   - Debe devolver el resultado correcto de sumar dos números positivos.
 *   - Debe devolver el resultado correcto de sumar dos números negativos.
 *
 * PRECONDICIONES:
 *   - Los números ingresados deben ser válidos (números reales).
 *
 * SUPUESTOS:
 *   - No se incluyen operaciones con números complejos.
 *
 * ESCENARIOS DE PRUEBA:
 *   - Sumar 1 + 2 debe retornar 3.
 *   - Sumar -1 + -1 debe retornar -2.
 *
 * NOTAS:
 *   - Esta prueba no cubre la suma de números en diferentes formatos (ej. string).
 */
test('suma 1 + 2 para igualar 3', () => {
    expect(suma(1, 2)).toBe(3);

});
test('suma -1 + -1 para igualar -2', () => {
    expect(suma(-1, -1)).toBe(-2);
});

test('Validar campos erroneos', () => {
    expect(() => {
        suma(undefined, 2)
    }).toThrow("Error valor undefined");
});
