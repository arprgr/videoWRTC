var express = require('express');
var router = express.Router();

var path = require('path');

var express = require('express');
var router = express.Router();
var pg = require('pg');
var cloudinary = require ('cloudinary');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.text({ limit: '1gb' })

var connectionString = require(path.join(__dirname, 'config'));

cloudinary.config({ cloud_name: 'simplifyit', api_key: '951594481582174', api_secret: 'Wh-6ElxK0yekJ6RHR_DpNFd1lIY' });

//var models = require('../server/models/index');


router.post('/', urlencodedParser, function(req, res) {
   
    var jsonObj = JSON.parse(req.body);
    console.log('now uploading to cloud');
    console.log(jsonObj.fName);
    
   
       cloudinary.uploader.upload(jsonObj.fName, 
        function(result) {
           console.log(result);
           console.log('----------------------');
           
           console.log(result.secure_url);
           console.log(result.public_id);
        }, 
        { resource_type: "video" });
    
    return res.json({'Result': 'success'});

 
  });


module.exports = router;
