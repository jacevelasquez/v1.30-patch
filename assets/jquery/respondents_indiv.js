$(document).ready(function (){
  
	var duration = 0;
    var url = window.location.href;
    var urlArray = url.split("/");
    var bigIdString = urlArray[urlArray.length-1];
    var A = bigIdString.substring(0,12);
    var B = bigIdString.substring(12,16);
    var C = bigIdString.substring(16,20);
    var D = bigIdString.substring(20,22);
    document.getElementById('eacode').value = A;
    document.getElementById('hcn').value = B;
    document.getElementById('shsn').value = C;
	var preg = A.substring(A.length-1);
	
	if(preg == 'P'){
	$('#f13, #f14, #f15, #f16, #f17').hide();
	}
	else{
	$('#f13, #f14, #f15, #f16, #f17').show();
	}

    
    var data= {};
    data.eacode = A;
    data.hcn = B;
    data.shsn = C;	
	data.MEMBER_CODE = D;
			
			$.ajax({
                type: 'POST',
                //dataType: 'json',
                data: JSON.stringify(data),
                    contentType: 'application/json',
                            url: '/legone/survey/surveyform/form11/respondents_indiv',						
                            success: function(data) {
							console.log(data.MEMBER_CODE-1);
							var val = data.MEMBER_CODE-1;
							
							$('#RES_NAME').append("<option value="+val+">"+data.GIVENNAME+" "+data.SURNAME+"</option>");
							

                          }
                        });
						
});