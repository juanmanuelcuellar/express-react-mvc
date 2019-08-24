const express = require('express');
const router = express.Router();

router.get('/EmpleadosUI', (req,res) =>{
    res.render('vistas/empleados/empleadosUI')
});

router.get('/EmpleadosUI/modificar', (req,res) =>{
    res.render('vistas/empleados/modificar')
})

router.get('/EmpleadosUI/comentarios', (req,res) =>{
    res.render('vistas/empleados/comentarios')
})

router.get('/EmpleadosUI/ventas', (req,res) =>{
    res.render('vistas/empleados/ventas')
})

router.get('/EmpleadosUI/productos', (req,res) =>{
    res.render('vistas/empleados/productos')
})

router.get('/EmpleadosUI/usuarios', (req,res) =>{
    res.render('vistas/empleados/usuarios-registrados')
})

module.exports = router;