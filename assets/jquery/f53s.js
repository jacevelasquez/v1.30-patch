function find_input(key, myval){
	$(key).find('input[type!="checkbox"]').each(function(){
//		console.log($(this).attr('id'));
		$(this).val( myval );
	});
}

$(document).ready(function (){
	
	

$('form').submit(function(){
  $('input:disabled').prop('disabled',false)
});

	$("input:checkbox").click(function(e){
			if( $(this).hasClass('disabled') )
			{
				e.preventDefault();
			}
   	});

  


	/**
	*	Skipping for checkbox inputs
	*/
	$('input[type="checkbox"]').change(function(){
		var varname 	= $(this).attr('id');
		var ischecked	= $(this).is(':checked') ? true : false;
		if( varname == 'f53_06_01' ){
			if(  ischecked  ){
        $('#f53_07_02, #chk_f53_07_03_1, #chk_f53_07_03_2').each(function(){
          $(this).prop('disabled', false).removeClass('disabled');
        });
        $('#f53_07_02').val('');
        $('#f53_07_03_').val('');
				$("#f53_07, #f53_08, #f53_09, #f53_10, #f53_11, #f53_12, #f53_13, #f53_14, #f53_15, #f53_16, #f53_17, #f53_18, #f53_19, #f53_20, #f53_21, #f53_22, #f53_23, #f53_24, #f53_25, #f53_26, #f53_27, #f53_28, #f53_29, #f53_30").each(function(){
					find_input(this, '')
					$(this).show();
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
					$('#btn_page7, #btn_page8, #btn_page9, #btn_page10, #btn_page11, #btn_page12, #btn_page13, #btn_page14, #btn_page15, #btn_page16, #btn_page17, #btn_page18, #btn_page19, #btn_page20, #btn_page21, #btn_page22, #btn_page23, #btn_page24, #btn_page25, #btn_page26, #btn_page27, #btn_page28, #btn_page29, #btn_page30').addClass('butt').attr('disabled',false);
					
				});
			}else{
        $('#f53_07_02, #chk_f53_07_03_1, #chk_f53_07_03_2').each(function(){
          $(this).prop('disabled', true).addClass('disabled');
        });
        $('#f53_07_02').val('999999');
        $('#f53_07_03_').val('999999');        
				$("#f53_07, #f53_08, #f53_09, #f53_10, #f53_11, #f53_12, #f53_13, #f53_14, #f53_15, #f53_16, #f53_17, #f53_18, #f53_19, #f53_20, #f53_21, #f53_22, #f53_23, #f53_24, #f53_25, #f53_26, #f53_27, #f53_28, #f53_29, #f53_30").each(function(){
					find_input(this, 999999)
					$(this).hide();
					$(this).attr('disabled',true);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
					$('#btn_page7, #btn_page8, #btn_page9, #btn_page10, #btn_page11, #btn_page12, #btn_page13, #btn_page14, #btn_page15, #btn_page16, #btn_page17, #btn_page18, #btn_page19, #btn_page20, #btn_page21, #btn_page22, #btn_page23, #btn_page24, #btn_page25, #btn_page26, #btn_page27, #btn_page28, #btn_page29, #btn_page30').removeClass('butt').attr('disabled',true);
				});
			}
		}

    /**
    * hand roll smoke
    */
		if( varname == 'f53_06_02' ){
			if(  ischecked  ){
        $('#f53_07_05, #chk_f53_07_06_1, #chk_f53_07_06_2').each(function(){
          $(this).prop('disabled', false).removeClass('disabled');
        });
        $('#f53_07_05').val('');
        $('#f53_07_06_').val('');
			}else{
        $('#f53_07_05, #chk_f53_07_06_1, #chk_f53_07_06_2').each(function(){
          $(this).prop('disabled', true).addClass('disabled');
        });
        $('#f53_07_05').val('999999');
        $('#f53_07_06_').val('999999');        
			}
		}

    /**
    * Pipes full of tobacco
    */
		if( varname == 'f53_06_03' ){
			if(  ischecked  ){
        $('#f53_07_08, #chk_f53_07_09_1, #chk_f53_07_09_2').each(function(){
          $(this).prop('disabled', false).removeClass('disabled');
        });
        $('#f53_07_08').val('');
        $('#f53_07_09_').val('');
			}else{
        $('#f53_07_08, #chk_f53_07_09_1, #chk_f53_07_09_2').each(function(){
          $(this).prop('disabled', true).addClass('disabled');
        });
        $('#f53_07_08').val('999999');
        $('#f53_07_09_').val('999999');        
			}
		}

    /**
    * Cigars, cheroots, cigarillos
    */
		if( varname == 'f53_06_04' ){
			if(  ischecked  ){
        $('#f53_07_11, #chk_f53_07_12_1, #chk_f53_07_12_2').each(function(){
          $(this).prop('disabled', false).removeClass('disabled');
        });
        $('#f53_07_11').val('');
        $('#f53_07_12_').val('');
			}else{
        $('#f53_07_11, #chk_f53_07_12_1, #chk_f53_07_12_2').each(function(){
          $(this).prop('disabled', true).addClass('disabled');
        });
        $('#f53_07_11').val('999999');
        $('#f53_07_12_').val('999999');        
			}
		}

    /**
    * E-cigarette (w/nicotine solution)
    */
		if( varname == 'f53_06_05' ){
			if(  ischecked  ){
        $('#f53_07_14, #chk_f53_07_15_1, #chk_f53_07_15_2').each(function(){
          $(this).prop('disabled', false).removeClass('disabled');
        });
        $('#f53_07_14').val('');
        $('#f53_07_15_').val('');
			}else{
        $('#f53_07_14, #chk_f53_07_15_1, #chk_f53_07_15_2').each(function(){
          $(this).prop('disabled', true).addClass('disabled');
        });
        $('#f53_07_14').val('999999');
        $('#f53_07_15_').val('999999');        
			}
		}
    
    /**
    * E-cigarette (solution w/o nicotine)
    */
		if( varname == 'f53_06_06' ){
			if(  ischecked  ){
        $('#f53_07_17, #chk_f53_07_18_1, #chk_f53_07_18_2').each(function(){
          $(this).prop('disabled', false).removeClass('disabled');
        });
        $('#f53_07_17').val('');
        $('#f53_07_18_').val('');
			}else{
        $('#f53_07_17, #chk_f53_07_18_1, #chk_f53_07_18_2').each(function(){
          $(this).prop('disabled', true).addClass('disabled');
        });
        $('#f53_07_17').val('999999');
        $('#f53_07_18_').val('999999');        
			}
		}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   /**
    * Snuff, by mouth (paghigop ng apog o dinikdik na ikmo o tabako)
    */
		if( varname == 'f53_34_01' ){
			if(  ischecked  ){
        $('#f53_35_02, #chk_f53_35_03_1, #chk_f53_35_03_2').each(function(){
          $(this).prop('disabled', false).removeClass('disabled');
        });
        $('#f53_35_02').val('');
        $('#f53_35_03_').val('');
			}else{
        $('#f53_35_02, #chk_f53_35_03_1, #chk_f53_35_03_2').each(function(){
          $(this).prop('disabled', true).addClass('disabled');
        });
        $('#f53_35_02').val('999999');
        $('#f53_35_03_').val('999999');        
			}
		}

    /**
    * Snuff, by nose (pagsinghot ng apog o dinikdik na ikmo o tabako)
    */
		if( varname == 'f53_34_02' ){
			if(  ischecked  ){
        $('#f53_35_05, #chk_f53_35_06_1, #chk_f53_35_06_2').each(function(){
          $(this).prop('disabled', false).removeClass('disabled');
        });
        $('#f53_35_05').val('');
        $('#f53_35_06_').val('');
			}else{
        $('#f53_35_05, #chk_f53_35_06_1, #chk_f53_35_06_2').each(function(){
          $(this).prop('disabled', true).addClass('disabled');
        });
        $('#f53_35_05').val('999999');
        $('#f53_35_06_').val('999999');        
			}
		}

    /**
    * Chewing tobacco (nginunguyang tabako)
    */
		if( varname == 'f53_34_03' ){
			if(  ischecked  ){
        $('#f53_35_08, #chk_f53_35_09_1, #chk_f53_35_09_2').each(function(){
          $(this).prop('disabled', false).removeClass('disabled');
        });
        $('#f53_35_08').val('');
        $('#f53_35_09_').val('');
			}else{
        $('#f53_35_08, #chk_f53_35_09_1, #chk_f53_35_09_2').each(function(){
          $(this).prop('disabled', true).addClass('disabled');
        });
        $('#f53_35_08').val('999999');
        $('#f53_35_09_').val('999999');        
			}
		}

    /**
    * Betel, quid, buwa at apog na binalot sa ikmo/nganga
    */
		if( varname == 'f53_34_04' ){
			if(  ischecked  ){
        $('#f53_35_11, #chk_f53_35_12_1, #chk_f53_35_12_2').each(function(){
          $(this).prop('disabled', false).removeClass('disabled');
        });
        $('#f53_35_11').val('');
        $('#f53_35_12_').val('');
			}else{
        $('#f53_35_11, #chk_f53_35_12_1, #chk_f53_35_12_2').each(function(){
          $(this).prop('disabled', true).addClass('disabled');
        });
        $('#f53_35_11').val('999999');
        $('#f53_35_12_').val('999999');        
			}
		} 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
    * Workplace
    */
    if( varname == 'SHS_CA_TYPE1' ){
      if( ischecked ){
        $('#SHS_CA_DAYS1').prop('disabled', false).removeClass('disabled');
        $('#SHS_CA_DAYS1').val('');
      }else{
        $('#SHS_CA_DAYS1').prop('disabled', true).addClass('disabled');
        $('#SHS_CA_DAYS1').val('999999');
      }
    }

    /**
    * Eating Place (ex. Restaurant, Carinderia)
    */
    if( varname == 'SHS_CA_TYPE2' ){
      if( ischecked ){
        $('#SHS_CA_DAYS2').prop('disabled', false).removeClass('disabled');
        $('#SHS_CA_DAYS2').val('');
      }else{
        $('#SHS_CA_DAYS2').prop('disabled', true).addClass('disabled');
        $('#SHS_CA_DAYS2').val('999999');
      }
    }

    /**
    * Neighborhood
    */
    if( varname == 'SHS_CA_TYPE3' ){
      if( ischecked ){
        $('#SHS_CA_DAYS3').prop('disabled', false).removeClass('disabled');
        $('#SHS_CA_DAYS3').val('');
      }else{
        $('#SHS_CA_DAYS3').prop('disabled', true).addClass('disabled');
        $('#SHS_CA_DAYS3').val('999999');
      }
    }    

    /**
    * Transport Terminal/Vehicle
    */
    if( varname == 'SHS_CA_TYPE4' ){
      if( ischecked ){
        $('#SHS_CA_DAYS4').prop('disabled', false).removeClass('disabled');
        $('#SHS_CA_DAYS4').val('');
      }else{
        $('#SHS_CA_DAYS4').prop('disabled', true).addClass('disabled');
        $('#SHS_CA_DAYS4').val('999999');
      }
    } 
    /**
    * School
    */
    if( varname == 'SHS_CA_TYPE5' ){
      if( ischecked ){
        $('#SHS_CA_DAYS5').prop('disabled', false).removeClass('disabled');
        $('#SHS_CA_DAYS5').val('');
      }else{
        $('#SHS_CA_DAYS5').prop('disabled', true).addClass('disabled');
        $('#SHS_CA_DAYS5').val('999999');
      }
    } 

	});
	//end of checkbox
});
