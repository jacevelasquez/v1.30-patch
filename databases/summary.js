var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');

exports.get = function(req, res){
	
	var eacode = req.params.id;
	var eacode2 = eacode.substring(0, 12);
	var hcn = req.params.id;
	var hcn2 = hcn.substring(12, 16);
	var shsn = req.params.id;
	var shsn2 = shsn.substring(16, 20);
	
	
	
  db2.all("SELECT * FROM localarea_listings WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode2, hcn2, shsn2], function(err1,rows){
	  
		db2.all("SELECT * FROM f11 WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode2, hcn2, shsn2], function(err,rows2){
		db2.all("SELECT * FROM f21 WHERE eacode = ? and  hcn= ? and shsn= ?",[eacode2, hcn2, shsn2], function(err,rows21){	
		
			db2.all("SELECT * FROM localsurveyareas WHERE eacode = ?",[eacode2], function(err,rows3){
				
			if(rows == '') {
			res.send('ERROR. Please pick other eacode &nbsp; <a href="/areas">Go back</a>');
			}
			else 
			{
			res.render('summary.ejs',{array:rows,array2:rows2,array3:rows3,array21:rows21,layout:false,session:req.session}); 
			}
			});
		});
	  });	
   }); 
};

exports.post = function(req, res){
	
	var obj = {};
	
	var eacode = req.body.eacode;
	var hcn = req.body.hcn;
	var shsn = req.body.shsn;
	var MEMBER_CODE = req.body.MEMBER_CODE;
	var INTERVIEW_STATUS = req.body.INTERVIEW_STATUS;
	

	  db2.all("SELECT * FROM f11 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		
		  if (err) {
              console.log("Error Selecting : %s ",err );
					}
		else 
			{			
			obj.f11 = rows2;
			}
			
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f21 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f21='0';	}
		else 
			{			
			obj.f21 = rows2;
			}	
			
			
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f31 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		 
		if(rows2.length == 0)
			{	obj.f31='0';	}
		else 
			{			
			obj.f31 = rows2;
			}
			

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f32 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f32='0';	}
		else 
			{			
			obj.f32 = rows2;
			}
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f41 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f41='0';	}
		else 
			{			
			obj.f41 = rows2;
			}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f42 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f42='0';	}
		else 
			{			
			obj.f42 = rows2;
			}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f43 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f43='0';	}
		else 
			{			
			obj.f43 = rows2;
			}
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f44 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f44='0';	}
		else 
			{			
			obj.f44 = rows2;
			}
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f45 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		 if(rows2.length == 0)
			{	obj.f45='0';	}
		else 
			{			
			obj.f45 = rows2;
			}
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f46 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f46='0';	}
		else 
			{			
			obj.f46 = rows2;
			}
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f47 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f47='0';	}
		else 
			{			
			obj.f47 = rows2;
			}
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f48 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f48='0';	}
		else 
			{			
			obj.f48 = rows2;
			}
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f49 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f49='0';	}
		else 
			{			
			obj.f49 = rows2;
			}
			
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f410 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f410='0';	}
		else 
			{			
			obj.f410 = rows2;
			}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

db2.all("SELECT * FROM f411 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
	if(rows2.length == 0)
		{	obj.f411='0';	}
	else 
		{			
		obj.f411 = rows2;
		}
	  

////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f52 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f52='0';	}
		else 
			{			
			obj.f52 = rows2;
			}
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f53 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f53='0';	}
		else 
			{			
			obj.f53 = rows2;
			}
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f54 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f54='0';	}
		else 
			{			
			obj.f54 = rows2;
			}
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f55 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		 if(rows2.length == 0)
			{	obj.f55='0';	}
		else 
			{			
			obj.f55 = rows2;
			}
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f56 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f56='0';	}
		else 
			{			
			obj.f56 = rows2;
			}
			
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f57 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f57='0';	}
		else 
			{			
			obj.f57 = rows2;
			}
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f58 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f58='0';	}
		else 
			{			
			obj.f58 = rows2;
			}

////////////////////////////////////////////////////////////////////////////////////////////////////////////			
db2.all("SELECT * FROM f59 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
	if(rows2.length == 0)
		{	obj.f59='0';	}
	else 
		{			
		obj.f59 = rows2;
		}
					

/////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	  db2.all("SELECT * FROM f73 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f73='0';	}
		else 
			{			
			obj.f73 = rows2;
			}
			

			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	  db2.all("SELECT * FROM f82 WHERE eacode = ? and  hcn= ? and shsn= ? and MEMBER_CODE = ?",[eacode, hcn, shsn, MEMBER_CODE], function(err,rows2){
		  
		if(rows2.length == 0)
			{	obj.f82='0';	}
		else 
			{			
			obj.f82 = rows2;
			}

			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	res.send(obj);
		}); //f11
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

};




