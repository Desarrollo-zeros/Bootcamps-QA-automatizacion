## Preparación del Entorno


## Introducción

Git es un sistema de control de versiones distribuido, diseñado para manejar proyectos con velocidad y eficiencia. Es usado ampliamente en el desarrollo de software para rastrear cambios en el código fuente y facilitar la colaboración entre múltiples desarrolladores.


---

## 1. Instalación de Git

### Para instalar Git, sigue estos pasos dependiendo de tu sistema operativo:

### Windows
1. Descarga el instalador desde [git-scm.com](https://git-scm.com/download/win).
2. Ejecuta el instalador y sigue las instrucciones del asistente.
3. Para verificar la instalación, abre `Git Bash` y escribe:
    ```bash
    git --version
    ```

### macOS
1. Abre `Terminal`.
2. Escribe el siguiente comando:
    ```bash
    brew install git
    ```
   (Necesitas tener Homebrew instalado. Si no lo tienes, puedes instalarlo desde [brew.sh](https://brew.sh/)).

### Linux
1. Abre tu terminal.
2. Escribe el siguiente comando (dependiendo de tu distribución):
    ```bash
    sudo apt-get install git        # Debian/Ubuntu
    sudo yum install git            # CentOS/RHEL
    sudo dnf install git            # Fedora
    ```

---

## 2. Configuración Inicial

Después de instalar Git, es importante configurarlo con tu información personal:

1. Configura tu nombre de usuario:
    ```bash
    git config --global user.name "Tu Nombre"
    ```

2. Configura tu correo electrónico:
    ```bash
    git config --global user.email "tuemail@ejemplo.com"
    ```

3. Verifica tu configuración:
    ```bash
    git config --list
    ```

## 3. Estructura del Proyecto
```
   /test1
   |-- db.sql
   |-- index.html
   |-- scripts.js
   |-- styles.css
   |-- submit.php
```

## 4. Primer Commit

1. Añadir archivos al área de Staging:
```bash
git add .
```
2. Hacer el commit inicial:
```bash
git commit -m "Commit inicial con la estructura básica del proyecto"
```

### 5. Trabajando con Ramas

1. Crear una nueva rama:

```bash
git branch nueva-funcionalidad
```
2. Cambiar a la nueva rama:
```bash
git checkout nueva-funcionalidad
```

3. Realizar cambios en la nueva rama:
       
   - Edita index.html y añade una nueva sección:
   ```html
   <section>
     <h2>Nueva Funcionalidad</h2>
     <p>Descripción de la nueva funcionalidad.</p>
   </section>
   ```

4. Añadir y confirmar los cambios:
```bash
git add index.html
git commit -m "Añadida nueva sección en index.html"
```

## 6. Fusionar Cambios

1. Volver a la rama principal:

```bash
git checkout main
```

2. Fusionar la nueva rama con la rama principal:
```bash
git merge nueva-funcionalidad
```

## 7. Trabajo Remoto

1. Añadir un remoto:

```bash
   git remote add origin <url-del-repositorio>
```

2. Enviar cambios al remoto:
```bash
   git push origin main
```

## 8. Prácticas Recomendadas

- Commits Frecuentes: Realiza commits frecuentemente para mantener un historial claro.
- Mensajes de Commit Descriptivos: Usa mensajes descriptivos para facilitar el seguimiento de cambios.
- Uso de Ramas: Utiliza ramas para trabajar en nuevas características o arreglos sin afectar la rama principal.
- Sincronización Frecuente: Sincroniza tus cambios frecuentemente con el repositorio remoto para evitar conflictos.








