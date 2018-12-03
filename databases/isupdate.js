var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');

exports.is1 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE localarea_listings SET INTERVIEW_STATUS1 = ? WHERE eacode = ? and hcn =? and shsn = ?",[req.body.INTERVIEW_STATUS1, req.body.eacode, req.body.hcn, req.body.shsn],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating localarea_listings 1");
		}
		
		res.send(rows);
		
		});
};

exports.is2 = function(req, res){
	var obj = {};
	
		
	db2.all("UPDATE localarea_listings SET INTERVIEW_STATUS2 = ? WHERE eacode = ? and hcn =? and shsn = ?",[req.body.INTERVIEW_STATUS2, req.body.eacode, req.body.hcn, req.body.shsn],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating localarea_listings 2");
		}
		
		res.send(rows);
		
		});
};

exports.is3 = function(req, res){
	var obj = {};
		
	db2.all("UPDATE localarea_listings SET INTERVIEW_STATUS3 = ? WHERE eacode = ? and hcn =? and shsn = ?",[req.body.INTERVIEW_STATUS3, req.body.eacode, req.body.hcn, req.body.shsn],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating localarea_listings 3");
		}
		
		res.send(rows);
		
		});
};

exports.is4 = function(req, res){
	var obj = {};
		
	db2.all("UPDATE localarea_listings SET INTERVIEW_STATUS4 = ?, INTERVIEW_STATUS_OTH = ? WHERE eacode = ? and hcn =? and shsn = ?",[req.body.INTERVIEW_STATUS4, req.body.INTERVIEW_STATUS_OTH, req.body.eacode, req.body.hcn, req.body.shsn],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating localarea_listings 4");
		}
		
		res.send(rows);
		
		});
};




