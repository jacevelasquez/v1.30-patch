+---------------------------------------+
|	Reminders for e-DCS program	|
+---------------------------------------+

- new accounts for nns2019 on nns2019.db login table

- e-mail for transmission
	username: fnri.namd.nsis.trans@gmail.com
	password: namdnsis2019

- admin account for editing and deleting households
	username: ADMIN
	password: NSIS9

- steps on uploading household listings given by stat into localsurveyareas and localarea_listings table
	1.	convert into CSV file given by the stat
	2.	open nns2019.db using DB Browser from dcs folder
	3.	go to Execute SQL tab and input:
		Delete from localsurveyareas;
		Delete from localarea_listings;
		and press f5 
	4.	File>Import>Table from CSV file
	5.	choose the converted CSV file
	6.	change table name to listingsStat and press OK
	7.	go to Execute SQL tab and input:
		insert into localarea_listings (eacode,hcn,shsn,hhead,address,die2ndgen) select field2,field3,field4,field7,field8,field9 from listingsStat;
		insert or ignore into localsurveyareas (areaname,eacode) select field1,field2 from listingsStat;
		update localarea_listings set diebio='1' where die2ndgen > 0;
		update localarea_listings set diebio='0' where die2ndgen =''; 
		UPDATE localarea_listings SET address=REPLACE(address, "'", "") WHERE address LIKE "%'%";
		UPDATE localarea_listings SET hhead=REPLACE(hhead, "'", "") WHERE hhead LIKE "%'%";
		and press f5
	8.	click Write Changes or Ctrl+S
	9.	copy localsurveyareas data from nns2019.db to localsurveyareas data on C:\foodconsumption2019\foodconsumption.db
		(ANTHROP AND DIETARY localsurveyareas data must be the same)

- How to use data import (only applicable on 10.10.124.43 PC)
	1.	copy latest nns2019.db and paste it to C:\dasboard on 10.10.124.43 PC
	2.	open dasboard program using cmd "cd C:\dashboard"
	3.	run program by typing "npm run dev"
	4.	URL : localhost:2017/home
	5.	username : ADMIN
		password : NSIS9
	6.	Click data importer button
	7.	Decide which option you want to import (import specific forms or import all)
	8.	copy nns2019.db from dashboard folder and paste it to researcher's laptop

- How to run a specific program:
	1.	open command prompt or windows+R
	2.	change directory to the program by typing on cmd "cd C:\dcs"
	3.	run program by typing "npm run dev", for dietary program use "npm run start"

- list of programs (localhost or IP address of PC)

	anthrop 2019
	location: C:\dcs
	version: v1.30
	URL :localhost:3000
	patch: 

	dietary 2018 
	location: C:\foodconsumption 
	version: v1.02
	URL :localhost:3666

	dietary 2019
	location: C:\foodconsumption 
	version: v1.03
	URL :localhost:3019

	server(pink background)
	location: C:\server
	URL :localhost:2018

	coords
	location: C:\coords
	URL :localhost:3111

	seminar series
	location: C:\sseries
	URL :localhost:4400, localhost:5000

	stat
	location: C:\stat
	URL :localhost:4000

	dashboard
	location: C:\server
	URL :10.10.125.43:2017/home

	

	