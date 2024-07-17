# Introducción a QA

**Objetivo**:
Proveer una visión general sobre QA (Quality Assurance), resaltando su importancia en el desarrollo de software y presentando los diferentes tipos de pruebas automáticas.

**Contenido**:

### 1: Definición y Importancia de QA

- **Concepto de QA**: QA es el proceso sistemático de verificar y validar que el software cumple con los requisitos y expectativas especificadas.

- **Diferencia entre QA y Testing**: QA se enfoca en la prevención de defectos durante el desarrollo, mientras que el Testing se centra en la identificación de defectos en el software ya desarrollado.

### 2: Tipos de Pruebas Automáticas

- **Pruebas Unitarias**: Verifican el funcionamiento de componentes individuales o unidades del código (e.g., funciones, métodos).
- **Pruebas de Integración**: Aseguran que diferentes módulos o servicios del sistema funcionan correctamente cuando se combinan.
- **Pruebas Funcionales**: Evalúan el sistema en su totalidad para garantizar que cumple con los requisitos funcionales especificados por el usuario.


### 3: Beneficios de las Pruebas Automáticas

- **Eficiencia y Velocidad**: Las pruebas automáticas pueden ejecutarse rápidamente y repetidamente sin intervención manual.
- **Cobertura Amplia**: Permiten cubrir más escenarios de prueba que las pruebas manuales.
- **Consistencia**: Reducen el riesgo de errores humanos y proporcionan resultados consistentes.
- **Costo-efectividad**: A largo plazo, las pruebas automáticas pueden reducir los costos asociados con la detección y corrección de errores.



## Instalación de Node.js


**Objetivo**: Instalar Node.js y configurar el entorno de desarrollo para trabajar con JavaScript y Node.js.

Contenido:

### 1. Descargar Node.js

- Sitio Web Oficial: Ir a [nodejs.org.](https://nodejs.org/)
- Versiones Disponibles: Generalmente, se recomienda instalar la versión LTS (Long Term Support) para mayor estabilidad.
Instalación en Windows

### 2. Descargar el instalador desde la página oficial.

- Ejecutar el instalador y seguir las instrucciones del asistente de instalación.
- Verificar la instalación abriendo una terminal (CMD) y ejecutando:


```bash
node -v
npm -v
```


## Configuración del Entorno de Desarrollo
### 1. Inicializar un Proyecto Node.js

- Crear un nuevo directorio para el proyecto.

```bash
mkdir proyecto-testunit-qa
cd proyecto-testunit-qa
```

- Inicializar un proyecto Node.js.

```bash
npm init -y
```


### 2. Instalación de Dependencias

- Instalar Jest para pruebas unitarias.

 
```bash
npm install --save-dev jest
```

- Instalar Mocha y Chai para pruebas de integración.

```bash
npm install --save-dev mocha chai
```

- Instalar Cypress para pruebas funcionales.

```bash
npm install --save-dev cypress
```


## NOTA:

La elección entre Mocha/Chai y Jest para pruebas en JavaScript depende de varios factores como la configuración del proyecto, las necesidades específicas de pruebas, y las preferencias personales o del equipo. Aquí te ofrezco una comparación para ayudarte a decidir cuándo usar cada uno:

Mocha/Chai
Mocha es un marco de pruebas flexible que se puede combinar con varias bibliotecas de aserciones como Chai, Sinon, y Should.js. Esto proporciona una gran flexibilidad para configurar el entorno de pruebas según las necesidades específicas.

Cuándo usar Mocha/Chai:

Flexibilidad en la Configuración: Si necesitas un entorno de pruebas altamente personalizable donde puedas elegir entre diferentes bibliotecas de aserciones, espías, y simulacros (mocks), Mocha es una excelente opción.
Proyectos de Larga Escala: En proyectos complejos donde diferentes partes del código requieren diferentes tipos de pruebas (unitarias, integración, etc.), Mocha se adapta bien gracias a su naturaleza agnóstica y modular.
Combinación con Otras Herramientas: Si ya estás usando herramientas como Sinon para espiar o sustituir funciones y Chai para aserciones más descriptivas, integrar Mocha en el flujo de trabajo puede ser más efectivo.
Jest
Jest, desarrollado por Facebook, es una solución de pruebas "todo en uno" que se ha popularizado, especialmente en proyectos que utilizan React y otras tecnologías modernas de JavaScript.

Cuándo usar Jest:

Configuración Mínima: Jest viene preconfigurado para trabajar fuera de la caja, lo que lo hace ideal para proyectos que quieren implementar pruebas rápidamente sin mucha configuración.
Proyectos React: Jest es ampliamente usado en la comunidad React debido a su integración fácil y características como el "snapshot testing" que es útil para componentes de UI.
Entorno Aislado: Jest corre las pruebas en paralelo en procesos separados, lo que lo hace muy rápido y asegura que las pruebas no tengan efectos secundarios entre ellas.
Mocking Extensivo: Jest tiene capacidades de simulacro (mocking) y espiado integradas que son fáciles de usar, facilitando las pruebas de módulos o APIs.
Resumen
Usa Mocha/Chai si: buscas flexibilidad y no te importa configurar tu entorno de pruebas con diferentes herramientas para adaptarlo a tus necesidades específicas.
Usa Jest si: prefieres una solución integral que funcione bien con poco esfuerzo inicial de configuración, especialmente si trabajas con React o si valoras un entorno de pruebas aislado y eficiente.

### Ejemplo de Estructura de Proyecto
Estructura de Directorios

```bash
proyecto-testunit-qa/
├── node_modules/
├── package.json
├── package-lock.json
├── suma.js
├── resta.js
├── divide.js
├── tests/
│   ├── jest/
│   │   ├── suma.test.js
│   │   ├── resta.test.js
│   ├── mocha/
│   │   ├── divide.test.js
├── cypress/
│   ├── integration/
│   │   └── example_spec.js
```

### Scripts en package.json


```json

{
  "name": "proyecto-testunit-qa",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "test:unit": "jest",
    "test:integration": "mocha tests/*.test.js",
    "test:functional": "cypress open"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^29.7.0",
    "mocha": "^10.6.0",
    "chai": "^5.1.1",
    "cypress": "^13.13.0"
  }
}

```


