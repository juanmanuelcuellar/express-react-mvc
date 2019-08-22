const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.render('vistas/index');
});

router.get('/registroUsuario', (req,res) =>{
    res.render('vistas/registroUsuario');
});

router.get('/ingresoUsuario', (req,res) =>{
    res.render('vistas/ingresoUsuario');
});

router.get('/index-usuario', (req,res) =>{
    res.render('vistas/index-usuario');
});

router.get('/UsuarioUI', (req,res) =>{
    res.render('vistas/usuarios/usuarioUI')
});

module.exports = router;