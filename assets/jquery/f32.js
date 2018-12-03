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
	
	/**
	*	Skipping for text input
	*/
	$('input[type="text"]').change(function(){
		varname = $(this).attr('id');
 		value = $(this).val();

			if(($('#f32_09_02').val() > 0 && $('#f32_09_02').val() < 99) || ($('#f32_10_02').val() > 0 && $('#f32_10_02').val() < 99) || ($('#f32_11_02').val() > 0 && $('#f32_11_02').val() < 99) || ($('#f32_12_02').val() > 0 && $('#f32_12_02').val() < 99)){
				$("#f32_21").each(function(){
					$(this).hide();
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999);
					$('#btn_page21').removeClass('butt').attr('disabled',true);
				});
			}else{
				$("#f32_21").each(function(){
					$(this).show();
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
						$('#btn_page21').addClass('butt').attr('disabled',false);
				});
			}
 		
		
		if(varname == 'f32_08_01'){
			if(value == 1){
						$('#f32_09_02').val(999999);
						$('#f32_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f32_09').hide();
						
						}
			
			if(value == 2){
						$('#f32_09_02').val(999999);
						$('#f32_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f32_09').hide();
						$('#f32_10_02').val(999999);
						$('#f32_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f32_10').hide();
						
						}
			if(value == 3){
						$('#f32_09_02').val(999999);
						$('#f32_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f32_09').hide();
						$('#f32_10_02').val(999999);
						$('#f32_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f32_10').hide();
						$('#f32_11_02').val(999999);
						$('#f32_11_03_').val(999999);
						$('#btn_page11').removeClass('butt');
						$('#btn_page11').prop('disabled',true).addClass('disabled');
						$('#f32_11').hide();
						
			}
			
			if(value == 4){
						$('#f32_09_02').val(999999);
						$('#f32_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f32_09').hide();
						$('#f32_10_02').val(999999);
						$('#f32_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f32_10').hide();
						$('#f32_11_02').val(999999);
						$('#f32_11_03_').val(999999);
						$('#btn_page11').removeClass('butt');
						$('#btn_page11').prop('disabled',true).addClass('disabled');
						$('#f32_11').hide();
						$('#f32_12_02').val(999999);
						$('#f32_12_03_').val(999999);
						$('#btn_page12').removeClass('butt');
						$('#btn_page12').prop('disabled',true).addClass('disabled');
						$('#f32_12').hide();
						
			}
			
			if(value == 5){
				$('#f32_09_02').val(999999);
						$('#f32_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f32_09').hide();
						$('#f32_10_02').val(999999);
						$('#f32_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f32_10').hide();
						$('#f32_11_02').val(999999);
						$('#f32_11_03_').val(999999);
						$('#btn_page11').removeClass('butt');
						$('#btn_page11').prop('disabled',true).addClass('disabled');
						$('#f32_11').hide();
						$('#f32_12_02').val(999999);
						$('#f32_12_03_').val(999999);
						$('#btn_page12').removeClass('butt');
						$('#btn_page12').prop('disabled',true).addClass('disabled');
						$('#f32_12').hide();
						$('#f32_13_02').val(999999);
						$('#f32_13_03_').val(999999);
						$('#btn_page13').removeClass('butt');
						$('#btn_page13').prop('disabled',true).addClass('disabled');
						$('#f32_13').hide();
						
			}
			
			if(value == 6){
				$('#f32_09_02').val(999999);
						$('#f32_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f32_09').hide();
						$('#f32_10_02').val(999999);
						$('#f32_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f32_10').hide();
						$('#f32_11_02').val(999999);
						$('#f32_11_03_').val(999999);
						$('#btn_page11').removeClass('butt');
						$('#btn_page11').prop('disabled',true).addClass('disabled');
						$('#f32_11').hide();
						$('#f32_12_02').val(999999);
						$('#f32_12_03_').val(999999);
						$('#btn_page12').removeClass('butt');
						$('#btn_page12').prop('disabled',true).addClass('disabled');
						$('#f32_12').hide();
						$('#f32_13_02').val(999999);
						$('#f32_13_03_').val(999999);
						$('#btn_page13').removeClass('butt');
						$('#btn_page13').prop('disabled',true).addClass('disabled');
						$('#f32_13').hide();
						$('#f32_14_02').val(999999);
						$('#f32_14_03_').val(999999);
						$('#btn_page14').removeClass('butt');
						$('#btn_page14').prop('disabled',true).addClass('disabled');
						$('#f32_14').hide();
						
			}
			
			if(value == 7){
				$('#f32_09_02').val(999999);
						$('#f32_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f32_09').hide();
						$('#f32_10_02').val(999999);
						$('#f32_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f32_10').hide();
						$('#f32_11_02').val(999999);
						$('#f32_11_03_').val(999999);
						$('#btn_page11').removeClass('butt');
						$('#btn_page11').prop('disabled',true).addClass('disabled');
						$('#f32_11').hide();
						$('#f32_12_02').val(999999);
						$('#f32_12_03_').val(999999);
						$('#btn_page12').removeClass('butt');
						$('#btn_page12').prop('disabled',true).addClass('disabled');
						$('#f32_12').hide();
						$('#f32_13_02').val(999999);
						$('#f32_13_03_').val(999999);
						$('#btn_page13').removeClass('butt');
						$('#btn_page13').prop('disabled',true).addClass('disabled');
						$('#f32_13').hide();
						$('#f32_14_02').val(999999);
						$('#f32_14_03_').val(999999);
						$('#btn_page14').removeClass('butt');
						$('#btn_page14').prop('disabled',true).addClass('disabled');
						$('#f32_14').hide();
						$('#f32_15_02').val(999999);
						$('#f32_15_03_').val(999999);
						$('#btn_page15').removeClass('butt');
						$('#btn_page15').prop('disabled',true).addClass('disabled');
						$('#f32_15').hide();
					
			}
			
			if(value == 8){
						$('#f32_09_02').val(999999);
						$('#f32_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f32_09').hide();
						$('#f32_10_02').val(999999);
						$('#f32_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f32_10').hide();
						$('#f32_11_02').val(999999);
						$('#f32_11_03_').val(999999);
						$('#btn_page11').removeClass('butt');
						$('#btn_page11').prop('disabled',true).addClass('disabled');
						$('#f32_11').hide();
						$('#f32_12_02').val(999999);
						$('#f32_12_03_').val(999999);
						$('#btn_page12').removeClass('butt');
						$('#btn_page12').prop('disabled',true).addClass('disabled');
						$('#f32_12').hide();
						$('#f32_13_02').val(999999);
						$('#f32_13_03_').val(999999);
						$('#btn_page13').removeClass('butt');
						$('#btn_page13').prop('disabled',true).addClass('disabled');
						$('#f32_13').hide();
						$('#f32_14_02').val(999999);
						$('#f32_14_03_').val(999999);
						$('#btn_page14').removeClass('butt');
						$('#btn_page14').prop('disabled',true).addClass('disabled');
						$('#f32_14').hide();
						$('#f32_15_02').val(999999);
						$('#f32_15_03_').val(999999);
						$('#btn_page15').removeClass('butt');
						$('#btn_page15').prop('disabled',true).addClass('disabled');
						$('#f32_15').hide();
						$('#f32_16_02').val(999999);
						$('#f32_16_03_').val(999999);
						$('#btn_page16').removeClass('butt');
						$('#btn_page16').prop('disabled',true).addClass('disabled');
						$('#f32_16').hide();
			}
			
			if(value == 9){
						$('#f32_09_02').val(999999);
						$('#f32_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f32_09').hide();
						$('#f32_10_02').val(999999);
						$('#f32_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f32_10').hide();
						$('#f32_11_02').val(999999);
						$('#f32_11_03_').val(999999);
						$('#btn_page11').removeClass('butt');
						$('#btn_page11').prop('disabled',true).addClass('disabled');
						$('#f32_11').hide();
						$('#f32_12_02').val(999999);
						$('#f32_12_03_').val(999999);
						$('#btn_page12').removeClass('butt');
						$('#btn_page12').prop('disabled',true).addClass('disabled');
						$('#f32_12').hide();
						$('#f32_13_02').val(999999);
						$('#f32_13_03_').val(999999);
						$('#btn_page13').removeClass('butt');
						$('#btn_page13').prop('disabled',true).addClass('disabled');
						$('#f32_13').hide();
						$('#f32_14_02').val(999999);
						$('#f32_14_03_').val(999999);
						$('#btn_page14').removeClass('butt');
						$('#btn_page14').prop('disabled',true).addClass('disabled');
						$('#f32_14').hide();
						$('#f32_15_02').val(999999);
						$('#f32_15_03_').val(999999);
						$('#btn_page15').removeClass('butt');
						$('#btn_page15').prop('disabled',true).addClass('disabled');
						$('#f32_15').hide();
						$('#f32_16_02').val(999999);
						$('#f32_16_03_').val(999999);
						$('#btn_page16').removeClass('butt');
						$('#btn_page16').prop('disabled',true).addClass('disabled');
						$('#f32_16').hide();
						$('#f32_17_02').val(999999);
						$('#f32_17_03_').val(999999);
						$('#btn_page17').removeClass('butt');
						$('#btn_page17').prop('disabled',true).addClass('disabled');
						$('#f32_17').hide();
						}
			if(value == ''){
						$('#f32_09_02').val('');
						$('#f32_09_03_').val('');
						$('#btn_page9').addClass('butt');
						$('#btn_page9').prop('disabled',false).removeClass('disabled');
						$('#f32_09').show();
						$('#f32_10_02').val('');
						$('#f32_10_03_').val('');
						$('#btn_page10').addClass('butt');
						$('#btn_page10').prop('disabled',false).removeClass('disabled');
						$('#f32_10').show();
						$('#f32_11_02').val('');
						$('#f32_11_03_').val('');
						$('#btn_page11').addClass('butt');
						$('#btn_page11').prop('disabled',false).removeClass('disabled');
						$('#f32_11').show();
						$('#f32_12_02').val('');
						$('#f32_12_03_').val('');
						$('#btn_page12').addClass('butt');
						$('#btn_page12').prop('disabled',false).removeClass('disabled');
						$('#f32_12').show();
						$('#f32_13_02').val('');
						$('#f32_13_03_').val('');
						$('#btn_page13').addClass('butt');
						$('#btn_page13').prop('disabled',false).removeClass('disabled');
						$('#f32_13').show();
						$('#f32_14_02').val('');
						$('#f32_14_03_').val('');
						$('#btn_page14').addClass('butt');
						$('#btn_page14').prop('disabled',false).removeClass('disabled');
						$('#f32_14').show();
						$('#f32_15_02').val('');
						$('#f32_15_03_').val('');
						$('#btn_page15').addClass('butt');
						$('#btn_page15').prop('disabled',false).removeClass('disabled');
						$('#f32_15').show();
						$('#f32_16_02').val('');
						$('#f32_16_03_').val('');
						$('#btn_page16').addClass('butt');
						$('#btn_page16').prop('disabled',false).removeClass('disabled');
						$('#f32_16').show();
						$('#f32_17_02').val('');
						$('#f32_17_03_').val('');
						$('#btn_page17').addClass('butt');
						$('#btn_page17').prop('disabled',false).removeClass('disabled');
						$('#f32_17').show();
						$('#f32_18_02').val('');
						$('#f32_18_03_').val('');
						$('#btn_page18').addClass('butt');
						$('#btn_page18').prop('disabled',false).removeClass('disabled');
						$('#f32_18').show();
						}
		}

	}); // end of text
	
	$('input[type="checkbox"]').change(function(){
		var varname 	= $(this).attr('id');
		var ischecked	= $(this).is(':checked') ? true : false;
	
	if(  varname == 'f32_32_02' || varname == 'f32_32_03' || varname == 'f32_32_04' || varname == 'f32_32_05' || varname == 'f32_32_06' || varname == 'f32_32_07' || varname == 'f32_32_08' || varname == 'f32_32_09' || varname == 'f32_32_10' || varname == 'f32_32_11'){
			
		
			if(  ischecked  ){
        $("#f32_34").each(function(){
					$(this).show();
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
						
						$('#btn_page34').addClass('butt').attr('disabled',false);
				});
			}else{
        $("#f32_34").each(function(){
					$(this).hide();
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				
						$('#btn_page34').removeClass('butt').attr('disabled',true);
				});
			}
		}	

	if(  varname == 'f32_33_02' || varname == 'f32_33_03' || varname == 'f32_33_04' || varname == 'f32_33_05' || varname == 'f32_33_06' || varname == 'f32_33_07' || varname == 'f32_33_08' || varname == 'f32_33_09' || varname == 'f32_33_10' || varname == 'f32_33_11'){
		
			if(  ischecked  ){
        $("#f32_35").each(function(){
					$(this).show();
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
						
						$('#btn_page35').addClass('butt').attr('disabled',false);
				});
			}else{
        $("#f32_35").each(function(){
					$(this).hide();
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				
						$('#btn_page35').removeClass('butt').attr('disabled',true);
				});
			}
		}			
		
	});
	
	
	$("li.radio-choice").click(function(){
	

 	var id_details = chkbx_ID($(this));
 		varname = id_details[0];
 		value = id_details[1];
	
	if(varname == 'f32_68_06_'){
		
			if(!$(this).hasClass('active')){
				
						$('#chk_f32_69_01_0').prop('disabled',true).addClass('disabled');
						$('#chk_f32_69_01_1').prop('disabled',true).addClass('disabled');
						$('#f32_69_01_').val(999999);
						$('#btn_page69').removeClass('butt');
						$('#btn_page69').prop('disabled',true).addClass('disabled');
						$('#f32_69').hide();
				
			}else{
						$('#chk_f32_69_01_0').prop('disabled',false).removeClass('disabled');
						$('#chk_f32_69_01_1').prop('disabled',false).removeClass('disabled');
						$('#f32_69_01_').val('');
						$('#btn_page69').addClass('butt');
						$('#btn_page69').prop('disabled',false).removeClass('disabled');
						$('#f32_69').show();
			}
 	}
	
	if(varname == 'f32_71_06_'){
		
			if(!$(this).hasClass('active')){
				
						$('#chk_f32_72_01_0').prop('disabled',true).addClass('disabled');
						$('#chk_f32_72_01_1').prop('disabled',true).addClass('disabled');
						$('#f32_72_01_').val(999999);
						$('#btn_page72').removeClass('butt');
						$('#btn_page72').prop('disabled',true).addClass('disabled');
						$('#f32_72').hide();
				
			}else{
						$('#chk_f32_72_01_0').prop('disabled',false).removeClass('disabled');
						$('#chk_f32_72_01_1').prop('disabled',false).removeClass('disabled');
						$('#f32_72_01_').val('');
						$('#btn_page72').addClass('butt');
						$('#btn_page72').prop('disabled',false).removeClass('disabled');
						$('#f32_72').show();
			}
 	}
	
	// if(varname == 'f32_65_01_'){
		
			// if(value == '0'){
				
						// $('#f32_65').append('<h2 class="bfeed">Sample Pictures : </h2><img src="/f32/Picture1.jpg" class="bfeed" height="350" width="350" /><img src="/f32/Picture2.jpg" class="bfeed" height="350" width="350" />');
				
			// }else{
						// $('.bfeed').remove();
			// }
 	// }
	


	});

	
}); // end of DOM