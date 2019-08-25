const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// bodyParser

app.use(bodyParser.urlencoded({ extended: false }));

// configurar las vistas

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// bootstrap

app.use(express.static(path.join(__dirname,'public')));

// controllers

// usuario

app.use(require('./controllers/usuarios/usuariosController'));
app.use(require('./controllers/usuarios/cuentas/formValidation'));
app.use(require('./controllers/usuarios/cuentas/usuarioUI'));
app.use(require('./controllers/productos/productosController'));

// empleados

app.use(require('./controllers/empleados/empleadosController'));

// administrador

app.use(require('./controllers/admin/adminController'));

// models

app.use(require('./models/userModels'));

// escuchando el puerto

app.listen(3000, () =>{
    console.log('escuchando puerto 3000');
})