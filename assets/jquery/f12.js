	 function find_input(key, myval){
	$(key).find('input:text,input[type="hidden"]').each(function(){
		//console.log($(this).attr('id'));
		$(this).val( myval );
	});
} 

$(document).ready(function (){
	

<!-- start of test-->
$("li.radio-choice").click(function(){

 	var id_details = chkbx_ID($(this));
 		varname = id_details[0];
 		value = id_details[1];

     /**
     * DRINK SAFE
     */ 
	 

 		/**
 		* TOILET
 		*/
 		if(varname=='TOILET_'){

 			if(value=='0'){
 				
 				//disable answer list
				$("#f12_19").find('li').each(function(){
					$(this).addClass('disabled');
				});

					//set variable value
          $("#SHAREIT_").val('999999');

 			}
 			
 			else{ 
 				//enable answer list
 				$("#f12_19").find('li').each(function(){
					$(this).removeClass('disabled');
				});
				//clear variable value
				$("#SHAREIT_").val('');
 			}
 		} 		
 		
});


 <!-- end of test-->



});<!-- end of DOM-->