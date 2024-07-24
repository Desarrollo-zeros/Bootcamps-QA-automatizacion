const request = require('supertest');
const app = require('../../testIntegracion/app'); // Asegúrate de importar correctamente la app
describe('Pruebas de Integración Bottom-Up para FlightController', () => {

    // Historia de usuario para pruebas Bottom-Up:
    // COMO desarrollador de la API de reserva de vuelos,
    // QUIERO probar desde los componentes de menor nivel hacia los de mayor nivel,
    // PARA asegurarme de que los fundamentos del sistema funcionan correctamente antes de integrarlos con niveles superiores.
    it('debe manejar el proceso de reserva comenzando por el pago y luego la reserva', async () => {
        const { expect } = await import('chai');
        // Primer paso: Procesar un pago
        const paymentData = { amount: 100, cardDetails: '1234-5678-9101-1121' };
        let res = await request(app).post('/api/pay').send(paymentData);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status', 'success');

        // Segundo paso: Realizar una reserva utilizando los detalles de pago
        const bookingDetails = { flightId: '1', userId: '1', paymentConfirmation: res.body.confirmationCode };
        res = await request(app).post('/api/book').send(bookingDetails);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status', 'success');
    });
});
