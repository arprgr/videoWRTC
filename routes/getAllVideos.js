var express = require('express');
var router = express.Router();

var path = require('path');

var express = require('express');
var router = express.Router();
var pg = require('pg');

var connectionString = require(path.join(__dirname, 'config'));

//var models = require('../server/models/index');


router.get('/', function(req, res) {
 var results = [];

  console.log('getting all videos');
  
            
var fs = require('fs');

var path = __dirname + '\\uploads' ;

console.log(path);

var files = fs.readdirSync(path);    
    
 console.log(files);
    
    for (var i in files) {
        console.log('Model Loaded: ' + files[i]);
        results.push({i : files[i]});
}



    console.log('displaying files');
    console.log(results);

    res.contentType('application/json');
    res.send(JSON.stringify(files));
   
  
  });


module.exports = router;
