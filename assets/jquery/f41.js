function find_input(key, myval){
	$(key).find('input[type!="checkbox"]').each(function(){
		//console.log($(this).attr('id'));
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
 		
 		if(varname=='PLACE_DELIVER_BW_'){

 			if(value !='1' && value != '2'){
 				//disable answer list
				$("#f41_02").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
          console.log(this);
          find_input(this, 999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//set variable value
//				$("#HB_REAS1, #HB_REAS2, #HB_REAS3, #HB_REAS4, #HB_REAS5, #HB_REAS6, #HB_REAS7, #HB_REAS8, #HB_REAS9, #HB_REAS10").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f41_02").each(function(){
	          find_input(this, '');
				    $(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//clear variable value
//  				$("#HB_REAS1, #HB_REAS2, #HB_REAS3, #HB_REAS4, #HB_REAS5, #HB_REAS6, #HB_REAS7, #HB_REAS8, #HB_REAS9, #HB_REAS10").val('');
 			}
 		}


 		if(varname=='TYPEOFD_'){

 			if( value =='3' ){
 				//disable answer list
				$("#f41_05").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
          find_input(this, 999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//set variable value
//				$("#RECSHOWN_, #RECSHOWN_OTH").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f41_05").each(function(){
          find_input(this, '');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//clear variable value
//				$("#RECSHOWN_, #RECSHOWN_OTH").val('');
 			}
 		}	
		
		
		
		

 		if(varname=='WEIGHED_'){

 			if( value =='0' ){
 				//disable answer list
				$("#f41_06").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
          find_input(this, 999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//set variable value
//				$("#RECSHOWN_, #RECSHOWN_OTH").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f41_06").each(function(){
          find_input(this, '');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//clear variable value
//				$("#RECSHOWN_, #RECSHOWN_OTH").val('');
 			}
 		}
    
    if(varname=='RECSHOWN_'){
 			if( value=='0' || value=='4' || value=='8' ){
		    	$("#f41_07").each(function(){
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

		}else{
				$("#f41_07").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}

/* 		if(varname=='RECSHOWN_'){

 			console.log(value);
 			if( value =='0' || value =='4' || value =='8'){
// 			if( value =='1' || value =='4' || value =='8' || value =='9'){
 				//disable answer list
				$("#f41_07").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
          find_input(this, 999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//set variable value
//				$("#SOUR_BWY_").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f41_07").each(function(){
          find_input(this, '');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//clear variable value
//				$("#SOUR_BWY_").val('');
 			}
 		}
*/


});
 <!-- end of test-->


});<!-- end of DOM-->