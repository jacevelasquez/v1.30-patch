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
 
 	$("li.radio-choice").click(function(){
	

 	var id_details = chkbx_ID($(this));
 		varname = id_details[0];
 		value = id_details[1];
	
	if(varname == 'f55_01_10_'){
	
			if(!$(this).hasClass('active')){
			
						$('#f55_02_27').val(999999);
						$('#f55_02_26').val(999999);
						$('#f55_02_24').val(999999);
						$('#f55_02_23').val(999999);
						$('#f55_02_21').val(999999);
						$('#f55_02_20').val(999999);
						$('#f55_02_18').val(999999);
						$('#f55_02_17').val(999999);
						$('#f55_02_15').val(999999);
						$('#f55_02_14').val(999999);
						$('#f55_02_12').val(999999);
						$('#f55_02_11').val(999999);
						$('#f55_02_09').val(999999);
						$('#f55_02_08').val(999999);
						$('#f55_02_06').val(999999);
						$('#f55_02_05').val(999999);
						$('#f55_02_03').val(999999);
						$('#f55_02_02').val(999999);
						
						$('#f55_03_10_').val(999999);
						$('#f55_03_09_').val(999999);
						$('#f55_03_08_').val(999999);
						$('#f55_03_07_').val(999999);
						$('#f55_03_06_').val(999999);
						$('#f55_03_05_').val(999999);
						$('#f55_03_04_').val(999999);
						$('#f55_03_03_').val(999999);
						$('#f55_03_02_').val(999999);
						$('#f55_03_01_').val(999999);
						
						$('#btn_page2').removeClass('butt');
						$('#btn_page2').prop('disabled',true).addClass('disabled');
						$('#f55_02').hide();
						$('#btn_page3').removeClass('butt');
						$('#btn_page3').prop('disabled',true).addClass('disabled');
						$('#f55_03').hide();
				
			}else{
						$('#f55_02_27').val('');
						$('#f55_02_26').val('');
						$('#f55_02_24').val('');
						$('#f55_02_23').val('');
						$('#f55_02_21').val('');
						$('#f55_02_20').val('');
						$('#f55_02_18').val('');
						$('#f55_02_17').val('');
						$('#f55_02_15').val('');
						$('#f55_02_14').val('');
						$('#f55_02_12').val('');
						$('#f55_02_11').val('');
						$('#f55_02_09').val('');
						$('#f55_02_08').val('');
						$('#f55_02_06').val('');
						$('#f55_02_05').val('');
						$('#f55_02_03').val('');
						$('#f55_02_02').val('');
						
						$('#f55_03_10_').val('');
						$('#f55_03_09_').val('');
						$('#f55_03_08_').val('');
						$('#f55_03_07_').val('');
						$('#f55_03_06_').val('');
						$('#f55_03_05_').val('');
						$('#f55_03_04_').val('');
						$('#f55_03_03_').val('');
						$('#f55_03_02_').val('');
						$('#f55_03_01_').val('');
						
						$('#btn_page2').addClass('butt');
						$('#btn_page2').prop('disabled',false).removeClass('disabled');
						$('#f55_02').show();
						$('#btn_page3').addClass('butt');
						$('#btn_page3').prop('disabled',false).removeClass('disabled');
						$('#f55_03').show();
						
			}
 	}

	});
 


});<!-- end of DOM-->