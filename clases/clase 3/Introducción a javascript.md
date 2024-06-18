# Programación en JavaScript desde cero
### Introducción
JavaScript es un lenguaje de programación que se utiliza principalmente para crear y controlar contenido dinámico en páginas web. En esta guía, aprenderás desde los fundamentos básicos hasta conceptos más avanzados.

### 1. Fundamentos de JavaScript
   Sintaxis básica
   JavaScript es un lenguaje de programación basado en texto que puede ejecutarse tanto en el navegador como en el servidor. La sintaxis básica incluye variables, tipos de datos y operadores.

**Variables**:

Las variables se utilizan para almacenar datos. En JavaScript, puedes declarar variables usando var, let y const.

**javascript**:

```javascript
var nombre = "Juan"; // Variable global o de función
let edad = 25; // Variable local de bloque
const pais = "España"; // Constante
```

**Tipos de datos y estructuras**:

JavaScript soporta varios tipos de datos, incluyendo strings, números, booleanos, arrays y objetos.

```javascript

// Strings
let saludo = "Hola, mundo";

// Números
let numero = 100;

// Booleanos
let esVerdad = true;

// Arrays
let frutas = ["Manzana", "Banana", "Cereza"];

// Objetos
let persona = {
   nombre: "Juan",
   edad: 25,
   pais: "España"
};
```

**Operadores y expresiones**:

Los operadores en JavaScript se utilizan para realizar operaciones sobre variables y valores.

```javascript

// Operadores aritméticos
let suma = 5 + 3;
let resta = 5 - 3;
let multiplicacion = 5 * 3;
let division = 5 / 3;

// Operadores de comparación
let esIgual = 5 == 5; // true
let esEstrictamenteIgual = 5 === "5"; // false

// Operadores lógicos
let esMayor = 5 > 3 && 5 < 10; // true
let esMenor = 5 < 3 || 5 > 10; // false

```

**Condicionales**:

Los condicionales nos permiten ejecutar diferentes bloques de código dependiendo de ciertas condiciones.



`if y else` El condicional if ejecuta un bloque de código si una condición es verdadera. Si la condición es falsa, se puede usar else para ejecutar un bloque de código alternativo.

```javascript

var x = 10;
if (x > 5) {
   console.log("x es mayor que 5");
} else {
   console.log("x es 5 o menor");
}
```
En este ejemplo, se verifica si x es mayor que 5. Si es así, se imprime "x es mayor que 5". Si no, se imprime "x es 5 o menor".


`else if` El condicional else if se utiliza para especificar una nueva condición si la condición anterior en el if es falsa.


```javascript
/*if y else*/
var x = 10;
if (x > 10) {
   console.log("x es mayor que 10");
} else if (x === 10) {
   console.log("x es igual a 10");
} else {
   console.log("x es menor que 10");
}
```
En este ejemplo, primero se verifica si x es mayor que 10. Si no lo es, se verifica si x es igual a 10. Si ninguna de las condiciones anteriores es verdadera, se ejecuta el bloque de else.




`switch` El condicional switch evalúa una expresión y ejecuta el bloque de código correspondiente al valor coincidente. Si no hay coincidencias, se ejecuta el bloque de default.

```javascript
var x = 10;
switch (x) {
   case 5:
      console.log("x es 5");
      break;
   case 10:
      console.log("x es 10");
      break;
   default:
      console.log("x no es ni 5 ni 10");
}
```

En este ejemplo, se verifica el valor de x. Si x es 5, se imprime "x es 5". Si x es 10, se imprime "x es 10". Si x no es ni 5 ni 10, se imprime "x no es ni 5 ni 10".



**Ciclos (bucles)**:

Los ciclos se utilizan para ejecutar un bloque de código varias veces. JavaScript soporta varios tipos de ciclos.




Ciclo `for`El ciclo for se utiliza para ejecutar un bloque de código un número específico de veces.

```javascript
for (let i = 0; i < 5; i++) {
   console.log("El valor de i es: " + i);
}
```
En este ejemplo, el ciclo for ejecuta el bloque de código 5 veces, incrementando el valor de i en 1 cada vez.

El ciclo `while` ejecuta un bloque de código mientras una condición sea verdadera.
```javascript
let i = 0;
while (i < 5) {
   console.log("El valor de i es: " + i);
   i++;
}

```
En este ejemplo, el ciclo while ejecuta el bloque de código mientras i sea menor que 5.


El ciclo `do...while` es similar al ciclo while, pero siempre ejecuta el bloque de código al menos una vez antes de verificar la condición.

```javascript
let i = 0;
do {
   console.log("El valor de i es: " + i);
   i++;
} while (i < 5);
```
En este ejemplo, el ciclo do...while ejecuta el bloque de código al menos una vez, y luego verifica si i es menor que 5 para continuar ejecutando el ciclo.

**Iteración sobre arrays**:
Puedes usar el ciclo `for...of` para iterar sobre los elementos de un array.

```javascript
let frutas = ["Manzana", "Banana", "Cereza"];
for (let fruta of frutas) {
   console.log(fruta);
}

```


### 2. Funciones y Ámbitos
   Las funciones son bloques de código reutilizables que realizan una tarea específica.

Definición y uso de funciones

```javascript
function saludar(nombre) {
    return "Hola, " + nombre;
}
let saludo = saludar("Juan");
console.log(saludo); // Hola, Juan
```

**Funciones anónimas y flecha**:

Las funciones anónimas no tienen nombre y se utilizan comúnmente en callbacks. Las funciones flecha son una sintaxis más corta para escribir funciones.

```javascript
// Función anónima
let sumar = function(a, b) {
   return a + b;
};

console.log(sumar(5, 3)); // 8

// Función flecha
let restar = (a, b) => a - b;
console.log(restar(5, 3)); // 2
```

**Ámbito de variables y closures**:

El ámbito se refiere a la visibilidad de las variables. Las closures son funciones que tienen acceso a variables del ámbito exterior.

```javascript
function crearContador() {
   let contador = 0;
   return function() {
      contador++;
      return contador;
   };
}

let contador1 = crearContador();
console.log(contador1()); // 1
console.log(contador1()); // 2

```

### 3. Programación orientada a objetos en JavaScript

La programación orientada a objetos (POO) es un paradigma basado en "objetos", que son instancias de clases.

**Clases y objetos**:
```javascript
class Persona {
   constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
   }

   saludar() {
      return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
   }
}

let juan = new Persona("Juan", 25);
console.log(juan.saludar()); // Hola, mi nombre es Juan y tengo 25 años.
```

**Herencia y polimorfismo**:

La herencia permite que una clase herede propiedades y métodos de otra clase.

```javascript
class Estudiante extends Persona {
   constructor(nombre, edad, curso) {
      super(nombre, edad);
      this.curso = curso;
   }

   estudiar() {
      return `${this.nombre} está estudiando ${this.curso}.`;
   }
}

let maria = new Estudiante("Maria", 22, "JavaScript");
console.log(maria.saludar()); // Hola, mi nombre es Maria y tengo 22 años.
console.log(maria.estudiar()); // Maria está estudiando JavaScript.

```

**Métodos y propiedades**:

Los métodos son funciones dentro de una clase. Las propiedades son variables dentro de una clase.

```javascript
class Coche {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  arrancar() {
    return `${this.marca} ${this.modelo} está arrancando.`;
  }
}

let coche1 = new Coche("Toyota", "Corolla");
console.log(coche1.arrancar()); // Toyota Corolla está arrancando.

```

**Iteración sobre objetos**:
Puedes usar el ciclo for...in para iterar sobre las propiedades de un objeto.

```javascript
let persona = {
   nombre: "Juan",
   edad: 25,
   pais: "España"
};

for (let propiedad in persona) {
   console.log(propiedad + ": " + persona[propiedad]);
}
```
En este ejemplo, el ciclo for...in itera sobre cada propiedad del objeto persona y la imprime junto con su valor.



## 4. Manipulación del DOM
El DOM (Document Object Model) es una representación estructural de un documento HTML.

**Selección y modificación de elementos**:
```javascript
// Selección de elementos
let elemento = document.getElementById("miElemento");
let elementos = document.getElementsByClassName("miClase");
let elementosTag = document.getElementsByTagName("div");

// Modificación de elementos
elemento.textContent = "Nuevo contenido";
elemento.style.color = "red";
```

**Eventos y manejo de eventos**:
```javascript
// Manejo de eventos
let boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
alert("Botón clickeado!");
});

// Manejo de eventos con función flecha
boton.addEventListener("click", () => alert("Botón clickeado!"));
```


**Creación y eliminación de nodos**:
```javascript
// Creación de nodos
let nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Soy un nuevo párrafo.";
document.body.appendChild(nuevoElemento);

// Eliminación de nodos
let elementoAEliminar = document.getElementById("miElemento");
elementoAEliminar.parentNode.removeChild(elementoAEliminar);
```
