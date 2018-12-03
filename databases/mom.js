var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');



exports.post = function(req, res){
	var obj = [];
	
	var RHC = req.body.RHC;
	var eacode = req.body.eacode;
	var hcn = req.body.hcn;
	var shsn = req.body.shsn;
	var MEMBER_CODE = req.body.MEMBER_CODE;
	

	db2.all("SELECT * FROM f11 WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode, hcn, shsn] ,function(err,rows){
	
	for (var i in rows) 
		{
			obj.push(rows[i]);	
	
		}
	
		    res.send(obj);
	

		});
 
};