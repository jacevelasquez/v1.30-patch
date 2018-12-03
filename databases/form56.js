var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');

exports.get = function(req, res){
	// console.log(req.params);
	var id = req.params.id;
	var eacode = id.substring(0, 12);
	var hcn = id.substring(12, 16);
	var shsn = id.substring(16, 20);
	var membercode = id.substring(20, 22);

	db2.all('SELECT * from f56 where eacode = "' + eacode + '" and hcn = "' + hcn + '" and shsn = "' + shsn + '" and MEMBER_CODE = "' + membercode + '"', function(err, users) {
		db2.all('SELECT * from questions where category not like "%taste-preference%" and category != "" order by qkey', function(err, questions) {
			res.render('./form56v2.ejs', {users:users, questions:questions,layout:false,session:req.session}); // load our public/index.ejs file
		});
	});
};

exports.get2 = function(req, res){
	// console.log(req.params);
	var id = req.params.id;
	var eacode = id.substring(0, 12);
	var hcn = id.substring(12, 16);
	var shsn = id.substring(16, 20);
	var membercode = id.substring(20, 22);
	var category = req.params.category;

	db2.all('SELECT * from f56 where eacode = "' + eacode + '" and hcn = "' + hcn + '" and shsn = "' + shsn + '" and MEMBER_CODE = "' + membercode + '"', function(err, users) {
			res.render('./form56v2.ejs', {users:users,layout:false,session:req.session}); // load our public/index.ejs file
	
	});
};

exports.view = function(req, res){
	// console.log(req.body);
	var id = req.body.url;
	var eacode = id.substring(0, 12);
	var hcn = id.substring(12, 16);
	var shsn = id.substring(16, 20);
	var membercode = id.substring(20, 22);
	var category = req.params.category;

	db2.all('SELECT * from f56 where eacode = "' + eacode + '" and hcn = "' + hcn + '" and shsn = "' + shsn + '" and MEMBER_CODE = "' + membercode + '"', function(err, users) {
		res.send(users); // load user data
	});

};

exports.update = function(req, res){
	// console.log(req.body);
	var name = req.body.name;
	var value = req.body.value;
	var eacode = req.body.eacode;
	var hcn = req.body.hcn;
	var shsn = req.body.shsn;
	var membercode = req.body.membercode;
	console.log('UPDATE f56 SET ' + name + ' = "' + value + '" where eacode = "' + eacode + '" and hcn = "' + hcn + '" and shsn = "' + shsn + '" and MEMBER_CODE = "' + membercode + '"');
	db2.run('UPDATE f56 SET ' + name + ' = "' + value + '" where eacode = "' + eacode + '" and hcn = "' + hcn + '" and shsn = "' + shsn + '" and MEMBER_CODE = "' + membercode + '"');
		res.send('/'); // redirect to '/' after storing data

};

exports.time = function(req, res){

	db2.all("UPDATE f56 SET TIME_START='"+req.body.TIME_START+"', TIME_END='"+req.body.TIME_END+"' WHERE eacode = '"+req.body.eacode+"' and hcn = '"+req.body.hcn+"' and shsn = '"+req.body.shsn+"' and MEMBER_CODE = '"+req.body.MEMBER_CODE+"'",function(err,rows){
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		
	});
	res.redirect("/legone/survey/surveyform/form11/"+req.body.eacode+req.body.hcn+req.body.shsn);
};



