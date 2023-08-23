BaseDeDatosPostulacionesGrupo1
Proyecto Tercer Parcial - BDDA

Este proyecto trata sobre un sistema de bases de datos para la gestión de postulaciones. Aquí encontrarás instrucciones para configurar y ejecutar el proyecto en tu entorno local.

Configuración
Crea una carpeta en tu sistema con el nombre deseado para el proyecto.

Copia la dirección de la carpeta que has creado.

Clona este repositorio utilizando el siguiente comando en tu terminal o consola:

git clone https://github.com/alissonclavijo/BaseDeDatosPostulacionesGrupo1.git
Abre el proyecto en tu editor de código preferido, como Visual Studio Code.

Dentro del proyecto, realiza las siguientes configuraciones:

Cambia los datos personales predefinidos de conexión para PostgreSQL y MongoDB en el archivo de configuración correspondiente.
Configuración de la Base de Datos
Descarga el archivo SistemaPostulacion.sql que contiene la estructura de la base de datos.

Restaura la base de datos en PostgreSQL utilizando PgAdmin 4 o cualquier otro editor de preferencia.

Verifica que la restauración se haya realizado correctamente y que los datos están disponibles en la base de datos.

Ejecución del Servidor
Abre una terminal o consola.

Dirígete a la carpeta del servidor ejecutando el siguiente comando:

cd server
Instala las dependencias del servidor con el siguiente comando:

npm install
Inicia el servidor con el siguiente comando:

npm run dev
Ejecución del Cliente
Abre otra terminal o consola.

Dirígete a la carpeta del cliente ejecutando el siguiente comando:

cd client
Instala las dependencias del cliente con el siguiente comando:

npm install
Inicia el cliente con el siguiente comando:

npm start
Uso
Una vez que hayas seguido los pasos anteriores, podrás acceder al sistema de gestión de postulaciones desde tu navegador en http://localhost:3000/.

