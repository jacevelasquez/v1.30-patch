function find_input(key, myval){
	$(key).find('input[type!="checkbox"]').each(function(){
		//console.log($(this).attr('id'));
		$(this).val( myval );
	});
}

$(document).ready(function (){
	
	$("input:checkbox").click(function(e){
      if ($(this).hasClass('disabled') ){
        e.preventDefault();
      }
   	});

	<!-- start of radio test-->
	$("li.radio-choice").click(function(){
	 	var id_details = chkbx_ID($(this));
	 		varname = id_details[0];
	 		value = id_details[1];
      
      /**
     * Question 2
     */ 
     	if(varname=='EVER_HPN_'){
 			if( value=='0' || value == '9' ){
				$("#f52_003,#f52_004,#f52_005,#f52_006,#f52_007,#f52_008,#f52_009,#f52_010,#f52_011,#f52_012,#f52_013,#f52_014,#f52_015,#f52_016,#f52_017,#f52_018,#f52_019,#f52_020,#f52_021,#f52_022,#f52_023,#f52_024,#f52_025,#f52_026,#f52_027").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_003,#f52_004,#f52_005,#f52_006,#f52_007,#f52_008,#f52_009,#f52_010,#f52_011,#f52_012,#f52_013,#f52_014,#f52_015,#f52_016,#f52_017,#f52_018,#f52_019,#f52_020,#f52_021,#f52_022,#f52_023,#f52_024,#f52_025,#f52_026,#f52_027").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    /**
     * Question 4
     */ 
     	if(varname=='HPN_DIET_'){
 			if( value=='0' ){
				$("#f52_007,#f52_008").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_007,#f52_008").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    /**
     * Question 5
     */ 
     	if(varname=='HPN_WR_'){
 			if( value=='0' ){
				$("#f52_010,#f52_011").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_010,#f52_011").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}   
    
    /**
     * Question 6
     */ 
     	if(varname=='HPN_SMOK_'){
 			if( value=='0' || value=='2' || value=='3' ){
				$("#f52_013,#f52_014").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_013,#f52_014").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    /**
     * Question 7
     */ 
     	if(varname=='HPN_ALC_'){
 			if( value=='0' || value=='2' || value=='3' ){
				$("#f52_016,#f52_017").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_016,#f52_017").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    /**
     * Question 8
     */ 
     	if(varname=='HPN_EXC_'){
 			if( value=='0' ){
				$("#f52_019,#f52_020").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_019,#f52_020").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    /**
     * Question 9
     */ 
     	if(varname=='HPN_MED_'){
 			if( value=='0' ){
				$("#f52_022,#f52_023,#f52_024").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_022,#f52_023,#f52_024").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
     /**
     * Question 10
     */  
    	if(varname=='HPN_DRG_'){
 			if( value=='0' ){
				$("#f52_023,#f52_024").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_023,#f52_024").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
       /**
     * Question 11
     */  
    	if(varname=='HCOMP_MED_'){
 			if( value=='0' ){
				$("#f52_024").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_024").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
     /**
     * Question 12
     */ 
     	if(varname=='HPN_CTREM_'){
 			if( value=='0' ){
				$("#f52_027").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_027").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    /**
     * Question 13
     */ 
     	if(varname=='EVER_DM_'){
 			if( value=='0'){
				$("#f52_030,#f52_031,#f52_032,#f52_033,#f52_034,#f52_035,#f52_036,#f52_037,#f52_038,#f52_039,#f52_040,#f52_041,#f52_042,#f52_043,#f52_044,#f52_045,#f52_046,#f52_047,#f52_048,#f52_049,#f52_050,#f52_051,#f52_052,#f52_053,#f52_054,#f52_055,#f52_056,#f52_057").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_030,#f52_031,#f52_032,#f52_033,#f52_034,#f52_035,#f52_036,#f52_037,#f52_038,#f52_039,#f52_040,#f52_041,#f52_042,#f52_043,#f52_044,#f52_045,#f52_046,#f52_047,#f52_048,#f52_049,#f52_050,#f52_051,#f52_052,#f52_053,#f52_054,#f52_055,#f52_056,#f52_057").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    /**
     * Question 14
     */ 
     	if(varname=='DM_DIET_'){
 			if( value=='0' ){
				$("#f52_034,#f52_035").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_034,#f52_035").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    /**
     * Question 15
     */ 
     	if(varname=='DM_WR_'){
 			if( value=='0' ){
				$("#f52_037,#f52_038").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_037,#f52_038").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}

    /**
     * Question 16
     */ 
     	if(varname=='DM_SMOK_'){
 			if( value=='0' || value=='2' || value=='3'){
				$("#f52_040,#f52_041").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_040,#f52_041").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    /**
     * Question 17
     */ 
     	if(varname=='DM_ALC_'){
 			if( value=='0'|| value=='2'|| value=='3' ){
				$("#f52_043,#f52_044").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_043,#f52_044").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    /**
     * Question 18
     */ 
     	if(varname=='DM_EXC_'){
 			if( value=='0' ){
				$("#f52_046,#f52_047").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_046,#f52_047").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    /**
     * Question 19
     */ 
     	if(varname=='DM_MED_'){
 			if( value=='0' ){
				$("#f52_049,#f52_050,#f52_051").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_049,#f52_050,#f52_051").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
      /**
     * Question 20
     */  
    if(varname=='DHPN_DRG_'){
 			if( value=='0' ){
				$("#f52_050,#f52_051").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_050,#f52_051").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
     /**
     * Question 21
     */ 
     if(varname=='DCOMP_MED_'){
 			if( value=='0' ){
				$("#f52_051").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_051").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}

    /**
     * Question 22
     */ 
     	if(varname=='DM_INS_'){
 			if( value=='0' ){
				$("#f52_053,#f52_054").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_053,#f52_054").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    /**
     * Question 23
     */ 
     	if(varname=='DM_CTREM_'){
 			if( value=='0' ){
				$("#f52_057").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_057").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
     
     /**
     * Question 24
     */ 
     	if(varname=='CMED_TAKE_'){
 			if( value=='0' ){
				$("#f52_059").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_059").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    /**
     * Question 25
     */ 
    
    if(varname=='DRUG_3MOS_'){
 			if( value=='0' ){
				$("#f52_111").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_111").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this,'')
				});
			}
 		}
    
    
      
	});
	<!-- end of radio test-->

	<!-- start of text test-->
	$('input[type="text"]').change(function(){
		varname = $(this).attr('id');
 		value = $(this).val();

		
 		if(varname == 'HPN_YMW_DATE' || varname == 'DM_YMW_DATE'){
 	  		if( isNaN( value ) ){
				$(this).val('').focus();
			}
 		}


 		if(varname == 'HPN_DATE'){
			if( value != '88' && value != '77' ){
				$("#f52_004").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_004").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this)
				});
			}
 		}
   
 		if(varname == 'DM_DATE'){
			if( value != '88' && value != '77' ){
				$("#f52_031").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_031").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this)
				});
			}
 		}
 		
     /**
     * Question 20
     */ 
     if(varname == 'MED1_WHN'){
		if( value != 88 ){
			$(this).closest('tr').find('#MED1_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED1_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED1_YMW_DATE').val(999999);
		}else{
			$(this).closest('tr').find('#MED1_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED1_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED1_YMW_DATE').val('');
		}

  		/*
			if( value=='88' ){
				$("#f52_64").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_064").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this)
				});
			}
		*/
 		}
    /**
     * Question 21
     */ 
    if(varname == 'MED2_WHN'){
    if( value != 88 ){
			$(this).closest('tr').find('#MED2_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED2_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED2_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#MED2_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED2_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED2_YMW_DATE').val('');
		}
  	 /* 
			if( value=='88' ){
				$("#f52_069").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_069").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this)
				});
			}
    */
 		}
   
    /**
     * Question 22
     */ 
   
  
     if(varname == 'MED3_WHN'){
    if( value != 88 ){
			$(this).closest('tr').find('#MED3_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED3_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED3_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#MED3_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED3_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED3_YMW_DATE').val('');
		}
  	  
		/*	if( value=='88' ){
				$("#f52_074").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_074").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this)
				});
			}
     */ 
 		}
    
    /**
     * Question 23
     */ 
   
     if(varname == 'MED4_WHN'){
      if( value != 88 ){
			$(this).closest('tr').find('#MED4_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED4_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED4_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#MED4_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED4_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED4_YMW_DATE').val('');
		}
 	    
		/*	if( value=='88'){
				$("#f52_079").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_079").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this)
				});
			}
    */
 		}
    
    /**
     * Question 24
     */ 
   
    if(varname == 'MED5_WHN'){  
    if( value != 88 ){
			$(this).closest('tr').find('#MED5_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED5_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED5_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#MED5_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED5_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED5_YMW_DATE').val('');
		}
  /* if( value=='88' ){
				$("#f52_084").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_084").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this)
				});
			}
 		 */
    }
    
   /**
     * Question 25
     */ 
     
    if(varname == 'MED6_WHN'){
    if( value != 88 ){
			$(this).closest('tr').find('#MED6_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED6_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED6_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#MED6_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED6_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED6_YMW_DATE').val('');
		}
        
    /*if( value=='88' ){
				$("#f52_089").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_089").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this)
				});
			}
     */ 
 		} 
    
    /**
     * Question 26
     */
     
    if(varname == 'MED7_WHN'){
    if( value != 88 ){
			$(this).closest('tr').find('#MED7_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED7_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED7_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#MED7_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED7_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED7_YMW_DATE').val('');
		}
  
     /* if( value=='88' ){
				$("#f52_094").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_094").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this)
				});
			}
     */ 
 		}
    
    /**
     * Question 28
     */
     
    if(varname == 'MED8_WHN'){
    if( value != 88 ){
			$(this).closest('tr').find('#MED8_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED8_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED8_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#MED8_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED8_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED8_YMW_DATE').val('');
		}
        
    /*if( value=='88' ){
				$("#f52_099").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_099").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this)
				});
			}
     */ 
 		}
    
    /**
     * Question 29
     */
     
     if(varname == 'MED9_WHN'){
     if( value != 88 ){
			$(this).closest('tr').find('#MED9_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED9_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED9_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#MED9_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED9_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED9_YMW_DATE').val('');
		}
      
  /*  if( value=='88' ){
				$("#f52_104").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_104").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this)
				});
			}
     */ 
 		}
    
    /**
     * Question 30
     */
    
     if(varname == 'MED10_WHN'){
     if( value != 88 ){
			$(this).closest('tr').find('#MED10_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED10_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#MED10_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#MED10_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED10_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#MED10_YMW_DATE').val('');
		}
      
   /* if( value=='88' ){
				$("#f52_109").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',true).addClass('disabled');
					find_input(this, 999999)
				});

			}else{
				$("#f52_109").each(function(){
					$(this).find('li, input[type!=hidden], select').prop('disabled',false).removeClass('disabled');
					find_input(this)
				});
			}
    */ 
 		}
    
     /** Question 31
     */
    
     if(varname == 'MED1_STP'){
     if( value != 88 ){
			$(this).closest('tr').find('#DRUG1_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG1_YMW').attr('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG1_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#DRUG1_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG1_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG1_YMW_DATE').val('');
		}
    }
   /** 
     /** Question 32
     */
     
     if(varname == 'MED2_STP'){
     if( value != 88 ){
			$(this).closest('tr').find('#DRUG2_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG2_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG2_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#DRUG2_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG2_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG2_YMW_DATE').val('');
		}
    
    }
    
    /** Question 33
     */
    
     if(varname == 'MED3_STP'){
     if( value != 88 ){
			$(this).closest('tr').find('#DRUG3_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG3_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG3_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#DRUG3_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG3_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG3_YMW_DATE').val('');
		}
    
    }
    
     /** Question 34
     */
    
     if(varname == 'MED4_STP'){
     if( value != 88 ){
			$(this).closest('tr').find('#DRUG4_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG4_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG4_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#DRUG4_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG4_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG4_YMW_DATE').val('');
		}
  
    }
    
    /** Question 35
     */
    
     if(varname == 'MED5_STP'){
     if( value != 88 ){
			$(this).closest('tr').find('#DRUG5_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG5_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG5_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#DRUG5_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG5_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG5_YMW_DATE').val('');
		}
    
    }
    
    /** Question 36
     */
    
     if(varname == 'MED6_STP'){
     if( value != 88 ){
			$(this).closest('tr').find('#DRUG6_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG6_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG6_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#DRUG6_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG6_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG6_YMW_DATE').val('');
		}
    
    }
    
    /** Question 37
     */
    
     if(varname == 'MED7_STP'){
     if( value != 88 ){
			$(this).closest('tr').find('#DRUG7_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG7_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG7_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#DRUG7_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG7_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG7_YMW_DATE').val('');
		}
    
    }
    
    /** Question 38
     */
    
     if(varname == 'MED8_STP'){
     if( value != 88 ){
			$(this).closest('tr').find('#DRUG8_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG8_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG8_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#DRUG8_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG8_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG8_YMW_DATE').val('');
		}
    
    }
    
    /** Question 39
     */
    
     if(varname == 'MED9_STP'){
     if( value != 88 ){
			$(this).closest('tr').find('#DRUG9_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG9_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG9_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#DRUG9_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG9_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG9_YMW_DATE').val('');
		}
    
    }
    
    /** Question 40
     */
    
     if(varname == 'MED10_STP'){
     if( value != 88 ){
			$(this).closest('tr').find('#DRUG10_YMW_DATE').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG10_YMW').prop('disabled',true).addClass('disabled');
			$(this).closest('tr').find('#DRUG10_YMW_DATE').val(999999);
	}else{
			$(this).closest('tr').find('#DRUG10_YMW_DATE').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG10_YMW').prop('disabled',false).removeClass('disabled');
			$(this).closest('tr').find('#DRUG10_YMW_DATE').val('');
		}
    
    }
    
    
 		
 	});
	<!-- end of text test-->
}); // end of DOM
