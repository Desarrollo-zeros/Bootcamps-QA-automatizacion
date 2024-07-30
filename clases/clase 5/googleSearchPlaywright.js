const playwright = require('playwright');
const fs = require('fs');

const url = 'https://angular-6-registration-login-example.stackblitz.io/register';

(async () => {
    // Abrir el archivo de logs
    const logStream = fs.createWriteStream('./test-log.txt', { flags: 'a' });

    // Función para escribir en el archivo de logs
    const log = (message) => {
        console.log(message);
        logStream.write(`${new Date().toISOString()} - ${message}\n`);
    };

    // Definir los navegadores en los que se quiere hacer la prueba
    for (const browserType of ['chromium']) {//, 'firefox', 'webkit']) {
        log(`${browserType}-------------------------------------------`);

        // Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
        const browser = await playwright[browserType].launch({ headless: false });
        const context = await browser.newContext({
            recordVideo: {
                dir: './videos/'
            }
        });
        const page = await context.newPage();

        // Abrir la URL a probar en la página y cargar el proyecto en una SPA
        await page.goto(url);
        await new Promise(r => setTimeout(r, 7000));
        await page.screenshot({ path: './pagina.png' });
        await page.click('css=button');
        await new Promise(r => setTimeout(r, 9000));
        await page.screenshot({ path: './pagina2.png' });
        log('Project loaded');

        await page.click('css=a.btn.btn-link');
        log(`Clicked "cancel". URL is now ${page.url()}`);

        await page.click('css=a.btn.btn-link');
        log(`Clicked "register". URL is now ${page.url()}`);

        await page.click('css=button.btn.btn-primary');
        let feedback = await page.$$('css=div.invalid-feedback');

        let elems = 0;
        for (let i of feedback) { elems++; }
        await page.screenshot({ path: './form-feedback.png' });
        log(`Clicked "Register" with an empty form. Feedback is shown in ${elems} elements`);

        await page.type('input[formcontrolname="firstName"]', 'Monitor');
        await page.type('input[formcontrolname="lastName"]', 'Pruebas');
        await page.type('input[formcontrolname="username"]', 'pruebas');
        await page.type('input[formcontrolname="password"]', 'MISO4208');
        await page.click('css=button.btn.btn-primary');

        await new Promise(r => setTimeout(r, 7000));
        await page.screenshot({ path: './success-feedback.png' });

        feedback = await page.$("css=div.alert.alert-success");
        log(`Success dialog after creating user with message: ${await feedback.innerText()}`);

        await page.type('input[formcontrolname="username"]', 'pruebas');
        await page.type('input[formcontrolname="password"]', 'MISO4208');
        await page.click('css=button.btn.btn-primary');
        await new Promise(r => setTimeout(r, 7000));

        feedback = await page.$('text="Hi Monitor!"');
        await page.screenshot({ path: './after-login.png' });
        log(`Logged in. Your user was ${feedback ? 'successfully' : 'not'} created`);

        // Cerrar el navegador y el archivo de logs
        await browser.close();
        logStream.end();
    }
    return;
})();
