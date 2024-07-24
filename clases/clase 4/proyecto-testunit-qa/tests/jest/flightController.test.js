const request = require('supertest');
const app = require('../../testIntegracion/app'); // Asegúrate de importar correctamente la app

// Historia de Usuario para el Controlador de Reservas de Vuelos:
// COMO usuario de la plataforma de reserva de vuelos,
// QUIERO interactuar con la API para realizar reservas,
// PARA gestionar mis viajes de manera eficiente y sin inconvenientes.

describe('Flight Booking Controller', () => {
    // ESCENARIO DE PRUEBA: Mostrar el formulario de reserva.
    // CRITERIO DE ACEPTACIÓN: Debe mostrar correctamente el formulario de reserva.
    it('should display the booking form', async () => {
        const response = await request(app).get('/api/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('Book Flight');
    });

    // ESCENARIO DE PRUEBA: Manejar una reserva de vuelo.
    // CRITERIO DE ACEPTACIÓN: Debe procesar y confirmar las reservas de vuelos correctamente.
    it('should handle a flight booking', async () => {
        const bookingDetails = { flightId: '1', userId: '1' };
        const response = await request(app).post('/api/book').send(bookingDetails);
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('success');
    });

    // ESCENARIO DE PRUEBA: Procesar un pago.
    // CRITERIO DE ACEPTACIÓN: Debe manejar correctamente los pagos.
    it('should process a payment successfully', async () => {
        const paymentData = { amount: 100, cardDetails: '1234-5678-9101-1121' };
        const response = await request(app).post('/api/pay').send(paymentData);
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('success');
    });

    // ESCENARIO DE PRUEBA: Confirmar un pago.
    // CRITERIO DE ACEPTACIÓN: Debe confirmar los pagos efectivamente.
    it('should confirm payment', async () => {
        const response = await request(app).get('/api/confirm?confirmationCode=PAY123');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('confirmed');
    });
});
