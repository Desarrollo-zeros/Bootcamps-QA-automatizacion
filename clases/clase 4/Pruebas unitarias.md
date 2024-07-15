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

- Sitio Web Oficial: Ir a [odejs.org.](https://nodejs.org/)
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
mkdir proyecto-qa
cd proyecto-qa
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


### Ejemplo de Estructura de Proyecto
Estructura de Directorios

```bash
proyecto-qa/
├── node_modules/
├── package.json
├── package-lock.json
├── suma.js
├── resta.js
├── divide.js
├── tests/
│   ├── suma.test.js
│   ├── resta.test.js
│   ├── divide.test.js
├── cypress/
│   ├── integration/
│   │   └── example_spec.js
```

### Scripts en package.json


```json

{
  "name": "proyecto-qa",
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
    "jest": "^26.6.3",
    "mocha": "^8.2.1",
    "chai": "^4.2.0",
    "cypress": "^6.0.1"
  }
}
```


