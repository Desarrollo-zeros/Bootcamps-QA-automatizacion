const express = require('express');
const router = express.Router();
const flightController = require('./flightController');

router.get('/', flightController.showBookingForm);
router.post('/book', flightController.bookFlight);
router.post('/pay', flightController.processPayment);
router.get('/confirm', flightController.confirmPayment);

module.exports = router;
