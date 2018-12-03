var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');
var session = require('express-session');
var dateLog = new Date().toLocaleString();


exports.post = function (req, res){
	
	if(req.body.username != '' && req.body.pword != '')
	{
		   var username = req.body.username;
		   var password = req.body.pword;

			db2.all("SELECT * FROM login WHERE username = ? and type = ?", [username, password], function(err, rows) {
			
			if(rows.length > 0 ) {
			if(err){ res.redirect('/'); }

				fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+']['+req.body.username+'] Logged in as user '+req.body.username+' \n');
									req.session.username = req.body.username;
									res.redirect('/legone/survey/surveyform/');
								
			}
			else {

				fs.appendFile('logs.txt', '['+dateLog+'] Failed login \n');

				res.redirect ( '/');
			}
			  
			});
			
			
	}
	else{
		
		res.redirect('/');
	}
	
};

