 function find_input(key, myval){
	$(key).find('input:text,input[type="hidden"]').each(function(){
		//console.log($(this).attr('id'));
		$(this).val( myval );
	});
} 
 
 
$(document).ready(function (){
 
	$("#save-btn").click(function(){
		$(this).closest('form').find('input').prop('disabled', false);
	});
 
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
 		
 		if(varname=='GET_SICK_'){

 			if(value =='0'){
 				//disable answer list
				$("#f45_02, #f45_03, #f45_04, #f45_05, #f45_06, #f45_07 , #f45_08, #f45_09, #f45_10, #f45_11, #f45_12, #f45_13").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
            find_input(this,999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//set variable value
//				$("#SEEK_CONSULT_, #WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, GIVEN_FULL_OTH, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f45_02, #f45_03, #f45_04, #f45_05, #f45_06, #f45_07 , #f45_08, #f45_09, #f45_10, #f45_11, #f45_12, #f45_13").each(function(){
          find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//clear variable value
//				$("#SEEK_CONSULT_, #WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, GIVEN_FULL_OTH, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('');
 			}
 		}



 		if(varname=='SEEK_CONSULT_'){

 			if( value =='0' ){
 				//disable answer list
				$("#f45_03, #f45_04, #f45_05, #f45_06, #f45_07 , #f45_08, #f45_09, #f45_10, #f45_11, #f45_12, #f45_13").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
          find_input(this,999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//set variable value
			//	$("#WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f45_03, #f45_04, #f45_05, #f45_06, #f45_07 , #f45_08, #f45_09, #f45_10, #f45_11, #f45_12, #f45_13").each(function(){
        find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//clear variable value
			//	$("#WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('');
 			}
 		}


 		if(varname=='PRES_MED_'){

 			console.log(value);
 			if( value =='0' ){
// 			if( value !='1' || value =='4' || value =='8' || value =='9'){
 				//disable answer list
				$("#f45_06 , #f45_07 , #f45_08, #f45_09, #f45_10, #f45_11").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
          find_input(this,999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//set variable value
		//		$("#GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #NOT_TAKETREATMENT1_OTH").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f45_06 , #f45_07 , #f45_08, #f45_09, #f45_10, #f45_11").each(function(){
        find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//clear variable value
		//		$("#GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #NOT_TAKETREATMENT1_OT_").val('');
 			}
 		}


 		if(varname=='GIVEN_MED_'){

 			console.log(value);
 			if( value =='0' ){
// 			if( value !='1' || value =='4' || value =='8' || value =='9'){
 				//disable answer list
				$("#f45_07 , #f45_08, #f45_09, #f45_10, #f45_11").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
          find_input(this,999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//set variable value
		//		$("#GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #NOT_TAKETREATMENT1_OTH").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f45_07 , #f45_08, #f45_09, #f45_10, #f45_11").each(function(){
        find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//clear variable value
		//		$("#GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #NOT_TAKETREATMENT1_OT_").val('');
 			}
 		}








 		if(varname=='PAY_MED_'){

 			console.log(value);
 			if( value >'0' ){
// 			if( value !='1' || value =='4' || value =='8' || value =='9'){
 				//disable answer list
				$("#f45_09, #f45_10, #f45_11").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
          find_input(this,999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//set variable value
		//		$("#GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #NOT_TAKETREATMENT1_OTH").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f45_09, #f45_10, #f45_11").each(function(){
        find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//clear variable value
		//		$("#GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #NOT_TAKETREATMENT1_OT_").val('');
 			}
 		}


  		if(varname=='WHAT_MED_'){

 			console.log(value);
 			if( value =='1' ){
// 			if( value =='1' || value =='4' || value =='8' || value =='9'){
 				//disable answer list
				$("#f45_11").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
          find_input(this,999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//set variable value
			//	$("#NOT_TAKETREATMENT1_, #FOLLOW_UP_").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f45_11").each(function(){
        find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//clear variable value
			//	$("#NOT_TAKETREATMENT1_, #FOLLOW_UP_").val('');
 			}
 		}






});
 <!-- end of test-->


});<!-- end of DOM-->