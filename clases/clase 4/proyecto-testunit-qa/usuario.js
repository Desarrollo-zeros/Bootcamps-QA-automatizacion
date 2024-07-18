
function filtrarUsuariosPorEdad(usuarios, edadMinima) {
    return usuarios.filter(usuario => usuario.edad >= edadMinima);
}

module.exports = filtrarUsuariosPorEdad;
