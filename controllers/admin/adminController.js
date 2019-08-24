const express = require('express');
const router = express.Router();

router.get('/AdminUI', (req,res) =>{
    res.render('vistas/admin/adminUI')
});

router.get('/AdminUI/modificar', (req,res) =>{
    res.render('vistas/admin/modificar')
});

router.get('/AdminUI/empleados', (req,res) =>{
    res.render('vistas/admin/empleados')
});

router.get('/AdminUI/productos', (req,res) =>{
    res.render('vistas/admin/productos')
});

router.get('/AdminUI/ventas', (req,res) =>{
    res.render('vistas/admin/ventas')
});

router.get('/AdminUI/usuarios', (req,res) =>{
    res.render('vistas/admin/usuarios-registrados')
});

module.exports = router;