var express = require('express');
var fs = require('fs');

var app = express();
var port = 3000;

var requests = 0;

var database = ["Jackson","Honorato","Joshua","Francis","Garrett","Jerry","Silas","Kamal","Alvin","Vernon","Craig","Hop","Nissim","Dante","Cairo","Seth","Kelly","Boris","Ivor","Cooper","Caesar","Keane","Carlos","Neil","Malcolm","Zeph","Isaac","Chadwick","Hakeem","Samuel","Bernard","Tucker","Driscoll","Lucius","Derek","Mohammad","Camden","Bruce","Cullen","Clayton","Avram","Isaac","Matthew","Randall","Oscar","Ryan","Macaulay","Elmo","Wallace","Bruno","Kasimir","Bert","Neil","Oliver","Rigel","Fritz","Odysseus","Drew","Kane","Cadman","Burke","Malcolm","Asher","Herman","Driscoll","Ferris","Buckminster","Hyatt","Jack","Garth","Micah","Keegan","Stewart","Flynn","Fuller","Len","Chase","Akeem","Victor","Cade","Callum","James","Daniel","Sylvester","Cruz","Avram","Curran","Xavier","Gannon","Rashad","Brent","Jin","Holmes","Chester","Yardley","Phelan","Kane","Brendan","Cooper","Amir"];

// app.get('/', function(req, res){
//   requests++;
//   var time = new Date();

//   console.log(time+' >>> viene un request!\n y van: ',requests);
  
//   var text = 'Hello World - requests: '+ requests;
//   res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Content-Length', text.length);
//   res.end(text);
// });

app.get('/name/:search', function(req, res){
  var query = req.params.search;
  var buffer = [];

  database.forEach(function(el,i){

    if(el.indexOf(query)>-1){
      buffer.push(el);
    }

  });

  buffer = JSON.stringify(buffer);

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', buffer.length);
  res.end( buffer );

});

app.get('/', function(req, res){

  fs.readFile('index.html', 'utf8' , function(err, html){
    console.log('html>', html);

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', html.length);

    res.end(html);
  });


});

app.listen(port);
console.log('Listening on port :'+port+' asdf');