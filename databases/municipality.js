var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');

exports.post = function(req, res){
	
	var obj = {};
	var input = req.body.province;

	
	  db2.all("SELECT * FROM municipality WHERE Province LIKE '" + input + "%'", function(err,rows){
		
		rows.forEach(function (row) {
			res.send({array:rows});
			
        });
 
  
	
	 }); 
	 
};

exports.search = function(req, res){
	
	var obj = {};
	
	var region = req.body.region;
	var province = req.body.province;

	
	  db2.all("SELECT * FROM localsurveyareas WHERE eacode LIKE '%" + region + province + "%'", function(err,rows){
		
		rows.forEach(function (row) {
			res.send({array:rows});
			
        });
 
  
	
	 }); 
	 
	 
	 
};
