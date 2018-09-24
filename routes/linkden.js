var express = require('express');
var router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
    res.redirect('https://www.linkedin.com/in/pelane-sanon-496642171/')
});


module.exports = router;