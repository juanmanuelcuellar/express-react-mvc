const express = require('express');
const router = express.Router();

router.get('/AdminUI', (req,res) =>{
    res.render('vistas/admin/adminUI')
});

router.get('/modificarAdmin', (req,res) =>{
    res.render('vistas/admin/modificar')
});

router.get('/empleadosAdmin', (req,res) =>{
    res.render('vistas/admin/empleados')
});

router.get('/productosAdmin', (req,res) =>{
    res.render('vistas/admin/productos')
});

router.get('/ventasAdmin', (req,res) =>{
    res.render('vistas/admin/ventas')
});

router.get('/usuariosAdmin', (req,res) =>{
    res.render('vistas/admin/usuarios-registrados')
});

module.exports = router;