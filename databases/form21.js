var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');

exports.get = function(req, res){
	
	var eacode = req.params.id;
	var eacode2 = eacode.substring(0, 12);
	var hcn2 = eacode.substring(12, 16);
	var shsn2 = eacode.substring(16, 20);
	
	
  db2.all("SELECT * FROM localarea_listings WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode2, hcn2, shsn2], function(err,rows){
	  
	  db2.all("SELECT * FROM f11 WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode2, hcn2, shsn2], function(err,rows2){
	 
  res.render('form11.ejs',{array:rows,array2:rows2,layout:false,session:req.session}); 
		});
   }); 
  
};

exports.post = function(req, res){
	
		eacode = req.body.eacode;
		hcn = req.body.hcn;
		shsn = req.body.shsn;
		DISABILITY = req.body.DISABILITY;
		ETH_CODE = req.body.ETH_CODE;
		IP = req.body.IP;
		ETHNICITY = req.body.ETHNICITY;
		WEIGHT1 = req.body.WEIGHT1;
		WEIGHT2 = req.body.WEIGHT2;
		HEIGHT1 = req.body.HEIGHT1;
		HEIGHT2 = req.body.HEIGHT2;
		HH_REMARKS = req.body.HH_REMARKS;
		OTH_REM = req.body.OTH_REM;
		WAIST1 = req.body.WAIST1;
		WAIST2 = req.body.WAIST2;
		DISABILITY_OTH = req.body.DISABILITY_OTH;
		HIP1 = req.body.HIP1;
		HIP2 = req.body.HIP2;
		WHH_REMARKS = req.body.WHH_REMARKS;
		MUAC1 = req.body.MUAC1;
		MUAC2 = req.body.MUAC2;
		MUAC_REMARKS = req.body.MUAC_REMARKS;
		INTERVIEW_STATUS = req.body.INTERVIEW_STATUS;
		MIL = req.body.MIL;
		BP1_SYSTOLIC = req.body.BP1_SYSTOLIC;
		BP1_DIASTOLIC = req.body.BP1_DIASTOLIC;
		BP2_SYSTOLIC = req.body.BP2_SYSTOLIC;
		BP2_DIASTOLIC = req.body.BP2_DIASTOLIC;
		BP3_SYSTOLIC = req.body.BP3_SYSTOLIC;
		BP3_DIASTOLIC = req.body.BP3_DIASTOLIC;
		INTERVIEW_STATUS_BP = req.body.INTERVIEW_STATUS_BP;
		BP_REMARKS = req.body.BP_REMARKS;

		
	db2.run("INSERT INTO f21(eacode, hcn, shsn, DISABILITY, ETH_CODE, IP, ETHNICITY, WEIGHT1, WEIGHT2, HEIGHT1, HEIGHT2, HH_REMARKS, OTH_REM, WAIST1, WAIST2, DISABILITY_OTH, HIP1, HIP2, WHH_REMARKS, MUAC1, MUAC2, MUAC_REMARKS, INTERVIEW_STATUS, MIL, BP1_SYSTOLIC, BP1_DIASTOLIC, BP2_SYSTOLIC, BP2_DIASTOLIC, BP3_SYSTOLIC, BP3_DIASTOLIC, INTERVIEW_STATUS_BP, BP_REMARKS) VALUES ($eacode, $hcn, $shsn, $DISABILITY, $ETH_CODE, $IP, $ETHNICITY, $WEIGHT1, $WEIGHT2, $HEIGHT1, $HEIGHT2, $HH_REMARKS, $OTH_REM, $WAIST1, $WAIST2, $DISABILITY_OTH, $HIP1, $HIP2, $WHH_REMARKS, $MUAC1, $MUAC2, $MUAC_REMARKS, $INTERVIEW_STATUS, $BP1_SYSTOLIC, $BP1_DIASTOLIC, $BP2_SYSTOLIC, $BP2_DIASTOLIC, $BP3_SYSTOLIC, $BP3_DIASTOLIC, $INTERVIEW_STATUS_BP, $BP_REMARKS)",
	{	
		$eacode : eacode,
		$hcn : hcn,
		$shsn : shsn,
		$DISABILITY : DISABILITY,
		$ETH_CODE : ETH_CODE,
		$IP : IP,
		$ETHNICITY : ETHNICITY,
		$WEIGHT1 : WEIGHT1,
		$WEIGHT2 : WEIGHT2,
		$HEIGHT1 : HEIGHT1,
		$HEIGHT2 : HEIGHT2,
		$HH_REMARKS : HH_REMARKS,
		$OTH_REM : OTH_REM,
		$WAIST1 : WAIST1,
		$WAIST2 : WAIST2,
		$DISABILITY_OTH : DISABILITY_OTH,
		$HIP1 : HIP1,
		$HIP2 : HIP2,
		$WHH_REMARKS : WHH_REMARKS,
		$MUAC1 : MUAC1,
		$MUAC2 : MUAC2,
		$MUAC_REMARKS : MUAC_REMARKS,
		$INTERVIEW_STATUS : INTERVIEW_STATUS,
		$MIL : MIL,
		$BP1_SYSTOLIC : BP1_SYSTOLIC,
		$BP1_DIASTOLIC : BP1_DIASTOLIC,
		$BP2_SYSTOLIC : BP2_SYSTOLIC,
		$BP2_DIASTOLIC : BP2_DIASTOLIC,
		$BP3_SYSTOLIC : BP3_SYSTOLIC,
		$BP3_DIASTOLIC : BP3_DIASTOLIC,
		$INTERVIEW_STATUS_BP : INTERVIEW_STATUS_BP,
		$BP_REMARKS : BP_REMARKS,
		
      });
	
	 res.redirect("http://localhost:3000/legone/survey/surveyform/form11/"+eacode+hcn+shsn);
		
};

exports.update = function(req, res){
	
	var id = JSON.stringify(req.body.id);

/*  
	var input = JSON.parse(JSON.stringify(req.body));
		
	Object.keys(input).forEach(function(key) {
	var val = input[key];
	console.log("req.body."+key+", ");
	});
*/	
	var m = new Date();
	var dateString =
	m.getFullYear() + "-" +
	("0" + (m.getMonth()+1)).slice(-2) + "-" +
	("0" + m.getDate()).slice(-2) + " " +
	("0" + m.getHours()).slice(-2) + ":" +
	("0" + m.getMinutes()).slice(-2) + ":" +
	("0" + m.getSeconds()).slice(-2);
	
	var inputData = [req.body.DISABILITY, req.body.ETH_CODE, req.body.IP, req.body.ETHNICITY, req.body.WEIGHT1, req.body.WEIGHT2, req.body.HEIGHT1, req.body.HEIGHT2, req.body.HH_REMARKS, req.body.OTH_REM, req.body.WAIST1, req.body.WAIST2, req.body.WAIST3, req.body.DISABILITY_OTH, req.body.HIP1, req.body.HIP2, req.body.HIP3, req.body.WHH_REMARKS, req.body.MUAC1, req.body.MUAC2, req.body.MUAC3, req.body.MUAC_REMARKS, req.body.INTERVIEW_STATUS_meas, req.body.MIL, req.body.BP1_SYSTOLIC, req.body.BP1_DIASTOLIC, req.body.BP2_SYSTOLIC, req.body.BP2_DIASTOLIC, req.body.BP3_SYSTOLIC, req.body.BP3_DIASTOLIC, req.body.INTERVIEW_STATUS_BP, req.body.BP_REMARKS, dateString, req.body.meas_wehe, req.body.rec_wehe, req.body.meas_wahi, req.body.rec_wahi, req.body.meas_bp, req.body.rec_bp, req.body.meas_muac, req.body.rec_muac, req.body.id];
	
	updateQuery = "UPDATE f21 SET DISABILITY = ?, ETH_CODE = ?, IP = ?, ETHNICITY = ?, WEIGHT1 = ?, WEIGHT2 = ?, HEIGHT1 = ?, HEIGHT2 = ?, HH_REMARKS = ?, OTH_REM = ?, WAIST1 = ?, WAIST2 = ?, WAIST3 = ?, DISABILITY_OTH = ?, HIP1 = ?, HIP2 = ?, HIP3 = ?, WHH_REMARKS = ?, MUAC1 = ?, MUAC2 = ?, MUAC3 = ?, MUAC_REMARKS = ?, INTERVIEW_STATUS_meas = ?, MIL = ?, BP1_SYSTOLIC = ?, BP1_DIASTOLIC = ?, BP2_SYSTOLIC = ?, BP2_DIASTOLIC = ?, BP3_SYSTOLIC = ?, BP3_DIASTOLIC = ?, INTERVIEW_STATUS_BP = ?, BP_REMARKS = ?, DATE_EDIT2 = ?, meas_wehe = ?, rec_wehe = ?, meas_wahi = ?, rec_wahi = ?, meas_bp =?, rec_bp = ?, meas_muac = ?, rec_muac = ? WHERE id = ?";
	
	db2.all(updateQuery,inputData,function(err,rows){
	
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		
			 
	});

	 
};

	
exports.view = function(req, res){
	var obj = {};
	 	  db2.all("SELECT * FROM f21 WHERE eacode= ? and hcn = ? and shsn = ? and MEMBER_CODE = ? ",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows){
	
			res.send(rows);
     
	 });
};

exports.boys05 = function(req, res){
	var obj = {};
	
	var agemos = Math.round(req.body.v_age*12);
	
	  db2.all("SELECT * FROM w_boys_05 WHERE agemos = ?",agemos, function(err,rows){
		if(rows[0].lo < req.body.w1 && rows[0].hi > req.body.w1)
		{
			res.send('ok');
        }
		else {	res.send('err');
		}
	 });
	 
};

exports.boys1118 = function(req, res){
	var obj = {};
	
	var agemos = Math.round(req.body.v_age*12);

	  db2.all("SELECT * FROM w_boys_1118 WHERE agemos = ?",agemos, function(err,rows){
		if(rows[0].lo < req.body.w1 && rows[0].hi > req.body.w1)
		{
			res.send('ok');
        }
		else {	res.send('err');
		}
	 });
	 
};

exports.boys610 = function(req, res){
	var obj = {};
	
	var agemos = Math.round(req.body.v_age*12);

	  db2.all("SELECT * FROM w_boys_610 WHERE agemos = ?",agemos, function(err,rows){
		if(rows[0].lo < req.body.w1 && rows[0].hi > req.body.w1)
		{
			res.send('ok');
        }
		else {	res.send('err');
		}
	 });
	 
};

exports.girls05 = function(req, res){
	var obj = {};
	
	var agemos = Math.round(req.body.v_age*12);
	
	  db2.all("SELECT * FROM w_girls_05 WHERE agemos = ?",agemos, function(err,rows){
		if(rows[0].lo < req.body.w1 && rows[0].hi > req.body.w1)
		{
			res.send('ok');
        }
		else {	res.send('err');
		}
	 });
	 
};

exports.girls1118 = function(req, res){
	var obj = {};
	
	var agemos = Math.round(req.body.v_age*12);
	  db2.all("SELECT * FROM w_girls_1118 WHERE agemos = ?",agemos, function(err,rows){
		if(rows[0].lo < req.body.w1 && rows[0].hi > req.body.w1)
		{
			res.send('ok');
        }
		else {	res.send('err');
		}
	 });
	 
};

exports.girls610 = function(req, res){
	var obj = {};
	
	var agemos = Math.round(req.body.v_age*12);

	  db2.all("SELECT * FROM w_girls_610 WHERE agemos = ?",agemos, function(err,rows){
		if(rows[0].lo < req.body.w1 && rows[0].hi > req.body.w1)
		{
			res.send('ok');
        }
		else {	res.send('err');
		}
	 });
	 
};

exports.boys05h = function(req, res){
	var obj = {};
	
	var agemos = Math.round(req.body.v_age*12);
	
	  db2.all("SELECT * FROM h_boys_05 WHERE agemos = ?",agemos, function(err,rows){
		if(rows[0].lo < req.body.w1 && rows[0].hi > req.body.w1)
		{
			res.send('ok');
        }
		else {	res.send('err');
		}
	 });
	 
};

exports.boys1118h = function(req, res){
	var obj = {};
	
	var agemos = Math.round(req.body.v_age*12);

	  db2.all("SELECT * FROM h_boys_1118 WHERE agemos = ?",agemos, function(err,rows){
		if(rows[0].lo < req.body.w1 && rows[0].hi > req.body.w1)
		{
			res.send('ok');
        }
		else {	res.send('err');
		}
	 });
	 
};

exports.boys610h = function(req, res){
	var obj = {};
	
	var agemos = Math.round(req.body.v_age*12);

	  db2.all("SELECT * FROM h_boys_610 WHERE agemos = ?",agemos, function(err,rows){
		if(rows[0].lo < req.body.w1 && rows[0].hi > req.body.w1)
		{
			res.send('ok');
        }
		else {	res.send('err');
		}
	 });
	 
};

exports.girls05h = function(req, res){
	var obj = {};
	
	var agemos = Math.round(req.body.v_age*12);
	
	  db2.all("SELECT * FROM h_girls_05 WHERE agemos = ?",agemos, function(err,rows){
		if(rows[0].lo < req.body.w1 && rows[0].hi > req.body.w1)
		{
			res.send('ok');
        }
		else {	res.send('err');
		}
	 });
	 
};

exports.girls1118h = function(req, res){
	var obj = {};
	
	var agemos = Math.round(req.body.v_age*12);
	  db2.all("SELECT * FROM h_girls_1118 WHERE agemos = ?",agemos, function(err,rows){
		if(rows[0].lo < req.body.w1 && rows[0].hi > req.body.w1)
		{
			res.send('ok');
        }
		else {	res.send('err');
		}
	 });
	 
};

exports.girls610h = function(req, res){
	var obj = {};
	
	var agemos = Math.round(req.body.v_age*12);

	  db2.all("SELECT * FROM h_girls_610 WHERE agemos = ?",agemos, function(err,rows){
		if(rows[0].lo < req.body.w1 && rows[0].hi > req.body.w1)
		{
			res.send('ok');
        }
		else {	res.send('err');
		}
	 });
	 
};





