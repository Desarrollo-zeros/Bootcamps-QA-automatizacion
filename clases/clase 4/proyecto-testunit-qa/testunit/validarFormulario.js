function validarFormulario(usuario) {
    const errores = [];
    
    // Validación de campos requeridos
    if (!usuario.nombre || !usuario.apellido || !usuario.documento || !usuario.cedula ||
        !usuario.telefono || !usuario.fechaNacimiento || !usuario.grupoSanguineo) {
        errores.push('Todos los campos son obligatorios.');
    }

    // Validación del formato del teléfono
    if (!/^\+\d{10}$/.test(usuario.telefono)) {
        errores.push('Formato de teléfono inválido.');
    }

    // Validación de la fecha de nacimiento
    const fechaNacimiento = new Date(usuario.fechaNacimiento);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    if (edad < 18 || fechaNacimiento > hoy) {
        errores.push('El usuario debe ser mayor de 18 años.');
    }

    // Validación del grupo sanguíneo
    if (!['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].includes(usuario.grupoSanguineo)) {
        errores.push('Grupo sanguíneo inválido.');
    }

    return errores;
}

module.exports = validarFormulario;

