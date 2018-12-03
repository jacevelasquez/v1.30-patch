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
 		
 		if(varname=='NEWBSCRN_'){

 			if(value =='0' || value =='8'){     
 				//disable answer list
				$("#f44_02, #f44_03, #f44_04").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
            find_input(this,999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
     


				//set variable value
//				$("#SEEK_CONSULT_, #WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, GIVEN_FULL_OTH, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f44_02, #f44_03, #f44_04").each(function(){
          find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
        
				//clear variable value                                                                                                          //				$("#SEEK_CONSULT_, #WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, GIVEN_FULL_OTH, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('');
 			}                                                                                                                   9
 		}



 		if(varname=='NSCR_TYPE_'){

 			if( value =='1'){
 				//disable answer list
				$("#f44_04").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
          find_input(this,999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
        	$("#f44_03").each(function(){
        find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

        
      }

				//set variable value
			//	$("#WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('999999');
   		else if( value =='2'){
 				//disable answer list
				$("#f44_03").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
          find_input(this,999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

        $("#f44_04").each(function(){
        find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//set variable value
			//	$("#WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('999999');

 			}
     
      
      else if( value =='3'){                  
 				//disable answer list
			
        $("#f44_03, #f44_04").each(function(){
        find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//set variable value
			//	$("#WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('999999');

 			}
      
    
 			else{
 				//enable answer list
				$("#f44_03, #f44_04").each(function(){
           find_input(this,999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//clear variable value
			//	$("#WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('');
 			}
 		}
    
   	if(varname=='VITA_SUPP_STA_'){
 			if(value=='0'){
 				//disable answer list
				$("#f44_10,#f44_11").each(function(){
          			find_input(this, '999999');
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				});
 			}
 			else{ 
 				//enable answer list
				$("#f44_10,#f44_11").each(function(){
			        find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}
 		}
    
    if(varname=='OPT_STA_'){
 			if(value=='0'){
 				//disable answer list
				$("#f44_13,#f44_14").each(function(){
          			find_input(this, '999999');
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				});
 			}
 			else{ 
 				//enable answer list
				$("#f44_13,#f44_14").each(function(){
			        find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}
 		}
    
    if(varname=='GROWMON_STA_'){
 			if(value=='0'){
 				//disable answer list
				$("#f44_16,#f44_17").each(function(){
          			find_input(this, '999999');
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				});
 			}
 			else{ 
 				//enable answer list
				$("#f44_16,#f44_17").each(function(){
			        find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}
 		}
    
      if(varname=='DAYCARE_STA_'){
 			if(value=='0'){
 				//disable answer list
				$("#f44_19,#f44_20").each(function(){
          			find_input(this, '999999');
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				});
 			}
 			else{ 
 				//enable answer list
				$("#f44_19,#f44_20").each(function(){
			        find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}
 		}

            
  		if(varname=='IMMU_'){
 			if(value=='0' || value == '8'){
 				//disable answer list
				$("#f44_06,#f44_07,#f44_08").each(function(){
          			find_input(this, '999999');
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				});
 			}
 			else{ 
 				//enable answer list
				$("#f44_06,#f44_07,#f44_08").each(function(){
			        find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}
 		}

  		if(varname=='SUPP_FEED_'){

 			if(value =='0'){     
 				//disable answer list
				$("#f44_22, #f44_25, #f44_26, #f44_27, #f44_29").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
            find_input(this,'999999');
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				});
     
   
				//set variable value
//				$("#SEEK_CONSULT_, #WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, GIVEN_FULL_OTH, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f44_22, #f44_25, #f44_26, #f44_27, #f44_29").each(function(){
          find_input(this,'');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
        
				//clear variable value                                                                                                          //				$("#SEEK_CONSULT_, #WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, GIVEN_FULL_OTH, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('');
 			}                                                                                                                 
 		}
                                                                                                                                    
		if(varname=='BNS_VISIT_'){
 			if(value=='0'){
 				//disable answer list
			
				 $("#tbl-q3eh td:nth-child(2) input[type!=hidden],#tbl-q3eh td:nth-child(3) input[type!=hidden],#tbl-q3eh td:nth-child(3) select").each(function(){
          			find_input(this, '999999');
					$(this).prop('disabled',true).addClass('disabled');
				 });

 			}
 			else{ 
 				//enable answer list
			
				 $("#tbl-q3eh td:nth-child(2) input[type!=hidden],#tbl-q3eh td:nth-child(3) input[type!=hidden],#tbl-q3eh td:nth-child(3) select").each(function(){
          			find_input(this, '');
					$(this).prop('disabled',false).removeClass('disabled');
				 });
 			}
 		}

  		if(varname=='BRUSHPRAC_'){

 			if(value =='0'){     
 				//disable answer list
				$("#f44_31, #f44_32, #f44_33, #f44_34, #f44_35").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
            find_input(this, '999999');
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
     


				//set variable value
//				$("#SEEK_CONSULT_, #WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, GIVEN_FULL_OTH, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f44_31, #f44_32, #f44_33, #f44_34, #f44_35").each(function(){
          find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
        
				//clear variable value                                                                                                          //				$("#SEEK_CONSULT_, #WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, GIVEN_FULL_OTH, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('');
 			}                                                                                                                 
 		}
    
    
   		if(varname=='CLEANTEETHOFT_'){
			$("#f44_32,#f44_33").each(function(){
          		find_input(this, 999999);
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
			});
 			if(value=='1'){
				$("#f44_32").each(function(){
            		find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}
 			else if(value=='2'){ 
 				$("#f44_33").each(function(){
	          		find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}
 		}
    
      
  		if(varname=='TEETHPAIN_'){

 			if(value =='0'){     
 				//disable answer list
				$("#f44_37, #f44_38, #f44_39, #f44_40").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
            find_input(this,'999999');
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
     


				//set variable value
//				$("#SEEK_CONSULT_, #WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, GIVEN_FULL_OTH, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f44_37, #f44_38, #f44_39, #f44_40").each(function(){
          find_input(this,'');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
        
				//clear variable value                                                                                                          //				$("#SEEK_CONSULT_, #WHERE_CONSULT_, #DIAB_, #HI_BLOD_, #HYCHOL_, #ACUT_GAST_, #COUGH_, #COM_INF_, #ASTHMA_, #OTHERS, #PRES_MED_, #GIVEN_MED_, #WHERE_MED_, #PAY_MED_, #GIVEN_FULL_, GIVEN_FULL_OTH, #WHAT_MED_, #NOT_TAKETREATMENT1_, #FOLLOW_UP_, #OTHS_CPACK, #OTHM_CPACK").val('');
 			}                                                                                                                 
 		}
     
              
  	if(varname=='VISITDENTIST_'){
 			if(value=='0')
 			{
				$("#f44_39, #f44_40").each(function(){
			        find_input(this, '999999');
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				});
 			}
 			else
 			{
				$("#f44_39, #f44_40").each(function(){
			        find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}

		}
      
   
  	if(varname=='DIARRHEA_'){
 			if(value=='0')
 			{
				$("#f44_42, #f44_43, #f44_44, #f44_45").each(function(){
			        find_input(this, '999999');
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				});
 			}
 			else
 			{
				$("#f44_42, #f44_43, #f44_44, #f44_45").each(function(){
			        find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}

		}
   
    if(varname=='BREASTFED_'){
 			if(value=='0')
 			{
				$("#f44_47, #f44_48, #f44_49, #f44_50, #f44_51, #f44_52, #f44_53, #f44_54").each(function(){
			        find_input(this, '999999');
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				});
 			}
 			else
 			{
				$("#f44_47, #f44_48, #f44_49, #f44_50, #f44_51, #f44_52, #f44_53, #f44_54").each(function(){
			        find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}

		}
   
    if(varname=='ZINC_TAB_'){
 			if(value=='1' || value=='0' || value=='2' )
 			{
				$("#f44_43, #f44_44, #f44_45").each(function(){
			        find_input(this, '999999');
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				});
 			}
 			else
 			{
				$("#f44_43, #f44_44, #f44_45").each(function(){
			        find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}

		}
				
    
     if(varname=='DEWORM_'){
 			if(value=='0')
 			{
				$("#f44_50, #f44_51, #f44_52, #f44_53, #f44_54, #f44_55, #f44_56").each(function(){
			        find_input(this, '999999');
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				});
 			}
 			else
 			{
				$("#f44_50, #f44_51, #f44_52, #f44_53, #f44_54, #f44_55, #f44_56").each(function(){
			        find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}

		}
  
    
     if(varname=='DEWORM_EXP_EFFECT_'){
 			if(value=='0')
 			{
				$("#f44_56, #f44_57").each(function(){
			        find_input(this, '999999');
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				});
 			}
 			else
 			{
				$("#f44_56, #f44_57").each(function(){
			        find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}

		}


     


});
 <!-- end of test-->


  
   $('input[type="text"]').change(function(){
		varname = $(this).attr('id');
 		value = $(this).val();

 		if(varname == 'DEWORM_TIMES'){

			if( isNaN( value ) ){
				$(this).val('').focus();
			}
			if( value > 1 ){
				$("#f44_52").each(function(){
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f44_52").each(function(){
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 		}
 	});



   $('.immu_status').change(function(){
		varname = $(this).attr('id');
 		value = $(this).val();
 		if( value == 0 || value == 9 ){
			$(this).closest('tr').find('.immu_cls').each(function() {
				$(this).prop('disabled',true).addClass('disabled');
				if( $(this).attr('type') == 'text' ){
					$(this).val('999999');
				}else{
					$('#' + $(this).attr('id') + '_' ).val('999999');
				}
			});
 		}else{
			$(this).closest('tr').find('.immu_cls').each(function() {
				$(this).prop('disabled',false).removeClass('disabled');
				if( $(this).attr('type') == 'text' ){
					$(this).val('');
				}else{
					$('#' + $(this).attr('id') + '_' ).val('');
				}
			});
 		}
 	});




});<!-- end of DOM-->