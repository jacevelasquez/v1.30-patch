var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');

exports.post = function(req, res){
	
	var obj = {};
	
	var region = req.body.region;
	var province = req.body.province;
	var municipality = req.body.municipality
	
	  db2.all("SELECT * FROM barangay WHERE region ='"+ region + "' and province='"+ province +"' and municipality='"+ municipality + "'", function(err,rows){
		
		rows.forEach(function (row) {
			res.send({array:rows});
			
        });
 
  
	
	 }); 
	 
};
