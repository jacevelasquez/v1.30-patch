var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');
var dateLog = new Date().toLocaleString();

exports.get = function(req, res){
	
	var id = req.params.id;

	fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] Household Listings : '+req.params.id+' \n');

	if(id.substring(11,12) != 'P'){
	db2.all("SELECT * FROM localarea_listings WHERE eacode like '%"+[id.substring(0,9)]+"%' and eacode not like '%P%' order by eacode", function(err,rows){
	db2.all("SELECT * FROM localarea_listings WHERE eacode like '%"+[id.substring(0,9)]+"%' and eacode not like '%P%' and (INTERVIEW_STATUS4*1) <=2 and (INTERVIEW_STATUS4*1) > 0", function(err,rowsC){
	db2.all("SELECT * FROM localarea_listings WHERE eacode like '%"+[id.substring(0,9)]+"%' and eacode not like '%P%' and (INTERVIEW_STATUS4*1) !=2 and (INTERVIEW_STATUS4*1) !=1", function(err,rowsN){		
		
		db2.all("SELECT * FROM f11 WHERE eacode like '%"+[id.substring(0,9)]+"%'  and eacode not like '%P%'", function(err,rows2){
			
			db2.all("SELECT * FROM login WHERE eacode like '%"+[id.substring(0,9)]+"%'  and eacode not like '%P%'", function(err,rows3){
				
				db2.all("SELECT * FROM localsurveyareas WHERE eacode like '%"+[id.substring(0,9)]+"%'  and eacode not like '%P%'", function(err,rows4){
					
					res.render('households.ejs',{array:rows,arrayC:rowsC,arrayN:rowsN,array2:rows2,array3:rows3,array4:rows4,layout:false,session:req.session});
					
				});
			});
		});
	});
	});
	});
	}
	if(id.substring(11,12) == 'P'){
	db2.all("SELECT * FROM localarea_listings WHERE eacode like '%"+[id.substring(0,9)]+"%' and eacode like '%P%' order by eacode", function(err,rows){
		 
		db2.all("SELECT * FROM f11 WHERE eacode like '%"+[id.substring(0,9)]+"%'  and eacode like '%P%'", function(err,rows2){
			
			db2.all("SELECT * FROM login WHERE eacode like '%"+[id.substring(0,9)]+"%'  and eacode like '%P%'", function(err,rows3){
				
				db2.all("SELECT * FROM localsurveyareas WHERE eacode like '%"+[id.substring(0,9)]+"%'  and eacode like '%P%'", function(err,rows4){
					
					res.render('households.ejs',{array:rows,array2:rows2,array3:rows3,array4:rows4,layout:false,session:req.session});
					
				});
			});
		});
	});
	}
};

exports.display = function(req, res){
	
	var obj = {};
	
	db2.all("SELECT * FROM localarea_listings WHERE eacode like '%"+[req.body.eacode.substring(0,9)]+"%' and eacode not like '%P%'", function(err,rows)	 {		
		obj.total = rows.length;
		
		db2.all("SELECT * FROM localarea_listings WHERE eacode like '%"+[req.body.eacode.substring(0,9)]+"%' and eacode not like '%P%' and (INTERVIEW_STATUS4*1) <=2 and (INTERVIEW_STATUS4*1) > 0", function(err,rowsC)	 {	
			obj.cover = rowsC.length;
			
			db2.all("SELECT * FROM localarea_listings WHERE eacode like '%"+[req.body.eacode.substring(0,9)]+"%' and eacode not like '%P%' and INTERVIEW_STATUS4 !=2 and INTERVIEW_STATUS4 !=1", function(err,rowsN)	 {	
				obj.ncover = rowsN.length;
			
			res.send(obj);
			
			});
		});	
	});
};

exports.post = function(req, res){
	
	eacode = req.body.eacode;
	hcn = req.body.hcn;
	shsn = req.body.shsn;
	address = req.body.address;
	respondent = req.body.respondent;
	hhead = req.body.hhead;
	INTERVIEW_STATUS = req.body.INTERVIEW_STATUS;

	fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] Inserted household '+eacode+' | '+hcn+' | '+shsn+'  \n');
	
	db2.run("INSERT INTO localarea_listings (eacode, hcn, shsn, address, respondent, hhead, diebio, REF_DATE, DATE_EDIT, die2ndgen) VALUES ($eacode, $hcn, $shsn, $address, $respondent, $hhead, '"+req.body.diebio+"', '"+req.body.REF_DATE+"', '"+req.body.DATE_EDIT+"', '"+req.body.die2ndgen+"')",
	{	
	
	$eacode : eacode,
	$hcn : hcn,
	$shsn : shsn,
	$address : address,
	$respondent : respondent,
	$hhead : hhead,
	$INTERVIEW_STATUS : INTERVIEW_STATUS
	});
	
	res.redirect("/legone/survey/surveyform/households/"+eacode);
		
};

exports.inserthouseholds = function(req, res){
	
	eacode = req.body.eacode;
	hcn = req.body.hcn;
	shsn = req.body.shsn;
	username = req.body.username;

	db2.run("INSERT OR IGNORE INTO f12 (eacode, hcn, shsn, username) VALUES ($eacode, $hcn, $shsn, $username)",
	{	
	$eacode : eacode,
	$hcn : hcn,
	$shsn : shsn,
	$username : username
	});
	
	db2.run("INSERT OR IGNORE INTO f13 (eacode, hcn, shsn, username) VALUES ($eacode, $hcn, $shsn, $username)",
	{	
	$eacode : eacode,
	$hcn : hcn,
	$shsn : shsn,
	$username : username
	});
	
	db2.run("INSERT OR IGNORE INTO f14 (eacode, hcn, shsn, username) VALUES ($eacode, $hcn, $shsn, $username)",
	{	
	$eacode : eacode,
	$hcn : hcn,
	$shsn : shsn,
	$username : username
	});
	
	db2.run("INSERT OR IGNORE INTO f15 (eacode, hcn, shsn, username) VALUES ($eacode, $hcn, $shsn, $username)",
	{	
	$eacode : eacode,
	$hcn : hcn,
	$shsn : shsn,
	$username : username
	});
	
	db2.run("INSERT OR IGNORE INTO f16 (eacode, hcn, shsn, username) VALUES ($eacode, $hcn, $shsn, $username)",
	{	
	$eacode : eacode,
	$hcn : hcn,
	$shsn : shsn,
	$username : username
	});
	
	db2.run("INSERT OR IGNORE INTO f17 (eacode, hcn, shsn, username) VALUES ($eacode, $hcn, $shsn, $username)",
	{	
	$eacode : eacode,
	$hcn : hcn,
	$shsn : shsn,
	$username : username
	});
		
};

exports.hhead = function(req, res){
	
	var id = req.body.id;
	
	db2.all("UPDATE localarea_listings SET hhead=? WHERE eacode=? and hcn=? and shsn=?",[req.body.hhead, id.substring(0,12), id.substring(12,16), id.substring(16,20)],function(err,rows){
		
		if (err) {
			  console.log("Error Updating : %s ",err );
			  fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] error updating hhead : '+err+' \n');
		}
		 
		res.send(rows);	
	});
	
};

exports.visit1 = function(req, res){
	
	var id = req.body.id;
	
	db2.all("UPDATE localarea_listings SET visit1=? WHERE eacode=? and hcn=? and shsn=?",[req.body.visit1, id.substring(0,12), id.substring(12,16), id.substring(16,20)],function(err,rows){
		
		if (err) {
			  console.log("Error Updating : %s ",err );
			  fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] error updating visit1 : '+err+' \n');
		}
		 
		res.send(rows);	
	});
	
};

exports.visit2 = function(req, res){
	
	var id = req.body.id;
	
	
	db2.all("UPDATE localarea_listings SET visit2=? WHERE eacode=? and hcn=? and shsn=?",[req.body.visit2, id.substring(0,12), id.substring(12,16), id.substring(16,20)],function(err,rows){
		
		if (err) {
			  console.log("Error Updating : %s ",err );
			  fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] error updating visit2 : '+err+' \n');
		}
		else 
		res.send(rows);
	})
	
};

exports.visit3 = function(req, res){
	
	var id = req.body.id;
	
	db2.all("UPDATE localarea_listings SET visit3=? WHERE eacode=? and hcn=? and shsn=?",[req.body.visit3, id.substring(0,12), id.substring(12,16), id.substring(16,20)],function(err,rows){
		
		if (err) {
			  console.log("Error Updating : %s ",err );
			  fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] error updating visit3 : '+err+' \n');
		}
		 
		res.send(rows);
	})
	
};

exports.indivnum = function(req, res){
	var obj = {};
	  db2.all("SELECT * FROM f11 WHERE eacode=? and hcn=? and shsn=?",[req.body.eacode, req.body.hcn, req.body.shsn], function(err,rows){
		if(rows.length > 0 ){
		 	res.send(rows);
		}
		if(rows.length == 0){
			res.send('none');
			}
	  });
};

exports.replacement = function(req, res){
	var obj = {};
	  db2.all("SELECT * FROM localarea_listings WHERE eacode=? and hcn=? and shsn=? and REF_DATE='1'",[req.body.eacode, req.body.hcn, req.body.shsn], function(err,rows){
		if(rows.length > 0 ){
		 	res.send(rows);
		}
		if(rows.length == 0){
			res.send('none');
			}
	  });
};

exports.diebio = function(req, res){
	var obj = {};

	fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] Ticked/Unticked diebio checkbox : '+req.body.diebio+' \n');

	db2.all("UPDATE localarea_listings SET diebio=? WHERE eacode = ? and hcn=? and shsn=?",[req.body.diebio, req.body.id.substring(0,12), req.body.id.substring(12,16), req.body.id.substring(16,20)],function(err,rows){
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else 
		res.send(rows);
	});
	
	
	
};

exports.f12 = function(req, res){
	var obj = {};
	db2.all("UPDATE localarea_listings SET f12_03_01='"+req.body.f12_03_01+"', f12_04_01='"+req.body.f12_04_01+"', f12_05_01='"+req.body.f12_05_01+"' WHERE eacode = '"+req.body.eacode+"' and hcn='"+req.body.hcn+"' and shsn='"+req.body.shsn+"'",function(err,rows){
		if (err) {
			  console.log("Error Updating : %s ",err );
			  fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] error updating f12 localarea_listings : '+err+' \n');
		}
		else 
		res.send(rows);
	});
	
	
	
};

exports.map = function(req, res){
	var obj = {};
	db2.all("UPDATE localarea_listings SET longitude='"+req.body.longitude+"', latitude='"+req.body.latitude+"', address='"+req.body.address+"' WHERE eacode = '"+req.body.eacode+"' and hcn='"+req.body.hcn+"' and shsn='"+req.body.shsn+"'",function(err,rows){
		if (err) {
			  console.log("Error Updating : %s ",err );
			  fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] error updating map coordinates  : '+err+' '+req.body.hcn+req.body.shsn+' \n');
		}
		else 
		res.send(rows);
	});
	
};

exports.updateReplacement = function(req, res){
	var obj = {};
	
	db2.all("UPDATE localarea_listings SET DATE_EDIT='"+req.body.DATE_EDIT+"' WHERE eacode = '"+req.body.eacode+"' and hcn='"+req.body.hcn+"' and shsn='"+req.body.shsn+"'",function(err,rows){
		if (err) {
			  console.log("Error Updating : %s ",err );
			  fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] error updating replacement household : '+err+' \n');
		}
		else 
		res.send(rows);
	});
	
};


exports.filterUser = function(req, res){
	var obj = {};
	  db2.all("SELECT * FROM login WHERE username=? and id > 3",[req.body.filterUser], function(err,rows){
		if(rows.length > 0 ){
		 	res.send("hide");
		}
		else {
		res.send("show");
		}
	  });
};

exports.postedit = function(req, res){
	
	var real_eacode = req.body.row_id.substring(0,12);
	var real_hcn = req.body.row_id.substring(12,16);
	var real_shsn = req.body.row_id.substring(16,20);
	
	var array_name = ['f11','f12','f13','f14','f15','f16','f17','f21','f31','f32','f41','f42','f43','f44','f45','f46','f47','f48','f49','f410','f411','f52','f53','f54','f55','f56','f57','f58','f59','f73','f82','localarea_listings'];
	var array_length = array_name.length;
	
	for(var i = 0 ; i< array_length ; i++){
	db2.all("UPDATE "+array_name[i]+" set eacode='"+req.body.eacode+"', hcn='"+req.body.hcn+"', shsn='"+req.body.shsn+"' where eacode='"+real_eacode+"' and hcn='"+real_hcn+"' and shsn='"+real_shsn+"'",function(err,rows){
		if (err) {
			  console.log("Error Updating : %s ",err );
			  fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] error updating adminMode update : '+err+' \n');
		}
	});
	};
	res.redirect("/legone/survey/surveyform/households/"+req.body.eacode);

};

exports.removehh = function(req, res){
	var obj = {};
	var array_name = ['f11','f12','f13','f14','f15','f16','f17','f21','f31','f32','f41','f42','f43','f44','f45','f46','f47','f48','f49','f410','f411','f52','f53','f54','f55','f56','f57','f58','f59','f73','f82','localarea_listings'];
	var array_length = array_name.length;
	
	for(var i = 0 ; i< array_length ; i++){
	db2.all("DELETE FROM "+array_name[i]+" WHERE eacode='"+req.body.eacode+"' and hcn='"+req.body.hcn+"' and shsn='"+req.body.shsn+"'",function(err,rows){
		fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] error updating adminMode update  : '+err+' \n');

	}); 
	};
};
