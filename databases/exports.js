var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');
var bodyParser = require('body-parser');
var jQuery = require('jQuery');
var dir = process.cwd();
var _ = require('underscore');
var busboy = require('connect-busboy');
var fileupload = require("express-fileupload");
var formidable = require('formidable');
var mysql = require('mysql');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var session = require('express-session');
var json2csv = require('json2csv');
const csv = require('csvtojson');
var multer = require('multer');
var dateLog = new Date().toLocaleString();
var upload = multer({
		dest: 'uploads/'
	})
	var Zip = require('node-7z'); // Name the class as you want!
var unzip = require('unzip');
var easyzip = require('easy-zip');

exports.get = function (req, res) {

	db2.all("select distinct localarea_listings.eacode, localsurveyareas.areaname from localarea_listings INNER JOIN localsurveyareas ON  localarea_listings.eacode = localsurveyareas.eacode WHERE INTERVIEW_STATUS1 > 0 ORDER BY localarea_listings.eacode", function (err, rows) {
		if (err)
			console.log(err);
		res.render('export.ejs', {
			array: rows,
			layout: false,
			session: req.session
		});
	});
};

exports.f11 = function (req, res) {

	eacode = req.params.eacode;
	var m = new Date();
	var dateString = m.getFullYear() + "-" + ("0" + (m.getMonth() + 1)).slice(-2) + "-" + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" + ("0" + m.getSeconds()).slice(-2);

	fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] f11 backup on '+eacode+' \n');

	db2.all("select f11.* from f11 join localarea_listings on f11.eacode = localarea_listings.eacode and f11.hcn = localarea_listings.hcn and f11.shsn = localarea_listings.shsn where localarea_listings.diebio = 1 and f11.eacode = '" + eacode + "';", function (err, rows) {
		if (err)
			console.log(err);
		var flds = [];
		for (var idx in rows) {
			var item = rows[idx];
			for (var key in item) {
				if (flds.indexOf(key) == -1)
					flds.push(key);
			}
		}
		var csv = json2csv({
				data: rows,
				fields: flds
			});
		fs.writeFile('f11_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv, function (err) {
			if (err)
				console.log(err);
			res.download('f11_' + eacode + '_' + req.session.username + '_' + dateString + '.csv');
		});

	});
};

exports.validateIS = function (req, res) {
	var obj = {};

	db2.all("SELECT * FROM f11 WHERE eacode like '%"+[req.body.eacode.substring(0,9)]+"%' ", function (err, rows) {
	obj.f11 = rows;
	
		db2.all("SELECT * FROM localarea_listings WHERE eacode like '%"+[req.body.eacode.substring(0,9)]+"%' ", function (err, rows2) {
		obj.hh =rows2;
			
		res.send(obj);
		
		});
	});
};

exports.bio = function (req, res) {

	eacode = req.params.id;
	console.log(eacode);
	var m = new Date();
	var dateString = m.getFullYear() + "-" + ("0" + (m.getMonth() + 1)).slice(-2) + "-" + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" + ("0" + m.getSeconds()).slice(-2);

	fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] biochem backup on '+[eacode.substring(0,9)]+' \n');

	db2.all("SELECT * FROM f11 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

		if (err)
			console.log(err);
		var flds = [];
		for (var idx in rows) {
			var item = rows[idx];
			for (var key in item) {
				if (flds.indexOf(key) == -1)
					flds.push(key);
			}
		}
		var csv = json2csv({
				data: rows,
				fields: flds
			});
		var zip2 = new easyzip.EasyZip();
		zip2.file('f11_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

		db2.all("SELECT * FROM localarea_listings WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and INTERVIEW_STATUS1 > 0", function (err, rows) {

			if (err)
				console.log(err);
			var flds = [];
			for (var idx in rows) {
				var item = rows[idx];
				for (var key in item) {
					if (flds.indexOf(key) == -1)
						flds.push(key);
				}
			}
			var csv = json2csv({
					data: rows,
					fields: flds
				});
			zip2.file('localarea_listings_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

			/******************************************************************************/

			zip2.writeToResponse(res, eacode + '_' + req.session.username + '_' + dateString + '_BIO');

			/******************************************************************************/

			// zip.file('f11_'+eacode+'_'+req.session.username+'_'+dateString+'.csv',csv);
			// zip.writeToResponse(csv,'./csv/'+eacode+'_'+req.session.username+'_'+dateString+'_ALL.zip');
		}); //f11
																											

	}); //localarea_listings

};

exports.all = function (req, res) {

	eacode = req.params.id;
	var m = new Date();
	var dateString = m.getFullYear() + "-" + ("0" + (m.getMonth() + 1)).slice(-2) + "-" + ("0" + m.getDate()).slice(-2) + "_" + ("0" + m.getHours()).slice(-2) + "" + ("0" + m.getMinutes()).slice(-2) + "" + ("0" + m.getSeconds()).slice(-2);

	fs.appendFile('logs_'+req.session.username+'.txt', '['+dateLog+'] full backup on '+[eacode.substring(0,9)]+' \n');

	db2.all("SELECT * FROM f11 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

		if (err)
			console.log(err);
		var flds = [];
		for (var idx in rows) {
			var item = rows[idx];
			for (var key in item) {
				if (flds.indexOf(key) == -1)
					flds.push(key);
			}
		}
		var csv = json2csv({
				data: rows,
				fields: flds
			});
		var zip2 = new easyzip.EasyZip();
		zip2.file('f11_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

		db2.all("SELECT * FROM f12 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and DATE_EDIT > 0", function (err, rows) {

			if (err)
				console.log(err);
			var flds = [];
			for (var idx in rows) {
				var item = rows[idx];
				for (var key in item) {
					if (flds.indexOf(key) == -1)
						flds.push(key);
				}
			}
			var csv = json2csv({
					data: rows,
					fields: flds
				});
			zip2.file('f12_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

			db2.all("SELECT * FROM f13 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and DATE_EDIT > 0", function (err, rows) {

				if (err)
					console.log(err);
				var flds = [];
				for (var idx in rows) {
					var item = rows[idx];
					for (var key in item) {
						if (flds.indexOf(key) == -1)
							flds.push(key);
					}
				}
				var csv = json2csv({
						data: rows,
						fields: flds
					});
				zip2.file('f13_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

				db2.all("SELECT * FROM f14 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and DATE_EDIT > 0", function (err, rows) {

					if (err)
						console.log(err);
					var flds = [];
					for (var idx in rows) {
						var item = rows[idx];
						for (var key in item) {
							if (flds.indexOf(key) == -1)
								flds.push(key);
						}
					}
					var csv = json2csv({
							data: rows,
							fields: flds
						});
					zip2.file('f14_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

					db2.all("SELECT * FROM f15 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and DATE_EDIT > 0", function (err, rows) {

						if (err)
							console.log(err);
						var flds = [];
						for (var idx in rows) {
							var item = rows[idx];
							for (var key in item) {
								if (flds.indexOf(key) == -1)
									flds.push(key);
							}
						}
						var csv = json2csv({
								data: rows,
								fields: flds
							});
						zip2.file('f15_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

						db2.all("SELECT * FROM f16 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and DATE_EDIT > 0", function (err, rows) {

							if (err)
								console.log(err);
							var flds = [];
							for (var idx in rows) {
								var item = rows[idx];
								for (var key in item) {
									if (flds.indexOf(key) == -1)
										flds.push(key);
								}
							}
							var csv = json2csv({
									data: rows,
									fields: flds
								});
							zip2.file('f16_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

							db2.all("SELECT * FROM f17 WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and DATE_EDIT > 0", function (err, rows) {

								if (err)
									console.log(err);
								var flds = [];
								for (var idx in rows) {
									var item = rows[idx];
									for (var key in item) {
										if (flds.indexOf(key) == -1)
											flds.push(key);
									}
								}
								var csv = json2csv({
										data: rows,
										fields: flds
									});
								zip2.file('f17_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

								db2.all("SELECT * FROM f21 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

									if (err)
										console.log(err);
									var flds = [];
									for (var idx in rows) {
										var item = rows[idx];
										for (var key in item) {
											if (flds.indexOf(key) == -1)
												flds.push(key);
										}
									}
									var csv = json2csv({
											data: rows,
											fields: flds
										});
									zip2.file('f21_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

									db2.all("SELECT * FROM f31 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

										if (err)
											console.log(err);
										var flds = [];
										for (var idx in rows) {
											var item = rows[idx];
											for (var key in item) {
												if (flds.indexOf(key) == -1)
													flds.push(key);
											}
										}
										var csv = json2csv({
												data: rows,
												fields: flds
											});
										zip2.file('f31_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

										db2.all("SELECT * FROM f32 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

											if (err)
												console.log(err);
											var flds = [];
											for (var idx in rows) {
												var item = rows[idx];
												for (var key in item) {
													if (flds.indexOf(key) == -1)
														flds.push(key);
												}
											}
											var csv = json2csv({
													data: rows,
													fields: flds
												});
											zip2.file('f32_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

											db2.all("SELECT * FROM f41 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

												if (err)
													console.log(err);
												var flds = [];
												for (var idx in rows) {
													var item = rows[idx];
													for (var key in item) {
														if (flds.indexOf(key) == -1)
															flds.push(key);
													}
												}
												var csv = json2csv({
														data: rows,
														fields: flds
													});
												zip2.file('f41_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

												db2.all("SELECT * FROM f42 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

													if (err)
														console.log(err);
													var flds = [];
													for (var idx in rows) {
														var item = rows[idx];
														for (var key in item) {
															if (flds.indexOf(key) == -1)
																flds.push(key);
														}
													}
													var csv = json2csv({
															data: rows,
															fields: flds
														});
													zip2.file('f42_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

													db2.all("SELECT * FROM f43 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

														if (err)
															console.log(err);
														var flds = [];
														for (var idx in rows) {
															var item = rows[idx];
															for (var key in item) {
																if (flds.indexOf(key) == -1)
																	flds.push(key);
															}
														}
														var csv = json2csv({
																data: rows,
																fields: flds
															});
														zip2.file('f43_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

														db2.all("SELECT * FROM f44 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

															if (err)
																console.log(err);
															var flds = [];
															for (var idx in rows) {
																var item = rows[idx];
																for (var key in item) {
																	if (flds.indexOf(key) == -1)
																		flds.push(key);
																}
															}
															var csv = json2csv({
																	data: rows,
																	fields: flds
																});
															zip2.file('f44_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

															db2.all("SELECT * FROM f45 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																if (err)
																	console.log(err);
																var flds = [];
																for (var idx in rows) {
																	var item = rows[idx];
																	for (var key in item) {
																		if (flds.indexOf(key) == -1)
																			flds.push(key);
																	}
																}
																var csv = json2csv({
																		data: rows,
																		fields: flds
																	});
																zip2.file('f45_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

																db2.all("SELECT * FROM f46 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																	if (err)
																		console.log(err);
																	var flds = [];
																	for (var idx in rows) {
																		var item = rows[idx];
																		for (var key in item) {
																			if (flds.indexOf(key) == -1)
																				flds.push(key);
																		}
																	}
																	var csv = json2csv({
																			data: rows,
																			fields: flds
																		});
																	zip2.file('f46_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

																	db2.all("SELECT * FROM f47 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																		if (err)
																			console.log(err);
																		var flds = [];
																		for (var idx in rows) {
																			var item = rows[idx];
																			for (var key in item) {
																				if (flds.indexOf(key) == -1)
																					flds.push(key);
																			}
																		}
																		var csv = json2csv({
																				data: rows,
																				fields: flds
																			});
																		zip2.file('f47_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

																		db2.all("SELECT * FROM f48 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																			if (err)
																				console.log(err);
																			var flds = [];
																			for (var idx in rows) {
																				var item = rows[idx];
																				for (var key in item) {
																					if (flds.indexOf(key) == -1)
																						flds.push(key);
																				}
																			}
																			var csv = json2csv({
																					data: rows,
																					fields: flds
																				});
																			zip2.file('f48_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

																			db2.all("SELECT * FROM f49 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																				if (err)
																					console.log(err);
																				var flds = [];
																				for (var idx in rows) {
																					var item = rows[idx];
																					for (var key in item) {
																						if (flds.indexOf(key) == -1)
																							flds.push(key);
																					}
																				}
																				var csv = json2csv({
																						data: rows,
																						fields: flds
																					});
																				zip2.file('f49_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

																				db2.all("SELECT * FROM f410 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																					if (err)
																						console.log(err);
																					var flds = [];
																					for (var idx in rows) {
																						var item = rows[idx];
																						for (var key in item) {
																							if (flds.indexOf(key) == -1)
																								flds.push(key);
																						}
																					}
																					var csv = json2csv({
																							data: rows,
																							fields: flds
																						});
																					zip2.file('f410_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

																					db2.all("SELECT * FROM f411 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																						if (err)
																							console.log(err);
																						var flds = [];
																						for (var idx in rows) {
																							var item = rows[idx];
																							for (var key in item) {
																								if (flds.indexOf(key) == -1)
																									flds.push(key);
																							}
																						}
																						var csv = json2csv({
																								data: rows,
																								fields: flds
																							});
																						zip2.file('f411_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);
																					
																				
																				db2.all("SELECT * FROM f52 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																					if (err)
																						console.log(err);
																					var flds = [];
																					for (var idx in rows) {
																						var item = rows[idx];
																						for (var key in item) {
																							if (flds.indexOf(key) == -1)
																								flds.push(key);
																						}
																					}
																					var csv = json2csv({
																							data: rows,
																							fields: flds
																						});
																					zip2.file('f52_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

																					db2.all("SELECT * FROM f53 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																						if (err)
																							console.log(err);
																						var flds = [];
																						for (var idx in rows) {
																							var item = rows[idx];
																							for (var key in item) {
																								if (flds.indexOf(key) == -1)
																									flds.push(key);
																							}
																						}
																						var csv = json2csv({
																								data: rows,
																								fields: flds
																							});
																						zip2.file('f53_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

																						db2.all("SELECT * FROM f54 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																							if (err)
																								console.log(err);
																							var flds = [];
																							for (var idx in rows) {
																								var item = rows[idx];
																								for (var key in item) {
																									if (flds.indexOf(key) == -1)
																										flds.push(key);
																								}
																							}
																							var csv = json2csv({
																									data: rows,
																									fields: flds
																								});
																							zip2.file('f54_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

																							db2.all("SELECT * FROM f55 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																								if (err)
																									console.log(err);
																								var flds = [];
																								for (var idx in rows) {
																									var item = rows[idx];
																									for (var key in item) {
																										if (flds.indexOf(key) == -1)
																											flds.push(key);
																									}
																								}
																								var csv = json2csv({
																										data: rows,
																										fields: flds
																									});
																								zip2.file('f55_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

																								db2.all("SELECT * FROM f56 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																									if (err)
																										console.log(err);
																									var flds = [];
																									for (var idx in rows) {
																										var item = rows[idx];
																										for (var key in item) {
																											if (flds.indexOf(key) == -1)
																												flds.push(key);
																										}
																									}
																									var csv = json2csv({
																											data: rows,
																											fields: flds
																										});
																									zip2.file('f56_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);
																								
																								db2.all("SELECT * FROM f57 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																									if (err)
																										console.log(err);
																									var flds = [];
																									for (var idx in rows) {
																										var item = rows[idx];
																										for (var key in item) {
																											if (flds.indexOf(key) == -1)
																												flds.push(key);
																										}
																									}
																									var csv = json2csv({
																											data: rows,
																											fields: flds
																										});
																									zip2.file('f57_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);
																									
																								db2.all("SELECT * FROM f58 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																									if (err)
																										console.log(err);
																									var flds = [];
																									for (var idx in rows) {
																										var item = rows[idx];
																										for (var key in item) {
																											if (flds.indexOf(key) == -1)
																												flds.push(key);
																										}
																									}
																									var csv = json2csv({
																											data: rows,
																											fields: flds
																										});
																									zip2.file('f58_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);
																								
																									db2.all("SELECT * FROM f59 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																										if (err)
																											console.log(err);
																										var flds = [];
																										for (var idx in rows) {
																											var item = rows[idx];
																											for (var key in item) {
																												if (flds.indexOf(key) == -1)
																													flds.push(key);
																											}
																										}
																										var csv = json2csv({
																												data: rows,
																												fields: flds
																											});
																										zip2.file('f59_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);
																								
																									db2.all("SELECT * FROM f73 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																										if (err)
																											console.log(err);
																										var flds = [];
																										for (var idx in rows) {
																											var item = rows[idx];
																											for (var key in item) {
																												if (flds.indexOf(key) == -1)
																													flds.push(key);
																											}
																										}
																										var csv = json2csv({
																												data: rows,
																												fields: flds
																											});
																										zip2.file('f73_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

																										db2.all("SELECT * FROM f82 WHERE eacode like '%"+[eacode.substring(0,9)]+"%'", function (err, rows) {

																											if (err)
																												console.log(err);
																											var flds = [];
																											for (var idx in rows) {
																												var item = rows[idx];
																												for (var key in item) {
																													if (flds.indexOf(key) == -1)
																														flds.push(key);
																												}
																											}
																											var csv = json2csv({
																													data: rows,
																													fields: flds
																												});
																											zip2.file('f82_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

																											db2.all("SELECT * FROM localarea_listings WHERE eacode like '%"+[eacode.substring(0,9)]+"%' and INTERVIEW_STATUS1 > 0", function (err, rows) {

																												if (err)
																													console.log(err);
																												var flds = [];
																												for (var idx in rows) {
																													var item = rows[idx];
																													for (var key in item) {
																														if (flds.indexOf(key) == -1)
																															flds.push(key);
																													}
																												}
																												var csv = json2csv({
																														data: rows,
																														fields: flds
																													});
																												zip2.file('localarea_listings_' + eacode + '_' + req.session.username + '_' + dateString + '.csv', csv);

																												/******************************************************************************/

																												zip2.writeToResponse(res, eacode + '_' + req.session.username + '_' + dateString + '_ALL');

																												/******************************************************************************/

																												// zip.file('f11_'+eacode+'_'+req.session.username+'_'+dateString+'.csv',csv);
																												// zip.writeToResponse(csv,'./csv/'+eacode+'_'+req.session.username+'_'+dateString+'_ALL.zip');
																											}); //f11
																										}); //f12
																									}); //f13
																								}); //f14
																							}); //f15
																						}); //f16
																					}); //f17
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
	}); //localarea_listings

};