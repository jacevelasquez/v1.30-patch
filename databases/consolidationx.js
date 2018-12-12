var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2018.db');
var http = require('http');
var json2csv = require('json2csv');
const csv=require('csvtojson');
var multer= require('multer');
var upload = multer({ dest: 'uploads/' })
var Zip = require('node-7z'); // Name the class as you want! 
var unzip = require('unzip');
var easyzip = require('easy-zip');

function JSON2Sqlite(json,name,form_name){
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
           if(col.length>0){
                  sql = "INSERT OR IGNORE INTO "+form_name+"("  + col.join(",") + ") VALUES('" +  values.join("','") + "');";
                   
                 db2.all(sql  ,function(err,rows){
                    if(err) console.log("Error number : " + err);
                                       rn++;
                      //  console.log(sql)
					  //  console.log("INSERTED RECORD #" + rn);
                });
				
				// sql2 = "select distinct eacode, hcn, shsn from "+form_name+"";
                   
                 // db2.all(sql2  ,function(err,rows){
					 
					 // rows.forEach(function (row) {
							// console.log("INSERTING "+row.length+"ITEMS IN FORM "+form_name+" EACODE: "+row.eacode+" HCN:"+row.hcn+"  SHSN:"+row.shsn);
						// });
					
                    
                // });
				
                  col = [];
                  values = [];

             }
}

exports.extract =  function (req, res, next) {
	csvFilePath=req.file.path;
	
	fs.createReadStream(csvFilePath).pipe(unzip.Extract({ path: 'C:/dcs/consolidation' }));
};

exports.upload =  function (req, res, next) {

  var array_name = ['f11','f12','f13','f14','f15','f16','f17','f21','f31','f32','f41','f42','f43','f44','f45','f46','f47','f48','f49','f410','f52','f53','f54','f55','f56','f57','f58','f73','f82','localarea_listings'];
  var array_length = array_name.length;
  
  for(var i = 0 ; i< array_length ; i++){
  var name = array_name[i]+"_"+req.file.originalname.substring(0,req.file.originalname.length-8)+".csv";
  csvFilePath='C:/dcs/consolidation/'+array_name[i]+"_"+req.file.originalname.substring(0,req.file.originalname.length-8)+".csv";
	
  var form_name = array_name[i];
	
  csv_upload(name,form_name);
 
}
	
  res.write('<style>.one { opacity: 0; -webkit-animation: dot 1.3s infinite; -webkit-animation-delay: 0.0s; animation: dot 1.3s infinite; animation-delay: 0.0s; }.two { opacity: 0; -webkit-animation: dot 1.3s infinite; -webkit-animation-delay: 0.2s; animation: dot 1.3s infinite; animation-delay: 0.2s; }.three { opacity: 0; -webkit-animation: dot 1.3s infinite; -webkit-animation-delay: 0.3s; animation: dot 1.3s infinite; animation-delay: 0.3s; }@-webkit-keyframes dot { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1; } }@keyframes dot { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1; } }</style><body>');
	res.write('<div style="height: 200px;width: 400px;position: fixed;top: 50%;left: 50%;margin-top: -100px;margin-left: -200px;"><font size="7">Consolidating data Please Wait<span class="one">.</span><span class="two">.</span><span class="three">.</span></font> </div></body><script type="text/javascript"> window.location.href="/legone/survey/surveyform/";</script>');
res.end()

//...

//res.redirect('/legone/survey/surveyform/');

};

function csv_upload(name,form_name){
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    JSON2Sqlite(jsonObj,name,form_name);
})
.on('done',(error)=>{
    console.log('Upload Success');
	
})
};