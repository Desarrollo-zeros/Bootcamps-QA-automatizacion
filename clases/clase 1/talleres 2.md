# Diseño de Casos de Prueba

## Identificar Condiciones de Prueba

**Definición**: Las condiciones de prueba son escenarios específicos que necesitan ser evaluados para verificar que una funcionalidad del software cumple con los requisitos.

**Ejemplo**:
- **Funcionalidad**: Envío del formulario de checkout.
- **Condiciones de prueba**:
  - Usuario ingresa todos los campos requeridos correctamente.
  - Usuario deja campos obligatorios en blanco.
  - Usuario ingresa datos no válidos en campos específicos (e.g., correo, código postal).
  - Usuario intenta enviar el formulario sin seleccionar un país o estado.

## Escribir Casos de Prueba Detallados

**Definición**: Los casos de prueba son descripciones detalladas de cómo se debe realizar una prueba para una condición específica, incluyendo las entradas, los pasos a seguir, y los resultados esperados.

**Ejemplo**:

- **ID del Caso de Prueba**: TC001
- **Descripción**: Verificar que el usuario puede enviar el formulario de checkout con todos los campos válidos.
- **Precondiciones**: El usuario está en la página de checkout.
- **Pasos**:
  1. Ingresar "John" en el campo "Nombre".
  2. Ingresar "Doe" en el campo "Apellido".
  3. Ingresar "johndoe" en el campo "Nombre de Usuario".
  4. Ingresar "john.doe@example.com" en el campo "Correo Electrónico".
  5. Ingresar "123 Main St" en el campo "Dirección".
  6. Dejar el campo "Dirección 2" en blanco.
  7. Seleccionar "Estados Unidos" en el campo "País".
  8. Seleccionar "California" en el campo "Estado".
  9. Ingresar "90210" en el campo "Código Postal".
  10. Hacer clic en el botón "Enviar".
- **Resultado Esperado**: El formulario se envía correctamente y los datos se guardan en la base de datos.

# Ejecución de Pruebas

## Ejecutar Casos de Prueba

**Definición**: La ejecución de pruebas implica llevar a cabo los pasos definidos en los casos de prueba para verificar si el software funciona como se espera.

**Ejemplo**:
- **Seguir los pasos definidos en el caso de prueba TC001.**
- **Registrar si el resultado observado coincide con el resultado esperado.**

- **ID del Caso de Prueba**: TC001
- **Fecha de Ejecución**: 2024-06-06
- **Resultado**: Pasó
- **Observaciones**: El formulario se envía correctamente y los datos se guardan en la base de datos.

# Reporte y Seguimiento de Defectos

## Reportar Defectos Encontrados

**Definición**: Reportar defectos implica documentar cualquier falla o problema encontrado durante la ejecución de las pruebas.

**Ejemplo**:

- **ID del Defecto**: BUG001
- **Descripción**: El formulario permite enviar datos no válidos en el campo de correo electrónico.
- **Severidad**: Alta
- **Pasos para Reproducir**:
  1. Navegar a la página de checkout.
  2. Ingresar "John" en el campo "Nombre".
  3. Ingresar "Doe" en el campo "Apellido".
  4. Ingresar "johndoe" en el campo "Nombre de Usuario".
  5. Ingresar "invalid-email" en el campo "Correo Electrónico".
  6. Ingresar "123 Main St" en el campo "Dirección".
  7. Dejar el campo "Dirección 2" en blanco.
  8. Seleccionar "Estados Unidos" en el campo "País".
  9. Seleccionar "California" en el campo "Estado".
  10. Ingresar "90210" en el campo "Código Postal".
  11. Hacer clic en el botón "Enviar".
- **Resultado Esperado**: El sistema debe mostrar un mensaje de error indicando que el correo electrónico no es válido.
- **Resultado Observado**: El formulario se envía correctamente sin validación del correo electrónico.

## Documentación y Revisión de Defectos

### Documentar Defectos en un Sistema de Seguimiento (como Jira, Bugzilla, Trello)

**Definición**: Documentar defectos en un sistema de seguimiento permite registrar, priorizar, y hacer seguimiento de los defectos de manera organizada.

**Ejemplo en Trello**:
- Crear una nueva tarjeta en Trello.
- Completar los campos requeridos como el resumen, descripción, severidad, y pasos para reproducir.
- Asignar el defecto al desarrollador correspondiente.

**Pasos para Crear una Tarjeta en Trello**:
1. Abrir el tablero de Trello y seleccionar la lista correspondiente (por ejemplo, "Defectos").
2. Hacer clic en "Añadir una tarjeta" y escribir el título del defecto.
3. Hacer clic en "Añadir tarjeta".
4. Hacer clic en la tarjeta creada para abrirla.
5. Completar los campos de descripción, incluyendo:
  - ID del defecto.
  - Descripción detallada del defecto.
  - Severidad del defecto.
  - Pasos para reproducir el defecto.
  - Resultado esperado y resultado observado.
6. Asignar la tarjeta al desarrollador correspondiente usando el campo "Miembros".

### Asignar Defectos a los Desarrolladores Correspondientes

**Definición**: Asignar defectos implica designar un responsable para corregir el defecto reportado.

**Ejemplo**:
- En Trello, seleccionar el desarrollador en el campo "Miembros".
- Notificar al desarrollador sobre el nuevo defecto asignado.

### Verificar la Corrección de los Defectos

**Definición**: Verificar la corrección de los defectos implica retomar los casos de prueba que fallaron, volver a ejecutarlos y asegurar que el defecto ha sido corregido.

**Ejemplo**:
- Una vez que el desarrollador marca el defecto como corregido, el QA vuelve a ejecutar el caso de prueba relacionado.
- Documentar el resultado de la re-ejecución del caso de prueba.

- **ID del Caso de Prueba**: TC001
- **Fecha de Re-Ejecución**: 2024-06-07
- **Resultado**: Pasó
- **Observaciones**: El defecto BUG001 ha sido corregido. Ahora el sistema valida correctamente el campo de correo electrónico.
