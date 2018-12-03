var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');



exports.post = function(req, res){
	var obj = [];
	
	var input = req.body.areaname;
	if (input  == "") {
		res.send("nodata");
	}
	else
	{
	db2.all("SELECT * FROM localsurveyareas WHERE areaname LIKE '%"+ input +"%' or eacode like '%"+ input +"%' LIMIT 20", function(err,rows){
	
	
	for (var i in rows) 
		{
			obj.push(rows[i]);	
		
		}
		    res.send(obj);
		});
	}
};