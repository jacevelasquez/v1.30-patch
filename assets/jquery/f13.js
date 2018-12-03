function find_input(key, myval){
	$(key).find('input[type!="checkbox"]').each(function(){
		$(this).val( myval );
	});
}

$(document).ready(function (){

	$("input:checkbox").click(function(e){
			if( $(this).hasClass('disabled') )
			{
				e.preventDefault();
			}
   	});
    
//console.log( $('.question_form').serialize() );
<!-- start of test-->
$("li.radio-choice").click(function(){
	
	

 	var id_details = chkbx_ID($(this));
 		varname = id_details[0];
 		value = id_details[1];

	// for(var i=0;i<=9;i++) {
 		// if(varname=='f13_0'+i+'_01_'){
 			// if(value =='0'){
			// $('#f13_0'+i+'_01_').addClass('first');
 			// }
 			// else{
			// $('#f13_0'+i+'_01_').removeClass('first');
			// }
		// }
	// }
	
		if(varname=='f13_01_01_'){
 			if(value =='0'){
			$('#f13_01_01_').addClass('first');
 			}
 			else{
			$('#f13_01_01_').removeClass('first');
			}
		}
		
		if(varname=='f13_02_01_'){
 			if(value =='0'){
			$('#f13_02_01_').addClass('first');
 			}
 			else{
			$('#f13_02_01_').removeClass('first');
			}
		}
		
		if(varname=='f13_03_01_'){
 			if(value =='0'){
			$('#f13_03_01_').addClass('first');
 			}
 			else{
			$('#f13_03_01_').removeClass('first');
			}
		}
		
		if(varname=='f13_04_01_'){
 			if(value =='0'){
			$('#f13_04_01_').addClass('first');
 			}
 			else{
			$('#f13_04_01_').removeClass('first');
			}
		}
		
		if(varname=='f13_05_01_'){
 			if(value =='0'){
			$('#f13_05_01_').addClass('first');
 			}
 			else{
			$('#f13_05_01_').removeClass('first');
			}
		}
		
		if(varname=='f13_06_01_'){
 			if(value =='0'){
			$('#f13_06_01_').addClass('first');
 			}
 			else{
			$('#f13_06_01_').removeClass('first');
			}
		}
		
		if(varname=='f13_07_01_'){
 			if(value =='0'){
			$('#f13_07_01_').addClass('first');
 			}
 			else{
			$('#f13_07_01_').removeClass('first');
			}
		}
		if(varname=='f13_08_01_'){
 			if(value =='0'){
			$('#f13_08_01_').addClass('first');
 			}
 			else{
			$('#f13_08_01_').removeClass('first');
			}
		}
		
		if(varname=='f13_09_01_'){
 			if(value =='0'){
			$('#f13_09_01_').addClass('first');
 			}
 			else{
			$('#f13_09_01_').removeClass('first');
			}
		}
	
	
	 	if(varname=='f13_01_01_'){
 			if(value =='1'){
			$('#f13_01_01_').addClass('second');
 			}
 			else{
			$('#f13_01_01_').removeClass('second');
			}
		}
		
		
		if(($('#f13_01_01_').hasClass('first') || $('#f13_01_01_').hasClass('second')) && $('#f13_02_01_').hasClass('first') && $('#f13_03_01_').hasClass('first') && $('#f13_04_01_').hasClass('first') && $('#f13_05_01_').hasClass('first') && $('#f13_06_01_').hasClass('first') && $('#f13_07_01_').hasClass('first') && $('#f13_08_01_').hasClass('first') && $('#f13_09_01_').hasClass('first') ){
		$("#f13_10, #f13_11, #f13_12, #f13_13, #f13_14, #f13_15, #f13_16, #f13_17, #f13_18, #f13_19, #f13_20").each(function(){
          find_input(this, 999999);
					$(this).hide();
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
				$("#btn_page10, #btn_page11, #btn_page12, #btn_page13, #btn_page14, #btn_page15, #btn_page16, #btn_page17, #btn_page18, #btn_page19, #btn_page20").removeClass('butt').attr('disabled',true);
		}
		else {
		$("#f13_10, #f13_11, #f13_12, #f13_13, #f13_14, #f13_15, #f13_16, #f13_17, #f13_18, #f13_19, #f13_20").each(function(){
			
					$(this).show();
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
				$("#btn_page10, #btn_page11, #btn_page12, #btn_page13, #btn_page14, #btn_page15, #btn_page16, #btn_page17, #btn_page18, #btn_page19, #btn_page20").addClass('butt').attr('disabled',false);
		}

		
		 		// if(varname=='f13_01_01_'){
 			// if(value =='0'){
				// $("#f13_10").each(function(){
          // find_input(this, 999999);
					// $(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				// });
				// $("#btn_page10").removeClass('butt').attr('disabled',true);
 			// }
 			// else{
				// $("#f13_10").each(function(){
          // find_input(this, '');
					// $(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				// });
				// $("#btn_page10").addClass('butt').attr('disabled',false);
 		// }
		// }


});<!-- end of DOM-->


});