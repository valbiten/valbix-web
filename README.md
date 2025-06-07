# Valbix Web

Este repositorio contiene la web de **Valbix** y un pequeño servidor en Node.js
para gestionar el envío del formulario de contacto y autenticación a través de
Supabase.

## Puesta en marcha

1. Copia el archivo `.env.example` a `.env` y completa las variables de entorno
   necesarias (Supabase y SMTP).
2. Instala las dependencias con `npm install`.
3. Inicia la aplicación con `npm start` y abre `http://localhost:3000` en tu
   navegador.

La web incluye un panel de control accesible desde `/control-panel/` con
registro, inicio de sesión y recuperación de contraseña.
