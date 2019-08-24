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

router.get('/AdminUI/empleados/agregar', (req,res) =>{
    res.render('vistas/admin/agregarEmpleado')
});

router.get('/AdminUI/productos/agregar', (req,res) =>{
    res.render('vistas/admin/agregarProducto')
});

router.get('/AdminUI/productos/actualizar', (req,res) =>{
    res.render('vistas/admin/actualizarProductos')
})

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