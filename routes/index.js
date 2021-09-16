var express = require('express');
var router = express.Router();
// var nodemailer = require ('nodemailer');

/* GET home page. */
router.get('/',  function(req, res, next) {
  productos = productos.splice(0,5);
  
  res.render('index'

  );
});

module.exports = router;
