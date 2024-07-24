const palindromo = require("../../testunit/esPalindromo");
test('cuando escriba una palabra ejemplo ana debe salir verdadero', () => {
    expect(palindromo("ana")).toBe(true);
});