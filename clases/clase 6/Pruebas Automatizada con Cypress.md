### ¿Para qué automatizar la ejecución de un navegador web?

Los navegadores son aplicaciones cuya principal función es permitir el acceso a contenido web al consultar información
de servidores en internet (por medio de varios protocolos) y renderizar contenido mixto en una interfaz gráfica. Las
aplicaciones web dependen en gran medida de estos navegadores, ya que son la principal plataforma de interacción.
Por esta razón, es fundamental realizar pruebas E2E para validar su correcto funcionamiento. Cypress es una herramienta
altamente eficaz para este propósito. Al ejecutarse dentro del navegador, Cypress permite automatizar la interacción con
el DOM y las solicitudes de red de manera muy precisa, facilitando así el testing completo de las aplicaciones web
con un enfoque amigable y directo.

### ¿Qué es Cypress?
Cypress es una herramienta de pruebas automatizadas de extremo a extremo diseñada específicamente para aplicaciones web. A diferencia de otras herramientas de testing, Cypress se ejecuta directamente en el navegador y en el mismo ciclo de ejecución que la aplicación, lo que le permite interactuar de manera directa con el DOM, las solicitudes de red y las acciones del usuario.

Características principales de Cypress:
1. Automatización de pruebas end-to-end (E2E): Permite probar cómo interactúan los usuarios con una aplicación web en diferentes flujos.
   2. Fácil de configurar: No requiere configuraciones complicadas o plugins adicionales. Viene con todo lo necesario para empezar a probar aplicaciones web.
   3. Recarga en tiempo real: A medida que los desarrolladores hacen cambios en el código, Cypress recarga y ejecuta las pruebas automáticamente.
   4. Depuración eficiente: Cypress ofrece un conjunto de herramientas que facilitan la depuración de fallos en las pruebas, como capturas de pantalla y grabaciones de video.
   5. Interacción con APIs y bases de datos: Además de pruebas en la interfaz, también puede interactuar con APIs y verificar el comportamiento de backends.
   6. Control sobre la red: Cypress permite interceptar y simular respuestas de red, lo que es útil para pruebas que dependen de APIs externas.
   7. Ecosistema: Ofrece un ecosistema robusto para la creación de pruebas, con soporte para plugins y una comunidad activa que genera recursos y soporte.

### ¿Qué construirá?
- Un proyecto de Node.js con un script que interactúa con una aplicación web.
   - Un directorio de screenshots con imágenes de tres pantallas.

### ¿Qué necesita?
Una versión actualizada de Node.js instalada en su computadora.
Una versión actualizada del manejador de paquetes npm instalada en su computadora.

**Nota**: se recomienda realizar la instalación de Node.js en la versión estable que se muestra en la parte izquierda del
sitio oficial con la etiqueta "Recomendado para la mayoría". Esta instalación suele venir con npm, la compatibilidad
entre ambas herramientas es ideal.

### Conocer Cypress
Cypress es un proyecto de código abierto y está alojado en un repositorio público en GitHub, disponible en el siguiente
enlace: https://github.com/cypress-io/cypress. Para aprender más sobre Cypress y cómo utilizarlo para pruebas
automatizadas de aplicaciones web, es recomendable revisar la documentación detallada en su archivo Readme.md y otras
secciones del repositorio.

### Conocer los principios de Playwright
Conocer los principios de Cypress
Como se indica en la documentación oficial, Cypress es un framework de pruebas
automatizadas que permite ejecutar pruebas directamente en el navegador
(Chromium, Firefox y otros navegadores basados en Chrome) en sistemas operativos
como Linux, Windows y macOS. A diferencia de otras herramientas, Cypress no requiere
la descarga de navegadores adicionales, ya que utiliza las versiones instaladas
en el sistema para las pruebas, permitiendo ejecutar estas tanto en modo interactivo
como en modo headless (sin interfaz gráfica).

Las funciones en Cypress son sincrónicas por defecto, lo que facilita escribir pruebas
sin tener que lidiar con la complejidad de manejar promesas o código asíncrono.
El flujo de trabajo de Cypress está centrado en tres aspectos clave: el manejo de la
aplicación, las acciones del usuario, y las interacciones con la red.
Cypress proporciona una API sencilla y poderosa para interactuar con el DOM,
hacer aserciones, y simular el comportamiento del usuario en la aplicación.


### Conocer las funcionalidades de Cypress

Cypress brinda soporte para probar aplicaciones del tipo Single Page Applications (SPA)
y Progressive Web Applications (PWA), lo que lo convierte en una herramienta confiable
para múltiples tipos de aplicaciones web modernas. Además, permite la simulación de
múltiples escenarios, como acceso a diferentes dominios, manejo de iframes,
interceptación y modificación de eventos de red, emulación de dispositivos móviles,
manejo de permisos y ubicación geográfica, así como simulación de eventos nativos como
clics y pulsaciones de teclado, y soporte para descargar y subir archivos.

Las funcionalidades específicas que ofrece Cypress están bien documentadas y
organizadas en la página de documentación oficial, particularmente en la sección
de API de Cypress, que puedes consultar en el siguiente
enlace: https://docs.cypress.io/api/table-of-contents.

Entre las funciones más utilizadas en Cypress se encuentran:

cy.click(): Para simular un clic en un elemento.
cy.dblclick(): Para realizar un doble clic.
cy.type(): Para simular la escritura en un campo de texto.
cy.check(): Para seleccionar una casilla de verificación o un botón de opción.
cy.visit(): Para navegar a una URL específica.
cy.screenshot(): Para capturar pantallas de la aplicación.
cy.intercept(): Para interceptar y modificar las solicitudes de red.



### Comprender la prueba que construirá
Para el caso de este tutorial se harán pruebas para verificar la correcta funcionalidad de una sencilla página web
construida en Angular, cuya única funcionalidad es permitir el registro, inicio de sesión y visualización de los usuarios
creados.

### Interactuar con la interfaz web objetivo
Ingrese al siguiente enlace para conocer la aplicación en cuestión: https://angular-6-registration-login-example.stackblitz.io/register.
Interactúe con los botones "Register" y "Cancel" y luego proceda a llenar el formulario de registro. Verá que ahora será
redirigido a la página de login, pero tendrá un mensaje adicional indicando el éxito de la operación de registro. Ingrese
ahora con las credenciales que recién registró y podrá ver una página con su nombre de usuario.

El flujo estándar de esta aplicación debería ser como el de la siguiente imagen:

![img.png](img.png)

Sin embargo, usted podrá notar que existen ciertos detalles que pueden variar según las condiciones del escenario.

### Listar las acciones que comprenden la prueba
Para el caso de este tutorial, basta con que aprenda a hacer operaciones básicas en su prueba como abrir URLs, hacer clics, llenar campos de texto y consultar la presencia de determinados elementos gráficos. En particular, se espera construir una prueba que haga lo siguiente:

1. Lanzar un navegador e ingresar a la página web de ejemplo.
   2. Hacer clic en el enlace "Cancel" y verificar la URL. (Guardar captura).
   3. Hacer clic en el enlace "Register" y verificar la URL. (Guardar captura).
   4. Hacer clic en el botón "Register" y verificar la existencia del texto de retroalimentación del campo del nombre. (Guardar captura).
   5. Llenar todos los campos del formulario de registro con valores cualquiera y la contraseña "MISO4208".
   6. Hacer clic en el botón "Register" y verificar la existencia del mensaje de éxito en la creación del usuario.
   7. Llenar los campos del formulario de inicio de sesión con las mismas credenciales.
   8. Hacer clic en el botón "Login" y verificar la existencia del nombre de usuario en el listado de usuarios.

### Implementar la prueba sobre la aplicación objetivo

**Crear un proyecto para la prueba**:
En primer lugar, debe asegurarse de crear un proyecto haciendo uso de Node.js para poder crear y ejecutar la prueba con
Cypress. Para esto, abra una terminal y ubíquese en un directorio vacío donde vaya a ubicar el proyecto de este
tutorial. Una vez allí ejecute el siguiente comando:
```bash
npm init -y
```

De esta forma, habrá inicializado un proyecto de Node.js. Podrá ver que en su directorio se creó un archivo
```package.json``` con valores por defecto (a causa del flag -y). Ahora podrá instalar las dependencias necesarias en
este proyecto.

### Instalar las dependencias
Actualmente su proyecto de Node.js únicamente contiene un archivo con metadatos del proyecto, pero no cuenta con los archivos a ejecutar ni con las dependencias necesarias. Para instalar y utilizar Playwright en sus pruebas, debe instalar el paquete de npm con el siguiente comando:


```bash
npm install cypress --save-dev
```

Esto agregará las líneas necesarias a su archivo package.json para declarar Playwright como dependencia del proyecto,
creará un archivo ```package-lock.json``` e instalará Playwright en el directorio ```node_modules```.

Implementar las acciones de la prueba
Como está declarado en su archivo ```package.json```, el punto de entrada de su aplicación será el archivo ```index.js```,
ubicado en el directorio del proyecto. Cree dicho archivo e inicialmente agregue el siguiente contenido para tener la


### estructura básica de un programa de cypress:

Una vez instaladas las dependencias, puedcypress/e2ee abrir Cypress con el siguiente comando:

```bash
npx cypress open
```

Este comando abrirá la interfaz gráfica de Cypress, desde donde podrá gestionar y ejecutar sus pruebas. Cypress automáticamente creará la estructura de directorios necesaria, incluyendo una carpeta cypress donde colocará sus archivos de prueba dentro de `cypress/e2e`.


### Crear y escribir una prueba con Cypress
Cree un nuevo archivo de prueba en la carpeta cypress/e2e, por ejemplo, prueba_spec.cy.js. El archivo tendrá la siguiente estructura básica:

```javascript
describe('aplicación', () => {
   const url = 'https://angular-6-registration-login-example.stackblitz.io/register';

   it('Debe cargar la página de registro', () => {
      // Visitar la URL
      cy.visit(url);


      cy.wait(2000);
      // Verificar que la página de registro se haya cargado
      cy.get('button').should('be.visible');

      // Tomar una captura de pantalla
      cy.screenshot('pagina-inicial');

      cy.get('button').click();

      cy.wait(3000);
      cy.get('input[formcontrolname="firstName"]').type('Monitor');
      cy.get('input[formcontrolname="lastName"]').type('Pruebas');
      cy.get('input[formcontrolname="username"]').type('pruebas');
      cy.get('input[formcontrolname="password"]').type('MISO4208');

      // Enviar el formulario
      cy.get('button.btn.btn-primary').click();

      // Verificar si aparece el mensaje de éxito
      cy.get('.alert-success').should('contain', 'Registration successful');

      // Tomar una captura de pantalla
      cy.screenshot('registro-exitoso');

      cy.wait(3000);
      cy.get('div.alert.alert-success').click();

      cy.get('input[formcontrolname="username"]').type('pruebas');
      cy.get('input[formcontrolname="password"]').type('MISO4208');

      cy.get('button.btn.btn-primary').click();

   });
});
```

En este archivo ya podrá incluir las instrucciones particulares de la prueba que se planteó previamente en este tutorial.
En primer lugar, debe cambiar el valor de la constante ```url``` por
‘https://angular-6-registration-login-example.stackblitz.io/register'. Opcionalmente, también puede eliminar dos de los
navegadores del arreglo para realizar la prueba una única vez.

### Ejecutar la prueba
Para ejecutar la prueba desde la interfaz gráfica de Cypress, simplemente abra Cypress con el comando:

```bash
npx cypress open
```
Y seleccione la prueba prueba_spec.cy.js desde la interfaz para ejecutarla en el navegador. Alternativamente, puede ejecutar la prueba en modo headless con el siguiente comando:
```bash
npx cypress run --spec "cypress/e2e/prueba_spec.cy.js"
```

### Ver los resultados obtenidos
Durante la ejecución de la prueba, podrá ver en la consola de Cypress los resultados de las acciones realizadas. Cypress ofrece una interfaz gráfica detallada que muestra cada acción ejecutada, incluyendo capturas de pantalla de los diferentes pasos. Además, las capturas de pantalla que definió en su código se almacenarán en la carpeta cypress/screenshots.

Cypress también genera un reporte completo de los resultados de las pruebas. Al ejecutar las pruebas en modo headless, verá en la terminal los resultados de la ejecución, y las capturas de pantalla generadas durante la prueba se guardarán automáticamente en el directorio raíz del proyecto.

### Ver capturas de pantalla
Podrá encontrar las capturas de pantalla generadas en la carpeta cypress/screenshots dentro de su proyecto. Estas imágenes mostrarán el estado visual de la aplicación en los momentos críticos definidos durante las pruebas. Puede utilizarlas para documentar el comportamiento de la aplicación durante el recorrido de pruebas.


