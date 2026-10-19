# Guía y Plan Maestro: Hosting Unificado Cloudflare + Oracle VPS

Este documento contiene la hoja de ruta definitiva para tu portfolio, tus proyectos y el servidor Oracle VPS.

---

## 🎨 1. Logos Oficiales Mx3 (1 Solo Círculo + Scanlines CRT Marcadas)

Se diseñaron **2 versiones oficiales** según tu preferencia:

| Versión | Características | Enlace al Archivo |
| :--- | :--- | :--- |
| **Versión 1: Contorno Neón (Hollow)** | • 1 solo círculo exterior cian.<br>• Interior de las letras transparente (se ve el fondo negro y las scanlines pasando de lado a lado).<br>• Líneas de neón puras (Púrpura, Celeste, Cian). | [mx3_logo_v1_outline_512.png](file:///C:/xampp/htdocs/hub-proyectos/assets/img/mx3_logo_v1_outline_512.png) |
| **Versión 2: Neón Tintado (Solid Tint) *(Predeterminada)*** | • 1 solo círculo exterior cian.<br>• Interior tintado con el color de cada letra y atravesado por las scanlines CRT.<br>• Bordes nítidos y vibrantes. | [mx3_logo_v2_solid_512.png](file:///C:/xampp/htdocs/hub-proyectos/assets/img/mx3_logo_v2_solid_512.png) |

> 📌 **Favicons para Navegador (64x64):**
> *   V1 Contorno: [mx3_logo_v1_outline_64.png](file:///C:/xampp/htdocs/hub-proyectos/assets/img/mx3_logo_v1_outline_64.png)
> *   V2 Tintado: [mx3_logo_v2_solid_64.png](file:///C:/xampp/htdocs/hub-proyectos/assets/img/mx3_logo_v2_solid_64.png) *(ya configurado como `mx3_favicon.png`)*

---

## 🚀 2. Estado Actual del Despliegue en GitHub y Cloudflare

### ✅ PASO A: Repositorio en GitHub (¡COMPLETADO!)
*   **Repositorio creado:** `https://github.com/Mrcx3/marcelomercado-portfolio`
*   **Visibilidad:** Public
*   **Código subido con éxito:** Todos los archivos de tu portfolio (HTML, CSS, JS, imágenes y logos) ya están en la rama `main` en GitHub.

---

### 🟡 PASO B: Conectar con Cloudflare Pages (En la pantalla que tienes abierta)
En la ventana de Cloudflare que mostraste en tu captura (*"Make something new"*):

1. **Haz clic en el primer recuadro: `Connect GitHub`**.
2. Si te pide autorizar la aplicación de Cloudflare en GitHub:
   * Elige **Only select repositories** y selecciona **`marcelomercado-portfolio`** (o dale acceso a todos tus repos).
   * Haz clic en el botón verde **Install & Authorize**.
3. Cloudflare te mostrará la lista de repositorios vinculados:
   * Selecciona **`marcelomercado-portfolio`** y haz clic en **Begin setup**.
4. En los ajustes de despliegue (**Set up builds and deployments**):
   * **Project name:** `marcelomercado` (tu URL será `https://marcelomercado.pages.dev`).
   * **Production branch:** `main`.
   * **Framework preset:** Déjalo en `None` (es HTML/CSS/JS nativo).
   * **Build command:** Déjalo vacío.
   * **Build output directory:** Déjalo vacío o pon `./`.
5. Haz clic en el botón inferior: **Save and Deploy**.

🎉 En 15 segundos tu portfolio estará publicado a nivel mundial en:  
👉 **`https://marcelomercado.pages.dev`**  
*(Con SSL automático, CDN global y ancho de banda ilimitado).*

---

## ☁️ 3. Conexión de Oracle VPS (Baity + Mayorista)

Una vez activo el portfolio, conectamos tu servidor Oracle:
* **Baity Web & API:** Correrá en `/var/www/baity` en Oracle.
* **Mayorista ERP:** Correrá en `/var/www/mayorista` en Oracle.
* **Nombres limpios sin IP:**
  * Opción 100% $0: Subdominios permanentes con DuckDNS + Certbot SSL.
  * Opción Dominio Propio: Cloudflare Tunnel directo a Oracle VPS.
