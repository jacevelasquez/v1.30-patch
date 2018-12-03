var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '10.10.124.98',
  user     : 'jc',
  password : 'NLPZJNWF',
  database : 'lgusurvey2017db_test'
});

exports.f31 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f31 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f32 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f32 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f41 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f41 (eacode, hcn, shsn, MEMBER_CODE, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f42 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f42 (eacode, hcn, shsn, MEMBER_CODE, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f43 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f43 (eacode, hcn, shsn, MEMBER_CODE, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f44 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f44 (eacode, hcn, shsn, MEMBER_CODE, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f45 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f45 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f46 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f46 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f47 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f47 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f48 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f48 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	
	});
	
};

exports.f49 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f49 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f410 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f410 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f411 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f411 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f52 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f52 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f53 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f53 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f54 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f54 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f55 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f55 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f56 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f56 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f57 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f57 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f58 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f58 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f59 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f59 (eacode, hcn, shsn, MEMBER_CODE, RES_NAME, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $RES_NAME, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE,
	$RES_NAME : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f73 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f73 (eacode, hcn, shsn, MEMBER_CODE, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};

exports.f82 = function(req, res){
	
	db2.run("INSERT OR IGNORE INTO f82 (eacode, hcn, shsn, MEMBER_CODE, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $username)",
	{	
	$eacode : req.body.eacode,
	$hcn : req.body.hcn,
	$shsn : req.body.shsn,
	$MEMBER_CODE : req.body.MEMBER_CODE, $username : req.body.username
	});
	
};


