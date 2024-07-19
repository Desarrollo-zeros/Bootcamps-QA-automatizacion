const palindromo = require("../../esPalindromo");
test('cuando escriba una palabra ejemplo ana debe salir verdadero', () => {
    expect(palindromo("ana")).toBe(3);
});