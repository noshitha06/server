var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let x = Math.random() * 100;

  if (req.query.x) {
    x = Number(req.query.x);
  }

  let y = Math.log2(x);
  res.send(`log2 applied to ${x} is ${y}`);
});


module.exports = router;
