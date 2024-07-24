const request = require('supertest');
const app = require('../../testIntegracion/app');
describe('Pruebas de Integración Big Bang para FlightController', () => {

    // Historia de usuario para pruebas Big Bang:
    // COMO gerente de calidad,
    // QUIERO probar todos los componentes del sistema juntos,
    // PARA validar que la aplicación completa funciona como se espera en un escenario de mundo real.
    it('debe completar la reserva de vuelo de principio a fin', async () => {
        const { expect } = await import('chai');
        // Visualizar el formulario de reserva
        let res = await request(app).get('/api/');
        expect(res.status).to.equal(200);
        expect(res.text).to.include('Book Flight');

        // Realizar la reserva
        const bookingDetails = { flightId: '1', userId: '1' };
        res = await request(app).post('/api/book').send(bookingDetails);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status', 'success');

        // Procesar un pago
        const paymentData = { amount: 100, cardDetails: '1234-5678-9101-1121' };
        res = await request(app).post('/api/pay').send(paymentData);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status', 'success');

        // Confirmar el pago
        res = await request(app).get('/api/confirm?confirmationCode=PAY123');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status', 'confirmed');
    });
});
