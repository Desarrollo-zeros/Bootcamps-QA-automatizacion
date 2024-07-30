const puppeteer = require('puppeteer');

const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navegar a google.com
    await page.goto('https://www.google.com');

    // Esperar a que el campo de búsqueda esté visible
    console.log(page.url());

    await page.type('textarea[name="q"]', 'Ejemplo para clase del jueve de automatización.');

    await delay(3000);

    // Presionar Enter para iniciar la búsqueda
    await page.keyboard.press('Enter');

    await delay(3000);

    // Esperar a que los resultados de búsqueda estén visibles
    await page.waitForSelector('#search', { timeout: 10000 });

    // Capturar una captura de pantalla de los resultados de búsqueda
    await page.screenshot({ path: 'search_results_puppeteer.png' });

    await delay(3000);
    // Cerrar el navegador
    await browser.close();
})();
