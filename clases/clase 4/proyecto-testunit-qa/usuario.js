const usuarios = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 17 },
    { nombre: 'Carlos', edad: 32 }
];

function filtrarUsuariosPorEdad(usuarios, edadMinima) {
    return usuarios.filter(usuario => usuario.edad >= edadMinima);
}

// Uso de la función:
console.log(filtrarUsuariosPorEdad(usuarios, 18));  // [{ nombre: 'Juan', edad: 25 }, { nombre: 'Carlos', edad: 32 }]

module.exports = filtrarUsuariosPorEdad