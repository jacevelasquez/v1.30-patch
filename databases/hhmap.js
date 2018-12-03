var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '122.53.86.117',
  port	   : '3674',
  user     : 'johncarlo',
  password : 'nsis',
  database : 'nns2018db'
});


exports.get = function(req, res){
	
	var id = req.params.id;
	var eacode2 = id.substring(0, 12);
	
	res.render('map.ejs',{layout:false,session:req.session}); 
	
};

exports.hhlist_map = function(req, res){

	var obj = {};
	if(req.body.option.length == 1) {	
	  connection.query("select  localarea_listings_tl_map.eacode,localarea_listings_tl_map.hcn,localarea_listings_tl_map.shsn,localarea_listings_tl_map.longitude, localarea_listings_tl_map.latitude, localarea_listings_tl_map.hhead, localarea_listings_tl_map.INTERVIEW_STATUS4 from localarea_listings_tl_map INNER JOIN info_tbl ON info_tbl.eacode=localarea_listings_tl_map.eacode where info_tbl.tno='"+req.body.option+"'", function(err,rows){
		if (err) {
              console.log("Error Selecting : %s ",err );
		}
			res.send(rows);
	});
	}
    if(req.body.option.length == 2) {	
	  connection.query("select  localarea_listings_tl_map.eacode,localarea_listings_tl_map.hcn,localarea_listings_tl_map.shsn,localarea_listings_tl_map.longitude, localarea_listings_tl_map.latitude, localarea_listings_tl_map.hhead, localarea_listings_tl_map.INTERVIEW_STATUS4 from localarea_listings_tl_map INNER JOIN info_tbl ON info_tbl.eacode=localarea_listings_tl_map.eacode where info_tbl.tno='"+req.body.option.substring(0,1)+"' and info_tbl.stno='"+req.body.option.substring(1)+"'", function(err,rows){
		if (err) {
              console.log("Error Selecting : %s ",err );
		}
			res.send(rows);
	});
	}
	if(req.body.option.length == 3) {	
	  connection.query("select  localarea_listings_tl_map.eacode,localarea_listings_tl_map.hcn,localarea_listings_tl_map.shsn,localarea_listings_tl_map.longitude, localarea_listings_tl_map.latitude, localarea_listings_tl_map.hhead, localarea_listings_tl_map.INTERVIEW_STATUS4 from localarea_listings_tl_map INNER JOIN info_tbl ON info_tbl.eacode=localarea_listings_tl_map.eacode", function(err,rows){
		if (err) {
              console.log("Error Selecting : %s ",err );
		}
			res.send(rows);
	});
	}
};

exports.hhmap = function(req, res){
	var obj = {};
	if(req.body.option.length == 1) {	
	  connection.query("select  localarea_listings_tl_map.eacode,localarea_listings_tl_map.hcn,localarea_listings_tl_map.shsn,localarea_listings_tl_map.longitude, localarea_listings_tl_map.latitude, localarea_listings_tl_map.hhead, localarea_listings_tl_map.INTERVIEW_STATUS4 from localarea_listings_tl_map INNER JOIN info_tbl ON info_tbl.eacode=localarea_listings_tl_map.eacode where info_tbl.tno='"+req.body.option+"'", function(err,rows){
		if (err) {
              console.log("Error Selecting : %s ",err );
		}
			res.send(rows);
	});
	}
    if(req.body.option.length == 2) {	
	  connection.query("select  localarea_listings_tl_map.eacode,localarea_listings_tl_map.hcn,localarea_listings_tl_map.shsn,localarea_listings_tl_map.longitude, localarea_listings_tl_map.latitude, localarea_listings_tl_map.hhead, localarea_listings_tl_map.INTERVIEW_STATUS4 from localarea_listings_tl_map INNER JOIN info_tbl ON info_tbl.eacode=localarea_listings_tl_map.eacode where info_tbl.tno='"+req.body.option.substring(0,1)+"' and info_tbl.stno='"+req.body.option.substring(1)+"'", function(err,rows){
		if (err) {
              console.log("Error Selecting : %s ",err );
		}
			res.send(rows);
	});
	}
	if(req.body.option.length == 3) {	
	  connection.query("select  localarea_listings_tl_map.eacode,localarea_listings_tl_map.hcn,localarea_listings_tl_map.shsn,localarea_listings_tl_map.longitude, localarea_listings_tl_map.latitude, localarea_listings_tl_map.hhead, localarea_listings_tl_map.INTERVIEW_STATUS4 from localarea_listings_tl_map INNER JOIN info_tbl ON info_tbl.eacode=localarea_listings_tl_map.eacode", function(err,rows){
		if (err) {
              console.log("Error Selecting : %s ",err );
		}
			res.send(rows);
	});
	}
};

exports.infomap = function(req, res){
	var obj = {};
	  connection.query("SELECT * FROM localarea_listings_tl_map where eacode='"+req.body.eacode+"' and hcn='"+req.body.hcn+"' and shsn='"+req.body.shsn+"'", function(err,rows){
		if (err) {
              console.log("Error Selecting : %s ",err );
		}
			res.send(rows);

	});
};

exports.map_filter = function(req, res){
	var obj = {};
	  connection.query("SELECT * FROM f11_tl where eacode='"+req.body.eacode+"' and hcn='"+req.body.hcn+"' and shsn='"+req.body.shsn+"'", function(err,rows){
		  console.log(rows);
		if(rows.length > 0 ){
		 	res.send(rows);
		}
		if(rows.length == 0){
			res.send('none');
			}

	});
};