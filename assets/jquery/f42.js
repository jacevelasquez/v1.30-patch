
$(document).ready(function (){


$('#EXCBF_MONTHS').attr('placeholder', 'Specify if value is in Days/Weeks/Months');
$('#PRED_LIQ_OTH').attr('placeholder', 'Specify fruit juice/Other liquids given.');
$('#COM_FIRST_OTH').attr('placeholder', 'Specify Mashed vegetable, Fruit, Commercial and other baby food.');

$('.btn-save').click(function(){
	$(this).closest('form').find('input').prop('disabled', false);
});

	$("input:checkbox").click(function(e){
			if( $(this).hasClass('disabled') )
			{
				e.preventDefault();
			}
   	});

function reset() {
	$("#f42_01, #f42_02, #f42_03, #f42_04, #f42_05, #f42_06, #f42_07, #f42_08, #f42_09, #f42_10, #f42_11, #f42_12, #f42_13, #f42_14, #f42_15, #f42_16, #f42_17, #f42_18, #f42_19, #f42_20, #f42_21").each(function(){
		$(this).find('li, input').prop('disabled',false).removeClass('disabled');		
		$(this).find('li').removeClass('active');		
		$(this).find('input').val('');		
	});
}

//					console.log( '1. ' + '#' + $(this).find('input').attr('id') + ', ' );

<!-- start of test-->
$("li.radio-choice").click(function(){

 	var id_details = chkbx_ID($(this));
 		varname = id_details[0];
 		value = id_details[1];

 		if(varname=='CF_CODE_'){

			reset();
 			switch(value){
 				case '1':
					$("#f42_01, #f42_12, #f42_13, #f42_16, #f42_17, #f42_18, #f42_19, #f42_20, #f42_21").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#EVER_BF_, #EXCBFEED_, #EXCBF_MONTHS, #COM_AGE, #BMILKSUB_, #BMILKSUB_OTH, #OTHERMILK_AGE, #RICE_MILKFEEDS_, #COM_FIRST_, #COM_FIRST_OTH, #START_AGE').val('999999')
 				break;

 				case '2':
					$("#f42_01, #f42_16, #f42_17, #f42_18, #f42_19, #f42_20, #f42_21").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#EVER_BF_, #COM_AGE, #BMILKSUB_, #BMILKSUB_OTH, #OTHERMILK_AGE, #RICE_MILKFEEDS_,#COM_FIRST_,  #COM_FIRST_OTH, #START_AGE').val('999999');
 				break;

 				case '3':
					$("#f42_01, #f42_16, #f42_17, #f42_18, #f42_19").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#EVER_BF_, #COM_AGE, #BMILKSUB_, #BMILKSUB_OTH, #OTHERMILK_AGE, #RICE_MILKFEEDS_').val('999999');
 				break;

 				case '4':
					$("#f42_01, #f42_16, #f42_20, #f42_21").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#EVER_BF_, #COM_AGE,#COM_FIRST_,  #COM_FIRST_OTH, #START_AGE').val('999999')
 				break;

 				case '5':
					var disabled_var = ['f42_01',  'f42_16'];
					$("#f42_01, #f42_16").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#EVER_BF_, #COM_AGE').val('999999');
 				break;

 				case '6':
					var disabled_var = ['f42_20',  'f42_21'];
					$("#f42_20, #f42_21").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#COM_FIRST_, #COM_FIRST_OTH, #START_AGE').val('999999');
 				break;

 				case '8':
					var disabled_var = ['f42_17',  'f42_18',  'f42_19'];
					$("#f42_17, #f42_18, #f42_19").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#BMILKSUB_, #BMILKSUB_OTH, #OTHERMILK_AGE, #RICE_MILKFEEDS_').val('999999');
 				break;

 				default:
 				break;

 			}
 		}

 		/**
 		*	Question 2c
 		*/
 		if(varname=='CH_BALIVE_'){

 			if( value =='0' || value =='8' ){
 				//disable answer list
				$("#f42_05, #f42_06, #f42_07").each(function(){
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//set variable value
				$("#C_BDATE, #FIRSTBF2_, #FIRSTBF3_").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f42_05, #f42_06, #f42_07").each(function(){
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//clear variable value
				$("#C_BDATE, #FIRSTBF2_, #FIRSTBF3_").val('');
 			}
 		}

 		/**
 		*	Question 3a
 		*/
 		if(varname=='PRELACTEAL_'){

 			if( value =='0' || value =='8' ){
				$("#f42_09, #f42_10, #f42_11").each(function(){
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
				$('#PRE_FOOD1, #PRE_FOOD2, #PRE_FOOD3, #PRE_FOOD4, #PRE_FOOD5, #PRE_FOOD6, #PRE_FOOD7, #PRE_FOOD8, #PRE_FOOD9, #PRE_FOOD10, #PRE_FOOD11, #PRELAC_INFL_,  #PRELAC_INFL_OTH, #PRLACT1, #PRLACT2, #PRLACT3, #PRLACT4, #PRLACT5').val('999999');

				if(  $('#CF_CODE_').val() == 1 ) {
					$("#f42_12, #f42_13").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});					
				$('#EXCBFEED_, #EXCBF_MONTHS').val('999999');
				}

				if(  $('#CF_CODE_').val() == 6 && $('#EVER_BF_').val() != 1 ) {
					$("#f42_09, #f42_10, #f42_11, #f42_12, #f42_13, #f42_14, #f42_15, #f42_16").each(function(){
						//$(this).find('input[type!=hidden]').prop('disabled',true);
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});					
					$('#PRE_FOOD1, #PRE_FOOD2, #PRE_FOOD3, #PRE_FOOD4, #PRE_FOOD5, #PRE_FOOD6, #PRE_FOOD7, #PRE_FOOD8, #PRE_FOOD9, #PRE_FOOD10, #PRE_FOOD11, #PRELAC_INFL_, #PRELAC_INFL_OTH, #PRLACT1, #PRLACT2, #PRLACT3, #PRLACT4, #PRLACT5, #EXCBFEED_, #EXCBF_MONTHS, #PRED_LIQ_OTH, #PRED_AGE, #COM_AGE').val('999999');
				}

				if(  $('#CF_CODE_').val() == 7 && $('#EVER_BF_').val() != 1 ) {
					$("#f42_09, #f42_10, #f42_11, #f42_12, #f42_13, #f42_14, #f42_15, #f42_16").each(function(){
						//$(this).find('input[type!=hidden]').prop('disabled',true);
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});					
					$('#PRE_FOOD1, #PRE_FOOD2, #PRE_FOOD3, #PRE_FOOD4, #PRE_FOOD5, #PRE_FOOD6, #PRE_FOOD7, #PRE_FOOD8, #PRE_FOOD9, #PRE_FOOD10, #PRE_FOOD11, #PRELAC_INFL_, #PRELAC_INFL_OTH, #PRLACT1, #PRLACT2, #PRLACT3, #PRLACT4, #PRLACT5, #EXCBFEED_, #EXCBF_MONTHS, #PRED_LIQ_OTH, #PRED_AGE, #COM_AGE').val('999999');
				}
				
				if(  $('#CF_CODE_').val() == 8 && $('#EVER_BF_').val() != 1 ) {
					$("#f42_09, #f42_10, #f42_11, #f42_12, #f42_13, #f42_14, #f42_15, #f42_16").each(function(){
						//$(this).find('input[type!=hidden]').prop('disabled',true);
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});					
					$('#PRE_FOOD1, #PRE_FOOD2, #PRE_FOOD3, #PRE_FOOD4, #PRE_FOOD5, #PRE_FOOD6, #PRE_FOOD7, #PRE_FOOD8, #PRE_FOOD9, #PRE_FOOD10, #PRE_FOOD11, #PRELAC_INFL_, #PRELAC_INFL_OTH, #PRLACT1, #PRLACT2, #PRLACT3, #PRLACT4, #PRLACT5, #EXCBFEED_, #EXCBF_MONTHS, #PRED_LIQ_OTH, #PRED_AGE, #COM_AGE').val('999999');
				}


 			}else{
				$("#f42_09, #f42_10, #f42_11").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
				$('#PRE_FOOD1, #PRE_FOOD2, #PRE_FOOD3, #PRE_FOOD4, #PRE_FOOD5, #PRE_FOOD6, #PRE_FOOD7, #PRE_FOOD8, #PRE_FOOD9, #PRE_FOOD10, #PRE_FOOD11, #PRELAC_INFL_, #PRELAC_INFL_OTH, #PRLACT1, #PRLACT2, #PRLACT3, #PRLACT4, #PRLACT5').val('');

				if(  $('#CF_CODE_').val() != 1) {
					$("#f42_12, #f42_13").each(function(){
						//$(this).find('input[type!=hidden]').prop('disabled',true);
						$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
					});		
					$('#EXCBFEED_, #EXCBF_MONTHS').val('');
				}

				if(  $('#CF_CODE_').val() == 6 && $('#EVER_BF_').val() != 1 ) {
					$("#f42_12, #f42_13, #f42_14, #f42_15, #f42_16").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});	
					$('#EXCBFEED_, #EXCBF_MONTHS, #PRED_LIQ_OTH, #PRED_AGE, #COM_AGE').val('999999');
				}
				if(  $('#CF_CODE_').val() == 7 && $('#EVER_BF_').val() != 1 ) {
					$("#f42_12, #f42_13, #f42_14, #f42_15, #f42_16").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});	
					$('#EXCBFEED_, #EXCBF_MONTHS, #PRED_LIQ_OTH, #PRED_AGE, #COM_AGE').val('999999');
				}

 			}

 		}

 		/**
 		*	Question 4a
 		*/
 		if(varname=='EXCBFEED_'){
 			if( value =='0' || value =='8' ){
				$("#f42_13").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
				$('#EXCBF_MONTHS').val('999999')

 			}else{
				$("#f42_13").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
				$('#EXCBF_MONTHS').val('')
 			}
 		}


 		/**
 		*	Question 5a
 		*/
 		if(varname=='PRED_LIQ_'){

 			if( value =='0'){
 				//disable answer list
				if(  $('#CF_CODE_').val() == 1) {
					$("#f42_15, #f42_16, #f42_17, #f42_18, #f42_19, #f42_20, #f42_21 ").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#PRED_AGE, #COM_AGE, #BMILKSUB_, #BMILKSUB_OTH, #OTHERMILK_AGE, #RICE_MILKFEEDS_,#COM_FIRST_,  #COM_FIRST_OTH, #START_AGE').val('999999');
				}

				if(  $('#CF_CODE_').val() == 2) {
					$("#f42_15, #f42_16, #f42_17, #f42_18, #f42_19, #f42_20, #f42_21 ").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#PRED_AGE, #COM_AGE, #BMILKSUB_, #BMILKSUB_OTH, #OTHERMILK_AGE, #RICE_MILKFEEDS_, #COM_FIRST_, #COM_FIRST_OTH, #START_AGE').val('999999');
				}		

				if(  $('#CF_CODE_').val() == 3) {
					$("#f42_15, #f42_16, #f42_17, #f42_18, #f42_19").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#PRED_AGE, #COM_AGE, #BMILKSUB_, #BMILKSUB_OTH, #OTHERMILK_AGE, #RICE_MILKFEEDS_').val('999999');
				}		

				if(  $('#CF_CODE_').val() == 4) {
					$("#f42_15, #f42_16").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#PRED_AGE, #COM_AGE').val('999999');
				}		

				if(  $('#CF_CODE_').val() == 5) {
					$("#f42_15").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#PRED_AGE').val('999999');
				}		

				if(  $('#CF_CODE_').val() == 6) {
					$("#f42_15").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#PRED_AGE').val('999999');
				}		

				if(  $('#CF_CODE_').val() == 7) {
					$("#f42_15").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#PRED_AGE').val('999999');
				}
				if(  $('#CF_CODE_').val() == 8) {
					$("#f42_15").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					});
					$('#PRED_AGE').val('999999');
				}
 			}
 			else{
 				//enable answer list
				if(  $('#CF_CODE_').val() == 1) {
					$("#f42_15").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
					});
					$('#PRED_AGE').val('');

				}
				if(  $('#CF_CODE_').val() == 2) {
					$("#f42_15").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
					});
					$('#PRED_AGE').val('');
				}
				if(  $('#CF_CODE_').val() == 3) {
					$("#f42_15").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
					});
					$('#PRED_AGE').val('');
				}
				if(  $('#CF_CODE_').val() == 4) {
					$("#f42_15").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
						console.log( '4. ' + '#' + $(this).find('input').attr('id') + ', ' );
					});
				}
				if(  $('#CF_CODE_').val() == 5) {
					$("#f42_15").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
					});
					$('#PRED_AGE').val('');
				}
				if(  $('#CF_CODE_').val() == 6) {
					$("#f42_15").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
					});
					$('#PRED_AGE').val('');
				}
				if(  $('#CF_CODE_').val() == 7) {
					$("#f42_15").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
					});
					$('#PRED_AGE').val('');
				}
				if(  $('#CF_CODE_').val() == 8) {
					$("#f42_15").each(function(){
						$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
					});
					$('#PRED_AGE').val('');
				}
 			}
 		}
});
 <!-- end of test-->
	
	/**
	*	Skipping for text input
	*/
	$('input[type="text"]').change(function(){
		varname = $(this).attr('id');
 		value = $(this).val();
 		if(varname == 'OTHERMILK_AGE'){
			if( isNaN( value ) ){
				$(this).val('').focus();
			}
 		}
 		if(varname == 'COM_AGE'){
			if( isNaN( value ) ){
				$(this).val('').focus();
			}
 		}

 		if(varname == 'PRED_AGE'){
			if( isNaN( value ) ){
				$(this).val('').focus();
			}
 		}
 		
 		if(varname == 'START_AGE'){
			if( isNaN( value ) ){
				$(this).val('').focus();
			}
 		} 		
 		
	}); // end of text

});<!-- end of DOM-->