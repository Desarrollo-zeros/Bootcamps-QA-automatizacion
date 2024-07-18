const usuario = require('../../usuario');

/**
 * Título:Filtrado de Usuarios por Edad
 * HISTORIA DE USUARIO:
 *  COMO administrador del sistema,
 *  QUIERO poder filtrar usuarios por edad,
 *  PARA realizar campañas de marketing dirigidas.
 *
 *  Criterios de Aceptación:
 *  - La función debe aceptar una lista de usuarios y una edad mínima.
 *  - Debe retornar una lista de usuarios que tengan la edad mínima o más.
 *
 * Precondiciones:
 *      - La lista de usuario no debe estar vacia
 *
 * Supuesto:
 *      - No se va mostrar usuarios sin edad registrada
 *
 *  Escenario de prueba:
 *      - Filtrar los usuarios con edad mayor o igual a la establecidad
 *      - Si no existe edad minima debe traer todos los valores
 *
 *
*/
test("Filtrar los usuarios con edad mayor o igual a la establecidad", () => {
    const usuarios = [
        {nombre: 'Juan', edad: 25},
        {nombre: 'María', edad: 17},
        {nombre: 'Carlos', edad: 32}
    ];
    const usuarioData = [{"nombre": 'Juan', "edad": 25}, {"nombre": 'Carlos', "edad": 32}];

    expect(usuario(usuarios, 18)).toEqual(usuarioData);
});

test("Si no existe edad minima debe traer todos los valores", () => {
    const usuarios = [
        { nombre: 'Juan', edad: 25 },
        { nombre: 'María', edad: 17 },
        { nombre: 'Carlos', edad: 32 }
    ];
    expect(usuario(usuarios, null)).toEqual(usuarios);
});