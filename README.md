# copywrite

challege Copy Write

se creo una single page aplication, con las siguentes tecnologías

React
React Bootstrap
Redux
Css
Node, Express
Babel

El proyecto se divido en dos carpetas, una para el frontend y otra para el backend.
La aplicación tiene la funcionalidad de validar si una palabra es una palíndromo o no, también se pueden validar oraciones.

ingresar a la carpeta api, debes ejecutar los siguientes comandos en consola,
“npm install”, seguidamente “npm run dev”, de esta manera la el servidor comienza a ejecutarse por el puerto 3001.
Puedes probar el servidor, usando el navegador o postman. 
Consta de un solo endpoint, el cual recibe por query  params el texto que deseas validar, ejemplo => localhost:3001/iecho?text=test, puedes reemplazar la palabra test por la que desees validar.

Recibirás una respuesta en formato JSON como la siguiente=>
{"text": "tset", "palindrome": false},

también puedes recibir un mensaje de error si no envías la información correctamente como el siguiente => {"error": “no text”},

Para correr el frontend debes ingresar a la carpeta client, ejecutar los siguientes comandos,
“npm install”, luego “npm start”.

ingresas por el navegador, ingresas la siguiente url => http://localhost:3000.

en la navbar encontraras un campo para ingresar texto, allí ingresa la palabra u oración qué deseas validar.
es importante que no ingreses palabras con números o símbolos, sin acentos. 
mas abajo tendrás los resultados de tu consulta, aparecerán en un recuadro, abajo del recuadro veras un mensaje si la palabra o frase es una palindro, de serlo saldrá en color azul, de lo contrario en color rojo. por requerimiento solo podrás ver las ultimas 3 validaciones, desde a ultima a la primera.

para el deploy, se realizo en el servicio de heroku, se dispusieron 2 ramas en github para tal fin, una para frondend y otra para el backend.

frondent => https://frontcopywrite.herokuapp.com

backend => https://copywrit.herokuapp.com/iecho?text=test