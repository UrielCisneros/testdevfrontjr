
# EVALUACIÓN TÉCNICA NUXIBA #

Prueba: **DESARROLLADOR JR**

Deadline: **1 día**

Nombre: 

------
## Clona y crea tu repositorio para la evaluación ##
* Clona este repositorio en tu máquina local
* Crear un repositorio público en tu cuenta personal de GitHub, BitBucket o Gitlab
* Cambia el origen remoto para que apunte al repositorio público que acabas crear en tu cuenta
* Coloca tu nombre en este archivo README.md y realiza un push al repositorio remoto

------
## Prueba 1 ##
* Lee la documentación del API de [JSONPlaceholder](http://jsonplaceholder.typicode.com/guide/) y crea una aplicación en el lenguaje de tu preferencia que realice lo siguiente:
	* Listar a los 10 usuarios
	* Al seleccionar un usuario muestra algunos campos con su información(name, username, email, etc.) y coloca 2 botones para poder seleccionar los "posts" y "todos" que estén relacionados con el usuario.
	* Al dar click en el botón de "posts" muestra todas las publicaciones que ha realizado el usuario, cada publicación deberá tener anidados sus comentarios
	* Al dar click en el botón de "todos" muestra las tareas del usuario ordenadas por la propiedad "id" de mayor a menor
	* En la sección de "todos", crea un formulario para poder agregar una nueva tarea al usuario, este debe de contener una caja de texto (title), un checkbox (completed) y un botón de guardar. Al dar click en el botón, manda la información necesaria al API con el método HTTP correcto para que la tarea quede guardada


> *Nota: al hacer la petición de la nueva tarea, el API no la guardará y solo regresará un objeto JSON con la propiedad **id** de la nueva tarea agregada (id: 201), esto indica que todo se realizó de forma correcta*


Algunos endpoints que puedes utilizar:

* https://jsonplaceholder.typicode.com/users 
* https://jsonplaceholder.typicode.com/users/(userId)
* https://jsonplaceholder.typicode.com/users/(userId)/posts
* https://jsonplaceholder.typicode.com/post/(postId)/comments
* https://jsonplaceholder.typicode.com/users/(userId)/todos

Objeto que espera el servidor para guardar la nueva tarea:


```javascript
{
  "userId": <int>,
  "title": <string>
  "completed": <bool>
}
```

**PLUS: Si conoces algún patrón de diseño de software no dudes en usarlo**

------
## Prueba 2 ##

Para esta prueba será necesario agregar al repositorio las sentencias de SQL con las que se creo el esquema(base de datos y tablas) y las consultas realizadas para responder a los siguientes puntos:

* Construye una base de datos y crea las siguientes tablas dentro de ella:
	* logDial con las siguientes columnas
		* idLlamada varchar(10)
		* fechaDeLlamada datetime(50)
		* tiempo varchar(10)
		* idLlamada varchar(10)
		* idLlamada varchar(10)

------
#### Compártenos el link a tu repositorio remoto #### 😊