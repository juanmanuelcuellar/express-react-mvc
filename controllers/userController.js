const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.render('hola');
});

router.post('/add', (req,res) =>{

    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    
    res.render('index',{
        nombre: nombre,
        apellido: apellido
    });

});

module.exports = router;