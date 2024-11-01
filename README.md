# Sesión con Context

Este proyecto es un sistema básico de gestión de sesión para una aplicación en React que no utiliza React Router. Incluye una pantalla 
de inicio de sesión cuando no hay sesión activa y una pantalla de bienvenida cuando el usuario está autenticado. La gestión de sesión 
se realiza mediante un contexto y un hook personalizados, junto con una API de backend para la autenticación.

## Repositorio

Puedes encontrar el repositorio del proyecto en [Sesion_con_Context](https://github.com/mariano1806/Sesion_con_Context.git).

### Instalación

1. Clona el repositorio:
   
   git clone https://github.com/mariano1806/Sesion_con_Context.git
   cd Sesion_con_Context

## Configura e instala las dependencias en las carpetas frontend y backend por separado:

## Frontend

cd frontend
npm install

## Backend

cd backend
npm install

## Ejecución del Proyecto
Inicia el servidor de backend:

cd backend
npm run dev

## En una nueva terminal, inicia el servidor de frontend:

cd frontend
npm run dev

Uso
Inicio de Sesión: En la pantalla de inicio de sesión, ingresa credenciales válidas. Si la autenticación es exitosa, serás redirigido a la pantalla de bienvenida.
Cerrar Sesión: En la pantalla de bienvenida, selecciona "Cerrar sesión" para limpiar el estado de sesión y regresar a la pantalla de inicio de sesión.
