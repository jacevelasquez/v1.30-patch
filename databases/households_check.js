var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');


exports.check_hcn = function(req, res){
	var obj = {};
		
	var eacode = req.body.eacode;
	var hcn = req.body.hcn;
	var shsn = req.body.shsn;
	
	
	db2.all("SELECT * FROM localarea_listings WHERE eacode =? and hcn=? and shsn=?",[eacode, hcn, shsn], function(err,rows){
		if(rows.length>0)
		{
			res.send("existing");
		}
		else{
			res.send("exist");
		}
	});

	 
};

exports.check_shsn = function(req, res){
	var obj = {};
		
	var eacode = req.body.eacode;
	var hcn = req.body.hcn;
	var shsn = req.body.shsn;
	
	
	db2.all("SELECT * FROM localarea_listings WHERE eacode =? and shsn=?",[eacode, shsn], function(err,rows){
		if(rows.length>0)
		{
			res.send("existing");
		}
		else{
			res.send("exist");
		}
	});

	 
};

exports.view = function(req, res){
	var obj = {};
	
	
	var eacode = req.body.eacode;
	var hcn = req.body.hcn;
	var shsn = req.body.shsn;
	var MEMBER_CODE = req.body.MEMBER_CODE;
	

	  db2.all("SELECT * FROM localarea_listings WHERE eacode like '%"+eacode.substring(0,9)+"%'", function(err,rows2){
		  
		  if (err) {
              console.log("Error Selecting : %s ",err );
		}
		else{ 
			console.log("Success selecting localarea_listings");
		    
		}
		  
		res.send(rows2);
	
		});	
	
	
};

exports.viewedit = function(req, res){
	var obj = {};

	  db2.all("SELECT * FROM localarea_listings WHERE eacode='"+req.body.eacode+"' and hcn='"+req.body.hcn+"' and shsn='"+req.body.shsn+"'", function(err,rows2){
		  
		  if (err) {
              console.log("Error Selecting : %s ",err );
		}
		  
		res.send(rows2);
	
		});	
	
	
};