var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');
var dateLog = new Date().toLocaleString();

exports.get = function(req, res){
	
  db2.all("SELECT * FROM localsurveyareas", function(err,rows){  
    res.render('localsurvey.ejs',{array:rows,layout:false,session:req.session});
  });
};

exports.getmain = function(req, res){

  db2.all("SELECT * FROM localsurveyareas", function(err,rows){  
    res.render('main.ejs',{array:rows,layout:false,session:req.session});
  });
};

exports.post = function(req, res){
	
	eacode = req.body.eacode;
	region = req.body.regcode;
	province = req.body.provcode;
	municipality = req.body.muncode;
	barangay = req.body.brgycode;
	ea = req.body.ea;
	areaname = req.body.areaname;
		
	db2.run("INSERT INTO localsurveyareas (eacode, region, province, municipality, barangay, ea, areaname) VALUES ($eacode, $region, $province, $municipality, $barangay, $ea, $areaname)",
	{	
		$eacode : eacode,
		$region : region,
		$province : province,
		$municipality : municipality,
		$barangay : barangay,
		$ea : ea,
		$areaname : areaname
	});
	
	res.redirect("http://localhost:3000/legone/survey/surveyform");

		
};




