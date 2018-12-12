var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2018.db');
var http = require('http');

exports.get = function(req, res){
	
	var id = req.params.id;
	var eacode2 = id.substring(0, 12);
	var hcn2 = id.substring(12, 16);
	var shsn2 = id.substring(16, 20);
	var MEMBER_CODE2 = id.substring(20,22);
	var SURNAME2 = id.substring(22,66);

	
  db2.all("SELECT * FROM f11 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE=?",[eacode2, hcn2, shsn2, MEMBER_CODE2], function(err,rows){
		
	  db2.all("SELECT * FROM dependents_confined WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE=?",[eacode2, hcn2, shsn2, MEMBER_CODE2], function(err,rows2){
	 
			res.render('form49.ejs',{array:rows,array2:rows2,layout:false,session:req.session}); 
		});	
	
  });
  
  
};


exports.insert = function(req, res) {
	
	var m = new Date();
	var dateString =
	m.getFullYear() + "-" +
	("0" + (m.getMonth()+1)).slice(-2) + "-" +
	("0" + m.getDate()).slice(-2) + " " +
	("0" + m.getHours()).slice(-2) + ":" +
	("0" + m.getMinutes()).slice(-2) + ":" +
	("0" + m.getSeconds()).slice(-2);

	SUBJECTNAME = req.body.SUBJECTNAME;
	CONF_WHR = req.body.CONF_WHR;
	CONF_WHR_OTH = req.body.CONF_WHR_OTH;
	CONF_WHY = req.body.CONF_WHY;
	CONF_WHY_OTH = req.body.CONF_WHY_OTH;
	CONF_DAYS = req.body.CONF_DAYS;
	cb = req.body.cb;
	CONF_BILL = req.body.CONF_BILL;
	CONF_BILL_SALARY = req.body.CONF_BILL_SALARY;
	CONF_BILL_DONATION = req.body.CONF_BILL_DONATION;
	CONF_BILL_PHILHEALTH = req.body.CONF_BILL_PHILHEALTH;
	CONF_BILL_HEALTHINSURANCE = req.body.CONF_BILL_HEALTHINSURANCE;
	RSN_NA_PH1 = req.body.RSN_NA_PH1;
	RSN_NA_PH2 = req.body.RSN_NA_PH2;
	RSN_NA_PH3 = req.body.RSN_NA_PH3;
	RSN_NA_PH4 = req.body.RSN_NA_PH4;
	RSN_NA_PH5 = req.body.RSN_NA_PH5;
	RSN_NA_PH6 = req.body.RSN_NA_PH6;
	RSN_NA_PH7 = req.body.RSN_NA_PH7;
	RSN_NA_PH8 = req.body.RSN_NA_PH8;
	RSN_NA_PH9 = req.body.RSN_NA_PH9;
	MEDS_A = req.body.MEDS_A;
	MEDS_B = req.body.MEDS_B;
	MEDS_B_SALARY = req.body.MEDS_B_SALARY;
	MEDS_B_DONATION = req.body.MEDS_B_DONATION;
	MEDS_B_PHILHEALTH = req.body.MEDS_B_PHILHEALTH;
	MEDS_B_HEALTHINSURANCE = req.body.MEDS_B_HEALTHINSURANCE;
	house_url = req.body.house_url;
	record_confine = req.body.record_confine;
	eacode = req.body.eacode;
	DATE_EDIT3 = req.body.DATE_EDIT3;
	hcn = req.body.hcn;
	shsn = req.body.shsn;
	memkey = req.body.memkey;
	MEMBER_CODE = req.body.MEMBER_CODE;
		
	
			db2.run("INSERT INTO dependents_confined (SUBJECTNAME, CONF_WHR, CONF_WHR_OTH, CONF_WHY, CONF_WHY_OTH, CONF_DAYS, cb, CONF_BILL, CONF_BILL_SALARY, CONF_BILL_DONATION, CONF_BILL_PHILHEALTH, CONF_BILL_HEALTHINSURANCE, RSN_NA_PH1, RSN_NA_PH2, RSN_NA_PH3, RSN_NA_PH4, RSN_NA_PH5, RSN_NA_PH6, RSN_NA_PH7, RSN_NA_PH8, RSN_NA_PH9, MEDS_A, MEDS_B, MEDS_B_SALARY, MEDS_B_DONATION, MEDS_B_PHILHEALTH, MEDS_B_HEALTHINSURANCE, house_url, record_confine, eacode, DATE_EDIT3, hcn, shsn, memkey, MEMBER_CODE) VALUES ($SUBJECTNAME, $CONF_WHR, $CONF_WHR_OTH, $CONF_WHY, $CONF_WHY_OTH, $CONF_DAYS, $cb, $CONF_BILL, $CONF_BILL_SALARY, $CONF_BILL_DONATION, $CONF_BILL_PHILHEALTH, $CONF_BILL_HEALTHINSURANCE, $RSN_NA_PH1, $RSN_NA_PH2, $RSN_NA_PH3, $RSN_NA_PH4, $RSN_NA_PH5, $RSN_NA_PH6, $RSN_NA_PH7, $RSN_NA_PH8, $RSN_NA_PH9, $MEDS_A, $MEDS_B, $MEDS_B_SALARY, $MEDS_B_DONATION, $MEDS_B_PHILHEALTH, $MEDS_B_HEALTHINSURANCE, $house_url, $record_confine, $eacode, $DATE_EDIT3, $hcn, $shsn, $memkey, $MEMBER_CODE)",
	{	

	$SUBJECTNAME : SUBJECTNAME, 
	$CONF_WHR : CONF_WHR,
	$CONF_WHR_OTH : CONF_WHR_OTH, 
	$CONF_WHY : CONF_WHY, 
	$CONF_WHY_OTH : CONF_WHY_OTH, 
	$CONF_DAYS : CONF_DAYS, 
	$cb : cb, 
	$CONF_BILL : CONF_BILL, 
	$CONF_BILL_SALARY : CONF_BILL_SALARY, 
	$CONF_BILL_DONATION : CONF_BILL_DONATION, 
	$CONF_BILL_PHILHEALTH : CONF_BILL_PHILHEALTH, 
	$CONF_BILL_HEALTHINSURANCE : CONF_BILL_HEALTHINSURANCE, 
	$RSN_NA_PH1 : RSN_NA_PH1, 
	$RSN_NA_PH2 : RSN_NA_PH2, 
	$RSN_NA_PH3 : RSN_NA_PH3, 
	$RSN_NA_PH4 : RSN_NA_PH4, 
	$RSN_NA_PH5 : RSN_NA_PH5, 
	$RSN_NA_PH6 : RSN_NA_PH6, 
	$RSN_NA_PH7 : RSN_NA_PH7, 
	$RSN_NA_PH8 : RSN_NA_PH8, 
	$RSN_NA_PH9 : RSN_NA_PH9, 
	$MEDS_A : MEDS_A, 
	$MEDS_B : MEDS_B, 
	$MEDS_B_SALARY : MEDS_B_SALARY, 
	$MEDS_B_DONATION : MEDS_B_DONATION, 
	$MEDS_B_PHILHEALTH : MEDS_B_PHILHEALTH, 
	$MEDS_B_HEALTHINSURANCE : MEDS_B_HEALTHINSURANCE, 
	$house_url : house_url, 
	$record_confine : record_confine,  
	$eacode : eacode, 
	$DATE_EDIT3 : DATE_EDIT3, 
	$hcn : hcn, 
	$shsn : shsn, 
	$memkey : memkey, 
	$MEMBER_CODE : MEMBER_CODE
		
	});
	
	//res.redirect("/legone/survey/surveyform/save/f49/"+eacode+hcn+shsn+MEMBER_CODE);
	
};


exports.post = function(req, res){
	

	var eacode = JSON.stringify(req.body.eacode);
	var hcn = JSON.stringify(req.body.hcn);
	var shsn = JSON.stringify(req.body.shsn);
	var MEMBER_CODE = JSON.stringify(req.body.MEMBER_CODE);
	
	
		var input = JSON.parse(JSON.stringify(req.body));

		Object.keys(input).forEach(function(key) {
		  var val = input[key];
		  console.log(key+", ");
		});
	
	
	var m = new Date();
	var dateString =
	m.getFullYear() + "-" +
	("0" + (m.getMonth()+1)).slice(-2) + "-" +
	("0" + m.getDate()).slice(-2) + " " +
	("0" + m.getHours()).slice(-2) + ":" +
	("0" + m.getMinutes()).slice(-2) + ":" +
	("0" + m.getSeconds()).slice(-2);
	
	db2.all("UPDATE dependents_confined SET SUBJECTNAME =?, CONF_WHR =?, CONF_WHR_OTH =?, CONF_WHY =?, CONF_WHY_OTH =?, CONF_DAYS =?, cb =?, CONF_BILL =?, CONF_BILL_SALARY =?, CONF_BILL_DONATION =?, CONF_BILL_PHILHEALTH =?, CONF_BILL_HEALTHINSURANCE =?, RSN_NA_PH1 =?, RSN_NA_PH2 =?, RSN_NA_PH3 =?, RSN_NA_PH4 =?, RSN_NA_PH5 =?, RSN_NA_PH6 =?, RSN_NA_PH7 =?, RSN_NA_PH8 =?, RSN_NA_PH9 =?, MEDS_A =?, MEDS_B =?, MEDS_B_SALARY =?, MEDS_B_DONATION =?, MEDS_B_PHILHEALTH =?, MEDS_B_HEALTHINSURANCE =?, DATE_EDIT3 =? WHERE eacode = ? and hcn = ? and shsn = ? and MEMBER_CODE = ? and id=?",[req.body.SUBJECTNAME, req.body.CONF_WHR, req.body.CONF_WHR_OTH, req.body.CONF_WHY, req.body.CONF_WHY_OTH, req.body.CONF_DAYS, req.body.cb, req.body.CONF_BILL, req.body.CONF_BILL_SALARY, req.body.CONF_BILL_DONATION, req.body.CONF_BILL_PHILHEALTH, req.body.CONF_BILL_HEALTHINSURANCE, req.body.RSN_NA_PH1, req.body.RSN_NA_PH2, req.body.RSN_NA_PH3, req.body.RSN_NA_PH4, req.body.RSN_NA_PH5, req.body.RSN_NA_PH6, req.body.RSN_NA_PH7, req.body.RSN_NA_PH8, req.body.RSN_NA_PH9, req.body.MEDS_A, req.body.MEDS_B, req.body.MEDS_B_SALARY, req.body.MEDS_B_DONATION, req.body.MEDS_B_PHILHEALTH, req.body.MEDS_B_HEALTHINSURANCE, dateString, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE, req.body.id],function(err,rows){
		
		
		rows.forEach(function (row) {
		 
			console.log(row + "rowss");
        });
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else console.log("Success updating form dependents_confined");
		
	});
	
	//res.redirect("/legone/survey/surveyform/form11/"+req.body.eacode+req.body.hcn+req.body.shsn);
		
};

exports.view = function(req, res){
	var obj = {};
	
	
	var eacode = req.body.eacode;
	var hcn = req.body.hcn;
	var shsn = req.body.shsn;
	var MEMBER_CODE = req.body.MEMBER_CODE;
	var SUBJECTNAME = req.body.SUBJECTNAME;
	

	  db2.all("SELECT * FROM dependents_confined WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE=? and SUBJECTNAME=?",[eacode, hcn, shsn, MEMBER_CODE, SUBJECTNAME], function(err,rows2){
		  
		  if (err) {
              console.log("Error Selecting : %s ",err );
		}
		else console.log("Success selecting form dependents");
		  
		  
	  rows2.forEach(function (row) {
		 
			res.send(row);
        });
	
		});	
	
	
};







