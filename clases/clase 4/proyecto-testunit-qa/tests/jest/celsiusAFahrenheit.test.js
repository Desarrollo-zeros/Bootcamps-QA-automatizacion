const celsiusAFahrenheit = require("../../testunit/celsiusAFahrenheit");

test('Converción celsius a grados fahrenheit', () => {
    expect(celsiusAFahrenheit(50)).toBe(122);
});