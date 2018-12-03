var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');




exports.get = function(req, res){
  db2.all("SELECT * FROM f21", function(err,rows){
	  
    //console.log(rows);
    res.render('form11.ejs',{array:rows,layout:false,session:req.session});
  });
  
};

exports.post = function(req, res){
	var obj = {};
	
	var id = req.body.id;
	var eacode = id.substring(0,12);
	var hcn = id.substring(12,16);
	var shsn = id.substring(16,20);
	var MEMBER_CODE = id.substring(20,22);
	  db2.all("SELECT * FROM f21 WHERE eacode= ? and hcn = ? and shsn = ? and MEMBER_CODE = ? ",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows){
	  rows.forEach(function (row) {
			res.send(row);
        });
	 });
	 
};
