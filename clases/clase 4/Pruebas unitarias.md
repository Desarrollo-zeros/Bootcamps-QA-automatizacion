## Pruebas Unitarias con Jest

### Configuración de Jest:
- Agrega scripts para ejecutar Jest en package.json:
```json
{   
  "scripts": {
    "test:jest": "jest tests/jest"
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

PS C:\Users\carlo\Documents\Bootcamps-QA-automatizacion\clases\clase 4\proyecto-testunit-qa> npm run test:jest

> proyecto-testunit-qa@1.0.0 test:jest
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
    "test:mocha": "mocha tests/mocha/*.test.js"
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
describe('Pruebas Unitarias para la función resta', () => {
    it('resta 5 - 3 para igualar 2', async () => {
        const { expect } = await import('chai');
        expect(resta(5, 3)).to.equal(2);
    });

    it('resta -1 - -1 para igualar 0', async () => {
        const { expect } = await import('chai');
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
PS C:\Users\carlo\Documents\Bootcamps-QA-automatizacion\clases\clase 4\proyecto-testunit-qa> npm run test:mocha

> proyecto-testunit-qa@1.0.0 test:mocha
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



## Ejercicios para la casa

### Ejercicio 1

Filtrado de Usuarios por Edad
    
    Historia de Usuario:
    Como administrador del sistema,
    quiero poder filtrar usuarios por edad,
    para realizar campañas de marketing dirigidas.

    **Criterios de Aceptación**:

    La función debe aceptar una lista de usuarios y una edad mínima.
    Debe retornar una lista de usuarios que tengan la edad mínima o más.


```javascript
const usuarios = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 17 },
    { nombre: 'Carlos', edad: 32 }
];

function filtrarUsuariosPorEdad(usuarios, edadMinima) {
    return usuarios.filter(usuario => usuario.edad >= edadMinima);
}

// Uso de la función:
console.log(filtrarUsuariosPorEdad(usuarios, 18));  // [{ nombre: 'Juan', edad: 25 }, { nombre: 'Carlos', edad: 32 }]
```


### Ejercicio 2

Verificación de Palíndromos

    Historia de Usuario:
    Como usuario,
    quiero verificar si una palabra es un palíndromo,
    para satisfacer mi curiosidad sobre palabras que se leen igual al revés.

    **Criterios de Aceptación**:

    La función debe aceptar una cadena de texto.
    Debe retornar verdadero si la cadena es un palíndromo, falso en caso contrario.

```javascript
function esPalindromo(texto) {
    const textoNormalizado = texto.replace(/\W/g, '').toLowerCase();
    return textoNormalizado === textoNormalizado.split('').reverse().join('');
}

// Uso de la función:
console.log(esPalindromo("Anita lava la tina"));  // true

```

### Ejercicio 3

Conversor de Temperatura

    Historia de Usuario:
    Como usuario,
    quiero convertir grados Celsius a Fahrenheit,
    para entender mejor las temperaturas en algunos medios de comunicación.

    **Criterios de Aceptación**:

    La función debe aceptar un número (temperatura en Celsius).
    Debe retornar la temperatura convertida a Fahrenheit.
    Código:


```javascript
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Uso de la función:
console.log(celsiusAFahrenheit(30));  // 86
```

### Ejercicio 4

Contador de Palabras

    Historia de Usuario:
    Como editor de contenido,
    quiero contar las palabras de un artículo,
    para asegurarme de que cumple con los requisitos de longitud.

    **Criterios de Aceptación**:

    La función debe aceptar un texto.
    Debe retornar el número de palabras en el texto.

```javascript
function contarPalabras(texto) {
    return texto.trim().split(/\s+/).length;
}

// Uso de la función:
console.log(contarPalabras("Hola mundo, esta es una prueba."));  // 6

```



### Ejercicio 5

Generador de URLs Amigables

    Historia de Usuario:
    Como desarrollador web,
    quiero generar URLs amigables a partir de títulos de artículos,
    para mejorar el SEO del sitio web.
    
    **Criterios de Aceptación**:
    
    La función debe aceptar un título de artículo.
    Debe retornar una URL amigable sin espacios, caracteres especiales y todo en minúsculas.


```javascript
function generarUrlAmigable(titulo) {
    return titulo.toLowerCase().replace(/[\s\W-]+/g, '-');
}

// Uso de la función:
console.log(generarUrlAmigable("Cómo Hacer Pan en Casa"));  // "como-hacer-pan-en-casa"
```

### Ejercicio 6

Validación de Número Telefónico

    Historia de Usuario:
    Como usuario de un formulario en línea,
    quiero que mi número telefónico sea validado,
    para asegurar que tenga el formato correcto antes de ser enviado.
    
    **Criterios de Aceptación**:
    
    La función debe aceptar un número telefónico como cadena.
    Debe validar que el número cumpla con un formato específico (e.g., +1234567890).

```javascript
function validarTelefono(telefono) {
    return /^\+\d{10}$/.test(telefono);
}

// Uso de la función:
console.log(validarTelefono("+1234567890"));  // true
```

### Ejercicio 7

Cálculo de Descuento

    Historia de Usuario:
    Como cliente de una tienda en línea,
    quiero saber el precio final de un producto después de aplicar un descuento,
    para decidir si realizar la compra.
    
    **Criterios de Aceptación**:
    
    La función debe aceptar un precio y un porcentaje de descuento.
    Debe retornar el precio final después del descuento.

```javascript
function calcularDescuento(precio, descuento) {
    return precio - (precio * (descuento / 100));
}

// Uso de la función:
console.log(calcularDescuento(100, 15));  // 85
```


### Ejercicio 8

Días Hasta el Cumpleaños

    Historia de Usuario:
    Como usuario,
    quiero saber cuántos días faltan para mi próximo cumpleaños,
    para planear mi celebración con antelación.
    
    **Criterios de Aceptación**:
    
    La función debe aceptar una fecha de cumpleaños.
    Debe retornar el número de días hasta el próximo cumpleaños.


```javascript
function diasHastaCumpleanos(fechaCumpleanos) {
    const hoy = new Date();
    const proximoCumple = new Date(hoy.getFullYear(), fechaCumpleanos.getMonth(), fechaCumpleanos.getDate());
    if (proximoCumple < hoy) {
        proximoCumple.setFullYear(proximoCumple.getFullYear() + 1);
    }
    return Math.ceil((proximoCumple - hoy) / (1000 * 60 * 60 * 24));
}

// Uso de la función:
console.log(diasHastaCumpleanos(new Date("2024-10-05")));  // Número de días hasta el 5 de octubre de 2024

```

### Ejercicio 9

Suma de Elementos de un Array

    Historia de Usuario:
    Como científico de datos,
    quiero sumar todos los elementos de un array de números,
    para calcular estadísticas descriptivas.
    
    **Criterios de Aceptación**:
    
    La función debe aceptar un array de números.
    Debe retornar la suma de los elementos del array.


```javascript
function sumaElementos(array) {
    return array.reduce((acum, valor) => acum + valor, 0);
}

// Uso de la función:
console.log(sumaElementos([1, 2, 3, 4, 5]));  // 15
```

### Ejercicio 10

Clasificación de Edades

    Historia de Usuario:
    Como desarrollador de juegos,
    quiero clasificar a los usuarios en categorías de edad ('niño', 'adolescente', 'adulto'),
    para personalizar la experiencia de juego según el grupo de edad.
    
    **Criterios de Aceptación**:
    
    La función debe aceptar una edad como número.
    Debe retornar la categoría de edad correspondiente.

```javascript
function clasificarEdad(edad) {
    if (edad < 13) {
        return 'niño';
    } else if (edad >= 13 && edad <= 17) {
        return 'adolescente';
    } else {
        return 'adulto';
    }
}

// Uso de la función:
console.log(clasificarEdad(25));  // "adulto"
```


### Ejercicio Funcional



Historia de Usuario
Título: Validación de Formulario de Usuario
Como desarrollador de una aplicación,
Quiero implementar validaciones efectivas para el formulario de usuario,
Para asegurar que todos los datos ingresados son correctos y completos antes de ser procesados.

Criterios de Aceptación
1. Todos los campos deben ser completados para que el formulario sea válido.
2. El teléfono debe seguir un formato específico (por ejemplo, +1234567890).
3. La fecha de nacimiento debe ser una fecha válida y el usuario debe ser mayor de 18 años.
4. El documento debe ser un número válido y único.
5. El grupo sanguíneo debe ser uno de los siguientes valores: A+, A-, B+, B-, AB+, AB-, O+, O-.


- Crear en el proyecto proyecto-testunit-qa un archivo llamado validarFormulario.js
```javascript
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
```
- crea en el proyecto proyecto-testunit-qa en la ruta test/jest/userForm.test.js

```javascript
// tests/jest/userForm.test.js
const validateUserForm = require('../../validateUserForm');

/**
 * HISTORIA DE USUARIO:
 * COMO administrador de la plataforma,
 * QUIERO asegurarme de que todos los datos ingresados en el formulario de usuario sean correctos,
 * PARA garantizar que la información almacenada en nuestra base de datos es fiable y precisa.
 *
 * CRITERIOS DE ACEPTACIÓN:
 * - Todos los campos deben ser completados.
 * - El teléfono debe seguir un formato específico (+1234567890).
 * - La fecha de nacimiento no debe indicar que el usuario es menor de 18 años.
 * - El grupo sanguíneo debe ser uno válido (A+, A-, B+, B-, AB+, AB-, O+, O-).
 *
 * DATOS DE PRUEBA:
 * const userDataValid = {
 *   nombre: 'Juan',
 *   apellido: 'Pérez',
 *   documento: '12345678',
 *   cedula: '87654321',
 *   telefono: '+1234567890',
 *   fechaNacimiento: '1990-05-15',
 *   grupoSanguineo: 'O+',
 *   adicional: 'Ninguna'
 * };
 * const userDataInvalid = {
 *   nombre: '',
 *   apellido: 'Gomez',
 *   documento: '',
 *   cedula: '',
 *   telefono: '12345',
 *   fechaNacimiento: '2010-05-15',
 *   grupoSanguineo: 'XYZ',
 *   adicional: 'Algún texto'
 * };
 */


describe('Validación del formulario de usuario', () => {
    test('Validar datos de usuario correctos', () => {
        const result = validateUserForm(userDataValid);
        expect(result.isValid).toBe(true);
    });

    test('Validar datos de usuario incorrectos', () => {
        const result = validateUserForm(userDataInvalid);
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain('Todos los campos son obligatorios');
        expect(result.errors).toContain('Formato de teléfono inválido');
        expect(result.errors).toContain('El usuario debe ser mayor de 18 años');
        expect(result.errors).toContain('Grupo sanguíneo inválido');
    });
});
```

- crea en el proyecto proyecto-testunit-qa en la ruta test/mocha/userForm.test.js


```javascript
// tests/mocha/userForm.test.js
const { expect } = require('chai');
const validateUserForm = require('../../validateUserForm');

/**
 * HISTORIA DE USUARIO:
 * COMO administrador de la plataforma,
 * QUIERO asegurarme de que todos los datos ingresados en el formulario de usuario sean correctos,
 * PARA garantizar que la información almacenada en nuestra base de datos es fiable y precisa.
 *
 * CRITERIOS DE ACEPTACIÓN:
 * - Todos los campos deben ser completados.
 * - El teléfono debe seguir un formato específico (+1234567890).
 * - La fecha de nacimiento no debe indicar que el usuario es menor de 18 años.
 * - El grupo sanguíneo debe ser uno válido (A+, A-, B+, B-, AB+, AB-, O+, O-).
 */

describe('Validación del formulario de usuario', () => {
    it('debe validar correctamente un usuario con datos válidos', () => {
        const result = validateUserForm(userDataValid);
        expect(result.isValid).to.be.true;
    });

    it('debe identificar errores en un usuario con datos inválidos', () => {
        const result = validateUserForm(userDataInvalid);
        expect(result.isValid).to.be.false;
        expect(result.errors).to.include.members([
            'Todos los campos son obligatorios',
            'Formato de teléfono inválido',
            'El usuario debe ser mayor de 18 años',
            'Grupo sanguíneo inválido'
        ]);
    });
});
```

Nota: Crea 2 HU para JEST y 2 HU para mocha, donde crees criterios de pruebas nuevos.