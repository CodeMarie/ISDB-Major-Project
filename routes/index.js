const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: "Isdb the Internet Song Database" });
});


module.exports = router;
