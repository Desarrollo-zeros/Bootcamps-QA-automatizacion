function esPalindromo(texto) {
    const textoNormalizado = texto.replace(/\W/g, '').toLowerCase();
    return textoNormalizado === textoNormalizado.split('').reverse().join('');
}

module.exports = esPalindromo

