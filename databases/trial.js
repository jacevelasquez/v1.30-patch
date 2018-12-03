var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '122.53.86.117',
  port	   : '3674',
  user     : 'johncarlo',
  password : 'nsis',
  database : 'nns2018db'
});


exports.get = function(req, res){

db2.all("SELECT * FROM localarea_listings", function(err,rows){
		
	connection.query("SELECT * FROM localarea_listings_tl_map", function(err,rows2){
		
					res.render('trial.ejs',{rows:rows,rows2:rows2}); 

	});	
});
	
};

exports.view = function(req, res){
	
	console.log("UPDATE localarea_listings SET latitude = '"+req.body.latitude+"', longitude = '"+req.body.longitude+"' where eacode = '"+req.body.eacode+"' ")
	
	connection.query("UPDATE localarea_listings_tl_map SET latitude = '"+req.body.latitude+"',  longitude = '"+req.body.longitude+"' where eacode = '"+req.body.eacode+"' ",function(err,rows){
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		res.send('ok');
	})
	
};


