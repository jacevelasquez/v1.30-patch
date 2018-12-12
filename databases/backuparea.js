var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2018.db');
var http = require('http');
var EasyZip = require('easy-zip').EasyZip;
var Zip = require('node-7z'); // Name the class as you want! 
var jsonSql = require('json-sql')();
var fileupload = require("express-fileupload");
var formidable = require('formidable');


exports.post = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	

	var m = new Date();
	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);
	var zip = new EasyZip();
		var myArray = ['f11','f12','f13','f14','f15','f21','f31','f41','f42','f43','f44','f45','f46','f47','f48','f49','f52','f53','f54','f55','f56','f73','f82','f83'];

		myArray.forEach(function(values){

		db2.all('select * from '+values+' WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;	
			zip.file(ip.substring(7)+' - '+values+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/ALL/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip');
		});	
		});

};

exports.postF11 = function(req, res){
	eacode = req.params.eacode;
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	process.chdir('C:/Users/NAMD-NAS/Downloads/');
	// console.log(`Starting directory: ${process.cwd()}`);
	
		var m = new Date();     	
		var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);    

		db2.all('select * from f11', function(err, results, fields) {
			if(err) throw err;
			var resy = '';
			var ron = '';
			var set = '';
			// for (var key in results[0]){
			// console.log("''+results[0]."+key+"+'',");	
			// }	
			 for(var x=0;x<results.length;x++){
				 
				resy += '('+results[x].id+', '+results[x].eacode+', '+results[x].hcn+', '+results[x].shsn+', '+results[x].MEMBER_CODE+', '+results[x].SURNAME+', '+results[x].GIVENNAME+', '+results[x].NBI+', '+results[x].MOM+', '+results[x].ADOPTED+', '+results[x].BIOMOM+', '+results[x].DAD+', '+results[x].DBIRTH+', '+results[x].REFDATE+', '+results[x].ES_DBI+', '+results[x].AGE+', '+results[x].SEX+', '+results[x].CSC+', '+results[x].PSC+', '+results[x].RHC+', '+results[x].EDUC+', '+results[x].EDUC_COURSE+', '+results[x].EDUC_OTH+', '+results[x].SCHOOL+', '+results[x].WORK+', '+results[x].OCCUPATION+', '+results[x].OCCUPATION_CODE+', '+results[x].WRKPLACE+', '+results[x].W_CLASS+', '+results[x].RELIGION+', '+results[x].OTH_REL+', '+results[x].othREL+', '+results[x].REMARKS+', '+results[x].memkey+', '+results[x].DATE_ADDED+', '+results[x].DATE_EDIT+', '+results[x].INTERVIEW_STATUS+', '+results[x].INTERVIEW_STATUS1+', '+results[x].INTERVIEW_STATUS2+', '+results[x].INTERVIEW_STATUS3+', '+results[x].visit1+', '+results[x].visit2+', '+results[x].visit3+'),';
			 }
	
			fs.writeFile('f11-'+ip.substring(7)+' - '+eacode+' - '+dateString+'.txt',"INSERT OR IGNORE INTO `f11` (id,eacode,hcn,shsn,MEMBER_CODE,SURNAME,GIVENNAME,NBI,MOM,ADOPTED,BIOMOM,DAD,DBIRTH,REFDATE,ES_DBI,AGE,SEX,CSC,PSC,RHC,EDUC,EDUC_COURSE,EDUC_OTH,SCHOOL,WORK,OCCUPATION,OCCUPATION_CODE,WRKPLACE,W_CLASS,RELIGION,OTH_REL,othREL,REMARKS,memkey,DATE_ADDED,DATE_EDIT,INTERVIEW_STATUS,INTERVIEW_STATUS1,INTERVIEW_STATUS2,INTERVIEW_STATUS3,visit1,visit2,visit3) VALUES "+resy.replace(/,\s*$/, '')+"",function(err) {
                if (err) console.log(err);
                res.download('f11-'+ip.substring(7)+' - '+eacode+' - '+dateString+'.txt');

		});
	});
};


exports.postF12 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f12 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f12-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f12/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF13 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f13 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f13-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f13/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF14 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f14 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f14-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f14/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};
exports.postF15 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f15 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f15-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f15/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF21 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f21 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f21-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f21/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF31 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f31 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f31-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f31/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF41 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f41 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f41-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f41/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF42 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f42 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f42-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f42/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF43 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f43 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f43-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f43/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF44 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f44 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f44-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f44/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF45 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f45 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f45-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f45/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF46 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f46 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f46-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f46/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF47 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f47 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f47-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f47/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF48 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f48 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f48-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f48/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF49 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f49 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f49-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f49/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF52 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f52 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f52-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f52/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF53 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f53 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f53-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f53/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF54 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f54 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f54-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f54/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF55 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f55 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f55-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f55/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF56 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f56 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f56-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f56/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF73 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f73 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f73-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f73/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF82 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f82 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f82-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f82/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};

exports.postF83 = function(req, res){ var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		var m = new Date();     	var dateString = m.getFullYear() + " - " + ("0" + (m.getMonth()+1)).slice(-2) + " - " + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" +("0" + m.getSeconds()).slice(-2);     var zip = new EasyZip();
		db2.all('select * from f83 WHERE eacode='+JSON.stringify(req.body.eacode)+'', function(err, results, fields) {
			if(err) throw err;
			zip.file('f83-'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+'_'+dateString+'.sql',JSON.stringify(results));
			zip.writeToFile('./backup/f83/'+ip.substring(7)+' - '+req.body.eacode+' - '+req.body.areaname+' '+dateString+'.zip'); 
		});	
};





