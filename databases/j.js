 $("body").on("change",".measure",function(){
$(".measure").blur(function(){
if($(this).val().length>0){
 if(isNaN($(this).val()) || ($(this).val()>500 && $(this).val()!='888888')){
   $(this).val("");
              BootstrapDialog.show({
                 type:BootstrapDialog.TYPE_DANGER, 
                title: 'Invalid input',
                message: 'Please enter a valid number.' 
            });

   $(this).focus();
 }
else{
  if($('#anthrop_age').val()<19){
   aage = $('#anthrop_age').val()*12;
   asex = $('#anthrop_sex').val();
   elem = $(this).attr('id').indexOf('WEIGHT') >= 0 ? 'w_':'h_';
   elemval = $(this).val();
     $.post(base_url + 'survey/dblookup/checkwh',{agemos:aage,sex:asex,elem:elem,elemval:elemval},function(adata){
         if(adata!='ok'){
             BootstrapDialog.show({
                 type:BootstrapDialog.TYPE_WARNING, 
                title: 'Not in range',
                message: 'Entered value is out of range.' 
            });

        }

     });

   }

}

}
});
});

