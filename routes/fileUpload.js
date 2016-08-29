var express = require('express');
var router = express.Router();
var randomstring = require("randomstring");


var config = require('./config'),
    fs = require('fs'),
    sys = require('sys');

var path = require('path');

var express = require('express');
var router = express.Router();
var pg = require('pg');
//var connectionString = 'pg://postgres:postgres@localhost/caregen'
var connectionString = require(path.join(__dirname, 'config'));

//var models = require('../server/models/index');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.text({ limit: '1gb' })


router.post('/', urlencodedParser, function (req, res) {

 console.log('doing formidable');
    
 //console.log(req.body);

 var fileBlob = req.body;    

 console.log(req.body);  
 
 var buf = new Buffer(fileBlob, 'base64');
    
  console.log('created new buf');
    
  var filePathBase = __dirname + '\\uploads' + '\\';    
  
  console.log(filePathBase);
 
  var fname = randomstring.generate({
                length: 8,
                charset: 'alphabetic'
                });    
    
  var fileName= filePathBase + fname + '.webm';
    
  console.log(fileName);
      
  fs.writeFile(fileName, buf, function(err) {
    if(err) {
      console.log("err", err);
    } else {
      return res.json({'status': 'success'});
    }
  }) 
    

});

module.exports = router;


