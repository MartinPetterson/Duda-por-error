var express = require('express');
var router = express.Router();
var productosModel = require('../../modelos/productosModel');

// var usuariosModel = require('./../../modelos/usuariosModel');


router.get('/', async function (req, res, next) {
var productos = await productosModel.getProductos();
    res.render('admin/productos', {
        layout: 'admin/layout',
        
         productos
    });
});


// Borrar producto

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await productosModel.deleteproductosById(id);
    res.redirect('/admin/productos')
});

module.exports = router;