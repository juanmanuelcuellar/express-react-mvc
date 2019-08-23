const express = require('express');
const router = express.Router();

router.get('/registroUsuario', (req,res) =>{
    res.render('vistas/registroUsuario');
});

router.get('/ingresoUsuario', (req,res) =>{
    res.render('vistas/ingresoUsuario');
});

module.exports = router;