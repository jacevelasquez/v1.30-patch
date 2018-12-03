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
    
 
//console.log( $('.question_form').serialize() );
<!-- start of test-->
$("li.radio-choice").click(function(){

 	var id_details = chkbx_ID($(this));
 		varname = id_details[0];
 		value = id_details[1];
		
		
		 		if(varname=='CURRFS_'){

 			if( value =='1' ){
 				//disable answer list
				$("#f56_03").each(function(){
					//$(this).find('input[type!=hidden]').prop('disabled',true);
          find_input(this, 999999);
					$(this).find('li, input[type!=hidden]').prop('disabled',true).addClass('disabled');
				});

				//set variable value
//				$("#RECSHOWN_, #RECSHOWN_OTH").val('999999');

 			}
 			else{
 				//enable answer list
				$("#f56_03").each(function(){
          find_input(this, '');
					$(this).find('li, input[type!=hidden]').prop('disabled',false).removeClass('disabled');
				});

				//clear variable value
//				$("#RECSHOWN_, #RECSHOWN_OTH").val('');
 			}
 		}	





});
 <!-- end of test-->


});<!-- end of DOM-->