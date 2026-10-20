/**
 * ==============================================================================
 * MARCELO MERCADO (Mrcx3) — PORTFOLIO & HUB DE PROYECTOS
 * ==============================================================================
 * Catálogo interactivo de desarrollos, especificaciones y problemas que resuelve.
 * Resúmenes claros y directos para todo público, con detalles técnicos expandibles.
 * ==============================================================================
 */

const PROYECTOS = [
    {
        id: "baity-desktop",
        titulo: "Baity — Asistente Virtual Inteligente de Escritorio",
        categoria: "desktop",
        categoriaLabel: "Software de Escritorio / IA Local",
        destacado: true,
        estado: "prod",
        rol: "Desarrollador de Software & Arquitectura Local",
        estadoLabel: "Versión v0.1 (Beta Abierta)",
        imagen: "assets/img/baity_desktop_demo.gif",
        resumen: "Asistente inteligente para Windows con interfaz interactiva transparente. Podés pedirle por voz que abra programas a una hora programada (como Discord o navegadores), agendar recordatorios en su calendario y pedirle ayuda visual en pantalla; con inferencia y reconocimiento de voz procesados en tu propia PC sin pagar suscripciones mensuales.",
        caracteristicas: [
            "🎙️ <strong>Activación y Control por Voz:</strong> Detección de palabra clave (Wake-word), transcripción rápida de voz a texto (STT) y respuesta hablada con voces naturales sintetizadas (TTS).",
            "⏰ <strong>Programador de Tareas & Agenda:</strong> Calendario interactivo integrado para crear recordatorios, eventos y alarmas con alertas visuales y auditivas en pantalla.",
            "🚀 <strong>Automatización de Windows:</strong> Orquestación del sistema operativo para apertura programada de software (ej. Discord, navegadores, herramientas de trabajo) a horas específicas.",
            "👁️ <strong>Visión Multimodal:</strong> Captura y análisis inteligente de lo que el usuario está viendo en pantalla en tiempo real sin requerir salir al escritorio.",
            "✨ <strong>Interfaz Gráfica Transparente:</strong> Ventana borderless en Godot 4.3 con modos ajustables (lateral/inferior), arrastre fluido, modo Always on Top y redimensión nativa de bordes."
        ],
        problemas: [
            "🧩 <strong>Fricción y pérdida de tiempo:</strong> Automatiza la apertura y monitoreo de herramientas cotidianas para que no pierdas el foco buscando programas o cambiando de ventanas.",
            "💸 <strong>Costos elevados de suscripciones:</strong> Reemplaza asistentes comerciales en la nube que cobran cuotas en dólares por una solución gratuita bajo arquitectura Local-First.",
            "🔒 <strong>Riesgos de privacidad y fuga de datos:</strong> Al operar bajo filosofía Local-First, ningún comando de voz, captura de pantalla o texto sale jamás de tu computadora.",
            "♿ <strong>Barreras de accesibilidad:</strong> Brinda una compañía amigable con retroalimentación visual y control por voz accesible para usuarios de cualquier edad o condición."
        ],
        stack: ["Godot 4.3", "Python 3", "Local LLMs", "Faster-Whisper / Vosk", "Edge-TTS / SAPI", "Win32 API", "REST API"],
        enlaces: {
            descarga: "https://github.com/Mrcx3/Baity-/releases/download/v0.1/Baity_Core.zip",
            github: "https://github.com/Mrcx3/Baity-"
        }
    },
    {
        id: "baity-web",
        titulo: "Plataforma Web MVC & API RESTful (Baity)",
        categoria: "web",
        categoriaLabel: "Plataforma Web / API REST",
        destacado: true,
        estado: "prod",
        rol: "Desarrollador Backend Full Stack",
        estadoLabel: "Desplegado en Producción",
        imagen: "assets/img/baity_web_demo.gif",
        resumen: "Sitio web oficial de Baity donde los usuarios pueden registrarse, explorar el catálogo de skins, adoptar mascotas con créditos virtuales y gestionar su perfil, conectado a una base de datos central que se comunica en tiempo real con la app de escritorio.",
        caracteristicas: [
            "🏛️ <strong>Arquitectura MVC en PHP 8.2:</strong> Separación estricta de responsabilidades (Modelos, Vistas, Controladores) sin frameworks pesados, con Singleton en conexión a base de datos para cuidar la memoria RAM.",
            "🔌 <strong>API RESTful JSON:</strong> Endpoints de alta velocidad consumidos por el cliente de escritorio Godot para login criptográfico y sincronización instantánea de inventario.",
            "🛒 <strong>Marketplace de Mascotas & Créditos:</strong> Sistema de catálogo dinámico, adopción de personajes animados y gestión de perfiles de usuario.",
            "🛡️ <strong>Seguridad y Hardening:</strong> PDO con consultas preparadas nativas contra inyecciones SQL, hashing de contraseñas con Bcrypt y sesiones seguras (HttpOnly, SameSite).",
            "✉️ <strong>Correos Transaccionales (PHPMailer):</strong> Recuperación segura de contraseñas mediante tokens criptográficos aleatorios con caducidad temporal."
        ],
        problemas: [
            "🔄 <strong>Guardado en la nube sin complicaciones:</strong> Centraliza las compras de skins y datos de perfil en MySQL para que el usuario mantenga su progreso en cualquier PC.",
            "🛡️ <strong>Ataques y robo de cuentas:</strong> Protege la información contra inyecciones SQL, robo de cookies (XSS/Clickjacking) mediante cabeceras de seguridad estrictas y consultas preparadas reales.",
            "📦 <strong>Actualización sencilla del catálogo:</strong> Permite agregar nuevas mascotas y skins desde la web sin necesidad de compilar ni volver a descargar el instalador de escritorio.",
            "🔑 <strong>Recuperación de contraseñas:</strong> Flujo automatizado para restablecer el acceso por correo electrónico mediante enlaces seguros temporales."
        ],
        stack: ["PHP 8.2", "MySQL / MariaDB", "RESTful JSON API", "PHPMailer", "Nginx", "HTML5 / CSS3", "Seguridad Web"],
        enlaces: {
            web: "https://baity-mx3.duckdns.org/baity/",
            proximamente: "Repo Privado (En Auditoría)"
        }
    },
    {
        id: "vps-automation",
        titulo: "Cazador de Servidores Oracle Always Free & DevOps",
        categoria: "tools",
        categoriaLabel: "Automatización & Cloud",
        destacado: false,
        estado: "prod",
        rol: "DevOps & Automatización Cloud",
        estadoLabel: "Herramienta Interna",
        imagen: "assets/img/cazador_cloud_demo.gif",
        resumen: "Script inteligente creado para conseguir cupo en los codiciados servidores gratuitos de Oracle Cloud (Always Free). Monitorea la disponibilidad 24/7 y reclama una máquina apenas se libera un lugar, configurando automáticamente el servidor con memoria virtual y seguridad lista para usar.",
        caracteristicas: [
            "⚡ <strong>Aprovisionamiento Automatizado:</strong> Script en Python que interactúa directamente con la API REST de OCI (Oracle Cloud Infrastructure) para sortear límites de capacidad.",
            "💾 <strong>Hardening & Optimización de Memoria:</strong> Creación y parametrización de Swap de 2GB para estabilizar entornos de 1GB RAM con MySQL y PHP-FPM bajo carga.",
            "🔐 <strong>Gestión Segura por SSH:</strong> Conexión por pares de llaves RSA/OpenSSH, automatización de tareas con sudo y orquestación remota de servicios Nginx."
        ],
        problemas: [
            "🚫 <strong>Falta de cupos ('Out of Host Capacity'):</strong> En Oracle Cloud las máquinas gratuitas casi nunca tienen lugar libre; este script prueba incansablemente hasta conseguir el servidor sin que tengas que estar pendiente a mano.",
            "💥 <strong>Servidores que se cuelgan por falta de memoria:</strong> Evita que Linux cierre la base de datos o la web por quedarse sin RAM, configurando 2 GB de memoria virtual (Swap) en disco SSD rápido.",
            "🛡️ <strong>Seguridad del servidor:</strong> Configura automáticamente las reglas de firewall (iptables) y accesos protegidos para que la máquina no sea vulnerable a ataques."
        ],
        stack: ["Python 3", "Oracle OCI API", "Cloud VPS & SSH", "Nginx", "DevOps"],
        enlaces: {
            proximamente: "Próximamente en GitHub"
        }
    },
    {
        id: "local-ai-suite",
        titulo: "Local AI & RAG Orchestration Suite (OpenWebUI, OpenCode & llama.cpp)",
        categoria: "tools",
        categoriaLabel: "Automatización & IA Local",
        destacado: true,
        estado: "prod",
        rol: "Integrador & Arquitecto de IA Local",
        estadoLabel: "Entorno Local Configurado",
        imagen: "assets/img/cazador_cloud_demo.gif",
        resumen: "Entorno integral de Inteligencia Artificial 100% offline y privado. Orquestación de modelos masivos (Qwen 35B MoE) mediante llama.cpp, RAG para consulta de documentos, OpenCode con protocolo MCP (Puppeteer) para navegación web automatizada y scripts batch de auto-actualización.",
        caracteristicas: [
            "🧠 <strong>Orquestación de LLMs Masivos (MoE):</strong> Carga y parametrización de modelos cuantizados GGUF (Qwen 3.6 35B A3B) con gestión avanzada de hilos de CPU y caché de memoria.",
            "📚 <strong>RAG Local (Retrieval-Augmented Generation):</strong> Extracción y procesamiento de documentos y PDFs para consulta inteligente sin conexión a internet.",
            "🌐 <strong>Protocolo MCP (Model Context Protocol):</strong> Integración con Puppeteer para otorgarle al modelo capacidades de navegación web y extracción de datos en vivo.",
            "🔄 <strong>Mantenimiento Automatizado (.bat / Python):</strong> Scripts de un solo clic para actualización desatendida de OpenWebUI, OpenCode y binarios de llama.cpp."
        ],
        problemas: [
            "🔒 <strong>Privacidad absoluta de datos confidenciales:</strong> Ningún documento, código o consulta sale de tu hardware hacia servidores de terceros en la nube.",
            "⚙️ <strong>Fricción técnica de configuración:</strong> Automatiza el arranque, el ajuste de rendimiento de Windows y las actualizaciones continuas sin esfuerzo manual."
        ],
        stack: ["Python 3", "llama.cpp", "OpenWebUI", "OpenCode", "MCP (Puppeteer)", "Batch (.bat)", "GGUF MoE"],
        enlaces: {
            proximamente: "Próximamente en GitHub"
        }
    },
    {
        id: "mayorista-erp",
        titulo: "Mayorista ERP — Sistema Integral de Gestión Comercial & Facturación",
        categoria: "web",
        categoriaLabel: "Plataforma Web / ERP Empresarial",
        destacado: false,
        estado: "dev",
        rol: "Desarrollador Web Full Stack",
        estadoLabel: "En Desarrollo",
        imagen: "assets/img/mx3_project_logo.png",
        resumen: "Plataforma web centralizada para comercios mayoristas y distribuidores: gestión de inventario multinivel, listas de precios diferenciadas, control de cuentas corrientes, facturación y panel de administración en PHP 8 y MySQL.",
        caracteristicas: [
            "📊 <strong>Gestión de Inventario Multinivel:</strong> Control en tiempo real de existencias, alertas automáticas de stock crítico y categorización avanzada de artículos.",
            "🏷️ <strong>Listas de Precios Diferenciadas:</strong> Asignación flexible de precios mayoristas, minoristas y promocionales por tipo de cliente o volumen de compra.",
            "👥 <strong>Cuentas Corrientes & Facturación:</strong> Seguimiento detallado de saldos pendientes, historial de compras de clientes y emisión de comprobantes.",
            "🔒 <strong>Arquitectura Empresarial en PHP 8 & MySQL:</strong> Despliegue en servidor propio (Oracle Cloud) con roles de usuario jerárquicos y aislamiento de datos."
        ],
        problemas: [
            "📉 <strong>Pérdida de stock y descontrol de precios:</strong> Elimina el error humano automatizando el cálculo de márgenes y actualizando inventarios al instante.",
            "💸 <strong>Altos costos de sistemas enlatados:</strong> Ofrece una solución a medida sin tarifas mensuales por usuario ni ataduras a plataformas propietarias."
        ],
        stack: ["PHP 8", "MySQL", "JavaScript ES6+", "Nginx", "Cloud VPS", "Seguridad Web"],
        enlaces: {
            proximamente: "En Desarrollo"
        }
    }
];

// ==============================================================================
// RENDERIZADO DINÁMICO CON ACORDEONES EXPANDIBLES
// ==============================================================================

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("projects-container");
    const filtroBtns = document.querySelectorAll(".filter-btn");

    function renderProyectos(filtro = "all") {
        if (!contenedor) return;

        const proyectosFiltrados = filtro === "all" 
            ? PROYECTOS 
            : PROYECTOS.filter(p => p.categoria === filtro);

        contenedor.innerHTML = "";

        proyectosFiltrados.forEach(p => {
            const card = document.createElement("article");
            card.className = `project-card ${p.destacado ? "featured" : ""}`;

            // Viñetas de características
            const caracteristicasHtml = p.caracteristicas
                .map(item => `<li>${item}</li>`)
                .join("");

            // Viñetas de problemas que resuelve
            const problemasHtml = p.problemas
                .map(item => `<li>${item}</li>`)
                .join("");

            // Badges del stack
            const stackHtml = p.stack
                .map(tech => `<span class="tag-badge">${tech}</span>`)
                .join("");

            // Botones de acción
            let accionesHtml = "";
            if (p.enlaces.web) {
                accionesHtml += `
                    <a href="${p.enlaces.web}" target="_blank" rel="noopener" class="btn-card btn-card-primary">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                        Ver Plataforma Web
                    </a>
                `;
            }
            if (p.enlaces.proximamente) {
                accionesHtml += `
                    <span class="btn-card btn-card-disabled">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                        ${p.enlaces.proximamente}
                    </span>
                `;
            }
            if (p.enlaces.github) {
                accionesHtml += `
                    <a href="${p.enlaces.github}" target="_blank" rel="noopener" class="btn-card btn-card-secondary">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        Código en GitHub
                    </a>
                `;
            }
            if (p.enlaces.descarga) {
                accionesHtml += `
                    <a href="${p.enlaces.descarga}" target="_blank" rel="noopener" class="btn-card btn-card-outline">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                        Descargar App (.exe)
                    </a>
                `;
            }

            // HTML de la tarjeta con dos acordeones interactivos
            card.innerHTML = `
                <div class="card-preview-wrap">
                    <img src="${p.imagen}" alt="${p.titulo}" class="card-preview-img" onerror="this.src='assets/img/baity_logo.png'">
                    <span class="status-badge ${p.estado === 'prod' ? 'status-prod' : 'status-dev'}">
                        ${p.estadoLabel}
                    </span>
                </div>
                <div class="card-body">
                    <span class="card-category">${p.categoriaLabel}</span>
                    <h3 class="card-title">${p.titulo}</h3>
                    <div class="project-ficha-meta">
                        <div class="ficha-item"><strong>Rol:</strong> <span>${p.rol || "Desarrollador"}</span></div>
                        <div class="ficha-item"><strong>Estado:</strong> <span>${p.estadoLabel}</span></div>
                    </div>
                    <p class="card-resumen">${p.resumen}</p>
                    
                    <!-- Acordeones Colapsados por Defecto -->
                    <div class="card-accordions">
                        <!-- Acordeón 1: Capacidades Técnicas -->
                        <details class="accordion-item">
                            <summary class="accordion-header">
                                <span class="accordion-header-title">
                                    <span class="accordion-icon">⚡</span>
                                    <span>Capacidades & Aspectos Técnicos Clave</span>
                                </span>
                                <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
                            </summary>
                            <div class="accordion-body">
                                <ul class="card-features-list">
                                    ${caracteristicasHtml}
                                </ul>
                            </div>
                        </details>

                        <!-- Acordeón 2: Problemas que Resuelve -->
                        <details class="accordion-item">
                            <summary class="accordion-header">
                                <span class="accordion-header-title">
                                    <span class="accordion-icon">🎯</span>
                                    <span>Qué Problemas Resolví & Valor Aportado</span>
                                </span>
                                <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
                            </summary>
                            <div class="accordion-body">
                                <ul class="card-features-list">
                                    ${problemasHtml}
                                </ul>
                            </div>
                        </details>
                    </div>

                    <div class="card-tags">
                        ${stackHtml}
                    </div>

                    <div class="card-actions">
                        ${accionesHtml}
                    </div>
                </div>
            `;

            contenedor.appendChild(card);
        });
    }

    // Render inicial
    renderProyectos("all");

    // Manejo de clics en filtros
    filtroBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filtroBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const categoria = btn.getAttribute("data-category");
            renderProyectos(categoria);
        });
    });
});
