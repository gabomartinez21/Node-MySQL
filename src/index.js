const express = require('express');
const morgan = require('morgan');
const handlebar = require('express-handlebars');//los handlebars se manejan como en php para separar las partes del código como el header, footer, etc.
const path = require('path');//con path podemos configurar la ruta o saber cual es la ruta principal
//Inicializacion
const app = express();

//Opciones
app.set('port', process.env.PORT || 4000);
app.set('views',path.join('__dirname','views'))

app.engine('.hbs',handlebar({
     defaultLayout:'main',//definimos la plantilla principal
     layoutDir:path.join(app.get('views'),'layouts'),//definimos la ruta de los layouts
     partialsDir:path.join(app.get('views'),'partials'),
     extname:'.hbs',//configuramos el tipo de archivos
     helpers:require('./lib/handlebar')
     //hasta este punto tenemos configurado el motor
}))

//Middlewares
//Son funciones que se ejecutan cuando el cliente utiliza alguna funcion
app.use(morgan('dev'));

//Variables globales


//Rutas
//Aqui definimoslas urls que se visitan
app.use(require('./routes/'))

//Public


//Empezar el servidor
app.listen(app.get('port'),()=>{
     console.log('Server on port ', app.get('port'));
});