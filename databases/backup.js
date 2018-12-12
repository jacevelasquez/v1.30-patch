var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
db2 = new sqlite3.Database('nns2018.db');
var http = require('http');

exports.get = function(req, res){
	
	var eacode = req.params.id;
	var eacode2 = eacode.substring(0, 12);
	var hcn = req.params.id;
	var hcn2 = hcn.substring(12, 16);
	var shsn = req.params.id;
	var shsn2 = shsn.substring(16, 20);
	
	
	db2.all("SELECT hcn, shsn FROM f11 WHERE eacode = ?",[eacode2], function(err,rows2){

		db2.all("SELECT * FROM localarea_listings WHERE eacode = ?",[eacode2], function(err,rows3){
			
			db2.all("SELECT * FROM localsurveyareas WHERE eacode = ?",[eacode2], function(err,rows4){
		 res.render('backup.ejs',{array2:rows2,array3:rows3,array4:rows4,layout:false,session:req.session}); 
			});
		});
	});
	 
};


exports.post = function(req, res){
	var obj = {};
	
	var id = req.body.eacode;
	var hcn = req.body.hcn;
	var shsn = req.body.shsn;
	
	  db2.all("SELECT * FROM f11 WHERE eacode = ? and hcn = ? and shsn = ?",[id, hcn, shsn], function(err,rows2){
		  
		  if (err) {
              console.log("Error Selecting : %s ",err );
					}
		else 
			{			
	
			obj.f11 = rows2;
		
			}

		
	function isEmpty(v)
			{
				return v === null || v.toString().trim().length === 0
			}
 	
	 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  db2.all("SELECT * FROM f12 WHERE eacode = ?",id, function(err,rows2){
		  
		  if(isEmpty(rows2[0].RES_NAME) && isEmpty(rows2[0].TENURHWS) && isEmpty(rows2[0].TENURLOT) && isEmpty(rows2[0].DWELTYPE) && isEmpty(rows2[0].ROOF) && isEmpty(rows2[0].WALL) && isEmpty(rows2[0].FLOOR) && isEmpty(rows2[0].BEDROOM) && isEmpty(rows2[0].FUELUSED_ELEC) && isEmpty(rows2[0].FUELUSED_LPG) && isEmpty(rows2[0].FUELUSED_NGAS) && isEmpty(rows2[0].FUELUSED_KEROSENE) && isEmpty(rows2[0].FUELUSED_CHARCOAL) && isEmpty(rows2[0].FUELUSED_WOOD) && isEmpty(rows2[0].FUELUSED_BIOMASS) && isEmpty(rows2[0].FUELUSED_ANIMALDUNG) && isEmpty(rows2[0].FUELMAIN) && isEmpty(rows2[0].BICYCLE) && isEmpty(rows2[0].SINGLE) && isEmpty(rows2[0].CARJIPVAN) && isEmpty(rows2[0].TRACTOR) && isEmpty(rows2[0].CARITELA) && isEmpty(rows2[0].BOAT) && isEmpty(rows2[0].ELECTRCT) && isEmpty(rows2[0].COMPU) && isEmpty(rows2[0].TELEPHONE) && isEmpty(rows2[0].CELLPHONE) && isEmpty(rows2[0].SMARTPHONE) && isEmpty(rows2[0].TELEVISION) && isEmpty(rows2[0].RADIO) && isEmpty(rows2[0].VCD) && isEmpty(rows2[0].CAMERA) && isEmpty(rows2[0].REF) && isEmpty(rows2[0].RANGES) && isEmpty(rows2[0].BLENDER) && isEmpty(rows2[0].GENRATOR) && isEmpty(rows2[0].AIRCON) && isEmpty(rows2[0].WASHMCN) && isEmpty(rows2[0].FAN) && isEmpty(rows2[0].SEWMCN) && isEmpty(rows2[0].PIANO) && isEmpty(rows2[0].WALLCLOCK) && isEmpty(rows2[0].SALA_SOFA) && isEmpty(rows2[0].WDRINKNG) && isEmpty(rows2[0].DRINKSAFE) && isEmpty(rows2[0].MAKESAFE) && isEmpty(rows2[0].WCOOKING) && isEmpty(rows2[0].WHANDS) && isEmpty(rows2[0].TOILET) && isEmpty(rows2[0].SHAREIT) && isEmpty(rows2[0].SEGREGATE) && isEmpty(rows2[0].HH_HELP) && isEmpty(rows2[0].LAUNDRY) && isEmpty(rows2[0].PLANE) && isEmpty(rows2[0].PRIVATE_SCH) && isEmpty(rows2[0].SHOOL_TRANSP) && isEmpty(rows2[0].ABROAD_FIN) && isEmpty(rows2[0].AGRI) && isEmpty(rows2[0].TRADE_EATERY) && isEmpty(rows2[0].NO_AGRI_TRADE_EATERY))
			{	obj.f41='list-group-item-danger';	}
			else if(isEmpty(rows2[0].RES_NAME) && isEmpty(rows2[0].TENURHWS) && isEmpty(rows2[0].TENURLOT) && isEmpty(rows2[0].DWELTYPE) && isEmpty(rows2[0].ROOF) && isEmpty(rows2[0].WALL) && isEmpty(rows2[0].FLOOR) && isEmpty(rows2[0].BEDROOM) && isEmpty(rows2[0].FUELUSED_ELEC) && isEmpty(rows2[0].FUELUSED_LPG) && isEmpty(rows2[0].FUELUSED_NGAS) && isEmpty(rows2[0].FUELUSED_KEROSENE) && isEmpty(rows2[0].FUELUSED_CHARCOAL) && isEmpty(rows2[0].FUELUSED_WOOD) && isEmpty(rows2[0].FUELUSED_BIOMASS) && isEmpty(rows2[0].FUELUSED_ANIMALDUNG) && isEmpty(rows2[0].FUELMAIN) && isEmpty(rows2[0].BICYCLE) && isEmpty(rows2[0].SINGLE) && isEmpty(rows2[0].CARJIPVAN) && isEmpty(rows2[0].TRACTOR) && isEmpty(rows2[0].CARITELA) && isEmpty(rows2[0].BOAT) && isEmpty(rows2[0].ELECTRCT) && isEmpty(rows2[0].COMPU) && isEmpty(rows2[0].TELEPHONE) && isEmpty(rows2[0].CELLPHONE) && isEmpty(rows2[0].SMARTPHONE) && isEmpty(rows2[0].TELEVISION) && isEmpty(rows2[0].RADIO) && isEmpty(rows2[0].VCD) && isEmpty(rows2[0].CAMERA) && isEmpty(rows2[0].REF) && isEmpty(rows2[0].RANGES) && isEmpty(rows2[0].BLENDER) && isEmpty(rows2[0].GENRATOR) && isEmpty(rows2[0].AIRCON) && isEmpty(rows2[0].WASHMCN) && isEmpty(rows2[0].FAN) && isEmpty(rows2[0].SEWMCN) && isEmpty(rows2[0].PIANO) && isEmpty(rows2[0].WALLCLOCK) && isEmpty(rows2[0].SALA_SOFA) && isEmpty(rows2[0].WDRINKNG) && isEmpty(rows2[0].DRINKSAFE) && isEmpty(rows2[0].MAKESAFE) && isEmpty(rows2[0].WCOOKING) && isEmpty(rows2[0].WHANDS) && isEmpty(rows2[0].TOILET) && isEmpty(rows2[0].SHAREIT) && isEmpty(rows2[0].SEGREGATE) && isEmpty(rows2[0].HH_HELP) && isEmpty(rows2[0].LAUNDRY) && isEmpty(rows2[0].PLANE) && isEmpty(rows2[0].PRIVATE_SCH) && isEmpty(rows2[0].SHOOL_TRANSP) && isEmpty(rows2[0].ABROAD_FIN) && isEmpty(rows2[0].AGRI) && isEmpty(rows2[0].TRADE_EATERY) && isEmpty(rows2[0].NO_AGRI_TRADE_EATERY))
			{	obj.f12='list-group-item-success';	}
			else
			{	obj.f12='list-group-item-warning';	}
	  res.send(obj);
	  });
	  });	
};

/*
exports.post = function(req, res){
	var obj = {};
	
	var id = JSON.stringify(req.body.id);
	
	  db2.all("SELECT * FROM f11 WHERE id= ? ",id, function(err,rows){
	 obj.f11 = rows;
	
	 });	 
};
*/

