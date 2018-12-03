var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');



exports.get = function(req, res){
  db2.all("SELECT * FROM f21", function(err,rows){
	  rows.forEach(function (row) {
        });
    
    res.render('form11.ejs',{array:rows,layout:false,session:req.session});
  });
  
};

exports.post = function(req, res){
	
	var id = JSON.stringify(req.body.id);

/*  
	var input = JSON.parse(JSON.stringify(req.body));
		
	Object.keys(input).forEach(function(key) {
	var val = input[key];
	console.log("req.body."+key+", ");
	});
*/	

	
	var inputData = [req.body.DISABILITY, req.body.ETH_CODE, req.body.ETHNICITY, req.body.WEIGHT1, req.body.WEIGHT2, req.body.HEIGHT1, req.body.HEIGHT2, req.body.WAIST1, req.body.WAIST2, req.body.DISABILITY_OTH, req.body.HIP1, req.body.HIP2, req.body.WHH_REMARKS, req.body.MUAC1, req.body.MUAC2, req.body.MUAC_REMARKS, req.body.INTERVIEW_STATUS, req.body.BP1_SYSTOLIC, req.body.BP1_DIASTOLIC, req.body.BP2_SYSTOLIC, req.body.BP2_DIASTOLIC, req.body.BP3_SYSTOLIC, req.body.BP3_DIASTOLIC, req.body.INTERVIEW_STATUS_BP, req.body.BP_REMARKS, req.body.memkey, req.body.measure_record, req.body.indivinfo, req.body.anthrop_age, req.body.anthrop_sex, req.body.anthrop_url, req.body.id];
	
	updateQuery = "UPDATE f21 SET DISABILITY = ?, ETH_CODE = ?, ETHNICITY = ?, WEIGHT1 = ?, WEIGHT2 = ?, HEIGHT1 = ?, HEIGHT2 = ?, WAIST1 = ?, WAIST2 = ?, DISABILITY_OTH = ?, HIP1 = ?, HIP2 = ?, WHH_REMARKS = ?, MUAC1 = ?, MUAC2 = ?, MUAC_REMARKS = ?, INTERVIEW_STATUS = ?, BP1_SYSTOLIC = ?, BP1_DIASTOLIC = ?, BP2_SYSTOLIC = ?, BP2_DIASTOLIC = ?, BP3_SYSTOLIC = ?, BP3_DIASTOLIC = ?, INTERVIEW_STATUS_BP = ?, BP_REMARKS = ?, memkey = ?, measure_record = ?, indivinfo = ?, anthrop_age = ?, anthrop_sex = ?, anthrop_url = ?  WHERE id = ?";
	
	db2.all(updateQuery,inputData,function(err,rows){
			 
	});
	

	 
};



	
	





