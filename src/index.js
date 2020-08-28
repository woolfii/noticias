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
//achivos estaticoos
app.use(express.static(path.join(__dirname,'public')));
app.use('/pub',express.static(path.join(__dirname,'public')));


app.listen(app.get('port'), ()=> {
    console.log("something in the way");
});