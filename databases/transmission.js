var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');
var json2csv = require('json2csv');
const csv=require('csvtojson');
var multer= require('multer');
var upload = multer({ dest: 'uploads/' })
var Zip = require('node-7z'); // Name the class as you want! 
var unzip = require('unzip');
var easyzip = require('easy-zip');
var dateLog = new Date().toLocaleString();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '122.53.86.117',
  port	   : '3674',
  user     : 'johncarlo',
  password : 'nsis',
  database : 'nns2018db'
});

var connection_server = mysql.createConnection({
  host     : '10.10.125.153',
  user     : 'stat',
  password : 'nsis',
  database : 'pilot2017'
});

exports.get = function(req, res){
	
	var eacode = req.params.id;
	
				connection.query("select * from localarea_listings_tl where eacode like '%"+[eacode.substring(0,9)]+"%' and INTERVIEW_STATUS4 <=2 and INTERVIEW_STATUS4 > 0 order by eacode, hcn",function(err,rows){
				connection.query("select * from localarea_listings_tl where eacode like '%"+eacode.substring(0,9)+"%' and INTERVIEW_STATUS4 !=2 and INTERVIEW_STATUS4 !=1 order by eacode, hcn",function(err,rows5){	
				connection.query("select * from f11_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows2){
				db2.all("select * from localsurveyareas where eacode like '%"+[eacode.substring(0,9)]+"%'",function(err,rows3){
				connection.query("select * from f12_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows12){	
				connection.query("select * from f13_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows13){
				connection.query("select * from f14_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows14){
				connection.query("select * from f15_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows15){
				connection.query("select * from f16_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows16){	
				connection.query("select * from f17_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows17){
				connection.query("select * from f21_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows21){	
				connection.query("select * from f31_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows31){
				connection.query("select * from f32_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows32){
				connection.query("select * from f41_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows41){
				connection.query("select * from f42_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows42){
				connection.query("select * from f43_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows43){
				connection.query("select * from f44_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows44){
				connection.query("select * from f45_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows45){
				connection.query("select * from f46_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows46){
				connection.query("select * from f47_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows47){
				connection.query("select * from f48_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows48){
				connection.query("select * from f49_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows49){
				connection.query("select * from f410_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows410){	
				connection.query("select * from f411_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows411){		
				connection.query("select * from f52_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows52){
				connection.query("select * from f53_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows53){
				connection.query("select * from f54_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows54){
				connection.query("select * from f55_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows55){
				connection.query("select * from f56_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows56){
				connection.query("select * from f57_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows57){
				connection.query("select * from f58_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows58){
				connection.query("select * from f59_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows59){	
				connection.query("select * from f73_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows73){	
				connection.query("select * from f82_tl where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rows82){	
				
				connection.query("select * from localarea_listings_ar where eacode like '%"+[eacode.substring(0,9)]+"%' and INTERVIEW_STATUS4 <=2 and INTERVIEW_STATUS4 > 0  order by eacode, hcn",function(err,rowsA){
				connection.query("select * from localarea_listings_ar where eacode like '%"+eacode.substring(0,9)+"%' and INTERVIEW_STATUS4 !=2 and INTERVIEW_STATUS4 !=1 order by eacode, hcn",function(err,rowsA5){	
				connection.query("select * from f11_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA2){
				db2.all("select * from localsurveyareas where eacode like '%"+[eacode.substring(0,9)]+"%'",function(err,rowsA3){
				connection.query("select * from f12_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA12){	
				connection.query("select * from f13_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA13){
				connection.query("select * from f14_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA14){
				connection.query("select * from f15_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA15){
				connection.query("select * from f16_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA16){	
				connection.query("select * from f17_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA17){
				connection.query("select * from f21_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA21){	
				connection.query("select * from f31_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA31){
				connection.query("select * from f32_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA32){
				connection.query("select * from f41_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA41){
				connection.query("select * from f42_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA42){
				connection.query("select * from f43_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA43){
				connection.query("select * from f44_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA44){
				connection.query("select * from f45_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA45){
				connection.query("select * from f46_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA46){
				connection.query("select * from f47_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA47){
				connection.query("select * from f48_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA48){
				connection.query("select * from f49_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA49){
				connection.query("select * from f410_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA410){	
				connection.query("select * from f411_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA411){		
				connection.query("select * from f52_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA52){
				connection.query("select * from f53_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA53){
				connection.query("select * from f54_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA54){
				connection.query("select * from f55_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA55){
				connection.query("select * from f56_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA56){
				connection.query("select * from f57_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA57){
				connection.query("select * from f58_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA58){
				connection.query("select * from f59_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA59){	
				connection.query("select * from f73_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA73){	
				connection.query("select * from f82_ar where eacode like '%"+[eacode.substring(0,9)]+"%' order by eacode, hcn",function(err,rowsA82){	
				
				
				res.render('transmission.ejs',{array:rows,array5:rows5,array2:rows2,array3:rows3,array12:rows12,array13:rows13,array14:rows14,array15:rows15,array16:rows16,array17:rows17,array21:rows21,array31:rows31,array32:rows32,array41:rows41,array42:rows42,array43:rows43,array44:rows44,array45:rows45,array46:rows46,array47:rows47,array48:rows48,array49:rows49,array410:rows410,array411:rows411,array52:rows52,array53:rows53,array54:rows54,array55:rows55,array56:rows56,array57:rows57,array58:rows58,array59:rows59,array73:rows73,array82:rows82,arrayA:rowsA,arrayA5:rowsA5,arrayA2:rowsA2,arrayA3:rowsA3,arrayA12:rowsA12,arrayA13:rowsA13,arrayA14:rowsA14,arrayA15:rowsA15,arrayA16:rowsA16,arrayA17:rowsA17,arrayA21:rowsA21,arrayA31:rowsA31,arrayA32:rowsA32,arrayA41:rowsA41,arrayA42:rowsA42,arrayA43:rowsA43,arrayA44:rowsA44,arrayA45:rowsA45,arrayA46:rowsA46,arrayA47:rowsA47,arrayA48:rowsA48,arrayA49:rowsA49,arrayA410:rowsA410,arrayA411:rowsA411,arrayA52:rowsA52,arrayA53:rowsA53,arrayA54:rowsA54,arrayA55:rowsA55,arrayA56:rowsA56,arrayA57:rowsA57,arrayA58:rowsA58,arrayA59:rowsA59,arrayA73:rowsA73,arrayA82:rowsA82,layout:false,session:req.session});
				
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
	});
});
				
};

 exports.getD = function(req, res){
	 
   var eacode = req.params.id;
	db2.all("select * from localsurveyareas WHERE eacode='" + eacode + "'",function(err,rowsL){
    connection.query("select distinct d_f11.eacode, d_f11.hcn, d_f11.shsn, d_f60.INTERVIEW_STATUS from d_f11 INNER JOIN d_f60 ON d_f11.eacode = d_f60.eacode and d_f11.hcn = d_f60.hcn and d_f11.shsn = d_f60.shsn where d_f60.eacode = '" + eacode + "' and d_f11.AGE > 0",function(err,rows){
		
		connection.query("SELECT distinct eacode, hcn, shsn FROM d_f71 WHERE eacode='" + eacode + "'",function(err,rows2){
			
			connection.query("SELECT distinct * FROM d_f11 WHERE eacode='" + eacode + "'",function(err,rows3){
				
				connection.query("SELECT distinct * FROM d_f63 WHERE eacode='" + eacode + "'",function(err,rows63){
				connection.query("select distinct d_f11.eacode, d_f11.hcn, d_f11.shsn , d_f11.MEMBER_CODE,d_f11.AGE from d_f11 INNER JOIN d_f71 ON d_f11.eacode = d_f71.eacode and d_f11.hcn = d_f71.hcn and d_f11.shsn = d_f71.shsn and d_f11.MEMBER_CODE = d_f71.MEMBER_CODE where d_f71.eacode = '"+ eacode +"' and d_f11.AGE > 0",function(err,rows71){
				connection.query("select distinct d_f11.eacode, d_f11.hcn, d_f11.shsn , d_f11.MEMBER_CODE,d_f11.AGE from d_f11 INNER JOIN d_f71 ON d_f11.eacode = d_f71.eacode and d_f11.hcn = d_f71.hcn and d_f11.shsn = d_f71.shsn and d_f11.MEMBER_CODE = d_f71.MEMBER_CODE where d_f71.eacode = '"+ eacode +"' and d_f11.AGE <= 3  and d_f11.AGE > 0",function(err,rowsA){
				connection.query("select distinct d_f11.eacode, d_f11.hcn, d_f11.shsn , d_f11.MEMBER_CODE,d_f11.AGE from d_f11 INNER JOIN d_f71 ON d_f11.eacode = d_f71.eacode and d_f11.hcn = d_f71.hcn and d_f11.shsn = d_f71.shsn and d_f11.MEMBER_CODE = d_f71.MEMBER_CODE where d_f71.eacode = '"+ eacode +"' and AGE>3 and AGE < 15",function(err,rowsB){
				connection.query("select distinct d_f11.eacode, d_f11.hcn, d_f11.shsn , d_f11.MEMBER_CODE,d_f11.AGE from d_f11 INNER JOIN d_f71 ON d_f11.eacode = d_f71.eacode and d_f11.hcn = d_f71.hcn and d_f11.shsn = d_f71.shsn and d_f11.MEMBER_CODE = d_f71.MEMBER_CODE where d_f71.eacode = '"+ eacode +"' and AGE>=15",function(err,rowsC){	
				connection.query("SELECT distinct eacode, hcn, shsn FROM d_f71 WHERE eacode='" + eacode + "'",function(err,rows71t){
				connection.query("SELECT distinct * FROM d_f76 WHERE eacode='" + eacode + "'",function(err,rows76){
				connection.query("SELECT distinct * FROM d_f64 WHERE eacode='" + eacode + "'",function(err,rows64){	
				
				  if(err) console.log(err);;
					res.render('transmissionD.ejs',{rowsL:rowsL,rows:rows,rows2:rows2,rows3:rows3,rows63:rows63,rows64:rows64,rows71:rows71,rows71t:rows71t,rows76:rows76,rowsB:rowsB,rowsC:rowsC,rowsA:rowsA,layout:false,session:req.session});

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

exports.f11T = function(req, res){
	
	var obj = {};
	  connection.query("SELECT * FROM f11_tl WHERE eacode = ? and hcn = ? and shsn = ?",[req.body.eacode, req.body.hcn, req.body.shsn], function(err,rows){
			res.send(rows);
	 });
};

exports.f11A = function(req, res){
	
	var obj = {};
	  connection.query("SELECT * FROM f11_ar WHERE eacode = ? and hcn = ? and shsn = ?",[req.body.eacode, req.body.hcn, req.body.shsn], function(err,rows){
			res.send(rows);
	 });
};

exports.membersTL = function(req, res){
	
	var obj = {};
	  connection.query("SELECT * FROM f11_tl WHERE eacode = ? and hcn = ? and shsn = ?",[req.body.eacode, req.body.hcn, req.body.shsn], function(err,rows){
			res.send(rows);
	 });
};

/****************************************************** UPLOAD ******************************************************/

exports.extract =  function (req, res, next) {
	csvFilePath=req.file.path;
	
	var fx = fs.createReadStream(csvFilePath).pipe(unzip.Extract({ path: 'C:/dcs/consolidation' }));

	fx.on('error', function(err) {
		fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] Error extracting file for transmission '+req.file.originalname+' : '+err+' \n');
		res.send('error');
	});
	
};

exports.extractD =  function (req, res, next) {
	csvFilePath=req.file.path;
	
	fs.createReadStream(csvFilePath).pipe(unzip.Extract({ path: 'C:/dcs/consolidation' }));
	
};

exports.email =  function (req, res, next) {
	csvFilePath=req.file.path;
	
	'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
	
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'enns.fnridost@gmail.com', // generated ethereal user
            pass: 'namdnsis3'  // generated ethereal password
        }
    });
    // setup email data with unicode symbols
    let mailOptions = {
        from: 'enns.fnridost@gmail.com', // sender address
        to: 'fnri.namd.nsis.trans@gmail.com', // list of receivers password:namdnsis2019
        subject: 'FROM : '+ req.session.username, // Subject line
        text: 'Transmitted data', // plain text body
        html: 'Transmitted data sent by '+req.session.username+'. Please download attached file (in zip)', // html body
		attachments: [{path:"C:/Users/ENCODER/Downloads/"+req.file.originalname, type:"application/zip", name:"renamed.zip"}]
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
});
	
};

exports.upload = function (req, res, next) {
  
  if(req.session.username.substring(0,1) == 'A'){
  var array_name = ['f11_ar','localarea_listings_ar','f12_ar','f13_ar','f14_ar','f15_ar','f16_ar','f17_ar','f21_ar','f31_ar','f32_ar','f41_ar','f42_ar','f43_ar','f44_ar','f45_ar','f46_ar','f47_ar','f48_ar','f49_ar','f410_ar','f411_ar','f52_ar','f53_ar','f54_ar','f55_ar','f56_ar','f57_ar','f58_ar','f59_ar','f73_ar','f82_ar'];
  }
  
  if(req.session.username.substring(0,1) == 'T'){
  var array_name = ['f11_tl','localarea_listings_tl','f12_tl','f13_tl','f14_tl','f15_tl','f16_tl','f17_tl','f21_tl','f31_tl','f32_tl','f41_tl','f42_tl','f43_tl','f44_tl','f45_tl','f46_tl','f47_tl','f48_tl','f49_tl','f410_tl','f411_tl','f52_tl','f53_tl','f54_tl','f55_tl','f56_tl','f57_tl','f58_tl','f59_tl','f73_tl','f82_tl'];
  }
  
  var array_length = array_name.length;

  fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] Transmitting '+req.file.originalname+' \n');

  for(var i = 0 ; i< array_length ; i++){
  var name = array_name[i]+"_"+req.file.originalname.substring(0,req.file.originalname.length-8)+".csv";
  csvFilePath='C:/dcs/consolidation/'+array_name[i].substring(0,array_name[i].length-3)+"_"+req.file.originalname.substring(0,req.file.originalname.length-8)+".csv";
  	
  var form_name = array_name[i];
 
  csv_transmit(name,form_name);
 
}

res.write('<style>.one { opacity: 0; -webkit-animation: dot 1.3s infinite; -webkit-animation-delay: 0.0s; animation: dot 1.3s infinite; animation-delay: 0.0s; }.two { opacity: 0; -webkit-animation: dot 1.3s infinite; -webkit-animation-delay: 0.2s; animation: dot 1.3s infinite; animation-delay: 0.2s; }.three { opacity: 0; -webkit-animation: dot 1.3s infinite; -webkit-animation-delay: 0.3s; animation: dot 1.3s infinite; animation-delay: 0.3s; }@-webkit-keyframes dot { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1; } }@keyframes dot { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1; } }</style><body>');
	res.write('<div style="height: 200px;width: 400px;position: fixed;top: 40%;left: 50%;margin-top: -100px;margin-left: -200px;"><font size="7">Transmitting data Please Wait<span class="one">.</span><span class="two">.</span><span class="three">.</span></font><br><br>Check the command prompt if it is transmitting; <br> <b>O</b> - If it appends "INSERTED RECORD" repeatedly <br> <b>X</b> - Displays error messages, Query error or Fatal error <br><br></div></body>');
	res.write('<script type="text/javascript"> window.location.href="/checktrans/'+req.file.originalname.substring(0,12)+'";</script>');
	res.end()

};

exports.uploadD = function (req, res, next) {
  

  var array_name = ['d_f11','d_f60','d_f61','d_f63','d_f64','d_f71','d_f76'];
  
  var array_length = array_name.length;

  fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] Transmitting dietary data '+req.file.originalname+' \n');

  for(var i = 0 ; i< array_length ; i++){
  var name = array_name[i]+"_"+req.file.originalname.substring(0,req.file.originalname.length-8)+".csv";
  
  csvFilePath='C:/dcs/consolidation/'+array_name[i].substring(2,5)+"_"+req.file.originalname.substring(0,req.file.originalname.length-8)+".csv";
  	console.log(name);
	console.log(csvFilePath);
  var form_name = array_name[i];
  var username = req.session.username;
 
  csv_transmit(name,form_name,username);
 
}

res.write('<style>.one { opacity: 0; -webkit-animation: dot 1.3s infinite; -webkit-animation-delay: 0.0s; animation: dot 1.3s infinite; animation-delay: 0.0s; }.two { opacity: 0; -webkit-animation: dot 1.3s infinite; -webkit-animation-delay: 0.2s; animation: dot 1.3s infinite; animation-delay: 0.2s; }.three { opacity: 0; -webkit-animation: dot 1.3s infinite; -webkit-animation-delay: 0.3s; animation: dot 1.3s infinite; animation-delay: 0.3s; }@-webkit-keyframes dot { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1; } }@keyframes dot { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1; } }</style><body>');
	res.write('<div style="height: 200px;width: 400px;position: fixed;top: 40%;left: 50%;margin-top: -100px;margin-left: -200px;"><font size="7">Transmitting data Please Wait<span class="one">.</span><span class="two">.</span><span class="three">.</span></font><br><br>Check the command prompt if it is transmitting; <br> <b>O</b> - If it appends "INSERTED RECORD" repeatedly <br> <b>X</b> - Displays error messages, Query error or Fatal error <br><br></div></body>');
	res.write('<script type="text/javascript"> window.location.href="/checktransD/'+req.file.originalname.substring(0,12)+'";</script>');
	res.end()

};


function JSON2mySQL(json,name,form_name,username){
   var col = [];
   var values =[];
   var  sql ="";
   var  rn = 0;
   var arr = name.split('_');

     for (var k in json){
            if(k=='id'){
                // console.log(sql);   
               if(col.length>0){
                    db2.all(sql  ,function(err,rows){
                      if(err) //console.log(err);
                       rn++;
                       // console.log("INSERTED RECORD #" + rn);
               		   // console.log("1st : " + sql);
                   });
                         col = [];
                         values = [];
                       }
             }
            else{
              col.push(k);
              values.push(json[k]);
			  
            }
        }
		// console.log(form_name);
           if(col.length>0){
                  sql = "INSERT IGNORE INTO "+form_name+"("  + col.join(",") + ") VALUES('" +  values.join("','") + "');";
                 connection.query(sql  ,function(err,rows){
					if(err){
						console.log("Error number : " + err);
						fs.appendFile('logs_'+username+'.txt', '['+dateLog+'] Error on transmission on '+form_name+' : '+err+' \n');	 
				}
                                       rn++;
                      
					   console.log("INSERTED RECORD : "+form_name);
                });
                  col = [];
                  values = [];

             }
			 
}

function csv_transmit(name,form_name,username){
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    JSON2mySQL(jsonObj,name,form_name,username);
})
.on('done',(error)=>{
    console.log('Upload Success');
	
})
};


