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
		
		
 		if(($('#f31_08_02').val() > 0 && $('#f31_08_02').val() < 99) || ($('#f31_09_02').val() > 0 && $('#f31_09_02').val() < 99) || ($('#f31_10_02').val() > 0 && $('#f31_10_02').val() < 99) || ($('#f31_11_02').val() > 0 && $('#f31_11_02').val() < 99)){
				$("#f31_20").each(function(){
					$(this).hide();
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999);
					$('#btn_page20').removeClass('butt').attr('disabled',true);
				});
			}else{
				$("#f31_20").each(function(){
					$(this).show();
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
						find_input(this,'');
						$('#btn_page20').addClass('butt').attr('disabled',false);
				});
			}
			
			
		if(varname == 'f31_07_01'){
			if(value == 1){
						$('#f31_08_02').val(999999);
						$('#f31_08_03_').val(999999);
						$('#btn_page8').removeClass('butt');
						$('#btn_page8').prop('disabled',true).addClass('disabled');
						$('#f31_08').hide();
						}
			
			if(value == 2){
						$('#f31_08_02').val(999999);
						$('#f31_08_03_').val(999999);
						$('#btn_page8').removeClass('butt');
						$('#btn_page8').prop('disabled',true).addClass('disabled');
						$('#f31_08').hide();
						$('#f31_09_02').val(999999);
						$('#f31_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f31_09').hide();
						}
			if(value == 3){
						$('#f31_08_02').val(999999);
						$('#f31_08_03_').val(999999);
						$('#btn_page8').removeClass('butt');
						$('#btn_page8').prop('disabled',true).addClass('disabled');
						$('#f31_08').hide();
						$('#f31_09_02').val(999999);
						$('#f31_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f31_09').hide();
						$('#f31_10_02').val(999999);
						$('#f31_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f31_10').hide();
			}
			
			if(value == 4){
						$('#f31_08_02').val(999999);
						$('#f31_08_03_').val(999999);
						$('#btn_page8').removeClass('butt');
						$('#btn_page8').prop('disabled',true).addClass('disabled');
						$('#f31_08').hide();
						$('#f31_09_02').val(999999);
						$('#f31_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f31_09').hide();
						$('#f31_10_02').val(999999);
						$('#f31_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f31_10').hide();
						$('#f31_11_02').val(999999);
						$('#f31_11_03_').val(999999);
						$('#btn_page11').removeClass('butt');
						$('#btn_page11').prop('disabled',true).addClass('disabled');
						$('#f31_11').hide();
			}
			
			if(value == 5){
				$('#f31_08_02').val(999999);
						$('#f31_08_03_').val(999999);
						$('#btn_page8').removeClass('butt');
						$('#btn_page8').prop('disabled',true).addClass('disabled');
						$('#f31_08').hide();
						$('#f31_09_02').val(999999);
						$('#f31_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f31_09').hide();
						$('#f31_10_02').val(999999);
						$('#f31_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f31_10').hide();
						$('#f31_11_02').val(999999);
						$('#f31_11_03_').val(999999);
						$('#btn_page11').removeClass('butt');
						$('#btn_page11').prop('disabled',true).addClass('disabled');
						$('#f31_11').hide();
						$('#f31_12_02').val(999999);
						$('#f31_12_03_').val(999999);
						$('#btn_page12').removeClass('butt');
						$('#btn_page12').prop('disabled',true).addClass('disabled');
						$('#f31_12').hide();
			}
			
			if(value == 6){
				$('#f31_08_02').val(999999);
						$('#f31_08_03_').val(999999);
						$('#btn_page8').removeClass('butt');
						$('#btn_page8').prop('disabled',true).addClass('disabled');
						$('#f31_08').hide();
						$('#f31_09_02').val(999999);
						$('#f31_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f31_09').hide();
						$('#f31_10_02').val(999999);
						$('#f31_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f31_10').hide();
						$('#f31_11_02').val(999999);
						$('#f31_11_03_').val(999999);
						$('#btn_page11').removeClass('butt');
						$('#btn_page11').prop('disabled',true).addClass('disabled');
						$('#f31_11').hide();
						$('#f31_12_02').val(999999);
						$('#f31_12_03_').val(999999);
						$('#btn_page12').removeClass('butt');
						$('#btn_page12').prop('disabled',true).addClass('disabled');
						$('#f31_12').hide();
						$('#f31_13_02').val(999999);
						$('#f31_13_03_').val(999999);
						$('#btn_page13').removeClass('butt');
						$('#btn_page13').prop('disabled',true).addClass('disabled');
						$('#f31_13').hide();
			}
			
			if(value == 7){
				$('#f31_08_02').val(999999);
						$('#f31_08_03_').val(999999);
						$('#btn_page8').removeClass('butt');
						$('#btn_page8').prop('disabled',true).addClass('disabled');
						$('#f31_08').hide();
						$('#f31_09_02').val(999999);
						$('#f31_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f31_09').hide();
						$('#f31_10_02').val(999999);
						$('#f31_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f31_10').hide();
						$('#f31_11_02').val(999999);
						$('#f31_11_03_').val(999999);
						$('#btn_page11').removeClass('butt');
						$('#btn_page11').prop('disabled',true).addClass('disabled');
						$('#f31_11').hide();
						$('#f31_12_02').val(999999);
						$('#f31_12_03_').val(999999);
						$('#btn_page12').removeClass('butt');
						$('#btn_page12').prop('disabled',true).addClass('disabled');
						$('#f31_12').hide();
						$('#f31_13_02').val(999999);
						$('#f31_13_03_').val(999999);
						$('#btn_page13').removeClass('butt');
						$('#btn_page13').prop('disabled',true).addClass('disabled');
						$('#f31_13').hide();
						$('#f31_14_02').val(999999);
						$('#f31_14_03_').val(999999);
						$('#btn_page14').removeClass('butt');
						$('#btn_page14').prop('disabled',true).addClass('disabled');
						$('#f31_14').hide();
			}
			
			if(value == 8){
						$('#f31_08_02').val(999999);
						$('#f31_08_03_').val(999999);
						$('#btn_page8').removeClass('butt');
						$('#btn_page8').prop('disabled',true).addClass('disabled');
						$('#f31_08').hide();
						$('#f31_09_02').val(999999);
						$('#f31_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f31_09').hide();
						$('#f31_10_02').val(999999);
						$('#f31_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f31_10').hide();
						$('#f31_11_02').val(999999);
						$('#f31_11_03_').val(999999);
						$('#btn_page11').removeClass('butt');
						$('#btn_page11').prop('disabled',true).addClass('disabled');
						$('#f31_11').hide();
						$('#f31_12_02').val(999999);
						$('#f31_12_03_').val(999999);
						$('#btn_page12').removeClass('butt');
						$('#btn_page12').prop('disabled',true).addClass('disabled');
						$('#f31_12').hide();
						$('#f31_13_02').val(999999);
						$('#f31_13_03_').val(999999);
						$('#btn_page13').removeClass('butt');
						$('#btn_page13').prop('disabled',true).addClass('disabled');
						$('#f31_13').hide();
						$('#f31_14_02').val(999999);
						$('#f31_14_03_').val(999999);
						$('#btn_page14').removeClass('butt');
						$('#btn_page14').prop('disabled',true).addClass('disabled');
						$('#f31_14').hide();
						$('#f31_15_02').val(999999);
						$('#f31_15_03_').val(999999);
						$('#btn_page15').removeClass('butt');
						$('#btn_page15').prop('disabled',true).addClass('disabled');
						$('#f31_15').hide();
			}
			
			if(value == 9){
						$('#f31_08_02').val(999999);
						$('#f31_08_03_').val(999999);
						$('#btn_page8').removeClass('butt');
						$('#btn_page8').prop('disabled',true).addClass('disabled');
						$('#f31_08').hide();
						$('#f31_09_02').val(999999);
						$('#f31_09_03_').val(999999);
						$('#btn_page9').removeClass('butt');
						$('#btn_page9').prop('disabled',true).addClass('disabled');
						$('#f31_09').hide();
						$('#f31_10_02').val(999999);
						$('#f31_10_03_').val(999999);
						$('#btn_page10').removeClass('butt');
						$('#btn_page10').prop('disabled',true).addClass('disabled');
						$('#f31_10').hide();
						$('#f31_11_02').val(999999);
						$('#f31_11_03_').val(999999);
						$('#btn_page11').removeClass('butt');
						$('#btn_page11').prop('disabled',true).addClass('disabled');
						$('#f31_11').hide();
						$('#f31_12_02').val(999999);
						$('#f31_12_03_').val(999999);
						$('#btn_page12').removeClass('butt');
						$('#btn_page12').prop('disabled',true).addClass('disabled');
						$('#f31_12').hide();
						$('#f31_13_02').val(999999);
						$('#f31_13_03_').val(999999);
						$('#btn_page13').removeClass('butt');
						$('#btn_page13').prop('disabled',true).addClass('disabled');
						$('#f31_13').hide();
						$('#f31_14_02').val(999999);
						$('#f31_14_03_').val(999999);
						$('#btn_page14').removeClass('butt');
						$('#btn_page14').prop('disabled',true).addClass('disabled');
						$('#f31_14').hide();
						$('#f31_15_02').val(999999);
						$('#f31_15_03_').val(999999);
						$('#btn_page15').removeClass('butt');
						$('#btn_page15').prop('disabled',true).addClass('disabled');
						$('#f31_15').hide();
						$('#f31_16_02').val(999999);
						$('#f31_16_03_').val(999999);
						$('#btn_page16').removeClass('butt');
						$('#btn_page16').prop('disabled',true).addClass('disabled');
						$('#f31_16').hide();
						}
			if(value == ''){
						$('#f31_08_02').val('');
						$('#f31_08_03_').val('');
						$('#btn_page8').addClass('butt');
						$('#btn_page8').prop('disabled',false).removeClass('disabled');
						$('#f31_08').show();
						$('#f31_09_02').val('');
						$('#f31_09_03_').val('');
						$('#btn_page9').addClass('butt');
						$('#btn_page9').prop('disabled',false).removeClass('disabled');
						$('#f31_09').show();
						$('#f31_10_02').val('');
						$('#f31_10_03_').val('');
						$('#btn_page10').addClass('butt');
						$('#btn_page10').prop('disabled',false).removeClass('disabled');
						$('#f31_10').show();
						$('#f31_11_02').val('');
						$('#f31_11_03_').val('');
						$('#btn_page11').addClass('butt');
						$('#btn_page11').prop('disabled',false).removeClass('disabled');
						$('#f31_11').show();
						$('#f31_12_02').val('');
						$('#f31_12_03_').val('');
						$('#btn_page12').addClass('butt');
						$('#btn_page12').prop('disabled',false).removeClass('disabled');
						$('#f31_12').show();
						$('#f31_13_02').val('');
						$('#f31_13_03_').val('');
						$('#btn_page13').addClass('butt');
						$('#btn_page13').prop('disabled',false).removeClass('disabled');
						$('#f31_13').show();
						$('#f31_14_02').val('');
						$('#f31_14_03_').val('');
						$('#btn_page14').addClass('butt');
						$('#btn_page14').prop('disabled',false).removeClass('disabled');
						$('#f31_14').show();
						$('#f31_15_02').val('');
						$('#f31_15_03_').val('');
						$('#btn_page15').addClass('butt');
						$('#btn_page15').prop('disabled',false).removeClass('disabled');
						$('#f31_15').show();
						$('#f31_16_02').val('');
						$('#f31_16_03_').val('');
						$('#btn_page16').addClass('butt');
						$('#btn_page16').prop('disabled',false).removeClass('disabled');
						$('#f31_16').show();
						$('#f31_17_02').val('');
						$('#f31_17_03_').val('');
						$('#btn_page17').addClass('butt');
						$('#btn_page17').prop('disabled',false).removeClass('disabled');
						$('#f31_17').show();
						}
				
			
		}

	}); // end of text
	
	$('input[type="checkbox"]').change(function(){
		var varname 	= $(this).attr('id');
		var ischecked	= $(this).is(':checked') ? true : false;
	
		
		
	if(  varname == 'f31_31_02' || varname == 'f31_31_03' || varname == 'f31_31_04' || varname == 'f31_31_05' || varname == 'f31_31_06' || varname == 'f31_31_07' || varname == 'f31_31_08' || varname == 'f31_31_09' || varname == 'f31_31_10' || varname == 'f31_31_11'){

			if(  ischecked  ){
        $("#f31_33").each(function(){
					$(this).show();
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
						
						$('#btn_page33').addClass('butt').attr('disabled',false);
				});
			}else{
        $("#f31_33").each(function(){
					$(this).hide();
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				
						$('#btn_page33').removeClass('butt').attr('disabled',true);
				});
			}
		}	

	if(  varname == 'f31_32_02' || varname == 'f31_32_03' || varname == 'f31_32_04' || varname == 'f31_32_05' || varname == 'f31_32_06' || varname == 'f31_32_07' || varname == 'f31_32_08' || varname == 'f31_32_09' || varname == 'f31_32_10' || varname == 'f31_32_11'){
		
			if(  ischecked  ){
        $("#f31_34").each(function(){
					$(this).show();
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
						
						$('#btn_page34').addClass('butt').attr('disabled',false);
				});
			}else{
        $("#f31_34").each(function(){
					$(this).hide();
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
				
						$('#btn_page34').removeClass('butt').attr('disabled',true);
				});
			}
		}		
		
	});
	
	
	$("li.radio-choice").click(function(){
	

 	var id_details = chkbx_ID($(this));
 		varname = id_details[0];
 		value = id_details[1];
		
	if(varname == 'f31_62_06_'){
		
			if(!$(this).hasClass('active')){
				
						$('#chk_f31_63_01_0').prop('disabled',true).addClass('disabled');
						$('#chk_f31_63_01_1').prop('disabled',true).addClass('disabled');
						$('#f31_63_01_').val(999999);
						$('#btn_page63').removeClass('butt');
						$('#btn_page63').prop('disabled',true).addClass('disabled');
						$('#f31_63').hide();
				
			}else{
						$('#chk_f31_63_01_0').prop('disabled',false).removeClass('disabled');
						$('#chk_f31_63_01_1').prop('disabled',false).removeClass('disabled');
						$('#f31_63_01_').val('');
						$('#btn_page63').addClass('butt');
						$('#btn_page63').prop('disabled',false).removeClass('disabled');
						$('#f31_63').show();
			}
 	}
	
	if(varname == 'f31_65_06_'){
		
			if(!$(this).hasClass('active')){
				
						$('#chk_f31_66_01_0').prop('disabled',true).addClass('disabled');
						$('#chk_f31_66_01_1').prop('disabled',true).addClass('disabled');
						$('#f31_66_01_').val(999999);
						$('#btn_page66').removeClass('butt');
						$('#btn_page66').prop('disabled',true).addClass('disabled');
						$('#f31_66').hide();
				
			}else{
						$('#chk_f31_66_01_0').prop('disabled',false).removeClass('disabled');
						$('#chk_f31_66_01_1').prop('disabled',false).removeClass('disabled');
						$('#f31_66_01_').val('');
						$('#btn_page66').addClass('butt');
						$('#btn_page66').prop('disabled',false).removeClass('disabled');
						$('#f31_66').show();
			}
 	}
	
	// if(varname == 'f31_71_06_'){
		
			// if(!$(this).hasClass('active')){
				
						// $('#chk_f31_72_01_0').prop('disabled',true).addClass('disabled');
						// $('#chk_f31_72_01_1').prop('disabled',true).addClass('disabled');
						// $('#f31_72_01_').val(999999);
						// $('#btn_page72').removeClass('butt');
						// $('#btn_page72').prop('disabled',true).addClass('disabled');
						// $('#f31_72').hide();
				
			// }else{
						// $('#chk_f31_72_01_0').prop('disabled',false).removeClass('disabled');
						// $('#chk_f31_72_01_1').prop('disabled',false).removeClass('disabled');
						// $('#f31_72_01_').val('');
						// $('#btn_page72').addClass('butt');
						// $('#btn_page72').prop('disabled',false).removeClass('disabled');
						// $('#f31_72').show();
			// }
 	// }
	
	// if(varname == 'f31_59_01_'){
		
			// if(value == '0'){
				
						// $('#f31_59').append('<h2 class="bfeed">Sample Pictures : </h2><img src="/f31/Picture1.jpg" class="bfeed" height="350" width="350" /><img src="/f31/Picture2.jpg" class="bfeed" height="350" width="350" />');
				
			// }else{
						// $('.bfeed').remove();
			// }
 	// }

	});
	
}); // end of DOM