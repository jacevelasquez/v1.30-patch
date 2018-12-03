	function find_input(key, myval){
		$(key).find('input[type!="checkbox"]').each(function(){
			$(this).val( myval );
		});
	}

$(document).ready(function (){


	$('input[type="text"]').change(function(){
		varname = $(this).attr('id');
 		value = $(this).val();

 		
	}); // end of text
	
	$("li.radio-choice").click(function(){
	

 	var id_details = chkbx_ID($(this));
 		varname = id_details[0];
 		value = id_details[1];
	
	if(varname == 'f43_05_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_05_02_").each(function(){
					$('#chk_f43_05_02_1, #chk_f43_05_02_2, #chk_f43_05_02_3, #chk_f43_05_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_05_02_").each(function(){
					$('#chk_f43_05_02_1, #chk_f43_05_02_2, #chk_f43_05_02_3, #chk_f43_05_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_06_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_06_02_").each(function(){
					$('#chk_f43_06_02_1, #chk_f43_06_02_2, #chk_f43_06_02_3, #chk_f43_06_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_06_02_").each(function(){
					$('#chk_f43_06_02_1, #chk_f43_06_02_2, #chk_f43_06_02_3, #chk_f43_06_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
		
	if(varname == 'f43_07_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_07_02_").each(function(){
					$('#chk_f43_07_02_1, #chk_f43_07_02_2, #chk_f43_07_02_3, #chk_f43_07_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_07_02_").each(function(){
					$('#chk_f43_07_02_1, #chk_f43_07_02_2, #chk_f43_07_02_3, #chk_f43_07_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
		
	if(varname == 'f43_08_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_08_02_").each(function(){
					$('#chk_f43_08_02_1, #chk_f43_08_02_2, #chk_f43_08_02_3, #chk_f43_08_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_08_02_").each(function(){
					$('#chk_f43_08_02_1, #chk_f43_08_02_2, #chk_f43_08_02_3, #chk_f43_08_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	
	if(varname == 'f43_09_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_09_02_").each(function(){
					$('#chk_f43_09_02_1, #chk_f43_09_02_2, #chk_f43_09_02_3, #chk_f43_09_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_09_02_").each(function(){
					$('#chk_f43_09_02_1, #chk_f43_09_02_2, #chk_f43_09_02_3, #chk_f43_09_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_10_01_'){
			if(value == 0 || value ==8 || value==9 || value==3 || value==3){
				$("#f43_10_02_").each(function(){
					$('#chk_f43_10_02_1, #chk_f43_10_02_2, #chk_f43_10_02_3, #chk_f43_10_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_10_02_").each(function(){
					$('#chk_f43_10_02_1, #chk_f43_10_02_2, #chk_f43_10_02_3, #chk_f43_10_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_11_01_'){
			if(value == 0 || value ==8 || value==9 || value==3 || value==3){
				$("#f43_11_02_").each(function(){
					$('#chk_f43_11_02_1, #chk_f43_11_02_2, #chk_f43_11_02_3, #chk_f43_11_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_11_02_").each(function(){
					$('#chk_f43_11_02_1, #chk_f43_11_02_2, #chk_f43_11_02_3, #chk_f43_11_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_12_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_12_02_").each(function(){
					$('#chk_f43_12_02_1, #chk_f43_12_02_2, #chk_f43_12_02_3, #chk_f43_12_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_12_02_").each(function(){
					$('#chk_f43_12_02_1, #chk_f43_12_02_2, #chk_f43_12_02_3, #chk_f43_12_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_13_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_13_02_").each(function(){
					$('#chk_f43_13_02_1, #chk_f43_13_02_2, #chk_f43_13_02_3, #chk_f43_13_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_13_02_").each(function(){
					$('#chk_f43_13_02_1, #chk_f43_13_02_2, #chk_f43_13_02_3, #chk_f43_13_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_14_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_14_02_").each(function(){
					$('#chk_f43_14_02_1, #chk_f43_14_02_2, #chk_f43_14_02_3, #chk_f43_14_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_14_02_").each(function(){
					$('#chk_f43_14_02_1, #chk_f43_14_02_2, #chk_f43_14_02_3, #chk_f43_14_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_15_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_15_02_").each(function(){
					$('#chk_f43_15_02_1, #chk_f43_15_02_2, #chk_f43_15_02_3, #chk_f43_15_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_15_02_").each(function(){
					$('#chk_f43_15_02_1, #chk_f43_15_02_2, #chk_f43_15_02_3, #chk_f43_15_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_16_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_16_02_").each(function(){
					$('#chk_f43_16_02_1, #chk_f43_16_02_2, #chk_f43_16_02_3, #chk_f43_16_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_16_02_").each(function(){
					$('#chk_f43_16_02_1, #chk_f43_16_02_2, #chk_f43_16_02_3, #chk_f43_16_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_17_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_17_02_").each(function(){
					$('#chk_f43_17_02_1, #chk_f43_17_02_2, #chk_f43_17_02_3, #chk_f43_17_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_17_02_").each(function(){
					$('#chk_f43_17_02_1, #chk_f43_17_02_2, #chk_f43_17_02_3, #chk_f43_17_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_18_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_18_02_").each(function(){
					$('#chk_f43_18_02_1, #chk_f43_18_02_2, #chk_f43_18_02_3, #chk_f43_18_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_18_02_").each(function(){
					$('#chk_f43_18_02_1, #chk_f43_18_02_2, #chk_f43_18_02_3, #chk_f43_18_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_19_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_19_02_").each(function(){
					$('#chk_f43_19_02_1, #chk_f43_19_02_2, #chk_f43_19_02_3, #chk_f43_19_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_19_02_").each(function(){
					$('#chk_f43_19_02_1, #chk_f43_19_02_2, #chk_f43_19_02_3, #chk_f43_19_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_20_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_20_02_").each(function(){
					$('#chk_f43_20_02_1, #chk_f43_20_02_2, #chk_f43_20_02_3, #chk_f43_20_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_20_02_").each(function(){
					$('#chk_f43_20_02_1, #chk_f43_20_02_2, #chk_f43_20_02_3, #chk_f43_20_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_21_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_21_02_").each(function(){
					$('#chk_f43_21_02_1, #chk_f43_21_02_2, #chk_f43_21_02_3, #chk_f43_21_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_21_02_").each(function(){
					$('#chk_f43_21_02_1, #chk_f43_21_02_2, #chk_f43_21_02_3, #chk_f43_21_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_22_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_22_02_").each(function(){
					$('#chk_f43_22_02_1, #chk_f43_22_02_2, #chk_f43_22_02_3, #chk_f43_22_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_22_02_").each(function(){
					$('#chk_f43_22_02_1, #chk_f43_22_02_2, #chk_f43_22_02_3, #chk_f43_22_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	if(varname == 'f43_23_01_'){
			if(value == 0 || value ==8 || value==9 || value==3){
				$("#f43_23_02_").each(function(){
					$('#chk_f43_23_02_1, #chk_f43_23_02_2, #chk_f43_23_02_3, #chk_f43_23_02_4').prop('disabled',true).addClass('disabled');
				});
				
			}else{
				$("#f43_23_02_").each(function(){
					$('#chk_f43_23_02_1, #chk_f43_23_02_2, #chk_f43_23_02_3, #chk_f43_23_02_4').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
				});
			}
 	}
	
	
	if(varname=='f43_24_01_'){
 			if(value =='0'){
			$('#f43_24_01_').addClass('first');
 			}
 			else{
			$('#f43_24_01_').removeClass('first');
			}
		}

	if(varname=='f43_24_02_'){
 			if(value =='0'){
			$('#f43_24_02_').addClass('first');
 			}
 			else{
			$('#f43_24_02_').removeClass('first');
			}
		}
		
		if($('#f43_24_01_').hasClass('first') && $('#f43_24_02_').hasClass('first')){
		$("#f43_25, #f43_26").each(function(){
          find_input(this, 999999);
					$(this).hide();
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
				$("#btn_page25, #btn_page26").removeClass('butt').attr('disabled',true);
		}
		else {
		$("#f43_25, #f43_26").each(function(){
					$(this).show();
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
				$("#btn_page25, #btn_page26").addClass('butt').attr('disabled',false);
		}
		
	

	


});<!-- end of DOM-->



});