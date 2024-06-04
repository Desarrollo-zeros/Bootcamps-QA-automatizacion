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

### Ejercicio 7: Diseño de Casos de Prueba
1. **Formulario HTML**: Crea un formulario para documentar casos de prueba.
```html
<form action="/submit_test_case" method="post">
    <label for="test_case_id">ID del Caso de Prueba:</label><br>
    <input type="text" id="test_case_id" name="test_case_id"><br>
    <label for="test_case_description">Descripción del Caso de Prueba:</label><br>
    <textarea id="test_case_description" name="test_case_description"></textarea><br>
    <label for="expected_result">Resultado Esperado:</label><br>
    <textarea id="expected_result" name="expected_result"></textarea><br>
    <input type="submit" value="Enviar">
</form>
```

### Ejercicio 8: Ejecución de Pruebas
1. **Pregunta**: Describe cómo ejecutarías los casos de prueba para la funcionalidad de inicio de sesión. Incluye cómo documentarías los resultados.
- Respuesta: [Escribe tu respuesta aquí]

###  Ejercicio 9: Reporte y Seguimiento de Defectos
1. **Formulario HTML**: Crea un formulario para reportar y hacer seguimiento de defectos encontrados durante las pruebas.
```html
<form action="/submit_bug_report" method="post">
    <label for="bug_id">ID del Defecto:</label><br>
    <input type="text" id="bug_id" name="bug_id"><br>
    <label for="bug_description">Descripción del Defecto:</label><br>
    <textarea id="bug_description" name="bug_description"></textarea><br>
    <label for="severity">Severidad:</label><br>
    <select id="severity" name="severity">
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
    </select><br>
    <input type="submit" value="Enviar">
</form>
```

### Ejercicio 10: Documentación de Pruebas

1. **Formulario HTML**: Crea un formulario para documentar los resultados de las pruebas ejecutadas.
```html
<form action="/submit_test_results" method="post">
    <label for="test_case_id">ID del Caso de Prueba:</label><br>
    <input type="text" id="test_case_id" name="test_case_id"><br>
    <label for="execution_date">Fecha de Ejecución:</label><br>
    <input type="date" id="execution_date" name="execution_date"><br>
    <label for="test_results">Resultados de la Prueba:</label><br>
    <textarea id="test_results" name="test_results"></textarea><br>
    <label for="status">Estado:</label><br>
    <select id="status" name="status">
        <option value="pass">Pasó</option>
        <option value="fail">Falló</option>
    </select><br>
    <input type="submit" value="Enviar">
</form>
```