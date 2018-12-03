 $(document).ready(function (){


    $(".injury, .diag").click(function(){
        var varname = $(this).attr("id");
        if ($(this).is(':checked')) {
            $("input[name='" + varname +"']").val(1);
        }
        else{
            $("input[name='" + varname +"']").val(0);
        }

    });


<!-- start of test-->
$("li.radio-choice").click(function(){

 	var id_details = chkbx_ID($(this));
 		varname = id_details[0];
 		value = id_details[1];
        console.log(id_details[1])
 	      var url = window.location.href;

        if(varname=='VISITED_OFC_'){
            if(value==0){

                $('#f49_35,#f49_36').find("li,input[type='text'],input[type='checkbox']").each(function(){
                        
                            $(this).addClass('disabled');
                            $(this).prop('disabled',true);
                            $(this).val('999999');
                       
                    })
            }
            else{
 $('#f49_35,#f49_36').find("li,input[type='text'],input[type='checkbox']").each(function(){
                        
                            $(this).removeClass('disabled');
                            $(this).prop('disabled',false);
                            $(this).val('');
                       
                    })

            }
          }
 		if(varname=='PH_MEMBER_'){
 			if(value==0){
			console.log(value)
                 for(i=3;i<33;i++){
                    var qkey = '#f49_';
                    num = '00'+i;
                    num = num.slice(-2);
                    qkey += num;
                    
                    $(qkey).find("li,input[type='text'],input[type='checkbox']").each(function(){
                        if(qkey!='#f49_04'){
                            $(this).addClass('disabled');
                            $(this).prop('disabled',true);
                            $(this).val('999999');}
                        else{
                            $(this).removeClass('disabled');
                            $(this).prop('disabled',false);
                            $(this).val('');
                        }

                        
                    })

                }
                 
                  if(url.indexOf('#')>=0){
                        url = url.split('#');
                        url = url[0] + '#f49_04';
                        window.location.href = url;
                    }
                else{
                    window.location.href=url + '#f49_04';

                    }

 			}
 		else if(value==2){
                 for(i=3;i<33;i++){
                    var qkey = '#f49_';
                    num = '00'+i;
                    num = num.slice(-2);
                    qkey += num;
                    
                    $(qkey).find("li,input[type='text'],input[type='checkbox']").each(function(){
                            $(this).addClass('disabled');
                            $(this).prop('disabled',true);
                            $(this).val('999999');
                      
                    })

                }

                         BootstrapDialog.show({
                        type:BootstrapDialog.TYPE_INFO, 
                        title: 'DCS Information',
                        message: 'The system  will skip and move to the next valid question.' 
                        });
                
                var url = window.location.href;
                    if(url.indexOf('#')>=0){
                        url = url.split('#');
                        url = url[0] + '#f49_33';
                        window.location.href = url;

                    }
                    else{
                    window.location.href=url + '#f49_33';
                }
                

					
						
 		}	
 			else if(value==1){
				$("#f49_04").find("li,input[type='text'],input[type='checkbox']").each(function(){
                		$(this).addClass('disabled');
                		$(this).prop('disabled',true);
                		$(this).val('999999');
                	})

                   for(i=5;i<33;i++){
                    var qkey = '#f49_';
                    num = '00'+i;
                    num = num.slice(-2);
                    qkey += num;
                    
                    $(qkey).find("li,input[type='text'],input[type='checkbox']").each(function(){

                            $(this).removeClass('disabled');
                            $(this).prop('disabled',false);
                            $(this).val('');
                      
                    })

                }
            

                $("#f49_03").find('li').removeClass('disabled');
                $("#f49_03").find("input[type='hidden']").val("");
 			}
 		}

 		if(varname=='VISIT_HF_'){
 			if(value==0){

 				for(i=7;i<16;i++){

                	var qkey = '#f49_';
                	num = '00'+i;
                	num = num.slice(-2);
                	qkey += num;
                	
                	$(qkey).find("li,input[type='text'],input[type='checkbox']").each(function(){
                		$(this).addClass('disabled');
                		$(this).prop('disabled',true);
                		$(this).val('999999');
                	})

                }

				}else{

					for(i=7;i<16;i++){

	                	var qkey = '#f49_';
	                	num = '00'+i;
	                	num = num.slice(-2);
	                	qkey += num;
	                	
	                	$(qkey).find("li,input[type='text'],input[type='checkbox']").each(function(){
	                		$(this).removeClass('disabled');
	                		$(this).prop('disabled',false);
	                		$(this).val('');
	                	})

              	  }


				}

			}


 		if(varname=='PH_OFC_'){
 			if(value!=1){
				
				$("#f49_34,#f49_35,#f49_36").find("li,input[type='text'],input[type='checkbox']").addClass('disabled').prop("disabled",true);
				$("#f49_34,#f49_35,#f49_36").find("input[type='hidden'],input[type='text']").val(999999).prop("disabled",true);
 			}
 			else{
				$("#f49_34,#f49_35,#f49_36").find("li,input[type='text'],input[type='checkbox']").removeClass('disabled').prop("disabled",false);
				$("#f49_34,#f49_35,#f49_36").find("input[type='hidden'],input[type='text']").val("").prop("disabled",false);
 			}
 		}


        if(varname=='SEEK_HCARE_'){
            if(value!=1){
                
                $("#f49_38").find("li,input[type='text'],input[type='checkbox']").addClass('disabled').prop("disabled",true);
                $("#f49_38").find("input[type='hidden'],input[type='text']").val(999999).prop("disabled",true);
            }
            else{
                $("#f49_38").find("li,input[type='text'],input[type='checkbox']").removeClass('disabled').prop("disabled",false);
                $("#f49_38").find("input[type='hidden'],input[type='text']").val("").prop("disabled",false);
            }
        }


        if(varname=='BENEFITS_'){
            if(value!=0){
                
                $("#f49_40").find("li,input[type='text'],input[type='checkbox']").addClass('disabled').prop("disabled",true);
                $("#f49_40").find("input[type='hidden'],input[type='text']").val(999999).prop("disabled",true);
            }
            else{
                $("#f49_40").find("li,input[type='text'],input[type='checkbox']").removeClass('disabled').prop("disabled",false);
                $("#f49_40").find("input[type='hidden'],input[type='text']").val("").prop("disabled",false);
            }
        }
		
		        if(varname=='OUTP_'){
            if(value!=1){
                
                $("#f49_29").find("li,input[type='text'],input[type='checkbox']").addClass('disabled').prop("disabled",true);
                $("#f49_29").find("input[type='hidden'],input[type='text']").val(999999).prop("disabled",true);
            }
            else{
                $("#f49_29").find("li,input[type='text'],input[type='checkbox']").removeClass('disabled').prop("disabled",false);
                $("#f49_29").find("input[type='hidden'],input[type='text']").val("").prop("disabled",false);
            }
        }

});
 <!-- end of test-->

$('#DEPENDENTS').attr('placeholder','Separate each entry with a comma.')



});<!-- end of DOM-->