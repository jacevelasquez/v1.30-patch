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
	
	
	$('input[type="checkbox"]').change(function(){
		var varname 	= $(this).attr('id');
		var ischecked	= $(this).is(':checked') ? true : false;
	
		
		
	if(  varname == 'f53_06_02' ||  varname == 'f53_06_03' ||  varname == 'f53_06_04'){
		
			if(  !ischecked  ){
        $("#f53_11, #f53_12, #f53_13, #f53_14, #f53_15, #f53_16, #f53_17").each(function(){
					$(this).show();
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					
						$('#btn_page11, #btn_page12, #btn_page13, #btn_page14, #btn_page15, #btn_page16, #btn_page17').addClass('butt').attr('disabled',false);
				});
			}else{
        $("#f53_11, #f53_12, #f53_13, #f53_14, #f53_15, #f53_16, #f53_17").each(function(){
					$(this).hide();
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					
						$('#btn_page11, #btn_page12, #btn_page13, #btn_page14, #btn_page15, #btn_page16, #btn_page17').removeClass('butt').attr('disabled',true);
				});
			}
		}	

		
		
	});

	
}); // end of DOM