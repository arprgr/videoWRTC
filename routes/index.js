var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
res.sendFile(path.join(__dirname, '../Client/careGen/views/video', 'Index.html'));    
});


router.post('/', function(req, res, next) {
    
conslole.log('in server');    
    
})

module.exports = router;
