var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db = new sqlite3.Database('test.db');
var http = require('http');


exports.get = function(req, res){

	res.render('fs.ejs'); 

};