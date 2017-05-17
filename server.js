(function(){
  'use strict';
  const express = require('express');
  const app = express();
  const port = 3000;

  //app.use(express.static('public'));

  app.get('/dist/main.bundle.js', function(req, res){
    res.sendFile(__dirname + '/dist/main.bundle.js');
  });

  app.get('/dist/main.bundle.js.map', function(req, res){
    res.sendFile(__dirname + '/dist/main.bundle.js.map');
  });

  app.get('/dist/main.css', function(req, res){
    res.sendFile(__dirname + '/dist/main.css');
  });

  app.get('/dist/main.css.map', function(req, res){
    res.sendFile(__dirname + '/dist/main.css.map');
  });

  app.get('/', function(req, res){
    res.sendFile(__dirname + '/dist/index.html');
  });
  app.listen(port, function () {
    console.log('Example app listening on port ' + port);
  });
})();
