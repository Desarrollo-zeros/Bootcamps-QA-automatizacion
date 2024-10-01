/*
*  # Caso de prueba: Inicio de sesión en linkedin
*
*   Titulo: Validar el proceso de inicio de sesión en Linkedin
*   con credenciales correctas.
*
*   ID Del caso: TC-001
*
*   Descripción: Este caso valida que el usuario digitado pueda
*   iniciar sesión correctamente, utilizando credenciales validas,
*   Verificando que la aceptación venga por el doble factor de autenticación
*
*   Datos:
*   Usuario:3192521931
*   Contraseña: dhnr7Hm?y29
*
*   Factor Externo: Doble Factor de autenticación
*
*   Precondiciones:
*      - tener la url
*      - Tener el navegador abierto
*      - Tener los datos de pruebas
*      - cypress instalado y configurado
*
*   Prioridad: Alta
*
*   Pasos:
*   - Abrir el navegador e ir a la URL de https://www.linkedin.com/ (OK)
*   - Esperar a que la pagina cargue todos los componentes (OK)
*   - Tomar Screen de la pagina abierta para verificar que la pagina cargo correctamente (OK)
*   - Esperar al que el boton, que nos redirige a la pagina de iniciar sesión este visible (OK)
*   - Hacer click en el boton iniciar sesión (OK)
*   - Esperar que la pagina cargue (OK)
*   - Tomamos una screen de la pagina de iniciar sesión (OK)
*   - Validamos que los campos esten cargados y/o visibles (OK)
*   - Llenamos los campos de usuario y contraseña (OK)
*   - Tomamos una foto para verificar que los campos esten debidamente digilenciados (OK)
*   - Damos click en iniciar (OK)
*   - Tomamos una foto para verificar si ha iniciado sesión
*
*   Resultados esperados:
*     - Al momento de iniciar sesión, poder visualizar el perfil de usuario
* */

describe('Caso de prueba: Inicio de sesión en linkedin',() => {
    it("Iniciara sesión y tomara capture de cada paso que vaya realizando", () => {
        cy.visit('https://www.linkedin.com')
        cy.wait(3000)

        cy.screenshot('pagina1')

        cy.get('a.nav__button-secondary').should('be.visible')

        cy.get('a.nav__button-secondary').click();

        cy.wait(3000)

        cy.get('#username').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.screenshot('pagina2')

        cy.get('#username').type('3192521931')
        cy.get('#password').type('dhnr7Hm?y29')

        cy.get("#password-visibility-toggle").click()

        cy.screenshot('pagina3')

        cy.get(".btn__primary--large").click()

        cy.screenshot('pagina4')
    })
});