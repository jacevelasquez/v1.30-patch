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
	/**
	*	TESTING RADIO BUTTON
	*/
	$("li.radio-choice").click(function(){
 	var id_details = chkbx_ID($(this));
 		varname = id_details[0];
 		value = id_details[1];

 		/**
 		*	Question 1
 		*/
 		if(varname=='DEWORM_'){
 			if(value!='1'){
				$("#f47_02,#f47_03,#f47_04,#f47_05,#f47_06,#f47_07").each(function(){
					find_input(this, 999999)
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
				$("#f47_08").each(function(){
					find_input(this, '')
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
			}else{
				$("#f47_02,#f47_03,#f47_04,#f47_05,#f47_06,#f47_07").each(function(){
					find_input(this, '')
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
				$("#f47_08").each(function(){
					find_input(this, 999999)
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
			}
		}

 		/**
 		*	Question 1fs
 		*/
 		if(varname=='DEWORM_EXP_EFFECT_'){
 			if(value=='0'){
				$("#f47_07, #f47_08").each(function(){
					find_input(this, 999999)
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
			}else{
				$("#f47_07, #f47_08").each(function(){
					find_input(this, '')
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
			}
		}		

 		/**
 		*	Question 3a
 		*/
 		if(varname=='BRUSHPRAC_'){
 			if(value=='0'){
				$("#f47_13, #f47_14, #f47_15, #f47_16, #f47_17, #f47_18").each(function(){
					find_input(this, 999999)
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
			}else{
				$("#f47_13, #f47_14, #f47_15, #f47_16, #f47_17, #f47_18").each(function(){
					find_input(this, '')
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
			}
		}

 		/**
 		*	Question 3a
 		*/
 		if(varname=='CLEANTEETHOFT_'){
			$("#f47_14,#f47_15").each(function(){
				find_input(this, 999999)
				$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
			});
 			if(value=='1'){
				$("#f47_14").each(function(){
					find_input(this, '')
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
			}else if(value=='2'){
				$("#f47_15").each(function(){
					find_input(this, '')
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
			}
		}

 		/**
 		*	Question 4a
 		*/
 		if(varname=='TEETHPAIN_'){
 			if(value=='0'){
				$("#f47_20").each(function(){
					find_input(this, 999999)
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
			}else{
				$("#f47_20").each(function(){
					find_input(this, '')
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
			}
		}


 		/**
 		*	Question 4a
 		*/
 		if(varname=='VISITDENT_'){
 			if(value=='0'){
				$("#f47_22, #f47_23, #f47_24").each(function(){
					find_input(this, 999999)
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
			}else{
				$("#f47_22, #f47_23, #f47_24").each(function(){
					find_input(this, '')
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
			}
		}

 		/**
 		*	Question 5a
 		*/
 		if(varname=='VGARDEN_'){
 			if(value=='0'){
				$("#f47_26, #f47_27, #f47_28").each(function(){
					find_input(this, 999999)
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
			}else{
				$("#f47_26, #f47_27, #f47_28").each(function(){
					find_input(this, '')
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
			}
		}

		if(varname=='WASHBM_PRAC_'){
 			if(value == 0 || value == 8){
				$("#f47_10, #f47_11").each(function(){
          			$(this).find('input[name^="WASHBM_USE"], input[name^="WASHBM_SRC"]').each(function(){
            			$(this).val('999999');
          			});
					$(this).find('li[id^="chk_WASHBM"]').prop('disabled',true).addClass('disabled');
				});
 			}else{
				$("#f47_10, #f47_11").each(function(){
          			$(this).find('input[name^="WASHBM_USE"], input[name^="WASHBM_SRC"]').each(function(){
            			$(this).val('');
          			});
					$(this).find('li[id^="chk_WASHBM"]').prop('disabled',false).removeClass('disabled');
				});
 			}
 		}  

		if(varname=='WASHAM_PRAC_'){
 			if(value == 0 || value == 8){
				$("#f47_10, #f47_11").each(function(){
          			$(this).find('input[name^="WASHAM_USE"], input[name^="WASHAM_SRC"]').each(function(){
            			$(this).val('999999');
          			});
					$(this).find('li[id^="chk_WASHAM"]').prop('disabled',true).addClass('disabled');
				});
 			}else{
				$("#f47_10, #f47_11").each(function(){
          			$(this).find('input[name^="WASHAM_USE"], input[name^="WASHAM_SRC"]').each(function(){
            			$(this).val('');
          			});
					$(this).find('li[id^="chk_WASHAM"]').prop('disabled',false).removeClass('disabled');
				});
 			}
 		}  
 		
		if(varname=='WASHAUT_PRAC_'){
 			if(value == 0 || value == 8){
				$("#f47_10, #f47_11").each(function(){
          			$(this).find('input[name^="WASHAUT_USE"], input[name^="WASHAUT_SRC"]').each(function(){
            			$(this).val('999999');
          			});
					$(this).find('li[id^="chk_WASHAUT"]').prop('disabled',true).addClass('disabled');
				});
 			}else{
				$("#f47_10, #f47_11").each(function(){
          			$(this).find('input[name^="WASHAUT_USE"], input[name^="WASHAUT_SRC"]').each(function(){
            			$(this).val('');
          			});
					$(this).find('li[id^="chk_WASHAUT"]').prop('disabled',false).removeClass('disabled');
				});
 			}
 		}  
		
		    if(varname=='LESSON_'){
 			if(value=='0')
 			{
				$("#f47_30").each(function(){
			        find_input(this, '999999');
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				});
 			}
 			else
 			{
				$("#f47_30").each(function(){
			        find_input(this, '');
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
				});
 			}

		}



 	})
 	/* END OF RADIO */

	/**
	*	TESTING TEXT INPUT
	*/
	$('input[type="text"]').change(function(){
		varname = $(this).attr('id');
 		value = $(this).val();

 		/**
 		*	Question 1c
 		*/
 		if(varname == 'DEWORM_TIMES'){
 	  		if( isNaN( value ) || value < 1  ){
				$(this).val('').focus();
			}
			if( value != 88 && value > 1 ){
				$("#f47_04").each(function(){
					find_input(this, 999999)
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
			}else{
				$("#f47_04").each(function(){
					find_input(this, 999999)
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
			}
 		}
 	});
 	/* END OF TEXT */


}) // END OF DOM


/*
function find_input(key){
	$(key).find('input[type!="checkbox"]').each(function(){
		console.log($(this).attr('id'));
	});
}
$(document).ready(function (){
	$("input:checkbox").click(function(e){
			if( $(this).hasClass('disabled') )
			{
				e.preventDefault();
			}
   	});

	$("li.radio-choice").click(function(){

 	var id_details = chkbx_ID($(this));
 		varname = id_details[0];
 		value = id_details[1];

 		if(varname=='DEWORM_'){
 		}

		
		if(varname=='VGARDEN_'){

 			if(value=='2'){
 				
 				//disable answer list
				$("#f47_14").find('li, input[type!=hidden]').each(function(){
					$(this).prop('readonly',true).addClass('disabled');
				});

					//set variable value
          $("#DAILY_").val('999999');

 			}
 			
 			else{ 
 				//enable answer list
 				$("#f47_14").find('li, input[type!=hidden]').each(function(){
					$(this).prop('readonly',false).removeClass('disabled');
				});
				//clear variable value
				$("#DAILY_").val('');
 			}
 		}
		
		if(varname=='VISITDENT_'){

 			if(value=='0'){
 				//disable answer list
				$("#f47_22,#f47_23").find('li, input[type!=hidden]').each(function(){
					$(this).prop('readonly',true).addClass('disabled');
				});

					//set variable value
          $("#DENTLASTSAW_,#RSNDENTVIS_").val('999999');

 			}
 			
 			else{ 
 				//enable answer list
 				$("#f47_22,#f47_23").find('li, input[type!=hidden]').each(function(){
					$(this).prop('readonly',false).removeClass('disabled');
				});
				//clear variable value
				$("#DENTLASTSAW_,#RSNDENTVIS_").val('');
 			}
 		}
		
		if(varname=='VGARDEN_'){

 			if(value=='0'){
 				//disable answer list
				$("#f47_26,#f47_27,#f47_28").find('li, input[type!=hidden]').each(function(){
					$(this).prop('readonly',true).addClass('disabled');
				});

					//set variable value
          $("#SCGARDEN_, #PLANT_LVEG, #PLANT_NLVEG, #PROD_USED_").val('999999');

 			}
 			
 			else{ 
 				//enable answer list
 				$("#f47_26,#f47_27,#f47_28").find('li, input[type!=hidden]').each(function(){
					$(this).prop('readonly',false).removeClass('disabled');
				});
				//clear variable value
				$("#SCGARDEN_, #PLANT_LVEG, #PLANT_NLVEG, #PROD_USED_").val('');
 			}
 		}
		
		if(varname=='LESSON_'){

 			if(value=='0'){
 				//disable answer list
				$("#f47_30").find('li, input[type!=hidden]').each(function(){
					$(this).prop('readonly',true).addClass('disabled');
				});

					//set variable value
				$("#TOPIC_BDN1, #TOPIC_BDN2, #TOPIC_BDN3, #TOPIC_BDN4, #TOPIC_BDN5, #TOPIC_BDN6, #TOPIC_BDN7, #TOPIC_BDN8, #TOPIC_BDN9, #TOPIC_GHP1, #TOPIC_GHP1,"
				+"#TOPIC_GHP2, #TOPIC_GHP3, #TOPIC_GHP4, #TOPIC_GHP5, #TOPIC_GHP6, #TOPIC_GHP7, #TOPIC_GHP8, #TOPIC_GHP9, #TOPIC_GHP10, #TOPIC_GHP11, #TOPIC_GHP12").val('999999');

 			}
 			
 			else{ 
 				//enable answer list
 				$("#f47_30").find('li, input[type!=hidden]').each(function(){
					$(this).prop('readonly',false).removeClass('disabled');
				});
				//clear variable value
				$("#TOPIC_BDN1, #TOPIC_BDN2, #TOPIC_BDN3, #TOPIC_BDN4, #TOPIC_BDN5, #TOPIC_BDN6, #TOPIC_BDN7, #TOPIC_BDN8, #TOPIC_BDN9, #TOPIC_GHP1, #TOPIC_GHP1,"
				+"#TOPIC_GHP2, #TOPIC_GHP3, #TOPIC_GHP4, #TOPIC_GHP5, #TOPIC_GHP6, #TOPIC_GHP7, #TOPIC_GHP8, #TOPIC_GHP9, #TOPIC_GHP10, #TOPIC_GHP11, #TOPIC_GHP12").val('');
 			}
 		}

 		 		
});


 <!-- end of test-->



});<!-- end of DOM-->
*/