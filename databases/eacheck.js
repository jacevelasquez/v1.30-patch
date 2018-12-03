var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');

exports.post = function(req, res){
	var obj = {};
	
	var eacode = JSON.stringify(req.body.eacode);
	
	db2.all("SELECT * FROM localsurveyareas WHERE eacode=?",req.body.eacode, function(err,rows){
		console.log("length : " + rows.length);
		if(rows.length>0)
			
		{
			res.send("existing");
		}	
		else{
			res.send("ok");
		}
		
	});

	 
};