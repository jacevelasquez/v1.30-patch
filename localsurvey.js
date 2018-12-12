
// built in modules
var express = require('express');
var routes = require('./routes');
var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');
var bodyParser = require('body-parser');
var jQuery = require('jQuery'); 
var dir =  process.cwd();
var _ = require('underscore');
var busboy = require('connect-busboy');
var fileupload = require("express-fileupload");
var formidable = require('formidable');
var mysql = require('mysql');
var bcrypt  = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var session = require('express-session');
var json2csv = require('json2csv');
const csv=require('csvtojson');
var multer= require('multer');
var upload = multer({ dest: 'uploads/' })
var Zip = require('node-7z'); // Name the class as you want! 
var unzip = require('unzip');
var easyzip = require('easy-zip');

/***************** ANTRHOP ******************/

var login = require('./databases/login');
var summarylist = require('./databases/summarylist');
var exports = require('./databases/exports');
var transmission = require('./databases/transmission');
var consolidation = require('./databases/consolidation');
var summary = require('./databases/summary');
var summary_indiv = require('./databases/summary_indiv');
var form11_indiv = require('./databases/form11_indiv');
var form21 = require('./databases/form21');
var form21_edit = require('./databases/form21_edit');
var form21_post = require('./databases/form21_post');
var form11 = require('./databases/form11');
var form12 = require('./databases/form12');
var form13 = require('./databases/form13');
var form14 = require('./databases/form14');
var form15 = require('./databases/form15');
var form16 = require('./databases/form16');
var form17 = require('./databases/form17');
var form31 = require('./databases/form31');
var form32 = require('./databases/form32');
var form41 = require('./databases/form41');
var form42 = require('./databases/form42');
var form43 = require('./databases/form43');
var form44 = require('./databases/form44');
var form45 = require('./databases/form45');
var form46 = require('./databases/form46');
var form47 = require('./databases/form47');
var form48 = require('./databases/form48');
var form49 = require('./databases/form49');
var form410 = require('./databases/form410');
var form411 = require('./databases/form411');
var form52 = require('./databases/form52');
var form53 = require('./databases/form53');
var form54 = require('./databases/form54');
var form55 = require('./databases/form55');
var form56 = require('./databases/form56');
var form57 = require('./databases/form57');
var form58 = require('./databases/form58');
var form59 = require('./databases/form59');
var form73 = require('./databases/form73');
var form82 = require('./databases/form82');
var form_insert = require('./databases/form_insert');
var household_summary = require('./databases/household_summary');
var individual_summary = require('./databases/individual_summary');
var households = require('./databases/households');
var isupdate = require('./databases/isupdate');
var households_check = require('./databases/households_check');
var eacheck = require('./databases/eacheck');
var ea_localsurvey = require('./databases/ea_localsurvey');
var municipality = require('./databases/municipality');
var barangay = require('./databases/barangay');
var listareas = require('./databases/listareas');
var summary_update = require('./databases/summary_update');			//update IS		
var admin = require('./databases/admin');
var report = require('./databases/report');
var trial = require('./databases/trial');

/*************** DIETARY ***************/

var dietaryhome = require('./dietaryjs/dietaryhome');
var uploadf11 = require('./dietaryjs/uploadf11');
var dietaryhh = require('./dietaryjs/dietaryhh');
var foodrecall = require('./dietaryjs/foodrecall');
var foodrecord = require('./dietaryjs/foodrecord');
var mealpattern = require('./dietaryjs/mealpattern');
var exportd = require('./dietaryjs/exportd');
var consolidationd = require('./dietaryjs/consolidationd');
var transmissiond = require('./dietaryjs/transmissiond');
var cpr = require('./dietaryjs/cpr');


// environment
var environment = require('./utils/environment.js');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set(process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0");
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(bodyParser.json());
app.use(express.cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname)));
app.use(busboy());

app.use(session({
resave: false, // don't save session if unmodified
saveUninitialized: false, // don't create session until something stored
duration: 30 * 60 * 1000 * 10,
activeDuration: 5 * 60 * 1000 * 10,
secret: 'shhhh, very secret'
}));

app.get('/', routes.index);

var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : '122.53.86.117',
	port	   : '3674',
	user     : 'johncarlo',
	password : 'nsis',
	database : 'nns2018db'
});

app.post('/upload_cons', upload.single('userfile'), consolidation.extract);
app.post('/upload', upload.single('csvdata_cons'), consolidation.upload);
app.post('/upload_trans', upload.single('userfile'), transmission.extract);
app.post('/upload_transD', upload.single('userfile'), transmission.extractD);
app.post('/upload_email', upload.single('userfile'), transmission.email);
app.post('/trans', upload.single('csvdata_trans'), transmission.upload);
app.post('/transD', upload.single('csvdata_transD'), transmission.uploadD);
app.get('/checktrans/:id', transmission.get);
app.get('/checktransD/:id', transmission.getD);
app.post('/membersTL', transmission.membersTL);
app.post('/f11T', transmission.f11T);
app.post('/f11A', transmission.f11A);
app.post('/login', login.post);

app.use(app.router);

app.get('/main', ea_localsurvey.getmain);
app.get('/legone/survey/surveyform', ea_localsurvey.get);
// app.get('/main', ea_localsurvey.getmain);
app.get('/areas', exports.get);
app.get('/exportall/:id', exports.all);	
app.get('/exportf11/:eacode', exports.f11);
app.get('/exportbio/:id', exports.bio);
app.post('/validateIS', exports.validateIS);

app.post('/checkConnection', function (req, res) {

	 require('dns').resolve('www.google.com', function(err) {
	if (err) {
	   res.send("Noconnection");
	} else {
	   res.send("Connected");
	}
  });
  
});

app.get('/filterUser', function (req, res) {
	
	
	var hash1 = bcrypt.hashSync("NNS2018",salt);
	console.log(hash1+" NNS2018 ");
	var hash2 = bcrypt.hashSync("TL2018",salt);
	console.log(hash2+" TL2018");      v    

	res.redirect('/filterUser');
});

function restrict(req, res, next) {
	
  if (req.session.username == 'ADMIN') {
    next();
  } else {
    res.send('<p align=center>You don\'t have permission to access this page. <a href = "/">Login</a></p>');
  }
}


app.get('/home', restrict, function(req, res){
	console.log(req.session.user);
	
  res.render('header.ejs');
});

app.get('/report', report.get);
app.post('/submit_report', report.submit_report);
app.post('/upload_backup', upload.single('userfile'), report.submit);
app.post('/legone/survey/surveyform/hhead', households.hhead);
app.post('/legone/survey/surveyform', ea_localsurvey.post);
app.get('/legone/survey/surveyform/households/:id', households.get);
app.post('/households_display', households.display);
app.post('/legone/survey/surveyform/households', households.post);
app.post('/legone/survey/surveyform/householdsedit', households.postedit);
app.get('/summarylist/:id', summarylist.get);
app.post('/legone/survey/surveyform/visit1', households.visit1);
app.post('/legone/survey/surveyform/visit2', households.visit2);
app.post('/legone/survey/surveyform/visit3', households.visit3);
app.post('/inserthousehold', households.inserthouseholds);
app.post('/removehh', households.removehh);
app.post('/map_listings',households.map);
app.post('/updateReplacement',households.updateReplacement);
app.get('/legone/survey/surveyform/summary/:id', summary.get);
app.post('/legone/survey/surveyform/summary', summary.post);
app.get('/legone/survey/surveyform/summary_indiv/:id', summary_indiv.get);
app.post('/legone/survey/surveyform/summary_indiv', summary_indiv.post);
app.post('/edit/form11', form11.update);
app.get('/legone/survey/surveyform/form11/:id', form11.get);
app.post('/legone/survey/surveyform/form11', form11.post);
app.post('/indiv', form11_indiv.post);
app.get('/legone/survey/surveyform/form21/:id', form21.get);
app.post('/legone/survey/surveyform/form21', form21.post);
app.post('/edit/form21', form21.update);
app.get('/legone/survey/surveyform/form12/:id', form12.get);
app.get('/legone/survey/surveyform/form13/:id', form13.get);
app.get('/legone/survey/surveyform/form14/:id', form14.get);
app.get('/legone/survey/surveyform/form15/:id', form15.get);
app.get('/legone/survey/surveyform/form16/:id', form16.get);
app.get('/legone/survey/surveyform/form17/:id', form17.get);
app.get('/legone/survey/surveyform/save/f31/:id', form31.get);
app.get('/legone/survey/surveyform/save/f32/:id', form32.get);
app.get('/legone/survey/surveyform/save/f41/:id', form41.get);
app.get('/legone/survey/surveyform/save/f42/:id', form42.get);
app.get('/legone/survey/surveyform/save/f43/:id', form43.get);
app.get('/legone/survey/surveyform/save/f44/:id', form44.get);
app.get('/legone/survey/surveyform/save/f45/:id', form45.get);
app.get('/legone/survey/surveyform/save/f46/:id', form46.get);
app.get('/legone/survey/surveyform/save/f47/:id', form47.get);
app.get('/legone/survey/surveyform/save/f48/:id', form48.get);
app.get('/legone/survey/surveyform/save/f49/:id', form49.get);
app.get('/legone/survey/surveyform/save/f410/:id', form410.get);
app.get('/legone/survey/surveyform/save/f411/:id', form411.get);
app.get('/legone/survey/surveyform/save/f52/:id', form52.get);
app.get('/legone/survey/surveyform/save/f53/:id', form53.get);
app.get('/legone/survey/surveyform/save/f54/:id', form54.get);
app.get('/legone/survey/surveyform/save/f55/:id', form55.get);
app.get('/legone/survey/surveyform/save/f56/:id', form56.get);
app.get('/food/:category/:id', form56.get2);
app.post('/select', form56.view);
app.post('/update', form56.update);
app.get('/legone/survey/surveyform/save/f57/:id', form57.get);
app.get('/legone/survey/surveyform/save/f58/:id', form58.get);
app.get('/legone/survey/surveyform/save/f59/:id', form59.get);
app.get('/legone/survey/surveyform/save/f73/:id', form73.get);
app.get('/legone/survey/surveyform/save/f82/:id', form82.get);
app.post('/insert_f31', form_insert.f31);
app.post('/insert_f32', form_insert.f32);
app.post('/insert_f41', form_insert.f41);
app.post('/insert_f42', form_insert.f42);
app.post('/insert_f43', form_insert.f43);
app.post('/insert_f44', form_insert.f44);
app.post('/insert_f45', form_insert.f45);
app.post('/insert_f46', form_insert.f46);
app.post('/insert_f47', form_insert.f47);
app.post('/insert_f48', form_insert.f48);
app.post('/insert_f49', form_insert.f49);
app.post('/insert_f410', form_insert.f410);
app.post('/insert_f411', form_insert.f411);
app.post('/insert_f52', form_insert.f52);
app.post('/insert_f53', form_insert.f53);
app.post('/insert_f54', form_insert.f54);
app.post('/insert_f55', form_insert.f55);
app.post('/insert_f56', form_insert.f56);
app.post('/insert_f57', form_insert.f57);
app.post('/insert_f58', form_insert.f58);
app.post('/insert_f59', form_insert.f59);
app.post('/insert_f73', form_insert.f73);
app.post('/insert_f82', form_insert.f82);
app.post('/legone/survey/surveyform/form12', form12.post);
app.post('/legone/survey/surveyform/form13', form13.post);
app.post('/legone/survey/surveyform/form14', form14.post);
app.post('/legone/survey/surveyform/form15', form15.post);
app.post('/legone/survey/surveyform/form16', form16.post);
app.post('/legone/survey/surveyform/form17', form17.post);
app.post('/legone/survey/surveyform/save/f31', form31.post);
app.post('/legone/survey/surveyform/save/f32', form32.post);
app.post('/legone/survey/surveyform/save/f41', form41.post);
app.post('/legone/survey/surveyform/save/f42', form42.post);
app.post('/legone/survey/surveyform/save/f43', form43.post);
app.post('/legone/survey/surveyform/save/f44', form44.post);
app.post('/legone/survey/surveyform/save/f45', form45.post);
app.post('/legone/survey/surveyform/save/f46', form46.post);
app.post('/legone/survey/surveyform/save/f47', form47.post);
app.post('/legone/survey/surveyform/save/f48', form48.post);
app.post('/legone/survey/surveyform/save/f49', form49.post);
app.post('/legone/survey/surveyform/save/f410', form410.post);
app.post('/legone/survey/surveyform/save/f411', form411.post);
app.post('/legone/survey/surveyform/save/f52', form52.post);
app.post('/legone/survey/surveyform/save/f53', form53.post);
app.post('/legone/survey/surveyform/save/f54', form54.post);
app.post('/legone/survey/surveyform/save/f55', form55.post);	
app.post('/legone/survey/surveyform/save/f57', form57.post);	
app.post('/legone/survey/surveyform/save/f58', form58.post);	
app.post('/legone/survey/surveyform/save/f59', form59.post);	
app.post('/legone/survey/surveyform/save/f73', form73.post);
app.post('/legone/survey/surveyform/save/f82', form82.post);
app.post('/legone/survey/surveyform/form11/post', form11.view);
app.post('/legone/survey/surveyform/form11/post3', form11.view3);
app.post('/legone/survey/surveyform/form11/post2', form11.view2);
app.post('/legone/survey/surveyform/form11/respondents', form11.respondents);
app.post('/legone/survey/surveyform/form12/post', form12.view);
app.post('/legone/survey/surveyform/form13/post', form13.view);
app.post('/legone/survey/surveyform/form14/post', form14.view);
app.post('/legone/survey/surveyform/form15/post', form15.view);
app.post('/legone/survey/surveyform/form16/post', form16.view);
app.post('/legone/survey/surveyform/form17/post', form17.view);
app.post('/legone/survey/surveyform/form21/view', form21.view);
app.post('/legone/survey/surveyform/form21/post', form21_post.post);
app.post('/legone/survey/surveyform/form31/post', form31.view);
app.post('/legone/survey/surveyform/form32/post', form32.view);
app.post('/legone/survey/surveyform/form41/post', form41.view);
app.post('/legone/survey/surveyform/form42/post', form42.view);
app.post('/legone/survey/surveyform/form43/post', form43.view);
app.post('/legone/survey/surveyform/form44/post', form44.view);
app.post('/legone/survey/surveyform/form45/post', form45.view);
app.post('/legone/survey/surveyform/form46/post', form46.view);
app.post('/legone/survey/surveyform/form47/post', form47.view);
app.post('/legone/survey/surveyform/form48/post', form48.view);
app.post('/legone/survey/surveyform/form49/post', form49.view);
app.post('/legone/survey/surveyform/form410/post', form410.view);
app.post('/legone/survey/surveyform/form411/post', form411.view);
app.post('/legone/survey/surveyform/form52/post', form52.view);
app.post('/legone/survey/surveyform/form53/post', form53.view);
app.post('/legone/survey/surveyform/form54/post', form54.view);
app.post('/legone/survey/surveyform/form55/post', form55.view);
app.post('/legone/survey/surveyform/form57/post', form57.view);
app.post('/legone/survey/surveyform/form58/post', form58.view);
app.post('/legone/survey/surveyform/form59/post', form59.view);
app.post('/legone/survey/surveyform/form73/post', form73.view);
app.post('/legone/survey/surveyform/form82/post', form82.view);
app.post('/legone/survey/surveyform/summary/form11/post', summary_update.postF11);
app.post('/legone/survey/surveyform/summary/form12/post', summary_update.postF12);
app.post('/legone/survey/surveyform/summary/form13/post', summary_update.postF13);
app.post('/legone/survey/surveyform/summary/form14/post', summary_update.postF14);
app.post('/legone/survey/surveyform/summary/form15/post', summary_update.postF15);
app.post('/legone/survey/surveyform/summary/form16/post', summary_update.postF16);
app.post('/legone/survey/surveyform/summary/form17/post', summary_update.postF17);
app.post('/legone/survey/surveyform/summary/form21/post', summary_update.postF21);
app.post('/legone/survey/surveyform/summary/form31/post', summary_update.postF31);
app.post('/legone/survey/surveyform/summary/form32/post', summary_update.postF32);
app.post('/legone/survey/surveyform/summary/form41/post', summary_update.postF41);
app.post('/legone/survey/surveyform/summary/form42/post', summary_update.postF42);
app.post('/legone/survey/surveyform/summary/form43/post', summary_update.postF43);
app.post('/legone/survey/surveyform/summary/form44/post', summary_update.postF44);
app.post('/legone/survey/surveyform/summary/form45/post', summary_update.postF45);
app.post('/legone/survey/surveyform/summary/form46/post', summary_update.postF46);
app.post('/legone/survey/surveyform/summary/form47/post', summary_update.postF47);
app.post('/legone/survey/surveyform/summary/form48/post', summary_update.postF48);
app.post('/legone/survey/surveyform/summary/form49/post', summary_update.postF49);
app.post('/legone/survey/surveyform/summary/form410/post', summary_update.postF410);
app.post('/legone/survey/surveyform/summary/form411/post', summary_update.postF411);
app.post('/legone/survey/surveyform/summary/form52/post', summary_update.postF52);
app.post('/legone/survey/surveyform/summary/form53/post', summary_update.postF53);
app.post('/legone/survey/surveyform/summary/form54/post', summary_update.postF54);
app.post('/legone/survey/surveyform/summary/form55/post', summary_update.postF55);
app.post('/legone/survey/surveyform/summary/form56/post', summary_update.postF56);
app.post('/legone/survey/surveyform/summary/form57/post', summary_update.postF57);
app.post('/legone/survey/surveyform/summary/form58/post', summary_update.postF58);
app.post('/legone/survey/surveyform/summary/form59/post', summary_update.postF59);
app.post('/legone/survey/surveyform/summary/form73/post', summary_update.postF73);
app.post('/legone/survey/surveyform/summary/form82/post', summary_update.postF82);
app.post('/legone/survey/surveyform/summary/final/post', summary_update.postFinal);
app.post('/legone/survey/surveyform/summary/household_summary/view', household_summary.post);
app.post('/legone/survey/surveyform/summary/individual_summary/view', individual_summary.post);
app.post('/legone/survey/surveyform/isupdate1', isupdate.is1);
app.post('/legone/survey/surveyform/isupdate2', isupdate.is2);
app.post('/legone/survey/surveyform/isupdate3', isupdate.is3);
app.post('/legone/survey/surveyform/isupdate4', isupdate.is4);
app.post('/legone/survey/surveyform/households/post', households_check.view);
app.post('/legone/survey/surveyform/households/postedit', households_check.viewedit);
app.post('/legone/survey/surveyform/households_check', households_check.check_hcn);
app.post('/legone/survey/surveyform/households_check2', households_check.check_shsn);
app.post('/legone/survey/dblookup/check', eacheck.post);								//check if existing (new eacode)
app.post('/legone/survey/dblookup/listareas', listareas.post);							//search for areas in localsurvey
app.post('/legone/survey/dblookup/municipality', municipality.post);					//search municipalities in localsurvey
app.post('/legone/survey/dblookup/barangay', barangay.post);							//search barangays in localsurvey
app.post('/skipping/form12', form12.skipping);
app.post('/skipping/form13', form13.skipping);
app.post('/skipping/form15', form15.skipping);
app.post('/skipping/form16', form16.skipping);
app.post('/skipping/form17', form17.skipping);
app.post('/skipping/form31', form31.skipping);
app.post('/skipping/form32', form32.skipping);
app.post('/skipping/form41', form41.skipping);
app.post('/skipping/form42', form42.skipping);
app.post('/skipping/form43', form43.skipping);
app.post('/skipping/form44', form44.skipping);
app.post('/skipping/form45', form45.skipping);
app.post('/skipping/form46', form46.skipping);
app.post('/skipping/form47', form47.skipping);
app.post('/skipping/form48', form48.skipping);
app.post('/skipping/form49', form49.skipping);
app.post('/skipping/form410', form410.skipping);
app.post('/skipping/form411', form411.skipping);
app.post('/skipping/form52', form52.skipping);
app.post('/skipping/form53', form53.skipping);
app.post('/skipping/form54', form54.skipping);
app.post('/skipping/form55', form55.skipping);
app.post('/skipping/form57', form57.skipping);
app.post('/skipping/form58', form58.skipping);
app.post('/skipping/form59', form59.skipping);
app.post('/skipping/form73', form73.skipping);
app.post('/skipping/form82', form82.skipping);
app.post('/time_f12', form12.time);
app.post('/time_f13', form13.time);
app.post('/time_f14', form14.time);
app.post('/time_f15', form15.time);
app.post('/time_f16', form16.time);
app.post('/time_f17', form17.time);
app.post('/time_f31', form31.time);
app.post('/time_f32', form32.time);
app.post('/time_f41', form41.time);
app.post('/time_f42', form42.time);
app.post('/time_f43', form43.time);
app.post('/time_f44', form44.time);
app.post('/time_f45', form45.time);
app.post('/time_f46', form46.time);
app.post('/time_f47', form47.time);
app.post('/time_f48', form48.time);
app.post('/time_f49', form49.time);
app.post('/time_f410', form410.time);
app.post('/time_f411', form411.time);
app.post('/time_f52', form52.time);
app.post('/time_f53', form53.time);
app.post('/time_f54', form54.time);
app.post('/time_f55', form55.time);
app.post('/time_f56', form56.time);
app.post('/time_f57', form57.time);
app.post('/time_f58', form58.time);
app.post('/time_f59', form59.time);
app.post('/time_f73', form73.time);
app.post('/time_f82', form82.time);
app.post('/valid/boys05', form21.boys05);
app.post('/valid/boys1118', form21.boys1118);
app.post('/valid/boys610', form21.boys610);
app.post('/valid/girls05', form21.girls05);
app.post('/valid/girls1118', form21.girls1118);
app.post('/valid/girls610', form21.girls610);
app.post('/valid/boys05h', form21.boys05h);
app.post('/valid/boys1118h', form21.boys1118h);
app.post('/valid/boys610h', form21.boys610h);
app.post('/valid/girls05h', form21.girls05h);
app.post('/valid/girls1118h', form21.girls1118h);
app.post('/valid/girls610h', form21.girls610h);
app.get('/adminMode',restrict, admin.get);
app.post('/execute', admin.execute);
app.post('/adminModeQ', admin.postQ);
app.post('/adminModeA', admin.postA);
app.post('/editQ', admin.viewQ);
app.post('/editD', admin.viewD);
app.post('/editQuestions', admin.viewQuestions);
app.post('/disableQ', admin.disableQ);
app.post('/updateQ',admin.updateQ);
app.post('/editA', admin.viewA);
app.post('/editAnswers', admin.viewAnswers);
app.post('/updateA',admin.updateA);
app.post('/ans',admin.ans);
app.post('/check/qkey/questions',admin.check_qkeyQ);
app.post('/replacement',households.replacement);
app.post('/indivnum',households.indivnum);
app.post('/diebio',households.diebio);
app.post('/f12_listings',households.f12);
app.post('/summary5', summarylist.summary5);
app.post('/summary6', summarylist.summary6);
app.post('/summary7', summarylist.summary7);
app.post('/summary8', summarylist.summary8);
app.post('/summary9', summarylist.summary9);
app.post('/summary10', summarylist.summary10);
app.post('/summary11', summarylist.summary11);
app.post('/summary12', summarylist.summary12);
app.post('/summary13', summarylist.summary13);
app.post('/summ', summarylist.summ);

/******************** DIETARY ********************/

app.get('/dietaryhome', dietaryhome.get);
app.post('/uploadf11', upload.single('csvdata'), dietaryhome.uploadf11);
app.post('/save_newea', dietaryhome.save_newea);
app.get('/dietaryhh/:id', dietaryhh.get);
app.post('/dietaryhh', dietaryhh.post);
app.post('/dietaryhhlines', dietaryhh.hhlines);
app.post('/dietarymembercount', dietaryhh.dietarymembercount);

app.get('/foodrecall/:id/:recday', foodrecall.get);
app.get('/members/:id', foodrecall.members);
app.post('/memberstatus_d', foodrecall.memberstatus_d);
app.post('/memberlines', foodrecall.memberlines);

app.get('/foodrecord/:id', foodrecord.get);
app.post('/foodrecord', foodrecord.view);
app.post('/statusfoodrecord', foodrecord.status);
app.post('/updatestatusfoodrecord', foodrecord.updatestatus);
app.post('/updatefoodrecord', foodrecord.update);
app.post('/insertfoodrecord', foodrecord.save);
app.post('/fic_foodrecord', foodrecord.fic);
app.post('/fic_foodrecordget', foodrecord.ficget);

app.get('/foodrecall/:id', foodrecall.get);
app.post('/foodrecall', foodrecall.view);
app.post('/statusfoodrecall', foodrecall.status);
app.post('/updatestatusfoodrecall', foodrecall.updatestatus);
app.post('/updatefoodrecall', foodrecall.update);
app.post('/insertfoodrecall', foodrecall.save);

app.get('/mealpattern/:id', mealpattern.get);
app.post('/mealpattern', mealpattern.view);
app.post('/insertmealpattern', mealpattern.save);
app.post('/updatemealpattern', mealpattern.update);

app.get('/exportd/:id', exportd.get);

app.post('/upload_cons_d', upload.single('userfile'), consolidationd.extract);
app.post('/upload_d', upload.single('csvdata_cons'), consolidationd.upload);

app.post('/upload_trans_d', upload.single('userfile'), transmissiond.extract);
app.post('/trans_d', upload.single('csvdata_trans'), transmissiond.upload);

app.get('/cpr/:id', cpr.get);
app.post('/cpr', cpr.view);
app.post('/insertcpr', cpr.save);
app.post('/call_f11', cpr.call_f11);
app.post('/respondents_f11', cpr.respondents_f11);

////////////////////////////////////////////////////////////////////////////////

app.get('/get_trial', trial.get);
app.post('/trial', trial.view);




http.createServer(app).listen(app.get('port'), function(req, res){
	console.log('Express server listening on port ' + app.get('port'));
}); 


