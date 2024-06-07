# Introducción a QA y Git

### Requisitos Funcionales y No Funcionales
Requisitos Funcionales
Los requisitos funcionales describen lo que el sistema debe hacer. Estos especifican comportamientos, funciones, y servicios que el sistema debe proporcionar. Incluyen detalles sobre las entradas, los procesos, y las salidas del sistema.

Ejemplos de Requisitos Funcionales:

**Inicio de Sesión**:
    
    - El sistema debe permitir que los usuarios inicien sesión con un nombre de usuario y una contraseña válidos.
    - El sistema debe enviar un mensaje de error si las credenciales de inicio de sesión son incorrectas.

**Registro de Usuarios**:
    
    - El sistema debe permitir a los nuevos usuarios registrarse proporcionando su nombre, dirección de correo electrónico y contraseña.
    - El sistema debe enviar un correo electrónico de confirmación después del registro.

**Gestión de Productos (para un sistema de comercio electrónico)**

    - El sistema debe permitir a los administradores agregar, modificar y eliminar productos.
    - El sistema debe mostrar una lista de productos a los usuarios con detalles como nombre, precio y descripción.

### Requisitos No Funcionales

Los requisitos no funcionales describen cómo el sistema debe comportarse. Estos especifican atributos de calidad del sistema como el rendimiento, la usabilidad, la fiabilidad y la seguridad. Los requisitos no funcionales se centran en las restricciones del sistema y las características que afectan a la experiencia del usuario y al funcionamiento del sistema.

Ejemplos de Requisitos No Funcionales:

**Rendimiento**

    - El sistema debe poder manejar 1000 usuarios concurrentes sin degradación del rendimiento.
    - Las páginas de inicio de sesión y de registro deben cargar en menos de 2 segundos.

**Seguridad**

    - El sistema debe cifrar todas las contraseñas utilizando un algoritmo de cifrado seguro.
    - El sistema debe realizar autenticación de dos factores para el acceso de los administradores.

**Usabilidad**

    - La interfaz de usuario debe ser intuitiva y fácil de usar para los usuarios sin formación técnica.
    - El sistema debe proporcionar mensajes de error claros y específicos en caso de fallos en la operación.

**Fiabilidad**
  
    - El sistema debe tener una disponibilidad del 99.9% durante las horas de operación.
    - El sistema debe realizar copias de seguridad de los datos cada 24 horas.

### Diferencias Clave

#### Enfoque:
Los requisitos funcionales se centran en las funciones y características del sistema.
Los requisitos no funcionales se centran en la calidad y el rendimiento del sistema.
#### Naturaleza:
Los requisitos funcionales son específicos y describen qué debe hacer el sistema.
Los requisitos no funcionales son generales y describen cómo debe comportarse el sistema.
#### Medición:
Los requisitos funcionales se pueden medir mediante pruebas de funcionalidades específicas.
Los requisitos no funcionales se pueden medir mediante pruebas de rendimiento, seguridad, usabilidad, etc.

## Conceptos básicos de QA

### Identificar Condiciones de Prueba
1. **Definición**: Las condiciones de prueba son escenarios específicos que necesitan ser evaluados para verificar que una funcionalidad del software cumple con los requisitos. Pueden ser entradas, procesos, o resultados específicos.
2. **Ejemplo**:
    - Funcionalidad: Inicio de sesión.
    - Condiciones de prueba:
        - Usuario ingresa nombre de usuario y contraseña correctos.
        - Usuario ingresa nombre de usuario incorrecto y contraseña correcta.
        - Usuario ingresa nombre de usuario correcto y contraseña incorrecta.
        - Usuario deja el campo de nombre de usuario en blanco.
        - Usuario deja el campo de contraseña en blanco.
        - Usuario ingresa datos especiales (caracteres especiales, SQL injection, etc.).

### Escribir Casos de Prueba Detallados
1. **Definición**: Los casos de prueba son descripciones detalladas de cómo se debe realizar una prueba para una condición específica, incluyendo las entradas, los pasos a seguir, y los resultados esperados.
2. **Ejemplo**:

        ID del Caso de Prueba: TC001
        Descripción: Verificar que el usuario puede iniciar sesión con credenciales válidas.
        Precondiciones: El usuario debe estar registrado en el sistema.
        Pasos:
        1. Navegar a la página de inicio de sesión.
           2. Ingresar el nombre de usuario "usuario_valido".
           3. Ingresar la contraseña "contraseña_valida".
           4. Hacer clic en el botón "Iniciar sesión".
              Resultado Esperado: El usuario debe ser redirigido a la página principal con un mensaje de bienvenida.

### Revisar y Aprobar Casos de Prueba
1. **Definición**: La revisión y aprobación de casos de prueba aseguran que todos los escenarios importantes están cubiertos y que los casos de prueba están claros y completos.
2. **Proceso**:
- Revisar los casos de prueba con el equipo de QA y los desarrolladores.
- Verificar que todos los requisitos funcionales y no funcionales están cubiertos.
- Aprobar los casos de prueba para su ejecución.

## Ejecución de Pruebas

### Ejecutar Casos de Prueba Manuales y Automatizados
1. **Definición**: La ejecución de pruebas implica llevar a cabo los pasos definidos en los casos de prueba para verificar si el software funciona como se espera.
2. **Ejemplo (Manual)**:
- Seguir los pasos definidos en el caso de prueba TC001.
- Registrar si el resultado observado coincide con el resultado esperado.

### Documentar los Resultados
1. **Definición**: Documentar los resultados implica registrar el resultado de cada prueba, ya sea que haya pasado o fallado, y cualquier observación relevante.
   2. **Ejemplo**:

           ID del Caso de Prueba: TC001
           Fecha de Ejecución: 2024-06-05
           Resultado: Pasó
           Observaciones: La funcionalidad de inicio de sesión funciona correctamente con credenciales válidas.

### Reportar Defectos Encontrados
1. **Definición**: Reportar defectos implica documentar cualquier falla o problema encontrado durante la ejecución de las pruebas.
2. **Ejemplo**: 

        ID del Defecto: BUG001
        Descripción: El sistema permite el inicio de sesión con una contraseña incorrecta.
        Severidad: Alta
        Pasos para Reproducir:
        1. Navegar a la página de inicio de sesión.
           2. Ingresar el nombre de usuario "usuario_valido".
           3. Ingresar una contraseña incorrecta "contraseña_incorrecta".
           4. Hacer clic en el botón "Iniciar sesión".
              Resultado Esperado: El sistema debe mostrar un mensaje de error indicando que las credenciales son incorrectas.
              Resultado Observado: El usuario es redirigido a la página principal sin errores.

## Reporte y Seguimiento de Defectos

### Documentar Defectos en un Sistema de Seguimiento (como Jira, Bugzilla)
1. **Definición**: Documentar defectos en un sistema de seguimiento permite registrar, priorizar, y hacer seguimiento de los defectos de manera organizada.
2. **Ejemplo en Jira**:
- Crear un nuevo ticket en Jira.
- Completar los campos requeridos como el resumen, descripción, severidad, y pasos para reproducir.
- Asignar el defecto al desarrollador correspondiente.

### Asignar Defectos a los Desarrolladores Correspondientes
1. **Definición**: Asignar defectos implica designar un responsable para corregir el defecto reportado.
2. **Ejemplo**:
- En Jira, seleccionar el desarrollador en el campo "Asignado a".
- Notificar al desarrollador sobre el nuevo defecto asignado.

### Verificar la Corrección de los Defectos
1. **Definición**: Verificar la corrección de los defectos implica retomar los casos de prueba que fallaron, volver a ejecutarlos y asegurar que el defecto ha sido corregido.
2. **Ejemplo**:
- Una vez que el desarrollador marca el defecto como corregido, el QA vuelve a ejecutar el caso de prueba relacionado.
- Documentar el resultado de la re-ejecución del caso de prueba.

        ID del Caso de Prueba: TC001
        Fecha de Re-Ejecución: 2024-06-06
        Resultado: Pasó
        Observaciones: El defecto BUG001 ha sido corregido. La funcionalidad de inicio de sesión ahora muestra un mensaje de error con contraseñas incorrectas.


## Ejercicios

### Ejercicio 1: Definición de QA
1. **Pregunta**: Define QA en tus propias palabras y explica por qué es importante en el desarrollo de software.
- Respuesta:: [Escribe tu respuesta aquí]

### Ejercicio 2: Funcionalidad
1. **Pregunta**: Describe tres funciones clave de QA durante el ciclo de desarrollo de software.
- Respuesta: [Escribe tu respuesta aquí]

### Ejercicio 3: Beneficios del QA
1. **Pregunta**: Explica cómo el QA puede contribuir a la reducción de costos y a la satisfacción del cliente.
- Respuesta: [Escribe tu respuesta aquí]

### Ejercicio 4: Roles en QA
1. **Pregunta**: ¿Cuál es la diferencia entre un Tester y un QA Engineer? Proporciona ejemplos de tareas específicas para cada rol.
- Respuesta: [Escribe tu respuesta aquí]

### Ejercicio 5: Caso de Estudio
1. **Pregunta**: Imagina que estás trabajando en un proyecto de desarrollo de una aplicación de inicio de sesión. Define los requisitos funcionales y no funcionales para esta aplicación.
- Respuesta: [Escribe tu respuesta aquí]

### Ejercicio 6: Planificación de Pruebas
1. **Pregunta**: Basado en el caso de estudio anterior, ¿qué pasos incluirías en la planificación de pruebas para la funcionalidad de inicio de sesión?
- Respuesta: [Escribe tu respuesta aquí]


### Ejercicio 7: Ejecución de Pruebas
1. **Pregunta**: Describe cómo ejecutarías los casos de prueba para la funcionalidad de inicio de sesión. Incluye cómo documentarías los resultados.
- Respuesta: [Escribe tu respuesta aquí]

### Ejercicio 8: Registro en Facebook

**Objetivo**: Probar la funcionalidad de registro en Facebook.

1. **Actividad**:
   - Crear un caso de prueba para la funcionalidad de registro en Facebook.
   - Identificar al menos 3 condiciones de prueba:
      - Registro con todos los campos correctos.
      - Registro con un correo electrónico ya existente.
   - Documentar cada condición de prueba, incluyendo ID del caso, descripción, precondiciones, pasos y resultado esperado.

**Ejemplo**:
- **ID del Caso de Prueba**: FB001
- **Descripción**: Verificar que el usuario puede registrarse con todos los campos correctos.
- **Precondiciones**: El usuario está en la página de registro de Facebook.
- **Pasos**:
   1. Ingresar "Juan" en el campo "Nombre".
   2. Ingresar "Pérez" en el campo "Apellido".
   3. Ingresar "juan.perez@example.com" en el campo "Correo Electrónico".
   4. Ingresar "password123" en el campo "Contraseña".
   5. Hacer clic en "Registrarse".
- **Resultado Esperado**: El usuario es registrado correctamente y redirigido a su perfil.

Nota: Tomar evidencias y/o fotos del proceso

### Ejercicio 9: Registro en DevZeros School

**Objetivo**: Probar la funcionalidad de registro en DevZeros School.

1. **Actividad**:
   - Crear un caso de prueba para la funcionalidad de registro en DevZeros School.
   - Identificar al menos 3 condiciones de prueba:
      - Registro con todos los campos correctos.
      - Registro con un correo electrónico inválido.
      - Registro con una contraseña débil.
   - Documentar cada condición de prueba, incluyendo ID del caso, descripción, precondiciones, pasos y resultado esperado.

**Ejemplo**:
- **ID del Caso de Prueba**: DZ001
- **Descripción**: Verificar que el usuario puede registrarse con todos los campos correctos en DevZeros School.
- **Precondiciones**: El usuario está en la página de registro de DevZeros School.
- **Pasos**:
   1. Seleccionar "Estudiante" en "Tipo de cuenta".
   2. Ingresar "estudiante@example.com" en el campo "Correo Electrónico".
   3. Seleccionar "USA" en el campo "País".
   4. Ingresar "1234567890" en el campo "Teléfono".
   5. Ingresar "Estudiante Ejemplo" en el campo "Nombre Completo".
   6. Ingresar "contraseñaFuerte123" en el campo "Contraseña".
   7. Ingresar "contraseñaFuerte123" en el campo "Vuelva a escribir la contraseña".
   8. Aceptar los términos y condiciones.
   9. Hacer clic en "Registrarse".
- **Resultado Esperado**: El usuario es registrado correctamente y recibe un correo de confirmación.

Nota: Tomar evidencias y/o fotos del proceso

### Ejercicio 10: Documentar Defectos en Trello

**Objetivo**: Documentar defectos encontrados durante las pruebas en Trello.

1. **Actividad**:
   - Crear 4 tarjetas en un tablero de Trello para documentar los defectos encontrados en las plataformas probadas (Facebook y DevZeros School).
   - Para cada defecto, incluir:
      - Título de la tarjeta.
      - Descripción detallada del defecto.
      - Severidad del defecto.
      - Pasos para reproducir el defecto.
      - Resultado esperado y resultado observado.

**Ejemplo de una tarjeta en Trello**:
- **Título**: Defecto: Registro con correo existente en Facebook
- **Descripción**:
   - **ID del Defecto**: FB_DEF001
   - **Descripción**: El sistema permite registrar un correo electrónico que ya está en uso sin mostrar un mensaje de error adecuado.
   - **Severidad**: Alta
   - **Pasos para Reproducir**:
      1. Ir a la página de registro de Facebook.
      2. Ingresar "correo_existente@example.com" en el campo "Correo Electrónico".
      3. Completar el resto de los campos con datos válidos.
      4. Hacer clic en "Registrarse".
   - **Resultado Esperado**: El sistema debe mostrar un mensaje de error indicando que el correo electrónico ya está en uso.
   - **Resultado Observado**: El sistema permite el registro sin mostrar ningún mensaje de error, lo que genera problemas de duplicidad de cuentas.

**Instrucciones de la actividad**:
- Crear un tablero en Trello.
- Crear 4 tarjetas para documentar los defectos.
- Completar cada tarjeta con la información detallada del defecto.
- Asignar una etiqueta de severidad a cada tarjeta (Baja, Media, Alta).
  Nota: Tomar evidencias y/o fotos del proceso