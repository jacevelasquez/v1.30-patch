var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');
var dateLog = new Date().toLocaleString();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '10.10.124.98',
  user     : 'jayz',
  password : 'NLPZJNWF',
  database : 'lgusurvey2017db'
});

exports.get = function(req, res){
	
	var eacode = req.params.id;
	var eacode2 = eacode.substring(0, 12);
	var hcn = req.params.id;
	var hcn2 = hcn.substring(12, 16);
	var shsn = req.params.id;
	var shsn2 = shsn.substring(16, 20);

	fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] Membership : '+eacode2+' | '+hcn2+' | '+shsn2+'   \n');

db2.all("SELECT * FROM localarea_listings WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode2, hcn2, shsn2], function(err,rows){
	
	db2.all("SELECT * FROM f11 WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode2, hcn2, shsn2], function(err,rows2){
		  
		db2.all("SELECT * FROM survey_forms WHERE table_name='f11'", function(err,rows3){
				
			res.render('form11.ejs',{array:rows,array2:rows2,array3:rows3,layout:false,session:req.session}); 
					// res.render('form11.ejs',{array:rows,array2:rows2,array3:rows3}); 
		});
	});
}); 
};

exports.update = function(req, res){ 
	
	var id = JSON.stringify(req.body.id);
	var m = new Date();
	var dateString =
		m.getFullYear() + "-" +
		("0" + (m.getMonth()+1)).slice(-2) + "-" +
		("0" + m.getDate()).slice(-2) + " " +
		("0" + m.getHours()).slice(-2) + ":" +
		("0" + m.getMinutes()).slice(-2) + ":" +
		("0" + m.getSeconds()).slice(-2);

	
	
	var inputData = [req.body.GIVENNAME, req.body.SURNAME, req.body.NBI, req.body.RHC, req.body.DBIRTH, req.body.REFDATE, req.body.AGE, req.body.SEX, req.body.CSC, req.body.PSC, req.body.MOM, req.body.DAD, req.body.EDUC, req.body.EDUC_OTH, req.body.EDUC_COURSE, req.body.WORK, req.body.OCCUPATION, req.body.OCCUPATION_CODE, req.body.WRKPLACE, req.body.W_CLASS, req.body.RELIGION, req.body.OTH_REL, req.body.REMARKS, req.body.INTERVIEW_STATUS_OTH, req.body.INTERVIEW_STATUS, req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE, req.body.ES_DBI, req.body.BIOMOM, req.body.BIODAD, req.body.MATERNAL, req.body.SCHOOL, dateString, req.body.id];
	
	updateQuery = "UPDATE f11 SET GIVENNAME = ?, SURNAME = ?,  NBI = ?, RHC = ?, DBIRTH = ?, REFDATE = ?, AGE = ?, SEX = ?, CSC = ?, PSC = ?, MOM = ?, DAD = ?, EDUC = ?, EDUC_OTH = ?, EDUC_COURSE = ?, WORK = ?, OCCUPATION = ?, OCCUPATION_CODE = ?, WRKPLACE = ?, W_CLASS = ?, RELIGION = ?, OTH_REL =?, REMARKS = ?, INTERVIEW_STATUS_OTH = ?, INTERVIEW_STATUS = ?, eacode = ?, hcn = ?, shsn = ?, MEMBER_CODE = ?, ES_DBI = ?, BIOMOM = ?, BIODAD = ?, MATERNAL = ?, SCHOOL = ?, DATE_EDIT = ? WHERE id = ?";
	
	db2.all(updateQuery,inputData,function(err,rows){
		if (err) {
			console.log("Error Updating : %s ",err );
			fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] Error updating Membership : '+req.body.eacode+' | '+req.body.hcn+' | '+req.body.shsn+' | '+req.body.MEMBER_CODE+'    \n');
		}
		else {
			fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] Update Membership : '+req.body.eacode+' | '+req.body.hcn+' | '+req.body.shsn+' | '+req.body.MEMBER_CODE+'   \n');
		}
	});
	
		var isv = req.body.INTERVIEW_STATUS;
	
		db2.all("UPDATE f11 SET is_f31 ='"+isv+"',is_f32 ='"+isv+"',is_f41 ='"+isv+"',is_f42 ='"+isv+"',is_f43 ='"+isv+"',is_f44 ='"+isv+"',is_f45 ='"+isv+"',is_f46 ='"+isv+"',is_f47 ='"+isv+"',is_f48 ='"+isv+"',is_f410 ='"+isv+"',is_f411 ='"+isv+"',is_f52 ='"+isv+"',is_f53 ='"+isv+"',is_f54 ='"+isv+"',is_f55 ='"+isv+"',is_f56 ='"+isv+"',is_f57 ='"+isv+"',is_f58 ='"+isv+"',is_f59 ='"+isv+"',is_f73 ='"+isv+"',is_f82 ='"+isv+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
			  console.log("Error Updating : %s ",err );
			  fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] Error updating Membership is : '+req.body.eacode+' | '+req.body.hcn+' | '+req.body.shsn+'    \n');
		}
			
		});

	
	
	if(req.body.INTERVIEW_STATUS != 1 ){
		
		db2.all("UPDATE f31 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f32 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f41 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f42 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f43 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f44 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f45 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f46 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f47 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f48 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f49 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f410 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});

		db2.all("UPDATE f411 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f52 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		
		db2.all("UPDATE f53 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f54 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f55 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f56 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f57 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f58 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});

		db2.all("UPDATE f59 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});

		
		db2.all("UPDATE f73 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		db2.all("UPDATE f82 SET INTERVIEW_STATUS ='"+req.body.INTERVIEW_STATUS+"' where eacode ='"+req.body.eacode+"' and hcn ='"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE ='"+req.body.MEMBER_CODE+"'",function(err,rows){
			if (err) {
              console.log("Error Updating : %s ",err );
		}
			
		});
		
		
	}
};

exports.post = function(req, res){
	
		GIVENNAME = req.body.GIVENNAME;
		SURNAME = req.body.SURNAME;
		NBI = req.body.NBI;
		RHC = req.body.RHC;
		DBIRTH = req.body.DBIRTH;
		REFDATE = req.body.REFDATE;
		AGE = req.body.AGE;
		SEX = req.body.SEX;
		CSC = req.body.CSC;
		PSC = req.body.PSC;
		EDUC = req.body.EDUC;
		EDUC_OTH = req.body.EDUC_OTH;
		EDUC_COURSE = req.body.EDUC_COURSE;
		WORK = req.body.WORK;
		OCCUPATION = req.body.OCCUPATION;
		OCCUPATION_CODE = req.body.OCCUPATION_CODE;
		WRKPLACE = req.body.WRKPLACE;
		W_CLASS = req.body.W_CLASS;
		RELIGION = req.body.RELIGION;
		OTH_REL = req.body.OTH_REL;
		REMARKS = req.body.REMARKS;
		INTERVIEW_STATUS = req.body.INTERVIEW_STATUS;
		INTERVIEW_STATUS_OTH = req.body.INTERVIEW_STATUS_OTH;
		id = req.body.id;
		eacode = req.body.eacode;
		hcn = req.body.hcn;
		shsn = req.body.shsn;
		MEMBER_CODE = req.body.MEMBER_CODE;
		ES_DBI = req.body.ES_DBI2;
		MOM = req.body.MOM;
		DAD = req.body.DAD;
		BIOMOM = req.body.BIOMOM2;
		BIODAD = req.body.BIODAD2;
		MATERNAL = req.body.MATERNAL2;
		SCHOOL = req.body.SCHOOL2;
		memkey = req.body.memkey;
		username = req.body.username;

		if(EDUC==99 || EDUC==77 || EDUC==00 || EDUC==01 || EDUC==02 || EDUC==03 || EDUC==11 || EDUC==12 || EDUC==13 || EDUC==14 || EDUC==15 || EDUC==16 || EDUC==17)
		{
			var education = '1';
		}
		else if(EDUC==21 || EDUC==22 || EDUC==23 || EDUC==24 || EDUC==25 || EDUC==26 || EDUC==27)
		{
			var education = '2';
		}
		else if(EDUC==41 || EDUC==42 || EDUC==43)
		{
			var education = '3';
		}
		else if(EDUC==51 || EDUC==52 || EDUC==53 || EDUC==54 || EDUC==55)
		{
			var education = '4';
		}
		else if(EDUC==66 || EDUC==67)
		{
			var education = '5';
		}
		else if(EDUC==71 || EDUC==72 || EDUC==73)
		{
			var education = '6';
		}
		
		if(WORK== 00 || WORK== 01 || WORK== 02 || WORK== 03)
		{
			var work_status = '0';
		}
		else if(WORK== 11 || WORK== 12 || WORK== 99)
		{
			var work_status = '1';
		}
		
		

	db2.all("SELECT * FROM f11 WHERE eacode = ? and hcn = ? and shsn=? ORDER BY MEMBER_CODE DESC LIMIT 1",[eacode, hcn, shsn], function(err,rows) {
		
			if(rows.length == 0)
			{
			var mcode = '01';
			}
			else
			{
			
			var mcode = rows[0].MEMBER_CODE; 
			mcode = +mcode + 1; 
			if (mcode < 10) { 
			mcode = "0" + mcode;  
			}
			}
		
	db2.all("SELECT * FROM localarea_listings WHERE eacode = ? and hcn = ? and shsn=? ",[eacode, hcn, shsn], function(err,rows2) {		

	


	db2.run("INSERT INTO f11(GIVENNAME, SURNAME, NBI, RHC, DBIRTH, REFDATE, AGE, SEX, CSC, PSC, EDUC, EDUC_OTH, EDUC_COURSE, WORK, OCCUPATION, OCCUPATION_CODE, WRKPLACE, W_CLASS, RELIGION, OTH_REL, REMARKS, INTERVIEW_STATUS, INTERVIEW_STATUS_OTH, id, eacode, hcn, shsn, MEMBER_CODE, ES_DBI, MOM, DAD, BIOMOM, BIODAD, MATERNAL, SCHOOL, memkey, username, is_f31, is_f32, is_f41, is_f42, is_f43, is_f44, is_f45, is_f46, is_f47, is_f48, is_f410, is_f411, is_f52, is_f53, is_f54, is_f55, is_f56, is_f57, is_f58, is_f59, is_f73, is_f82, die2ndgen ) VALUES ($GIVENNAME, $SURNAME, $NBI, $RHC, $DBIRTH, $REFDATE, $AGE, $SEX, $CSC, $PSC, $EDUC, $EDUC_OTH, $EDUC_COURSE, $WORK, $OCCUPATION, $OCCUPATION_CODE, $WRKPLACE, $W_CLASS, $RELIGION, $OTH_REL, $REMARKS, $INTERVIEW_STATUS, $INTERVIEW_STATUS_OTH,$id, $eacode, $hcn, $shsn, $MEMBER_CODE, $ES_DBI, $MOM, $DAD, $BIOMOM, $BIODAD, $MATERNAL, $SCHOOL, $memkey, $username, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, $INTERVIEW_STATUS, '"+rows2[0].die2ndgen+"')",
	{
		$GIVENNAME : GIVENNAME,
		$SURNAME : SURNAME,
		$NBI : NBI,
		$RHC : RHC,
		$DBIRTH : DBIRTH,
		$REFDATE : REFDATE,
		$AGE : AGE,
		$SEX : SEX,
		$CSC : CSC,
		$PSC : PSC,
		$EDUC : EDUC,
		$EDUC_OTH : EDUC_OTH,
		$EDUC_COURSE : EDUC_COURSE,
		$WORK : WORK,
		$OCCUPATION : OCCUPATION,
		$OCCUPATION_CODE : OCCUPATION_CODE,
		$WRKPLACE : WRKPLACE,
		$W_CLASS : W_CLASS,
		$RELIGION : RELIGION,
		$OTH_REL : OTH_REL,
		$REMARKS : REMARKS,
		$INTERVIEW_STATUS : INTERVIEW_STATUS,
		$INTERVIEW_STATUS_OTH : INTERVIEW_STATUS_OTH,
		$id : id,
		$eacode : eacode,
		$hcn : hcn,
		$shsn : shsn,
		$MEMBER_CODE : mcode,
		$ES_DBI : ES_DBI,
		$MOM : MOM,
		$DAD : DAD,
		$BIOMOM : BIOMOM,
		$BIODAD : BIODAD,
		$MATERNAL : MATERNAL,
		$SCHOOL : SCHOOL,
		$memkey : memkey,
		$username : username
		
      },function(err,rows){
		if(err) {
		fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] Error updating Inserting f11 : '+eacode+' | '+hcn+' | '+shsn+' ; '+err+'  \n');
		}
	  });
	  
	
		db2.run("INSERT INTO f21 (eacode, hcn, shsn, MEMBER_CODE, username) VALUES ($eacode, $hcn, $shsn, $MEMBER_CODE, $username)",
	{	
	$eacode : eacode,
	$hcn : hcn,
	$shsn : shsn,
	$MEMBER_CODE : mcode,
	$username : username
	},function(err,rows){
		if(err){
		fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] Error updating Inserting f21 : '+eacode+' | '+hcn+' | '+shsn+' ; '+err+'  \n');
		}
		});

	 });

	});
	 res.redirect("/legone/survey/surveyform/form11/"+eacode+hcn+shsn);
		
};


exports.view = function(req, res){
	var obj = {};
	
	var id = JSON.stringify(req.body.id);

	  db2.all("SELECT * FROM f11 WHERE eacode = ? and hcn = ? and shsn = ? and MEMBER_CODE = ? ",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows){
	  rows.forEach(function (row) {
			res.send(row);
        });
	 });
};

exports.view3 = function(req, res){
	var obj = {};
	
	var id = JSON.stringify(req.body.id);

	  db2.all("SELECT * FROM f11 WHERE eacode = ? and hcn = ? and shsn = ? and MEMBER_CODE = ? ",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows){
	 
			res.send(rows);
       
	 });
};
	
exports.respondents = function(req, res){
	var obj = {};

	var id = JSON.stringify(req.body.id);
	
	  db2.all("SELECT * FROM f11 WHERE eacode = ? and hcn = ? and shsn = ?",[req.body.eacode, req.body.hcn, req.body.shsn], function(err,rows){
			res.send(rows);
	 });
};	
	
exports.view2 = function(req, res){
	var obj = {};

	var eacode = req.body.id;
	var eacode2 = eacode.substring(0, 12);
	var hcn = req.body.id;
	var hcn2 = hcn.substring(12, 16);
	var shsn = req.body.id;
	var shsn2 = shsn.substring(16, 20);
	var MEMBER_CODE = req.body.id;
	var MEMBER_CODE2 = shsn.substring(20, 22);
	
	  db2.all("SELECT * FROM f11 WHERE eacode = ? and hcn = ? and shsn = ? and MEMBER_CODE = ? ",[eacode2, hcn2, shsn2, MEMBER_CODE2], function(err,rows){
	  rows.forEach(function (row) {
			res.send(row);
        });
	 });
};
	
	





