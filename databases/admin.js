var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');


exports.get = function(req, res){
	
	db2.all("SELECT * FROM answers LIMIT 10", function(err,rows2){
		res.render('admin.ejs',{array2:rows2,layout:false,session:req.session}); 
	});
};

exports.execute = function(req, res){
	
	var input = req.body.query_text;
	console.log(input);
	db2.all(""+input+"",function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else console.log("Success updating admin Answers");
		
	});
	
	res.redirect("/adminMode");
		
};

exports.postQ = function(req, res){
	/*
		var input = JSON.parse(JSON.stringify(req.body));

		Object.keys(input).forEach(function(key) {
		  var val = input[key];
		  console.log("$"+key+", ");
		});
	*/
	qkeyQ = req.body.qkeyQ;
	question = req.body.question;
	questionT = req.body.questionT;
	title = req.body.title;
	note = req.body.note;
	others = req.body.others;
	required = req.body.required;
	tab = req.body.tab;
	rows = req.body.rows;
	cols = req.body.cols;
	colh = req.body.colh;
	pageQ = req.body.pageQ;
	

			
	db2.run("INSERT INTO questions (qkey, question, alt_question, title, note, others, REQUIRED, tabular, rows, cols, colheader, page) VALUES ($qkeyQ, $question, $questionT, $title, $note, $others, $required, $tab, $rows, $cols, $colh, $pageQ)",
	{
	$qkeyQ : qkeyQ, 
	$question : question, 
	$questionT : questionT, 
	$title : title, 
	$note : note, 
	$others : others, 
	$required : required, 
	$tab : tab, 
	$rows : rows, 
	$cols : cols, 
	$colh : colh,
	$pageQ : pageQ
		
      });

	res.redirect("/adminMode");
};

exports.postA = function(req, res){
	
	qkey = req.body.qkey;
	answer_text = req.body.answer_text;
	answer_value = req.body.answer_value;
	input_type = req.body.input_type;
	variable_name = req.body.variable_name;
	classA = req.body.classA;
	group_id = req.body.group_id;
	group_rows = req.body.group_rows;
	group_cols = req.body.group_cols;
	dependent_vars = req.body.dependent_vars;
	nextq = req.body.nextq;
	attrib = req.body.attrib;

			
	db2.run("INSERT INTO answers (qkey, answer_text, answer_value, input_type, variable_name, class, group_id, group_rows, group_cols, dependent_vars, nextq, attrib) VALUES ($qkey, $answer_text, $answer_value, $input_type, $variable_name, $classA, $group_id, $group_rows, $group_cols, $dependent_vars, $nextq, $attrib)",
	{
 
	$qkey : qkey, 
	$answer_text : answer_text, 
	$answer_value : answer_value, 
	$input_type : input_type, 
	$variable_name : variable_name, 
	$classA : classA, 
	$group_id : group_id, 
	$group_rows : group_rows, 
	$group_cols : group_cols, 
	$dependent_vars : dependent_vars, 
	$nextq : nextq, 
	$attrib : attrib
		
    }
	 ,function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else {console.log("Success updating form answers"); }
	 }

	);
	
	db2.run("alter table "+req.body.qkey.substring(0,3)+" add column "+req.body.variable_name+" varchar(50)");

	res.redirect("/adminMode");
};

exports.viewQ = function(req, res){
var obj = {};

	var input = req.body.qkey;

	  db2.all("SELECT * FROM questions WHERE qkey LIKE '%"+ input +"%'", function(err,rows2){
		  
		  if (err) {
              console.log("Error Selecting : %s ",err );
		}
		else console.log("Success selecting");

			res.send(rows2);
	
	
		});	
	
	
	
};

exports.viewA = function(req, res){
var obj = {};

	var input = req.body.qkey;

	  db2.all("SELECT * FROM answers WHERE qkey LIKE '%"+ input +"%'", function(err,rows2){
		  
		  if (err) {
              console.log("Error Selecting : %s ",err );
		}
		else console.log("Success selecting");

			res.send(rows2);
	
	
		});	
	
	
	
};


exports.viewD = function(req, res){
var obj = {};

	var input = req.body.qkey;

	  db2.all("SELECT * FROM questions WHERE qkey LIKE '%"+ input +"%'", function(err,rows2){
		  
		  if (err) {
              console.log("Error Selecting : %s ",err );
		}
		else console.log("Success selecting");

			res.send(rows2);
	
	
		});	
	
	
	
};


exports.viewQuestions = function(req, res){
	var obj = [];
	var input = req.body.qkey;

	if (input  == "") {
		res.send("nodata");
	}
	else
	{
	db2.all("SELECT * FROM questions WHERE qkey LIKE '%"+ input +"%' LIMIT 5", function(err,rows){
	
	for (var i in rows) 
		{
			obj.push(rows[i]);	
		}
		    res.send(obj);
		});
	}
	

	 
};

exports.viewAnswers = function(req, res){
	var obj = [];
	var input = req.body.qkey;

	if (input  == "") {
		res.send("nodata");
	}
	else
	{
	db2.all("SELECT * FROM answers WHERE qkey LIKE '%"+ input +"%' LIMIT 1", function(err,rows){
	
	for (var i in rows) 
		{
			obj.push(rows[i]);	
		}
		    res.send(obj);
		});
	}
	

	 
};

exports.disableQ = function(req, res){
	var obj = [];
	var input = req.body.qkey;

	if (input  == "") {
		res.send("nodata");
	}
	else
	{
	db2.all("SELECT * FROM questions WHERE qkey LIKE '%"+ input +"%' LIMIT 5", function(err,rows){
	
	for (var i in rows) 
		{
			obj.push(rows[i]);	
		}
		    res.send(obj);
		});
	}
	
 
} ;

exports.ans = function(req, res){
	var obj = {};
	var id = req.body.row_id;
	  db2.all("SELECT * FROM answers WHERE row_id = ?",[id], function(err,rows2){
		  
		 if (err) {
              console.log("Error Selecting : %s ",err );
		}
		else console.log("Success selecting answers on view");
		  
		  
	  rows2.forEach(function (row) {
		 
			res.send(row);
        });
	
		});	
	
	
};

exports.updateQ = function(req, res){
			
	var input = req.body.qkey;
	
	db2.all("UPDATE questions SET question =?, alt_question =?, title =?, note =?, others =?, REQUIRED =?, tabular =?, rows =?, cols =?, colheader =?, page =? WHERE qkey=?",[req.body.questionE, req.body.questionTE, req.body.titleE, req.body.noteE, req.body.othersE, req.body.requiredE, req.body.tabE, req.body.rowsE, req.body.colsE, req.body.colhE, req.body.pageQE, req.body.qkeyE],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else console.log("Success updating admin Questions");
		
	});
	
	res.redirect("/adminMode");
		
};

exports.updateA = function(req, res){
	
	var input = req.body.row_idA;
	console.log(input);
	db2.all("UPDATE answers SET qkey=?, answer_text =?, answer_value =?, input_type =?, variable_name =?, class=?, group_id =?, group_rows =?, group_cols =?, dependent_vars =?, nextq =?, attrib =? WHERE row_id=?",[req.body.qkeyA, req.body.answer_textA, req.body.answer_valueA, req.body.input_typeA, req.body.variable_nameA, req.body.classAA, req.body.group_idA, req.body.group_rowsA, req.body.group_colsA, req.body.dependent_varsA, req.body.nextqA, req.body.attribA, input],function(err,rows){
		
		if (err) {
              console.log("Error Updating : %s ",err );
		}
		else console.log("Success updating admin Answers");
		
	});
	
	res.redirect("/adminMode");
		
};

exports.check_qkeyQ = function(req, res){
	var obj = {};
	
	

	db2.all("SELECT * FROM questions WHERE qkey=?",[req.body.qkeyQ], function(err,rows){
		if(rows.length>0)
		{
			res.send("existing");
		}
		else{
			res.send("exist");
		}
	});

	 
};









