
function pasuser(form) {

var data= {};
 
            $.ajax({
                type: 'POST',
                //dataType: 'json',
                data: JSON.stringify(data),
                    contentType: 'application/json',
                            url: '/login',						
                            success: function(data) {
                               
								for(var i=1;i<data.length;i++){
								 
                                  if (form.username.value==data[0].username && form.pword.value==data[0].password)  
                                  {              
                                  window.location.href = '/adminMode';
                                  } 
                                  else if (form.username.value==data[i].username && form.pword.value==data[i].password)
                                  {
                                  window.location.href = '/legone/survey/surveyform';
                                  }  
                                  else {  alert("Invalid Username or Password") }
								
								}
                                
                          }
                        });
                        

}


$("#pword").keyup(function(event){
    if(event.keyCode == 13){
        $("#login").click();
    }
});
                                 
