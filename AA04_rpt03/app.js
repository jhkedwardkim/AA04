//app.js
var express = require('express');
var app = express();
var port = 3000;

app.get('/',function(req,res) {
    res.send('<a href="/hello">Hello Page</a>')
});

app.get('/hello', function(req,res) {
    res.send('Hello AA04');
});

app.get('/comsi', function(req,res) {
    res.send('Hello Comsi!');
});

app.get('/AA04', function(req,res) {
    res.send('Hello AA04, Comsi! My first express server!!!');
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});