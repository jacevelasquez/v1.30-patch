var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var dateLog = new Date().toLocaleString();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '122.53.86.117',
  port	   : '3674',
  user     : 'johncarlo',
  password : 'nsis',
  database : 'nns2018db'
});


exports.get = function(req, res){

	connection.query("SELECT teamLead, COUNT(*) AS Cnt FROM report GROUP BY teamLead ORDER BY Cnt DESC",function(err,rows){
					res.render('report.ejs',{rows:rows,layout:false,session:req.session}); 
	});
};

exports.submit_report = function(req, res){
	
	sql = "INSERT IGNORE INTO report (name,team,subteam,concern,teamLead) VALUES('"+req.body.name+"','"+req.body.team+"','"+req.body.subteam+"','"+req.body.concern+"','TL-ST"+req.body.subteam+"-TEAM"+req.body.team+"');";
	connection.query(sql  ,function(err,rows){
	   if(err){
		   console.log("Error number : " + err);
		   fs.appendFile('logs.txt', '['+dateLog+'] Error on transmission on : '+err+' \n');	 
   }
			
   });

	
};

exports.submit =  function (req, res, next) {
	
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
        to: 'jace.velasquez@yahoo.com', // list of receivers
        subject: 'FROM : '+ req.session.username, // Subject line
        text: 'Transmitted data', // plain text body
        html: 'Transmitted data sent by '+req.body.name+'. Please download attached file (in zip)', // html body
		attachments: [{path:"C:/Users/ENCODER/Downloads/"+req.file.originalname, type:"application/zip", name:"uploaded.zip"}]
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
});
	
};


