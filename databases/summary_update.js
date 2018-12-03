var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');


exports.postF11 = function(req, res){
	var obj = {};
	
	console.log(req.body.MEMBER_CODE);
	
	db2.all("UPDATE f11 SET INTERVIEW_STATUS1 = ?, INTERVIEW_STATUS2 = ?, INTERVIEW_STATUS3 = ?, visit1 = ?, visit2 = ?, visit3 = ?, comment1 = ?, comment2 =?, comment3 = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE = ?",[req.body.INTERVIEW_STATUS1, req.body.INTERVIEW_STATUS2, req.body.INTERVIEW_STATUS3, req.body.visit1, req.body.visit2, req.body.visit3, req.body.comment1, req.body.comment2, req.body.comment3, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 1.1 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postFinal = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f11 SET INTERVIEW_STATUSF = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form FINAL INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};


exports.postF12 = function(req, res){
	var obj = {};
		
	db2.all("UPDATE f12 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 1.2 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF13 = function(req, res){
	var obj = {};
	
		
	db2.all("UPDATE f13 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 1.3 INTERVIEW_STATUS ");
		}
		
		res.send(rows);
		
		});
	
		
		
};

exports.postF14 = function(req, res){
	var obj = {};
	
		
	db2.all("UPDATE f14 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 1.4 INTERVIEW_STATUS ");
		}
		
		res.send(rows);
		
		});
	
		
		
};

exports.postF15 = function(req, res){
	var obj = {};
	
		
	db2.all("UPDATE f15 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 1.5 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF16 = function(req, res){
	var obj = {};
	
		
	db2.all("UPDATE f16 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 1.6 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF17 = function(req, res){
	var obj = {};
	
		
	db2.all("UPDATE f17 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 1.7 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF21 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f21 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 2.1 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF31 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f31 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 3.1 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF32 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f32	SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 3.2 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF41 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f41 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 4.1 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF42 = function(req, res){
	var obj = {};

	
	db2.all("UPDATE f42 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 4.2 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF43 = function(req, res){
	var obj = {};

	
	db2.all("UPDATE f43 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 4.3 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF44 = function(req, res){
	var obj = {};

	
	db2.all("UPDATE f44 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 4.4 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF45 = function(req, res){
	var obj = {};

	
	db2.all("UPDATE f45 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 4.5 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF46 = function(req, res){
	var obj = {};

	
	db2.all("UPDATE f46 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 4.6 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF47 = function(req, res){
	var obj = {};

	
	db2.all("UPDATE f47 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 4.7 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF48 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f48 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 4.8 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF49 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f49 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 4.9 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF410 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f410 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 4.10 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF411 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f411 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 4.11 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF52 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f52 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 5.2 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF53 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f53 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 5.3 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF54 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f54 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 5.4 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF55 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f55 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 5.5 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF56 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f56 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 5.6 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF57 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f57 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 5.7 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF58 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f58 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 5.8 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF59 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f59 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 5.8 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF73 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f73 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 7.3 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF82 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f82 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 8.2 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};

exports.postF83 = function(req, res){
	var obj = {};
	
	db2.all("UPDATE f83 SET INTERVIEW_STATUS = ? WHERE eacode = ? and hcn =? and shsn = ? and MEMBER_CODE =?",[req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else{
			console.log("Success updating form 8.3 INTERVIEW_STATUS ");
		}
		res.send(rows);
		
		});
		
};



