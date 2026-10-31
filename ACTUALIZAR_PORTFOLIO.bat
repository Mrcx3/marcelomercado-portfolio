@echo off
setlocal enabledelayedexpansion
title Actualizador de Portfolio y Hub - Marcelo Mercado
chcp 65001 >nul
cd /d "%~dp0"

set "KEY=%VPS_SSH_KEY%"
if "%KEY%"=="" for /f "tokens=2*" %%A in ('reg query "HKCU\Environment" /v VPS_SSH_KEY 2^>nul') do set "KEY=%%B"
set "VPS_USER=ubuntu"
set "VPS_IP=146.181.24.196"
set "VPS_DIR=/var/www/hub"

:MENU
cls
echo =====================================================================
echo    ACTUALIZADOR DE PORTFOLIO - MARCELO MERCADO
echo =====================================================================
echo.
echo  Ubicacion actual: %~dp0
echo.
echo  Donde queres publicar tus cambios?
echo.
echo   [1] GitHub + Cloudflare Pages (marcelomercado.pages.dev)
echo   [2] VPS Oracle Cloud (http://%VPS_IP%/)
echo   [3] AMBOS (GitHub/Cloudflare + VPS Oracle) [RECOMENDADO]
echo   [4] Salir
echo.
set /p "OPC=Elegi una opcion [1-4] (por defecto 3): "
if "%OPC%"=="" set "OPC=3"

if "%OPC%"=="1" goto DEPLOY_GIT
if "%OPC%"=="2" goto DEPLOY_VPS
if "%OPC%"=="3" goto DEPLOY_ALL
if "%OPC%"=="4" goto FIN

echo [!] Opcion no valida.
pause
goto MENU

:DEPLOY_GIT
echo.
echo =====================================================================
echo  [1/1] PUBLICANDO EN GITHUB Y CLOUDFLARE PAGES...
echo =====================================================================
set /p "COMMIT_MSG=Mensaje para el commit (Enter para usar fecha/hora): "
if "!COMMIT_MSG!"=="" set "COMMIT_MSG=Actualizacion de portfolio - %date% %time%"

git add .
git commit -m "!COMMIT_MSG!"
git push origin main
if %errorlevel% equ 0 (
    echo.
    echo [OK] Subido a GitHub. Cloudflare Pages actualizara en ~30 segundos:
    echo      https://marcelomercado.pages.dev/
) else (
    echo.
    echo [ERROR] Ocurrio un error al hacer git push. Revisa tu conexion a GitHub.
)
goto FIN

:DEPLOY_VPS
echo.
echo =====================================================================
echo  [1/1] PUBLICANDO EN VPS ORACLE CLOUD (%VPS_IP%)...
echo =====================================================================
if not exist "%KEY%" (
    echo [ERROR] No se encontro la clave SSH. Verifica la variable de entorno VPS_SSH_KEY.
    pause
    goto MENU
)

echo [*] Empaquetando archivos del portfolio...
tar -czf deploy_tmp.tar.gz index.html assets _headers README.md 2>nul
if not exist deploy_tmp.tar.gz (
    tar -czf deploy_tmp.tar.gz index.html assets
)

echo [*] Transfiriendo al servidor %VPS_IP%...
scp -i "%KEY%" -o StrictHostKeyChecking=no deploy_tmp.tar.gz %VPS_USER%@%VPS_IP%:%VPS_DIR%/
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Error al transferir archivos por SCP al VPS.
    del /f /q deploy_tmp.tar.gz 2>nul
    pause
    goto MENU
)

echo [*] Desempaquetando y configurando Nginx en el servidor...
ssh -i "%KEY%" -o StrictHostKeyChecking=no %VPS_USER%@%VPS_IP% "cd %VPS_DIR% && tar -xzf deploy_tmp.tar.gz && rm -f deploy_tmp.tar.gz && sudo chown -R ubuntu:www-data %VPS_DIR% && sudo chmod -R 755 %VPS_DIR% && sudo systemctl reload nginx"
del /f /q deploy_tmp.tar.gz 2>nul

echo.
echo [OK] Portfolio actualizado con exito en el VPS!
echo      Ver en vivo: http://%VPS_IP%/
goto FIN

:DEPLOY_ALL
echo.
echo =====================================================================
echo  [PASO 1/2] PUBLICANDO EN GITHUB Y CLOUDFLARE PAGES...
echo =====================================================================
set /p "COMMIT_MSG=Mensaje para el commit (Enter para usar fecha/hora): "
if "!COMMIT_MSG!"=="" set "COMMIT_MSG=Actualizacion de portfolio - %date% %time%"

git add .
git commit -m "!COMMIT_MSG!"
git push origin main
if %errorlevel% equ 0 (
    echo [OK] Subido a GitHub correctamente.
) else (
    echo [AVISO] Error en git push, continuando con el VPS...
)

echo.
echo =====================================================================
echo  [PASO 2/2] PUBLICANDO EN VPS ORACLE CLOUD (%VPS_IP%)...
echo =====================================================================
if not exist "%KEY%" (
    echo [ERROR] No se encontro la clave SSH. Verifica la variable de entorno VPS_SSH_KEY.
    pause
    goto FIN
)

echo [*] Empaquetando archivos del portfolio...
tar -czf deploy_tmp.tar.gz index.html assets _headers README.md 2>nul
if not exist deploy_tmp.tar.gz (
    tar -czf deploy_tmp.tar.gz index.html assets
)

echo [*] Transfiriendo al servidor %VPS_IP%...
scp -i "%KEY%" -o StrictHostKeyChecking=no deploy_tmp.tar.gz %VPS_USER%@%VPS_IP%:%VPS_DIR%/
if %errorlevel% neq 0 (
    echo [ERROR] Error al transferir archivos por SCP.
    del /f /q deploy_tmp.tar.gz 2>nul
    pause
    goto FIN
)

echo [*] Desempaquetando y configurando Nginx en el servidor...
ssh -i "%KEY%" -o StrictHostKeyChecking=no %VPS_USER%@%VPS_IP% "cd %VPS_DIR% && tar -xzf deploy_tmp.tar.gz && rm -f deploy_tmp.tar.gz && sudo chown -R ubuntu:www-data %VPS_DIR% && sudo chmod -R 755 %VPS_DIR% && sudo systemctl reload nginx"
del /f /q deploy_tmp.tar.gz 2>nul

echo.
echo =====================================================================
echo  TODO ACTUALIZADO EXITOSAMENTE
echo  * Cloudflare Pages: https://marcelomercado.pages.dev/
echo  * VPS Oracle Cloud: http://%VPS_IP%/
echo =====================================================================

:FIN
echo.
echo Presiona cualquier tecla para cerrar...
pause >nul
