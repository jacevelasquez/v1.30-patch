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

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '122.53.86.117',
  port	   : '3674',
  user     : 'johncarlo',
  password : 'nsis',
  database : 'nns2018db'
});

exports.get = function(req, res){
	
	var eacode = req.params.id;
	
				connection.query("select * from localarea_listings_ar where eacode ='"+eacode+"'",function(err,rows){
				connection.query("select * from localarea_listings_ar where eacode ='"+eacode+"' and INTERVIEW_STATUS4 > 1",function(err,rows5){	
				connection.query("select * from f11_ar where eacode ='"+eacode+"'",function(err,rows2){
				db2.all("select * from localsurveyareas where eacode ='"+eacode+"'",function(err,rows3){
				connection.query("select * from f12_ar where eacode ='"+eacode+"'",function(err,rows12){	
				connection.query("select * from f13_ar where eacode ='"+eacode+"'",function(err,rows13){
				connection.query("select * from f14_ar where eacode ='"+eacode+"'",function(err,rows14){
				connection.query("select * from f15_ar where eacode ='"+eacode+"'",function(err,rows15){
				connection.query("select * from f16_ar where eacode ='"+eacode+"'",function(err,rows16){	
				connection.query("select * from f17_ar where eacode ='"+eacode+"'",function(err,rows17){
				connection.query("select * from f21_ar where eacode ='"+eacode+"'",function(err,rows21){	
				connection.query("select * from f31_ar where eacode ='"+eacode+"'",function(err,rows31){
				connection.query("select * from f32_ar where eacode ='"+eacode+"'",function(err,rows32){
				connection.query("select * from f41_ar where eacode ='"+eacode+"'",function(err,rows41){
				connection.query("select * from f42_ar where eacode ='"+eacode+"'",function(err,rows42){
				connection.query("select * from f43_ar where eacode ='"+eacode+"'",function(err,rows43){
				connection.query("select * from f44_ar where eacode ='"+eacode+"'",function(err,rows44){
				connection.query("select * from f45_ar where eacode ='"+eacode+"'",function(err,rows45){
				connection.query("select * from f46_ar where eacode ='"+eacode+"'",function(err,rows46){
				connection.query("select * from f47_ar where eacode ='"+eacode+"'",function(err,rows47){
				connection.query("select * from f48_ar where eacode ='"+eacode+"'",function(err,rows48){
				connection.query("select * from f49_ar where eacode ='"+eacode+"'",function(err,rows49){
				connection.query("select * from f52_ar where eacode ='"+eacode+"'",function(err,rows52){
				connection.query("select * from f53_ar where eacode ='"+eacode+"'",function(err,rows53){
				connection.query("select * from f54_ar where eacode ='"+eacode+"'",function(err,rows54){
				connection.query("select * from f55_ar where eacode ='"+eacode+"'",function(err,rows55){
				connection.query("select * from f56_ar where eacode ='"+eacode+"'",function(err,rows56){
				connection.query("select * from f73_ar where eacode ='"+eacode+"'",function(err,rows73){	
				connection.query("select * from f82_ar where eacode ='"+eacode+"'",function(err,rows82){	
			
				
				res.render('transmission.ejs',{array:rows,array5:rows5,array2:rows2,array3:rows3,array12:rows12,array13:rows13,array14:rows14,array15:rows15,array16:rows16,array17:rows17,array21:rows21,array31:rows31,array32:rows32,array41:rows41,array42:rows42,array43:rows43,array44:rows44,array45:rows45,array46:rows46,array47:rows47,array48:rows48,array49:rows49,array52:rows52,array53:rows53,array54:rows54,array55:rows55,array56:rows56,array73:rows73,array82:rows82,layout:false,session:req.session});
				
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

exports.direct = function (req, res) {
	
   eacode = req.params.eacode ;

	var forms = ['f11','localarea_listings','f12','f13','f14','f15','f16','f17','f21','f31','f32','f41','f42','f43','f44','f45','f46','f47','f48','f49','f52','f53','f54','f55','f56','f73','f82'];

    for(var f in forms) {
		query(forms[f],eacode);
	
	}
	 res.redirect('/transmissionbeta')
};

function query(form,eacode){
	
	 var col = [];
   var values =[];
   var  sql ="";
   var  rn = 0;
	
	db2.all("SELECT * FROM "+form+" where eacode='"+eacode+"' and INTERVIEW_STATUS > 0", function(err,rows){
		
	for(var i=0;i<rows.length;i++){	
		for (var k in rows[i]){
			            if(k=='id'){ 
               if(col.length>0){
                    db2.all(sql  ,function(err,rows){
                      if(err) console.log(err);
                       rn++;
                    
                   });
                         col = [];
                         values = [];
                       }
             }
			 else {
              col.push(k);
              values.push(rows[i][k]);
			 }
        }
               //   sql = "INSERT IGNORE INTO "+form+" ("  + col.join(",") + ") VALUES('" +  values.join("','") + "') ON DUPLICATE KEY UPDATE DATE_EDIT = CASE WHEN VALUES(DATE_EDIT) > DATE_EDIT THEN VALUES(DATE_EDIT) ELSE DATE_EDIT END;";
		          sql = "INSERT IGNORE INTO "+form+" ("  + col.join(",") + ") VALUES('" +  values.join("','") + "');";

                 connection.query(sql  ,function(err,rows){
                    if(err) console.log("Error number : " +form +err);
                                       rn++;
                });
                  col = [];
                   values = [];
	}
            

	});	
}


exports.extract =  function (req, res, next) {
	csvFilePath=req.file.path;
	
	fs.createReadStream(csvFilePath).pipe(unzip.Extract({ path: 'C:/dcs/consolidation' }));
};

exports.upload = function (req, res, next) {
  
  if(req.session.username.substring(0,1) == 'A'){
  var array_name = ['f11_ah','f12_ah','f21_ah'];
  }
  
  if(req.session.username.substring(0,1) == 'T'){
  var array_name = ['f11_tl','localarea_listings_tl','f12_tl','f13_tl','f14_tl','f15_tl','f16_tl','f17_tl','f21_tl','f31_tl','f32_tl','f41_tl','f42_tl','f43_tl','f44_tl','f45_tl','f46_tl','f47_tl','f48_tl','f49_tl','f52_tl','f53_tl','f54_tl','f55_tl','f56_tl','f73_tl','f82_tl'];
  }
  
  var array_length = array_name.length;
  
  for(var i = 0 ; i< array_length ; i++){
  var name = array_name[i]+"_"+req.file.originalname.substring(0,req.file.originalname.length-8)+".csv";
  csvFilePath='C:/dcs/consolidation/'+array_name[i].substring(0,array_name[i].length-3)+"_"+req.file.originalname.substring(0,req.file.originalname.length-8)+".csv";
  	
  var form_name = array_name[i];
 
  csv_transmit(name,form_name);
 
}

// res.redirect('/legone/survey/surveyform/');

res.write('<style>.one { opacity: 0; -webkit-animation: dot 1.3s infinite; -webkit-animation-delay: 0.0s; animation: dot 1.3s infinite; animation-delay: 0.0s; }.two { opacity: 0; -webkit-animation: dot 1.3s infinite; -webkit-animation-delay: 0.2s; animation: dot 1.3s infinite; animation-delay: 0.2s; }.three { opacity: 0; -webkit-animation: dot 1.3s infinite; -webkit-animation-delay: 0.3s; animation: dot 1.3s infinite; animation-delay: 0.3s; }@-webkit-keyframes dot { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1; } }@keyframes dot { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1; } }</style><body>');
	res.write('<div style="height: 200px;width: 400px;position: fixed;top: 50%;left: 50%;margin-top: -100px;margin-left: -200px;"><img src="/gif/ajax-loader.gif"></img><font size="7">Transmitting data Please Wait<span class="one">.</span><span class="two">.</span><span class="three">.</span></font> </div></body><script type="text/javascript"> window.location.href="/legone/survey/surveyform/";</script>');
res.end()

};


function JSON2mySQL(json,name,form_name){
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
                  //      console.log("1st : " + sql);
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
                    if(err) console.log("Error number : " + err);
                                       rn++;
                      
					   console.log("INSERTED RECORD : "+form_name);
                });
                  col = [];
                  values = [];

             }
}

function csv_transmit(name,form_name){
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    JSON2mySQL(jsonObj,name,form_name);
})
.on('done',(error)=>{
    console.log('Upload Success');
	
})
};