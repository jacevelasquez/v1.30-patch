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
 		
 		if(varname=='READLABEL_'){

 			if(value >'0'){
 				//disable answer list
				$("#f48_03").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
            find_input(this,999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
        $("#f48_04, #f48_05, #f48_06, #f48_07, #f48_08").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
            find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});


				//set variable value
//				$("#SEEK_CONSULT_, #WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, GIVEN_FULL_OTH, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f48_03").each(function(){
          find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
         $("#f48_04, #f48_05, #f48_06, #f48_07, #f48_08").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
            find_input(this,999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
				//clear variable value                                                                                                          //				$("#SEEK_CONSULT_, #WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, GIVEN_FULL_OTH, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('');
 			}                                                                                                                   9
 		}



 		if(varname=='READ_NFACTS_'){

 			if( value =='0' ){
 				//disable answer list
				$("#f48_06, #f48_07, #f48_08").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
          find_input(this,999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//set variable value
			//	$("#WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f48_06, #f48_07, #f48_08").each(function(){
        find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//clear variable value
			//	$("#WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('');
 			}
 		}

 





});
 <!-- end of test-->


});<!-- end of DOM-->