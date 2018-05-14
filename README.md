# Almundo Examen Frontend

### Autor: Sergio Velasquez

Este es el repositorio que contiene los ejercicios solicitados en el examen de Almundo.

Se tienen 2 carpetas principales:
- **hoteles_api_rest:** Contiene un servidor NodeJS desarrollado con el framework expressJS. 
Este servidor es el encargado de proveer los servicios para el frontend.  
- **hoteles_frontend:*** Contiene el frontend de la prueba desarrollado en Angular 6. 

Para probar el código:

1. Asegurese de tener instalado npm.
2. Asegurese de tener instalado MongoDB. Y que la carpeta donde se inicializa la base de datos sea /data/db. Y el puerto en el que este corriendo sea el 27017.
3. Descargar el repositorio.
4. Usa la terminal para ir a la carpeta hoteles_api_rest.
5. Una vez en la carpeta ejecuta npm install.
6. Ejecuta node app.js.
7. En un navegador web ve a localhost:3000/cargar_bd. Con esto se poblara la base de datos que se utiliza en el proyecto.