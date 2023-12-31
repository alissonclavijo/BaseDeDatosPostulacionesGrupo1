# Postulaciones - Grupo 1
## Proyecto Tercer Parcial - BDDA
- Este proyecto tiene como objetivo proporcionar un sistema de gestión de postulaciones mediante bases de datos. A continuación, encontrarás un conjunto de instrucciones detalladas para configurar y ejecutar el proyecto en tu entorno local.

## Configuración
1. Crea una carpeta en tu sistema con el nombre deseado para el proyecto.
2. Copia la dirección de la carpeta que acabas de crear.
3. Clona este repositorio utilizando el siguiente comando en tu terminal o consola:
   <pre> 
   git clone https://github.com/alissonclavijo/BaseDeDatosPostulacionesGrupo1.git
   </pre> 
5. Abre el proyecto en tu editor de código preferido, como Visual Studio Code.
   
## Configuración de la Base de Datos

1. Descarga el archivo `SistemaPostulacion.sql` que contiene la estructura de la base de datos.
2. Restaura la base de datos en PostgreSQL utilizando PgAdmin 4 o cualquier otro editor de preferencia.
3. Verifica que la restauración se haya realizado correctamente y que los datos estén disponibles en la base de datos.

## Dentro del proyecto, realiza las siguientes configuraciones:

1. Cambia los datos personales predefinidos de conexión para PostgreSQL y MongoDB en los archivos de configuración correspondientes.
2. Crear un archivo `.env` con los siguientes datos.
   <pre> 
   DB_USER = postgres
   DB_PASSWORD = 12342
   DB_HOST = localhost
   DB_PORT = 5432
   DB_DATABASE = SistemaPostulacion
   MONGO_URI=mongodb://localhost:27017
   </pre> 
   
## Ejecución del Servidor

1. Abre una terminal o consola.

2. Dirígete a la carpeta del servidor ejecutando el siguiente comando:
   <pre> 
   cd server
   </pre> 
4. Instala las dependencias del servidor con el siguiente comando:
   <pre> 
   npm install
   </pre> 
6. Inicia el servidor con el siguiente comando:
   <pre> 
   npm run dev
   </pre> 
## Ejecución del Cliente

1. Abre otra terminal o consola.
2. Dirígete a la carpeta del cliente ejecutando el siguiente comando:
   <pre> 
   cd client
   </pre> 
4. Instala las dependencias del cliente con el siguiente comando:
   <pre> 
   npm install
   </pre> 
6. Inicia el cliente con el siguiente comando:
   <pre> 
   npm start
   </pre> 
   
## Uso

Una vez que hayas seguido los pasos anteriores, podrás acceder al sistema de gestión de postulaciones desde tu navegador en http://localhost:3000/.
Si tienes alguna pregunta o enfrentas algún problema durante la configuración o ejecución del proyecto, no dudes en contactarnos para obtener asistencia adicional.
