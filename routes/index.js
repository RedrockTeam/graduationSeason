var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile('views/index.html');
});

router.get('/produce',function(req, res){
    res.sendfile('views/produce.html')
})

module.exports = router;
