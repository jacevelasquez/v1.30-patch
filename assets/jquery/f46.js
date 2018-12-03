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
	
		
		
	if(  varname == 'f46_03_04' ){
		
			if(   $('#f46_03_04_').val() == 1   ){
        $("#f46_04").each(function(){
					$(this).hide();
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
						find_input(this,$('#f46_04_01_').val());
						$('#btn_page4').removeClass('butt').attr('disabled',true);
				});
			}
			if(  $('#f46_03_04_').val() == 0  ){
				
        $("#f46_04").each(function(){
					$(this).show();
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,$('#f46_04_01_').val());
						$('#btn_page4').addClass('butt').attr('disabled',false);
				});
			}
		
		}		
		
	});

	
}); // end of DOM