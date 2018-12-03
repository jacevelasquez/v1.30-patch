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
		
 		if($('#f31_08_02').val() > 0 && $('#f31_09_02').val() > 0 && $('#f31_10_02').val() > 0 && $('#f31_11_02').val() > 0){
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

	}); // end of text
	
	$('input[type="checkbox"]').change(function(){
		var varname 	= $(this).attr('id');
		var ischecked	= $(this).is(':checked') ? true : false;
	
	// if( varname == 'f31_14_02' ){
		// if(  !ischecked  ){
        // $('#f31_15_01').each(function(){
          // $(this).prop('disabled', false).removeClass('disabled');
        // });
        // $('#f31_15_01').val('');
        // $('#f31_15_01').val('');
			// }else{
        // $('#f31_15_01').each(function(){
          // $(this).prop('disabled', true).addClass('disabled');
        // });
        // $('#f31_15_01').val('999999');
        // $('#f31_15_01').val('999999');        
			// }
		// }	
		
		
	if( varname == 'f31_14_02' || varname == 'f31_14_03' || varname == 'f31_14_03' || varname == 'f31_14_03' || varname == 'f31_14_03' || varname == 'f31_14_03' || varname == 'f31_14_08' || varname == 'f31_14_09' || varname == 'f31_14_10'){
		
			if(  !ischecked  ){
        $('#f31_15_01, #f31_16_01').each(function(){
          $(this).prop('disabled', false).removeClass('disabled');
        });
        $('#f31_15_01, #f31_16_01').val('');
        $('#f31_15_01, #f31_16_01').val('');	
				$("#f31_15, #f31_16").each(function(){
					find_input(this, '0')
					$(this).attr('disabled',false);
					$(this).find('li, input[type!=hidden]').attr('disabled',false).removeClass('disabled');
					$('#btn_page15, #btn_page16').addClass('butt');
					$('#f31_15, #f31_16').show();
					$('#btn_page15, #btn_page16').attr('disabled',false);
					
				});
			}else{
        $('#f31_15_01, #f31_16_01').each(function(){
          $(this).prop('disabled', true).addClass('disabled');
        });
        $('#f31_15_01, #f31_16_01').val('999999');
        $('#f31_15_01, #f31_16_01').val('999999');        
				$("#f31_15, #f31_16").each(function(){
					find_input(this, 999999)
					$(this).attr('disabled',true);
					$(this).find('li, input[type!=hidden]').attr('disabled',true).addClass('disabled');
					$('#btn_page15, #btn_page16').removeClass('butt');
					$('#f31_15, #f31_16').hide();
					$('#btn_page15, #btn_page16').attr('disabled',true);
				});
			}
		}		
		
	});

	
}); // end of DOM