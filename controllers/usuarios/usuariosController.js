const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.render('vistas/index');
});

router.get('/index-usuario', (req,res) =>{
    res.render('vistas/index-usuario');
});

module.exports = router;