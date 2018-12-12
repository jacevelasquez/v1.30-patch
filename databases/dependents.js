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
		
	  db2.all("SELECT * FROM dependents WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE=?",[eacode2, hcn2, shsn2, MEMBER_CODE2], function(err,rows2){
			
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
	RSN_VST_HF = req.body.RSN_VST_HF;
	RSN_VST_HF_OTH = req.body.RSN_VST_HF_OTH;
	INJURY1 = req.body.INJURY1;
	INJURY1_DIAG = req.body.INJURY1_DIAG;
	INJURY2 = req.body.INJURY2;
	INJURY2_DIAG = req.body.INJURY2_DIAG;
	INJURY3 = req.body.INJURY3;
	INJURY3_DIAG = req.body.INJURY3_DIAG;
	INJURY4 = req.body.INJURY4;
	INJURY4_DIAG = req.body.INJURY4_DIAG;
	INJURY5 = req.body.INJURY5;
	INJURY5_DIAG = req.body.INJURY5_DIAG;
	INJURY6 = req.body.INJURY6;
	INJURY6_DIAG = req.body.INJURY6_DIAG;
	INJURY7 = req.body.INJURY7;
	INJURY7_DIAG = req.body.INJURY7_DIAG;
	INJURY8 = req.body.INJURY8;
	INJURY8_DIAG = req.body.INJURY8_DIAG;
	INJURY9 = req.body.INJURY9;
	INJURY9_DIAG = req.body.INJURY9_DIAG;
	INJURY10 = req.body.INJURY10;
	INJURY10_DIAG = req.body.INJURY10_DIAG;
	INJURY11 = req.body.INJURY11;
	INJURY11_DIAG = req.body.INJURY11_DIAG;
	INJURY12 = req.body.INJURY12;
	INJURY12_DIAG = req.body.INJURY12_DIAG;
	INJURY_OTH = req.body.INJURY_OTH;
	INJURY13 = req.body.INJURY13;
	INJURY13_DIAG = req.body.INJURY13_DIAG;
	WHR_VST_HF = req.body.WHR_VST_HF;
	WHR_VST_HF_OTH = req.body.WHR_VST_HF_OTH;
	BILL_VST_HF = req.body.BILL_VST_HF;
	SRC_BILL_SALARY = req.body.SRC_BILL_SALARY;
	SRC_BILL_DONATION = req.body.SRC_BILL_DONATION;
	SRC_BILL_PHILHEALTH = req.body.SRC_BILL_PHILHEALTH;
	SRC_BILL_HEALTHINSURANCE = req.body.SRC_BILL_HEALTHINSURANCE;
	ADV_CONF = req.body.ADV_CONF;
	CONF_HOSP = req.body.CONF_HOSP;
	NCONF_RSN1 = req.body.NCONF_RSN1;
	NCONF_RSN2 = req.body.NCONF_RSN2;
	NCONF_RSN3 = req.body.NCONF_RSN3;
	NCONF_RSN4 = req.body.NCONF_RSN4;
	NCONF_RSN5 = req.body.NCONF_RSN5;
	NCONF_RSN6 = req.body.NCONF_RSN6;
	eacode = req.body.eacode;
	DATE_EDIT2 = req.body.DATE_EDIT2;
	hcn = req.body.hcn;
	shsn = req.body.shsn;
	MEMBER_CODE = req.body.MEMBER_CODE;
		
	
			db2.run("INSERT INTO dependents (SUBJECTNAME, RSN_VST_HF , RSN_VST_HF_OTH , INJURY1 , INJURY1_DIAG , INJURY2 , INJURY2_DIAG , INJURY3 , INJURY3_DIAG , INJURY4 , INJURY4_DIAG , INJURY5 , INJURY5_DIAG , INJURY6 , INJURY6_DIAG , INJURY7 , INJURY7_DIAG , INJURY8 , INJURY8_DIAG , INJURY9 , INJURY9_DIAG , INJURY10 , INJURY10_DIAG , INJURY11 , INJURY11_DIAG , INJURY12 , INJURY12_DIAG , INJURY_OTH , INJURY13 , INJURY13_DIAG , WHR_VST_HF , WHR_VST_HF_OTH , BILL_VST_HF , SRC_BILL_SALARY , SRC_BILL_DONATION , SRC_BILL_PHILHEALTH , SRC_BILL_HEALTHINSURANCE , ADV_CONF , CONF_HOSP , NCONF_RSN1 , NCONF_RSN2 , NCONF_RSN3 , NCONF_RSN4 , NCONF_RSN5 , NCONF_RSN6 ,DATE_EDIT2 , eacode, hcn, shsn, MEMBER_CODE) VALUES ($SUBJECTNAME, $RSN_VST_HF , $RSN_VST_HF_OTH , $INJURY1 , $INJURY1_DIAG , $INJURY2 , $INJURY2_DIAG , $INJURY3 , $INJURY3_DIAG , $INJURY4 , $INJURY4_DIAG , $INJURY5 , $INJURY5_DIAG , $INJURY6 , $INJURY6_DIAG , $INJURY7 , $INJURY7_DIAG , $INJURY8 , $INJURY8_DIAG , $INJURY9 , $INJURY9_DIAG , $INJURY10 , $INJURY10_DIAG , $INJURY11 , $INJURY11_DIAG , $INJURY12 , $INJURY12_DIAG , $INJURY_OTH , $INJURY13 , $INJURY13_DIAG , $WHR_VST_HF , $WHR_VST_HF_OTH , $BILL_VST_HF , $SRC_BILL_SALARY , $SRC_BILL_DONATION , $SRC_BILL_PHILHEALTH , $SRC_BILL_HEALTHINSURANCE , $ADV_CONF , $CONF_HOSP , $NCONF_RSN1 , $NCONF_RSN2 , $NCONF_RSN3 , $NCONF_RSN4 , $NCONF_RSN5 , $NCONF_RSN6, $DATE_EDIT2 , $eacode, $hcn, $shsn, $MEMBER_CODE)",
	{	
	$SUBJECTNAME : SUBJECTNAME, 
	$RSN_VST_HF : RSN_VST_HF, 
	$RSN_VST_HF_OTH : RSN_VST_HF_OTH, 
	$INJURY1 : INJURY1, 
	$INJURY1_DIAG : INJURY1_DIAG, 
	$INJURY2 : INJURY2, 
	$INJURY2_DIAG : INJURY2_DIAG, 
	$INJURY3 : INJURY3, 
	$INJURY3_DIAG : INJURY3_DIAG, 
	$INJURY4 : INJURY4, 
	$INJURY4_DIAG : INJURY4_DIAG, 
	$INJURY5 : INJURY5, 
	$INJURY5_DIAG : INJURY5_DIAG, 
	$INJURY6 : INJURY6, 
	$INJURY6_DIAG : INJURY6_DIAG, 
	$INJURY7 : INJURY7, 
	$INJURY7_DIAG : INJURY7_DIAG, 
	$INJURY8 : INJURY8, 
	$INJURY8_DIAG : INJURY8_DIAG, 
	$INJURY9 : INJURY9, 
	$INJURY9_DIAG : INJURY9_DIAG, 
	$INJURY10 : INJURY10, 
	$INJURY10_DIAG : INJURY10_DIAG, 
	$INJURY11 : INJURY11, 
	$INJURY11_DIAG : INJURY11_DIAG, 
	$INJURY12 : INJURY12, 
	$INJURY12_DIAG : INJURY12_DIAG, 
	$INJURY_OTH : INJURY_OTH, 
	$INJURY13 : INJURY13, 
	$INJURY13_DIAG : INJURY13_DIAG, 
	$WHR_VST_HF : WHR_VST_HF, 
	$WHR_VST_HF_OTH : WHR_VST_HF_OTH, 
	$BILL_VST_HF : BILL_VST_HF, 
	$SRC_BILL_SALARY : SRC_BILL_SALARY, 
	$SRC_BILL_DONATION : SRC_BILL_DONATION, 
	$SRC_BILL_PHILHEALTH : SRC_BILL_PHILHEALTH, 
	$SRC_BILL_HEALTHINSURANCE : SRC_BILL_HEALTHINSURANCE, 
	$ADV_CONF : ADV_CONF, 
	$CONF_HOSP : CONF_HOSP, 
	$NCONF_RSN1 : NCONF_RSN1, 
	$NCONF_RSN2 : NCONF_RSN2, 
	$NCONF_RSN3 : NCONF_RSN3, 
	$NCONF_RSN4 : NCONF_RSN4, 
	$NCONF_RSN5 : NCONF_RSN5, 
	$NCONF_RSN6 : NCONF_RSN6, 
	$DATE_EDIT2 : DATE_EDIT2, 
	$eacode : eacode, 
	$hcn : hcn, 
	$shsn : shsn,
	$MEMBER_CODE : MEMBER_CODE	
	});
	
	//res.redirect("/legone/survey/surveyform/save/f49/"+eacode+hcn+shsn+MEMBER_CODE);
	
};


exports.post = function(req, res){
	var val;
	var m = new Date();
	var dateString =
	m.getFullYear() + "-" +
	("0" + (m.getMonth()+1)).slice(-2) + "-" +
	("0" + m.getDate()).slice(-2) + " " +
	("0" + m.getHours()).slice(-2) + ":" +
	("0" + m.getMinutes()).slice(-2) + ":" +
	("0" + m.getSeconds()).slice(-2);
	
			
	 
	db2.all("UPDATE dependents SET SUBJECTNAME =?, RSN_VST_HF =?, RSN_VST_HF_OTH =?, INJURY1 =?, INJURY1_DIAG =?, INJURY2 =?, INJURY2_DIAG =?, INJURY3 =?, INJURY3_DIAG =?, INJURY4 =?, INJURY4_DIAG =?, INJURY5 =?, INJURY5_DIAG =?, INJURY6 =?, INJURY6_DIAG =?, INJURY7 =?, INJURY7_DIAG =?, INJURY8 =?, INJURY8_DIAG =?, INJURY9 =?, INJURY9_DIAG =?, INJURY10 =?, INJURY10_DIAG =?, INJURY11 =?, INJURY11_DIAG =?, INJURY12 =?, INJURY12_DIAG =?, INJURY_OTH =?, INJURY13 =?, INJURY13_DIAG =?, WHR_VST_HF =?, WHR_VST_HF_OTH =?, BILL_VST_HF =?, SRC_BILL_SALARY =?, SRC_BILL_DONATION =?, SRC_BILL_PHILHEALTH =?, SRC_BILL_HEALTHINSURANCE =?, ADV_CONF =?, CONF_HOSP =?, NCONF_RSN1 =?, NCONF_RSN2 =?, NCONF_RSN3 =?, NCONF_RSN4 =?, NCONF_RSN5 =?, NCONF_RSN6 =?, DATE_EDIT2 =? WHERE eacode = ? and hcn = ? and shsn = ? and MEMBER_CODE = ? and id=?",[req.body.SUBJECTNAME, req.body.RSN_VST_HF, req.body.RSN_VST_HF_OTH, req.body.INJURY1, req.body.INJURY1_DIAG, req.body.INJURY2, req.body.INJURY2_DIAG, req.body.INJURY3, req.body.INJURY3_DIAG, req.body.INJURY4, req.body.INJURY4_DIAG, req.body.INJURY5, req.body.INJURY5_DIAG, req.body.INJURY6, req.body.INJURY6_DIAG, req.body.INJURY7, req.body.INJURY7_DIAG, req.body.INJURY8, req.body.INJURY8_DIAG, req.body.INJURY9, req.body.INJURY9_DIAG, req.body.INJURY10, req.body.INJURY10_DIAG, req.body.INJURY11, req.body.INJURY11_DIAG, req.body.INJURY12, req.body.INJURY12_DIAG, req.body.INJURY_OTH, req.body.INJURY13, req.body.INJURY13_DIAG, req.body.WHR_VST_HF, req.body.WHR_VST_HF_OTH, req.body.BILL_VST_HF, req.body.SRC_BILL_SALARY, req.body.SRC_BILL_DONATION, req.body.SRC_BILL_PHILHEALTH, req.body.SRC_BILL_HEALTHINSURANCE, req.body.ADV_CONF, req.body.CONF_HOSP, req.body.NCONF_RSN1, req.body.NCONF_RSN2, req.body.NCONF_RSN3, req.body.NCONF_RSN4, req.body.NCONF_RSN5, req.body.NCONF_RSN6, dateString, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE, req.body.id],function(err,rows){
		
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		
		
	});
	
	
	//res.redirect("/legone/survey/surveyform/save/f49/"+req.body.eacode+req.body.hcn+req.body.shsn+req.body.MEMBER_CODE);
		
};

exports.view = function(req, res){
	var obj = {};
	
	
	var eacode = req.body.eacode;
	var hcn = req.body.hcn;
	var shsn = req.body.shsn;
	var MEMBER_CODE = req.body.MEMBER_CODE;
	var SUBJECTNAME = req.body.SUBJECTNAME;
	

	  db2.all("SELECT * FROM dependents WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE=? and SUBJECTNAME=?",[eacode, hcn, shsn, MEMBER_CODE, SUBJECTNAME], function(err,rows2){
		  
		  if (err) {
              console.log("Error Selecting : %s ",err );
		}
		else console.log("Success selecting form dependents");
		  
		  
	  rows2.forEach(function (row) {
		 
			res.send(row);
        });
	
		});	
	
	
};







