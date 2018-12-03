var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');


exports.post = function(req, res){
	var obj = {};
	
	
	var eacode = req.body.eacode;
	var hcn = req.body.hcn;
	var shsn = req.body.shsn;
	var MEMBER_CODE = req.body.MEMBER_CODE;
	

		db2.all("SELECT * FROM f12 WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode, hcn, shsn], function(err,rows2){
		  
		if (err) {
				console.log("Error Selecting : %s ",err );
		}
		else 	{
			obj.f12 = rows2;
		}
	
		db2.all("SELECT * FROM f13 WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode, hcn, shsn], function(err,rows2){	
		  
		if (err) {
				console.log("Error Selecting : %s ",err );
		}
		else 	{
			obj.f13 = rows2;
		}
		
		db2.all("SELECT * FROM f14 WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode, hcn, shsn], function(err,rows2){	
		  
		if (err) {
				console.log("Error Selecting : %s ",err );
		}
		else 	{
			obj.f14 = rows2;
		}
		
		db2.all("SELECT * FROM f15 WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode, hcn, shsn], function(err,rows2){	
		  
		if (err) {
				console.log("Error Selecting : %s ",err );
		}
		else 	{
			obj.f15 = rows2;
		}
		
		db2.all("SELECT * FROM f16 WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode, hcn, shsn], function(err,rows2){	
		  
		if (err) {
				console.log("Error Selecting : %s ",err );
		}
		else 	{
			obj.f16 = rows2;
		}
		
		db2.all("SELECT * FROM f17 WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode, hcn, shsn], function(err,rows2){	
		  
		if (err) {
				console.log("Error Selecting : %s ",err );
		}
		else 	{
			obj.f17 = rows2;
		}

		res.send(obj);
		});	 //f17
		});  //f16
		});  //f15
		});  //f14
		});	 //f13
        });  //f12
	
	
	
	
};
