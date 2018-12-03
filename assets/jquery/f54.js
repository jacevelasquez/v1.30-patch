function find_input(key, myval){
	$(key).find('input[type!="checkbox"]').each(function(){
		console.log($(this).attr('id'));
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


/*if ( $('#RES_NAME').val() == '' ){
		$("#f53_06, #f53_07, #f53_08, #f53_09, #f53_10, #f53_11, #f53_12, #f53_13, #f53_14, #f53_15, #f53_16, #f53_17, #f53_18, #f53_19, #f53_20, #f53_21, #f53_22, #f53_23, #f53_24").each(function(){
  		  find_input(this, 999999)
  			$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
		});
} */

//console.log( $('.question_form').serialize() );
<!-- start of test-->
//$("li.radio-choice").click(function(){
$("li.radio-choice").click(function(){

 	var id_details = chkbx_ID($(this));
 		varname = id_details[0];
 		value = id_details[1];

    /**
     **   Question 1
     */         
 		if(varname=='PED_CYCLE_'){
      if( value == '0' ){
  				$("#f54_02, #f54_03").each(function(){
            find_input(this, 999999);
  					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
          });
      }else{
  				$("#f54_02, #f54_03").each(function(){
            find_input(this, '');
  					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
          });
      }
    }
      
    
    
    /**
     **   Question 4
     */         
 		if(varname=='VIGORIOUS_'){
      if( value == '0' ){
  				$("#f54_05, #f54_06").each(function(){
            find_input(this, 999999);
  					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
          });
      }else{
  				$("#f54_05, #f54_06").each(function(){
            find_input(this, '');
  					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
          });
      }
    }
      
    /**
     **   Question 7
     */  
 		if(varname=='MODERATE_'){
      if( value == '0' ){
  				$("#f54_08, #f54_09").each(function(){
            find_input(this, 999999);
  					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
          });
      }else{
  				$("#f54_08, #f54_09").each(function(){
            find_input(this, '');
  					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
          });
      }
    } 
    
    
    
        /**
     **   Question 10
     */  
 		if(varname=='VIGOR_INTENS_'){
      if( value == '0' ){
  				$("#f54_11, #f54_12").each(function(){
            find_input(this, 999999);
  					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
          });
      }else{
  				$("#f54_11, #f54_12").each(function(){
            find_input(this, '');
  					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
          });
      }
    } 
 	
     
        /**
     **   Question 13
     */  
 		if(varname=='MOD_INTENS_'){
      if( value == '0' ){
  				$("#f54_14, #f54_15").each(function(){
            find_input(this, 999999);
  					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
          });
      }else{
  				$("#f54_14, #f54_15").each(function(){
            find_input(this, '');
  					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
          });
      }
    } 
 	            
       
  });

	/**
	*	Skipping for checkbox inputs
	*/
	$('input[type="checkbox"]').change(function(){
		var varname 	= $(this).attr('id');
		var ischecked	= $(this).is(':checked') ? true : false;
		if( varname == 'CUR_TYPE1' ){
			if(  ischecked  ){
				$("#f53_06, #f53_07, #f53_08, #f53_09, #f53_10, #f53_11, #f53_12, #f53_13, #f53_14, #f53_15, #f53_16, #f53_17, #f53_18, #f53_19, #f53_20, #f53_21, #f53_22, #f53_23, #f53_24").each(function(){
					find_input(this, '')
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});
			}else{
				$("#f53_06, #f53_07, #f53_08, #f53_09, #f53_10, #f53_11, #f53_12, #f53_13, #f53_14, #f53_15, #f53_16, #f53_17, #f53_18, #f53_19, #f53_20, #f53_21, #f53_22, #f53_23, #f53_24").each(function(){
					find_input(this, 999999)
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});
			}
		}
	});
	//end of checkbox


});