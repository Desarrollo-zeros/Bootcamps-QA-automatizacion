// tests/jest/userForm.test.js
const validateUserForm = require('../../testunit/validarFormulario');

/**
 * HISTORIA DE USUARIO:
 * COMO administrador de la plataforma,
 * QUIERO asegurarme de que todos los datos ingresados en el formulario de usuario sean correctos,
 * PARA garantizar que la información almacenada en nuestra base de datos es fiable y precisa.
 *
 * CRITERIOS DE ACEPTACIÓN:
 * - Todos los campos deben ser completados.
 * - El teléfono debe seguir un formato específico (+1234567890).
 * - La fecha de nacimiento no debe indicar que el usuario es menor de 18 años.
 * - El grupo sanguíneo debe ser uno válido (A+, A-, B+, B-, AB+, AB-, O+, O-).
 *
 * DATOS DE PRUEBA:
 * const userDataValid = {
 *   nombre: 'Juan',
 *   apellido: 'Pérez',
 *   documento: '12345678',
 *   cedula: '87654321',
 *   telefono: '+1234567890',
 *   fechaNacimiento: '1990-05-15',
 *   grupoSanguineo: 'O+',
 *   adicional: 'Ninguna'
 * };
 * const userDataInvalid = {
 *   nombre: '',
 *   apellido: 'Gomez',
 *   documento: '',
 *   cedula: '',
 *   telefono: '12345',
 *   fechaNacimiento: '2010-05-15',
 *   grupoSanguineo: 'XYZ',
 *   adicional: 'Algún texto'
 * };
 */

describe('Validación del formulario de usuario', () => {
    test('Validar datos de usuario correctos', () => {
        const userDataValid = {
            nombre: 'Juan',
            apellido: 'Pérez',
            documento: '12345678',
            cedula: '87654321',
            telefono: '+1234567890',
            fechaNacimiento: '1990-05-15',
            grupoSanguineo: 'O+',
            adicional: 'Ninguna'
        };

        const result = validateUserForm(userDataValid);
        expect(result.length).toBe(0);
    });

    test('Validar datos de usuario incorrectos', () => {
        const userDataInvalid = {
            nombre: '',
            apellido: 'Gomez',
            documento: '',
            cedula: '',
            telefono: '12345',
            fechaNacimiento: '2010-05-15',
            grupoSanguineo: 'XYZ',
            adicional: 'Algún texto'
        };
        const result = validateUserForm(userDataInvalid);
        expect(result.length>0).toBe(true);
        expect(result[0]).toContain("Todos");
        expect(result[3]).toContain("Grupo");
       
    });
});
