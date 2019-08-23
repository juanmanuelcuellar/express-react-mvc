const express = require('express');
const router = express.Router();

router.get('/UsuarioUI', (req,res) =>{
    res.render('vistas/usuarios/usuarioUI')
});

router.get('/modificarUsuario', (req,res) =>{
    res.render('vistas/usuarios/modificar')
});

router.get('/historialCompras', (req,res) =>{
    res.render('vistas/usuarios/historial-compras')
});

router.get('/comentariosUsuario', (req,res) =>{
    res.render('vistas/usuarios/comentarios')
});

module.exports = router;