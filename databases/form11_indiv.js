var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2019.db');
var http = require('http');

exports.get = function(req, res){
  db2.all("SELECT * FROM f11", function(err,rows){
	  rows.forEach(function (row) {
        });
    res.render('form11.ejs',{array:rows,layout:false,session:req.session});
  });
};

exports.post = function(req, res){
	var obj = {};
	var gn = '';
	db2.all("SELECT * FROM f11 WHERE eacode = ? and hcn = ? and shsn = ? and MEMBER_CODE = ? ",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows){
	  rows.forEach(function (row) {
			obj.f11=row;
			gn = row.GIVENNAME;
			
			db2.all("SELECT * FROM f11 WHERE eacode = ? and hcn = ? and shsn = ? and MOM= ? and AGE <= 3",[req.body.eacode, req.body.hcn, req.body.shsn, row.GIVENNAME], function(err,rows2){
			  obj.mom = rows2.length;
			 });
			
        });
	 });
	 
	
	 
	 db2.all("SELECT * FROM f21 WHERE eacode = ? and hcn = ? and shsn = ? and MEMBER_CODE = ? ",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows){
	  rows.forEach(function (row) {
			obj.f21=row;
        });
	 });
	 
	 db2.all("SELECT * FROM localarea_listings WHERE eacode = ? and hcn = ? and shsn = ?",[req.body.eacode, req.body.hcn, req.body.shsn], function(err,rows){
	  rows.forEach(function (row) {
			obj.listings=row;
        });
	 });


	
	function isEmpty(v)
			{
				return v === null || v.toString().trim().length === 0
			}
 	
	 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f31 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		   if(rows2.length == 0)
			{	obj.f31='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f31='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f31='list-group-item-warning';	}
			else 
			{	obj.f31='list-group-item-danger';	}
				
			
		
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f32 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  if( rows2.length == 0 )
			{	obj.f32='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f32='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f32='list-group-item-warning';	}
			else 
			{	obj.f32='list-group-item-danger';	}
		
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f41 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  
		  if( rows2.length == 0 )
			{	obj.f41='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f41='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f41='list-group-item-warning';	}
			else 
			{	obj.f41='list-group-item-danger';	}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f42 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f42='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f42='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f42='list-group-item-warning';	}
			else 
			{	obj.f42='list-group-item-danger';	}
			

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f43 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f43='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f43='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f43='list-group-item-warning';	}
			else 
			{	obj.f43='list-group-item-danger';	}
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f44 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f44='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f44='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f44='list-group-item-warning';	}
			else 
			{	obj.f44='list-group-item-danger';	}
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f45 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f45='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f45='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f45='list-group-item-warning';	}
			else 
			{	obj.f45='list-group-item-danger';	}
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f46 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f46='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f46='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f46='list-group-item-warning';	}
			else 
			{	obj.f46='list-group-item-danger';	}
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f47 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f47='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f47='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f47='list-group-item-warning';	}
			else 
			{	obj.f47='list-group-item-danger';	}
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f48 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f48='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f48='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f48='list-group-item-warning';	}
			else 
			{	obj.f48='list-group-item-danger';	}
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f49 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f49='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f49='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f49='list-group-item-warning';	}
			else 
			{	obj.f49='list-group-item-danger';	}
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f410 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f410='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f410='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f410='list-group-item-warning';	}
			else 
			{	obj.f410='list-group-item-danger';	}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

db2.all("SELECT * FROM f411 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
	if( rows2.length == 0 )
	  {	obj.f411='list-group-item-danger';	}
	  else if(rows2[0].INTERVIEW_STATUS == 1)
	  {	obj.f411='list-group-item-success';	}
	  else if(rows2[0].INTERVIEW_STATUS == 2)
	  {	obj.f411='list-group-item-warning';	}
	  else 
	  {	obj.f411='list-group-item-danger';	}
	  
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f52 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f52='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f52='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f52='list-group-item-warning';	}
			else 
			{	obj.f52='list-group-item-danger';	}
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f53 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f53='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f53='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f53='list-group-item-warning';	}
			else 
			{	obj.f53='list-group-item-danger';	}
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f54 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f54='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f54='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f54='list-group-item-warning';	}
			else 
			{	obj.f54='list-group-item-danger';	}
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f55 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f55='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f55='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f55='list-group-item-warning';	}
			else 
			{	obj.f55='list-group-item-danger';	}
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f56 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f56='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f56='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f56='list-group-item-warning';	}
			else 
			{	obj.f56='list-group-item-danger';	}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f57 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f57='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f57='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f57='list-group-item-warning';	}
			else 
			{	obj.f57='list-group-item-danger';	}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f58 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f58='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f58='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f58='list-group-item-warning';	}
			else 
			{	obj.f58='list-group-item-danger';	}


////////////////////////////////////////////////////////////////////////////////////////////////////////////			
db2.all("SELECT * FROM f59 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
	if( rows2.length == 0 )
	  {	obj.f59='list-group-item-danger';	}
	  else if(rows2[0].INTERVIEW_STATUS == 1)
	  {	obj.f59='list-group-item-success';	}
	  else if(rows2[0].INTERVIEW_STATUS == 2)
	  {	obj.f59='list-group-item-warning';	}
	  else 
	  {	obj.f59='list-group-item-danger';	}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////			
	  db2.all("SELECT * FROM f73 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f73='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f73='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f73='list-group-item-warning';	}
			else 
			{	obj.f73='list-group-item-danger';	}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////

			
	  db2.all("SELECT * FROM f82 WHERE eacode = ? and hcn = ? and  shsn = ? and  MEMBER_CODE = ?",[req.body.eacode, req.body.hcn, req.body.shsn, req.body.MEMBER_CODE], function(err,rows2){
		  
		  if( rows2.length == 0 )
			{	obj.f82='list-group-item-danger';	}
			else if(rows2[0].INTERVIEW_STATUS == 1)
			{	obj.f82='list-group-item-success';	}
			else if(rows2[0].INTERVIEW_STATUS == 2)
			{	obj.f82='list-group-item-warning';	}
			else 
			{	obj.f82='list-group-item-danger';	}
		

		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////	

	res.send(obj);
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