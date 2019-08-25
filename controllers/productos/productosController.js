const express = require('express');
const router = express.Router();

router.get('/index-usuario/Procesadores', (req,res) =>{
    res.render('vistas/productos/procesadores')
});

router.get('/index-usuario/MemoriaRam', (req,res) =>{
    res.render('vistas/productos/memoria-ram')
});

router.get('/index-usuario/FuentePoder', (req,res) =>{
    res.render('vistas/productos/fuente-poder')
});

router.get('/index-usuario/Monitores', (req,res) =>{
    res.render('vistas/productos/monitores')
});

router.get('/index-usuario/TarjetaMadre', (req,res) =>{
    res.render('vistas/productos/tarjeta-madre')
});

router.get('/index-usuario/DiscosDuros', (req,res) =>{
    res.render('vistas/productos/discos-duros')
});

router.get('/index-usuario/Mouse', (req,res) =>{
    res.render('vistas/productos/mouse')
});

router.get('/index-usuario/Teclados', (req,res) =>{
    res.render('vistas/productos/teclados')
});

router.get('/index-usuario/TarjetaVideo', (req,res) =>{
    res.render('vistas/productos/tarjeta-video')
});

router.get('/index-usuario/EquiposHechos', (req,res) =>{
    res.render('vistas/productos/equipos-hechos')
});

module.exports = router;