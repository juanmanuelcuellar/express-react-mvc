const express = require('express');
const router = express.Router();

router.get('/usuario', (req,res) =>{
    res.render('index');
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