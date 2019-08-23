const express = require('express');
const router = express.Router();

router.get('/EmpleadosUI', (req,res) =>{
    res.render('vistas/empleados/empleadosUI')
});

router.get('/modificarEmpleado', (req,res) =>{
    res.render('vistas/empleados/modificar')
})

router.get('/comentariosEmpleado', (req,res) =>{
    res.render('vistas/empleados/comentarios')
})

router.get('/ventasEmpleado', (req,res) =>{
    res.render('vistas/empleados/ventas')
})

router.get('/productosEmpleado', (req,res) =>{
    res.render('vistas/empleados/productos')
})

router.get('/usuariosEmpleado', (req,res) =>{
    res.render('vistas/empleados/usuarios-registrados')
})

module.exports = router;