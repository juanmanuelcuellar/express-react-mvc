const express = require('express');
const router = express.Router();

router.get('/UsuarioUI', (req,res) =>{
    res.render('vistas/usuarios/usuarioUI')
});

router.get('/UsuarioUI/modificar', (req,res) =>{
    res.render('vistas/usuarios/modificar')
});

router.get('/UsuarioUI/historialCompras', (req,res) =>{
    res.render('vistas/usuarios/historial-compras')
});

router.get('/UsuarioUI/comentarios', (req,res) =>{
    res.render('vistas/usuarios/comentarios')
});

module.exports = router;