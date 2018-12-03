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
    
<!-- start of test-->


$('input[type="checkbox"]').change(function(){
		var varname 	= $(this).attr('id');
		var ischecked	= $(this).is(':checked') ? true : false;
	
		
	if(varname == 'f16_18_02'){
			if(  ischecked  ){
        $("#f16_19").each(function(){
					$(this).show();
					$('#chk_f16_19_02_0, #chk_f16_19_02_1').prop('disabled',false).removeClass('disabled');
						$('#btn_page19').addClass('butt').attr('disabled',false);

				});
			}else{
        $("#f16_19").each(function(){
					// $(this).hide();
					$('#chk_f16_19_02_0, #chk_f16_19_02_1').prop('disabled',true).addClass('disabled');
						// $('#btn_page19').removeClass('butt').attr('disabled',true);
						
				});
			}
		}
		
	if(varname == 'f16_18_03'){
			if(  ischecked  ){
        $("#f16_19").each(function(){
					$(this).show();
					$('#chk_f16_19_03_0, #chk_f16_19_03_1').prop('disabled',false).removeClass('disabled');
						$('#btn_page19').addClass('butt').attr('disabled',false);
				});
			}else{
        $("#f16_19").each(function(){
					// $(this).hide();
					$('#chk_f16_19_03_0, #chk_f16_19_03_1').prop('disabled',true).addClass('disabled');
						// $('#btn_page19').removeClass('butt').attr('disabled',true);
						
				});
			}
		}
		
	if(varname == 'f16_18_04'){
			if(  ischecked  ){
        $("#f16_19").each(function(){
					$(this).show();
					$('#chk_f16_19_04_0, #chk_f16_19_04_1').prop('disabled',false).removeClass('disabled');
						$('#btn_page19').addClass('butt').attr('disabled',false);
				});
			}else{
        $("#f16_19").each(function(){
					// $(this).hide();
					$('#chk_f16_19_04_0, #chk_f16_19_04_1').prop('disabled',true).addClass('disabled');
						// $('#btn_page19').removeClass('butt').attr('disabled',true);
						
				});
			}
		}
		
	if(varname == 'f16_18_05'){
			if(  ischecked  ){
        $("#f16_19").each(function(){
					$(this).show();
					$('#chk_f16_19_05_0, #chk_f16_19_05_1').prop('disabled',false).removeClass('disabled');
						$('#btn_page19').addClass('butt').attr('disabled',false);
				});
			}else{
        $("#f16_19").each(function(){
					// $(this).hide();
					$('#chk_f16_19_05_0, #chk_f16_19_05_1').prop('disabled',true).addClass('disabled');
						// $('#btn_page19').removeClass('butt').attr('disabled',true);
						
				});
			}
		}
		
	if(varname == 'f16_18_06'){
			if(  ischecked  ){
        $("#f16_19").each(function(){
					$(this).show();
					$('#chk_f16_19_06_0, #chk_f16_19_06_1').prop('disabled',false).removeClass('disabled');
						$('#btn_page19').addClass('butt').attr('disabled',false);
				});
			}else{
        $("#f16_19").each(function(){
					// $(this).hide();
					$('#chk_f16_19_06_0, #chk_f16_19_06_1').prop('disabled',true).addClass('disabled');
						// $('#btn_page19').removeClass('butt').attr('disabled',true);
						
				});
			}
		}
		
	if(varname == 'f16_18_07'){
			if(  ischecked  ){
        $("#f16_19").each(function(){
					$(this).show();
					$('#chk_f16_19_07_0, #chk_f16_19_07_1').prop('disabled',false).removeClass('disabled');
						$('#btn_page19').addClass('butt').attr('disabled',false);
				});
			}else{
        $("#f16_19").each(function(){
					// $(this).hide();
					$('#chk_f16_19_07_0, #chk_f16_19_07_1').prop('disabled',true).addClass('disabled');
						// $('#btn_page19').removeClass('butt').attr('disabled',true);
						
				});
			} 
		}
		
	if(varname == 'f16_18_08'){
			if(  ischecked  ){
        $("#f16_19").each(function(){
					$(this).show();
					$('#chk_f16_19_08_0, #chk_f16_19_08_1, #f16_19_08_OTH').prop('disabled',false).removeClass('disabled');
						$('#btn_page19').addClass('butt').attr('disabled',false);
				});
			}else{
        $("#f16_19").each(function(){
					// $(this).hide();
					$('#chk_f16_19_08_0, #chk_f16_19_08_1, #f16_19_08_OTH').prop('disabled',true).addClass('disabled');
						// $('#btn_page19').removeClass('butt').attr('disabled',true);
						
				});
			}
		}

			
		
	});



$("li.radio-choice").click(function(){
	
	

 	var id_details = chkbx_ID($(this));
 		varname = id_details[0];
 		value = id_details[1];

		
		if(varname=='f16_09_02_'){
 			if(value =='0'){
			$('#f16_09_02_').addClass('first');
 			}
 			else{
			$('#f16_09_02_').removeClass('first');
			}
		}
		
		if(varname=='f16_09_03_'){
 			if(value =='0'){
			$('#f16_09_03_').addClass('first');
 			}
 			else{
			$('#f16_09_03_').removeClass('first');
			}
		}
		
		if(varname=='f16_09_04_'){
 			if(value =='0'){
			$('#f16_09_04_').addClass('first');
 			}
 			else{
			$('#f16_09_04_').removeClass('first');
			}
		}
		
		if(varname=='f16_09_05_'){
 			if(value =='0'){
			$('#f16_09_05_').addClass('first');
 			}
 			else{
			$('#f16_09_05_').removeClass('first');
			}
		}
		
		if(varname=='f16_09_06_'){
 			if(value =='0'){
			$('#f16_09_06_').addClass('first');
 			}
 			else{
			$('#f16_09_06_').removeClass('first');
			}
		}
		
		if(varname=='f16_09_07_'){
 			if(value =='0'){
			$('#f16_09_07_').addClass('first');
 			}
 			else{
			$('#f16_09_07_').removeClass('first');
			}
		}
		
		if(varname=='f16_09_08_'){
 			if(value =='0'){
			$('#f16_09_08_').addClass('first');
 			}
 			else{
			$('#f16_09_08_').removeClass('first');
			}
		}
		
		//////////////////////////////////////////
		
		if(varname=='f16_10_02_'){
 			if(value =='0'){
			$('#f16_10_02_').addClass('first');
 			}
 			else{
			$('#f16_10_02_').removeClass('first');
			}
		}
		
		if(varname=='f16_10_03_'){
 			if(value =='0'){
			$('#f16_10_03_').addClass('first');
 			}
 			else{
			$('#f16_10_03_').removeClass('first');
			}
		}
		
		if(varname=='f16_10_04_'){
 			if(value =='0'){
			$('#f16_10_04_').addClass('first');
 			}
 			else{
			$('#f16_10_04_').removeClass('first');
			}
		}
		
		if(varname=='f16_10_05_'){
 			if(value =='0'){
			$('#f16_10_05_').addClass('first');
 			}
 			else{
			$('#f16_10_05_').removeClass('first');
			}
		}
		
		if(varname=='f16_10_04_'){
 			if(value =='0'){
			$('#f16_10_04_').addClass('first');
 			}
 			else{
			$('#f16_10_04_').removeClass('first');
			}
		}

		if(varname=='f16_10_07_'){
 			if(value =='0'){
			$('#f16_10_07_').addClass('first');
 			}
 			else{
			$('#f16_10_07_').removeClass('first');
			}
		}
		
		//////////////////////////////////////////
		
		
		
		
		
		/////////////////////////////////////////
		
		

		
		if(varname=='f16_19_02_'){
 			if(value =='0'){
			$("#f16_20").each(function(){
					$('#f16_20_02').prop('disabled',false).removeClass('disabled');
					$('#f16_20_02').val('');
					$('#btn_page20').addClass('butt').attr('disabled',false);
					$(this).show();
				});
 			}
 			else{
			$("#f16_20").each(function(){
					$('#f16_20_02').prop('disabled',true).addClass('disabled');
					$('#f16_20_02').val(999999);	
				});
			}
		}
		
		if(varname=='f16_19_03_'){
 			if(value =='0'){
			$("#f16_20").each(function(){
				
					$('#f16_20_03').prop('disabled',false).removeClass('disabled');
					$('#f16_20_03').val('');
					$('#btn_page20').addClass('butt').attr('disabled',false);
					$(this).show();
				});
 			}
 			else{
			$("#f16_20").each(function(){
					$('#f16_20_03').prop('disabled',true).addClass('disabled');
					$('#f16_20_03').val(999999);	
				});
			}
		}
		
		if(varname=='f16_19_04_'){
 			if(value =='0'){
			$("#f16_20").each(function(){
					$('#f16_20_04').prop('disabled',false).removeClass('disabled');
					$('#f16_20_04').val('');
					$('#btn_page20').addClass('butt').attr('disabled',false);
					$(this).show();
				});
 			}	
 			else{
			$("#f16_20").each(function(){
					$('#f16_20_04').prop('disabled',true).addClass('disabled');
					$('#f16_20_04').val(999999);	
				});
			}
		}
		
		if(varname=='f16_19_05_'){
 			if(value =='0'){
			$("#f16_20").each(function(){
					$('#f16_20_05').prop('disabled',false).removeClass('disabled');
					$('#f16_20_05').val('');
					$('#btn_page20').addClass('butt').attr('disabled',false);
					$(this).show();
				});
 			}
 			else{
			$("#f16_20").each(function(){
					$('#f16_20_05').prop('disabled',true).addClass('disabled');
					$('#f16_20_05').val(999999);	
				});
			}
		}
		
		if(varname=='f16_19_06_'){
 			if(value =='0'){
			$("#f16_20").each(function(){
					$('#btn_page20').addClass('butt').attr('disabled',false);
					$(this).show();
					$('#f16_20_06').prop('disabled',false).removeClass('disabled');
					$('#f16_20_06').val('');
				});
 			}
 			else{
			$("#f16_20").each(function(){
					$('#f16_20_06').prop('disabled',true).addClass('disabled');
					$('#f16_20_06').val(999999);	
				});
			}
		}
		
		if(varname=='f16_19_07_'){
 			if(value =='0'){
			$("#f16_20").each(function(){
					$('#btn_page20').addClass('butt').attr('disabled',false);
					$(this).show();
					$('#f16_20_07').prop('disabled',false).removeClass('disabled');
					$('#f16_20_07').val('');
				});
 			}
 			else{
			$("#f16_20").each(function(){
					$('#f16_20_07').prop('disabled',true).addClass('disabled');
					$('#f16_20_07').val(999999);	
				});
			}
		}
		
		if(varname=='f16_19_08_'){
 			if(value =='0'){
			$("#f16_20").each(function(){
					$('#btn_page20').addClass('butt').attr('disabled',false);
					$(this).show();
					$('#f16_20_08').prop('disabled',false).removeClass('disabled');
					$('#f16_20_08').val('');
				});
 			}
 			else{
			$("#f16_20").each(function(){
					$('#f16_20_08').prop('disabled',true).addClass('disabled');
					$('#f16_20_08').val(999999);	
				});
			}
		}
		
});<!-- end of DOM-->


});