var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2018.db');
var http = require('http');



exports.post = function(req, res){
	var obj = {};
	
	eacode = req.body.eacode;
	
	db2.run("INSERT INTO localarea_listings (eacode) VALUES ($eacode)",
	{	
	$eacode : eacode,
	});
	

	 
};