const usuarios = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 17 },
    { nombre: 'Carlos', edad: 32 }
];

function filtrarUsuariosPorEdad(usuarios, edadMinima) {
    return usuarios.filter(usuario => usuario.edad >= edadMinima);
}

module.exports = filtrarUsuariosPorEdad