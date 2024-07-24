const request = require('supertest');
const app = require('../../testIntegracion/app'); // Asegúrate de importar correctamente la app
describe('Pruebas de Integración Top-Down para FlightController', () => {

    // Historia de usuario para pruebas Top-Down:
    // COMO usuario de la plataforma de reserva de vuelos,
    // QUIERO que el proceso de reserva funcione desde el inicio hasta la confirmación,
    // PARA asegurarme de que toda la experiencia del usuario es coherente y sin errores.
    it('debe manejar todo el proceso de reserva desde la visualización hasta la confirmación del pago', async () => {
        const { expect } = await import('chai');
        // Primer paso: Mostrar el formulario de reserva
        let res = await request(app).get('/api/');
        expect(res.status).to.equal(200);
        expect(res.text).to.include('Book Flight');

        // Segundo paso: Realizar una reserva
        const bookingDetails = { flightId: '1', userId: '1' };
        res = await request(app).post('/api/book').send(bookingDetails);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status', 'success');

        // Tercer paso: Procesar un pago
        const paymentData = { amount: 100, cardDetails: '1234-5678-9101-1121' };
        res = await request(app).post('/api/pay').send(paymentData);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status', 'success');
    });
});
