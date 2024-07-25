// tests/mocha/userForm.test.js

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
 */

describe('Validación del formulario de usuario', () => {
    it('debe validar correctamente un usuario con datos válidos', async() => {

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

        const { expect } = await import('chai');
        const result = validateUserForm(userDataValid);
        expect(result.length).to.equal(0);
    });

    it('debe identificar errores en un usuario con datos inválidos', async() => {

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

        const { expect } = await import('chai');
        const result = validateUserForm(userDataInvalid);
        expect(result.length>0).to.equal(true);
        expect(result).to.include.members([
            'Todos los campos son obligatorios.',
            'Formato de teléfono inválido.',
            'El usuario debe ser mayor de 18 años.',
            'Grupo sanguíneo inválido.'
        ]);
    });
});