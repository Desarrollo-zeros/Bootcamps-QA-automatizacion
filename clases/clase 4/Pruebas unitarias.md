## Pruebas Unitarias con Jest

### Configuración de Jest:
- Agrega scripts para ejecutar Jest en package.json:
```json
{   
  "scripts": {
    "test:jest": "jest"
  }
}
```

### Escritura de Pruebas con Jest:


1. suma.js:

```javascript
function suma(a, b) {
   return a + b; 
}

module.exports = suma;  
```


2. tests/jest/suma.test.js:

```javascript
const suma = require('../../suma');

test('suma 1 + 2 para igualar 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('suma -1 + -1 para igualar -2', () => {
    expect(suma(-1, -1)).toBe(-2);
});
```

3. Ejecución de Pruebas con Jest:
```bash
npm run test:jest
```
Ejemplo de mensaje:

```bash

PS C:\Users\carlo\Documents\Bootcamps-QA-automatizacion\clases\clase 4\proyecto-qa> npm run test:jest

> proyecto-qa@1.0.0 test:jest
> jest tests/jest

 PASS  tests/jest/divide.test.js
 PASS  tests/jest/suma.test.js
 PASS  tests/jest/resta.test.js
                                                                                                                                                                                                                                    
Test Suites: 3 passed, 3 total                                                                                                                                                                                                      
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        0.355 s, estimated 1 s
Ran all test suites matching /tests\\jest/i
```


## Escritura de Pruebas con Mocha y Chai:

### Configuración de Mocha y Chai:

- Agrega scripts para ejecutar mocha en package.json:
```json
{   
  "scripts": {
    "test:mocha": "mocha"
  }
}
```

1. resta.js:

```javascript
function resta(a, b) {
    return a - b;
}
module.exports = resta;
```


2. tests/mocha/resta.test.js:

```javascript
const resta = require('../../resta');
const chai = require('chai');
const expect = chai.expect;

describe('Pruebas Unitarias para la función resta', () => {
    it('resta 5 - 3 para igualar 2', () => {
        expect(resta(5, 3)).to.equal(2);
    });

    it('resta -1 - -1 para igualar 0', () => {
        expect(resta(-1, -1)).to.equal(0);
    });
});
```

3. Ejecución de Pruebas con mocha:
```bash
npm run test:mocha

```

Ejemplo de mensaje:

```bash
PS C:\Users\carlo\Documents\Bootcamps-QA-automatizacion\clases\clase 4\proyecto-qa> npm run test:mocha

> proyecto-qa@1.0.0 test:mocha
> mocha tests/mocha/*.test.js



  Pruebas de Integración para la función divide
    √ divide 6 / 2 para igualar 3
    √ divide 5 / 2 para igualar 2.5
    √ lanza un error cuando se intenta dividir por cero

  Pruebas Unitarias para la función resta
    √ resta 5 - 3 para igualar 2
    √ resta -1 - -1 para igualar 0

  Pruebas Unitarias para la función suma
    √ suma 1 + 2 para igualar 3
    √ suma -1 + -1 para igualar -2


  7 passing (20ms)


```




