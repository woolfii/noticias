const express = require('express');
const app = express();
const morgan = require('morgan');//middleware para obtener informacion de la peticion
const path = require('path');//para unir rutas multiplataforma

const {mongoose} = require('./database') 

//config
app.set('port', process.env.PORT || 3000)
//middleware
app.use(morgan('dev'));
app.use(express.json());
//Rutas
app.use('/api/tasks',require('./routes/tasks.routes'));
app.use('/api/noticias', require('./routes/noticias.routes'));
app.use('/api/categoria', require('./routes/categorias.routes'));
app.use('/api/opinologos', require('./routes/opinologos.routes'));
app.use('/api/opinion',require('./routes/opinion.routes'));
app.use('/api/comentarios',require('./routes/comments.routes'));
//achivos estaticoos
app.use(express.static(path.join(__dirname,'public')));


app.listen(app.get('port'), ()=> {
    console.log("something in the way");
});