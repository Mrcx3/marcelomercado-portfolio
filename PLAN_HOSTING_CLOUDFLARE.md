# Guía y Plan Maestro: Hosting Unificado Cloudflare + Oracle VPS

Este documento contiene la hoja de ruta definitiva para desplegar tu **Portfolio en Cloudflare Pages**, conectar tu servidor **Oracle VPS (Baity + Mayorista)** y tener todo tu ecosistema unificado, seguro y con HTTPS gratuito.

---

## 🎨 1. Nuevo Logo Oficial Mx3 (Neón HD + Scanlines CRT)

Se ha renderizado la versión definitiva del logo a partir de vectores matemáticos con precisión subpixel:

*   **Bordes Neón Iluminados:** Cada una de las 3 M cuenta con un borde vibrante de neón (Púrpura `#af50ff`, Celeste `#1ea0ff`, Cian `#00f5ff`) y un relleno interno pastel luminoso que emula tubos de neón reales.
*   **Doble Anillo Neón Exterior:** Aro exterior cian con canal interno y resplandor *neon bloom*, manteniendo las esquinas exteriores **100% transparentes** (sin halos grises).
*   **CRT Scanlines Pronunciadas:** Líneas horizontales de barrido CRT claramente visibles tanto en las letras como en el fondo oscuro `#06080e`.

### Ubicación de los archivos en tu proyecto:
*   📁 **Logo Maestro Neón (512x512):** `assets/img/mx3_logo_512.png`
*   📁 **Favicon Navegador (64x64):** `assets/img/mx3_favicon.png`

---

## ❓ 2. ¿El repositorio del Portfolio debe ser Público o Privado?

> **Recomendación profesional: 100% PÚBLICO.**

### ¿Por qué?
1. **Tu Carta de Presentación:** Los reclutadores técnicos y clientes valoran ver el código fuente del portfolio. Demuestra que sabes escribir HTML5 semántico, CSS moderno con variables y animaciones, y JavaScript vanilla limpio y modular.
2. **Actividad en tu Perfil:** Cada actualización suma "cuadros verdes" de actividad en tu perfil de GitHub (`Mrcx3`), lo cual mejora fuertemente tu visibilidad profesional.
3. **Seguridad Total:** Tu portfolio es un sitio web estático (frontend). No contiene claves de base de datos, contraseñas ni tokens privados, por lo que no existe ningún riesgo en que sea público.

---

## 🚀 3. Paso a Paso: Subir a GitHub y Conectar con Cloudflare Pages

### PASO 1: Crear el repositorio vacío en GitHub (1 minuto)
1. Inicia sesión en tu cuenta de GitHub y ve a: https://github.com/new
2. Completa los campos:
   * **Repository name:** `portfolio` (o `marcelomercado-portfolio`)
   * **Description:** `Portfolio personal y hub de proyectos de Marcelo Mercado (Mx3)`
   * **Public / Private:** Selecciona **Public**.
   * ⚠️ **MUY IMPORTANTE:** **NO marques** las casillas *"Add a README file"*, *"Add .gitignore"* ni *"Choose a license"*. Debe quedar completamente vacío.
3. Haz clic en el botón verde **Create repository**.

---

### PASO 2: Subir tu carpeta local a GitHub (1 comando)
Una vez creado el repositorio vacío, ejecutamos los siguientes comandos desde tu carpeta `C:\xampp\htdocs\hub-proyectos`:

```bash
# 1. Inicializar git en la carpeta del portfolio
git init -b main

# 2. Agregar todos los archivos (HTML, CSS, JS, imágenes y nuevo logo)
git add .

# 3. Guardar el primer commit
git commit -m "feat: portfolio inicial mx3 con nuevo logo neon y enlaces a baity"

# 4. Vincular con tu repositorio de GitHub
git remote add origin https://github.com/Mrcx3/portfolio.git

# 5. Subir a la nube
git push -u origin main
```
*(¡Avisame cuando crees el repo vacío y yo ejecuto estos comandos por vos automáticamente!)*

---

### PASO 3: Conectar GitHub a Cloudflare Pages (2 minutos)
1. Inicia sesión en https://dash.cloudflare.com
2. En el menú lateral izquierdo, ve a **Workers & Pages**.
3. Haz clic en **Create application** (o Crear aplicación) y selecciona la pestaña **Pages**.
4. Haz clic en el botón **Connect to Git** (Conectar a Git).
5. Selecciona tu cuenta de GitHub (`Mrcx3`) y autoriza el acceso al repositorio `portfolio`.
6. En la pantalla de configuración de despliegue (**Set up builds and deployments**):
   * **Project name:** `marcelomercado` (esto definirá tu URL: `marcelomercado.pages.dev`).
   * **Production branch:** `main`.
   * **Framework preset:** Selecciona `None` (es HTML/CSS/JS nativo).
   * **Build output directory:** Déjalo vacío o escribe `./`.
7. Haz clic en **Save and Deploy** (Guardar y Desplegar).

🎉 **¡Listo!** En 15 segundos Cloudflare compila y publica tu sitio en una URL mundial como:  
👉 **`https://marcelomercado.pages.dev`**  
*(Con certificado SSL gratuito, CDN global ultrarrápida y ancho de banda ilimitado de por vida).*

---

## ☁️ 4. Conectar Oracle VPS (Baity + Mayorista)

Una vez que tu Portfolio esté online en Cloudflare Pages:

### Opciones para los nombres de Baity y Mayorista:
* **Opción 100% Gratuita ($0):**  
  Usamos **DuckDNS** (`baity-mx3.duckdns.org` y `mayorista-mx3.duckdns.org`) con **Certbot Let's Encrypt SSL** en el VPS. La IP numérica `146.181.24.196` queda oculta para siempre.
* **Opción Dominio Propio (~$1.50 USD / ~$8.500 ARS anuales):**  
  Si adquieres un dominio (ej: `.site`, `.tech` o `.com.ar`), instalamos el **Cloudflare Tunnel (`cloudflared`)** en el VPS. Todo queda bajo tu marca:
  * `marcelomercado.tech` (Portfolio)
  * `baity.marcelomercado.tech` (Baity)
  * `mayorista.marcelomercado.tech` (Mayorista)
