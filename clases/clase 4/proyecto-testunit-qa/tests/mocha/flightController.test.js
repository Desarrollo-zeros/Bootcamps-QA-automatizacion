// flightController.test.js para Mocha + Chai
/**
 * TÍTULO: Pruebas del Controlador de Reservas de Vuelos
 * HISTORIA DE USUARIO:
 *   COMO usuario de la plataforma de reserva de vuelos,
 *   QUIERO poder interactuar con la API para reservar vuelos,
 *   PARA gestionar mis viajes de manera eficiente.
 *
 * CRITERIOS DE ACEPTACIÓN:
 *   - Debe mostrar correctamente el formulario de reserva.
 *   - Debe procesar las reservas de vuelos correctamente.
 *   - Debe manejar correctamente los pagos.
 *   - Debe confirmar los pagos efectivamente.
 *
 * PRECONDICIONES:
 *   - La API está en funcionamiento y accesible.
 *
 * SUPUESTOS:
 *   - Las entradas son válidas y completas.
 *
 * ESCENARIOS DE PRUEBA:
 *   - Mostrar el formulario de reserva.
 *   - Manejar una reserva de vuelo.
 *   - Procesar un pago.
 *   - Confirmar un pago.
 */


const app = require('../../testIntegracion/app'); // Ajusta la ruta según sea necesario
const request = require('supertest');


describe('FlightController', () => {



    it('should display the booking form', async () => {
        const { expect } = await import('chai');
        const res = await request(app).get('/api/');
        expect(res.status).to.equal(200);
        expect(res.text).to.include('Book Flight');
    });

    it('should handle a flight booking', async () => {
        const { expect } = await import('chai');
        const bookingDetails = { flightId: '1', userId: '1' };
        const res = await request(app).post('/api/book').send(bookingDetails);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status', 'success');
    });

    it('should process a payment successfully', async () => {
        const { expect } = await import('chai');
        const paymentData = { amount: 100, cardDetails: '1234-5678-9101-1121' };
        const res = await request(app).post('/api/pay').send(paymentData);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status', 'success');
    });

    it('should confirm payment', async () => {
        const { expect } = await import('chai');
        const res = await request(app).get('/api/confirm?confirmationCode=PAY123');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status', 'confirmed');
    });
});
