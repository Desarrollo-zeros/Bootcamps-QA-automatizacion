const { chromium } = require('playwright');


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        recordVideo: {
            dir: './videos/',
            size: { width: 1280, height: 720 }
        }
    });
    const page = await context.newPage();

    // Registro
    await page.goto('http://localhost:3000');
    await sleep(500);
    await page.click("#showRegisterForm");
    await sleep(500);
    await page.fill('#newUsername', 'testuser');
    await sleep(500);
    await page.fill('#newPassword', 'testpassword');
    await sleep(500);
    await page.fill('#email', 'testuser@example.com');
    await sleep(2000);
    await page.click('#registrar');

    // Espera a que el usuario sea registrado
    await page.waitForSelector('#responseMessage');
    const registerMessage = await page.$eval('#responseMessage', el => el.textContent);
    console.log(`Registro: ${registerMessage}`);

    // Inicio de sesión
    await sleep(500);
    await page.fill('#username', 'testuser');
    await sleep(500);
    await page.fill('#password', 'testpassword');
    await sleep(500);
    await page.click('#logear');
    await sleep(2000);

    await sleep(2000);
    // Espera a que el usuario inicie sesión y sea redirigido al chat
    await page.waitForSelector('.chatbox-input input', { timeout: 10000 });

    // Enviar un mensaje
    const inputSelector = '.chatbox-input input';
    await page.fill(inputSelector, 'Hola, soy un bot automatizado!');
    await page.press(inputSelector, 'Enter');

    // Espera a que el mensaje se envíe
    await sleep(5000);

    // Cerrar el navegador
    await browser.close();
})();
