var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');


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
	
	db2.all("SELECT * FROM localsurveyareas WHERE eacode like '%"+[id.substring(0,9)]+"%'", function(err,rows){
		
		db2.all("SELECT * FROM localarea_listings WHERE eacode like '%"+[id.substring(0,9)]+"%' ORDER BY hcn", function(err,rows2){
			
			db2.all("SELECT * FROM f11 WHERE eacode like '%"+[id.substring(0,9)]+"%'", function(err,rows3){
				
				db2.all("select * from f12 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows12){	
				db2.all("select * from f13 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows13){
				db2.all("select * from f14 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows14){
				db2.all("select * from f15 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows15){
				db2.all("select * from f16 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows16){
				db2.all("select * from f17 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows17){
				db2.all("select * from f21 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows21){	
				db2.all("select * from f31 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows31){
				db2.all("select * from f32 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows32){
				db2.all("select * from f41 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows41){
				db2.all("select * from f42 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows42){
				db2.all("select * from f43 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows43){
				db2.all("select * from f44 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows44){
				db2.all("select * from f45 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows45){
				db2.all("select * from f46 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows46){
				db2.all("select * from f47 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows47){
				db2.all("select * from f48 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows48){
				db2.all("select * from f49 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows49){
				db2.all("select * from f410 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows410){
				db2.all("select * from f411 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows411){	
				db2.all("select * from f52 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows52){	
				db2.all("select * from f53 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows53){
				db2.all("select * from f54 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows54){
				db2.all("select * from f55 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows55){
				db2.all("select * from f56 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows56){
				db2.all("select * from f57 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows57){
				db2.all("select * from f58 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows58){
				db2.all("select * from f59 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows59){	
				db2.all("select * from f73 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows73){	
				db2.all("select * from f82 where eacode like '%"+[id.substring(0,9)]+"%'",function(err,rows82){
			res.render('summarylist.ejs',{array:rows,array2:rows2,array3:rows3,array12:rows12,array13:rows13,array14:rows14,array15:rows15,array16:rows16,array17:rows17,array21:rows21,array31:rows31,array32:rows32,array41:rows41,array42:rows42,array43:rows43,array44:rows44,array45:rows45,array46:rows46,array47:rows47,array48:rows48,array49:rows49,array410:rows410,array411:rows411,array52:rows52,array53:rows53,array54:rows54,array55:rows55,array56:rows56,array57:rows57,array58:rows58,array59:rows59,array73:rows73,array82:rows82,layout:false,session:req.session});
			
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
		
			});
		});		
	});

};

exports.summary5 = function(req, res){
var obj = {};
var id = req.body.eacode;

	  db2.all("SELECT * FROM f11 WHERE eacode like '%"+[id.substring(0,9)]+"%' and hcn=? and shsn=? and AGE>=0 and AGE <=0.499",[req.body.hcn, req.body.shsn.substring(0,4)], function(err,rows){
		if(rows.length > 0 ){
		 	res.send(rows);
		}
		if(rows.length == 0){
			res.send('none');
			}
	  });		
};

exports.summary6 = function(req, res){
var obj = {};
var id = req.body.eacode;

	  db2.all("SELECT * FROM f11 WHERE eacode like '%"+[id.substring(0,9)]+"%' and hcn=? and shsn=? and AGE>=0.5 and AGE <=1.999",[req.body.hcn, req.body.shsn.substring(0,4)], function(err,rows){
		if(rows.length > 0 ){
		 	res.send(rows);
		}
		if(rows.length == 0){
			res.send('none');
			}
	  });		
};

exports.summary7 = function(req, res){
var obj = {};
var id = req.body.eacode;

	  db2.all("SELECT * FROM f11 WHERE eacode like '%"+[id.substring(0,9)]+"%' and hcn=? and shsn=? and AGE>=2 and AGE <=5.9999",[req.body.hcn, req.body.shsn.substring(0,4)], function(err,rows){
		if(rows.length > 0 ){
		 	res.send(rows);
		}
		if(rows.length == 0){
			res.send('none');
			}
	  });		
};

exports.summary8= function(req, res){
var obj = {};
var id = req.body.eacode;

	  db2.all("SELECT * FROM f11 WHERE eacode like '%"+[id.substring(0,9)]+"%' and hcn=? and shsn=? and AGE>=6 and AGE <=12.9999",[req.body.hcn, req.body.shsn.substring(0,4)], function(err,rows){
		if(rows.length > 0 ){
		 	res.send(rows);
		}
		if(rows.length == 0){
			res.send('none');
			}
	  });		
};

exports.summary9 = function(req, res){
var obj = {};
var id = req.body.eacode;

	  db2.all("SELECT * FROM f11 WHERE eacode like '%"+[id.substring(0,9)]+"%' and hcn=? and shsn=? and AGE>=13 and AGE <=19.9999",[req.body.hcn, req.body.shsn.substring(0,4)], function(err,rows){
		if(rows.length > 0 ){
		 	res.send(rows);
		}
		if(rows.length == 0){
			res.send('none');
			}
	  });		
};

exports.summary10 = function(req, res){
var obj = {};
var id = req.body.eacode;

	  db2.all("SELECT * FROM f11 WHERE eacode like '%"+[id.substring(0,9)]+"%' and hcn=? and shsn=? and AGE>=20 and AGE <=59.9999",[req.body.hcn, req.body.shsn.substring(0,4)], function(err,rows){
		if(rows.length > 0 ){
		 	res.send(rows);
		}
		if(rows.length == 0){
			res.send('none');
			}
	  });		
};

exports.summary11 = function(req, res){
var obj = {};
var id = req.body.eacode;

	  db2.all("SELECT * FROM f11 WHERE eacode like '%"+[id.substring(0,9)]+"%' and hcn=? and shsn=? and AGE>=60",[req.body.hcn, req.body.shsn.substring(0,4)], function(err,rows){
		if(rows.length > 0 ){
		 	res.send(rows);
		}
		if(rows.length == 0){
			res.send('none');
			}
	  });		
};

exports.summary12 = function(req, res){
var obj = {};
var id = req.body.eacode;

	  db2.all("SELECT * FROM f11 WHERE eacode like '%"+[id.substring(0,9)]+"%' and hcn=? and shsn=? and (PSC='01' or PSC='02' or PSC='03' or PSC='04' or PSC='05' or PSC='06' or PSC='07' or PSC='08' or PSC='09')",[req.body.hcn, req.body.shsn.substring(0,4)], function(err,rows){
		if(rows.length > 0 ){
		 	res.send(rows);
		}
		if(rows.length == 0){
			res.send('none');
			}
	  });		
};

exports.summary13 = function(req, res){
var obj = {};
var id = req.body.eacode;


	  db2.all("SELECT * FROM f11 WHERE eacode like '%"+[id.substring(0,9)]+"%' and hcn=? and shsn=? and (PSC='10' or PSC='11' or PSC='12')",[req.body.hcn, req.body.shsn.substring(0,4)], function(err,rows){
		if(rows.length > 0 ){

		 	res.send(rows);
		}
		if(rows.length == 0){
			res.send('none');
			}
	  });		
};


exports.summ = function(req, res){
	
	var eacode = req.body.eacode;

	
	var obj = {};
	
		db2.all("SELECT * FROM f11 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"'", function(err,rows){
		rows.forEach(function (row) {
			obj.f11=row;
			});
	 });
	 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f12 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){
		  
		
		obj.f12=rows2.length;
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f13 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){
		  
		
		obj.f13=rows2.length;
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f14 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){
		  
		
		obj.f14=rows2.length;
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f15 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){
		  
		
		obj.f15=rows2.length;
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f16 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){
		  
		
		obj.f16=rows2.length;
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f17 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){
		  
		
		obj.f17=rows2.length;
		
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f21 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"'", function(err,rows2){
		  
		
		obj.f21=rows2.length;
		

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f31 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){
		  
		
		obj.f31=rows2.length;	

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f32 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){
		 
		obj.f32=rows2.length;
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f41 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f41=rows2.length;
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f42 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f42=rows2.length;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f43 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f43=rows2.length;
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f44 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f44=rows2.length;
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f45 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f45=rows2.length;
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f46 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f46=rows2.length;	
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f47 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f47=rows2.length;	
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f48 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f48=rows2.length;	
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f49 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f49=rows2.length;
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f410 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f410=rows2.length;	
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
db2.all("SELECT * FROM f411 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

	obj.f411=rows2.length;
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f52 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f52=rows2.length;	
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f53 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f53=rows2.length;
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f54 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f54=rows2.length;
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f55 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f55=rows2.length;
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f56 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f56=rows2.length;
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f57 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f57=rows2.length;
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f58 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f58=rows2.length;

////////////////////////////////////////////////////////////////////////////////////////////////////////////			
db2.all("SELECT * FROM f59 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

	obj.f59=rows2.length;
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f73 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){

		obj.f73=rows2.length;
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  db2.all("SELECT * FROM f82 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and hcn = '"+req.body.hcn+"' and  shsn = '"+req.body.shsn.substring(0,4)+"' and INTERVIEW_STATUS <3", function(err,rows2){
		  
		obj.f82=rows2.length;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////	

	res.send(obj);
		}); //f12
		}); //f13
		}); //f14
		}); //f15
		}); //f16
		}); //f17
		}); //f21
		}); //f31
		}); //f32
		}); //f41
		}); //f42
		}); //f43
		}); //f44
		}); //f45
		}); //f46
		}); //f47
		}); //f48
		}); //f49
		}); //f410
		}); //f411
		}); //f52
		}); //f53
		}); //f54
		}); //f55
		}); //f56 
		}); //f57 
		}); //f58 
		}); //f59
		}); //f73
		}); //f82

}










