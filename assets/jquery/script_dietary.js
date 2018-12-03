$(document).ready(function (){
	
						
});

	var url = window.location.href;
    var urlArray = url.split("/");
    var bigIdString = urlArray[urlArray.length-1];
	var frcl = urlArray[urlArray.length-2];
    var A = bigIdString.substring(0,12);
    var B = bigIdString.substring(12,16);
    var C = bigIdString.substring(16,20);

	
	var data = {};
	data.eacode = A;
	data.hcn = B;
	data.shsn = C;

	
	function households() {
		
	window.location.href = '/dietaryhh/'+A;
		
	}
	
	
	function members() {
	
	window.location.href = '/members/'+A+B+C;
	
	}