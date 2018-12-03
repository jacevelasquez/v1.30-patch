$(document).ready(function (){
	
  
	var duration = 0;
    var url = window.location.href;
    var urlArray = url.split("/");
    var bigIdString = urlArray[urlArray.length-1];
    var A = bigIdString.substring(0,12);
    var B = bigIdString.substring(12,16);
    var C = bigIdString.substring(16,20);
    var D = bigIdString.substring(20,22);
    document.getElementById('eacode').value = A;
    document.getElementById('hcn').value = B;
    document.getElementById('shsn').value = C;
	var preg = A.substring(A.length-1);
	
	$("html").bind("keypress", function(e) {
          if(e.keyCode == 13) {
            return false;
			}
			if (event.keyCode === 39 || event.keyCode === 34 || event.keyCode === 96 ) { // apostrophe, double quote, tilde
        // prevent the keypress
        return false;
    }
      });
	
	
	$('.page').nextAll().prop('hidden',true);
	$('#prevbtn').prop('disabled',true);
	
	if(preg == 'P'){
	$('#f13, #f14, #f15').hide();
	}
	else{
	$('#f13, #f14, #f15').show();
	}

    	$('input[type=text]').on('keypress', function (e) {
        var ingnore_key_codes = [34, 39];
        if ($.inArray(e.which, ingnore_key_codes) >= 0) {
            e.preventDefault();
        }
    });
	
	// $('#f15').hide();
	
	
	var data = {};
	data.eacode = A;
	data.hcn = B;
	data.shsn = C;
	$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: '/legone/survey/surveyform/form12/post',						
                        success: function(data) {
								function isEmpty(v)
									{
										return v === null || v.toString().trim().length === 0;
									}
									
								if(isEmpty(data.INTERVIEW_STATUS)){ 
								$('#f12').css("background-color","#f2dede"); 
								$('#f12').addClass('empty');
								}
								else if(data.INTERVIEW_STATUS == 1) {
								$('#f12').css("background-color","#dff0d8");
								$('#f12').addClass('full');
								}
								else if(data.INTERVIEW_STATUS == 2)	{ 
								$('#f12').css("background-color","#fcf8e3"); 
								$('#f12').addClass('incomplete'); 
								}
								else {
								$('#f12').css("background-color","#f2dede"); 
								$('#f12').addClass('othis');	
								}
								
                        }
                    });
					
	
	$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: '/legone/survey/surveyform/form13/post',						
                        success: function(data) {
								function isEmpty(v)
									{
										return v === null || v.toString().trim().length === 0;
									}
									
								if(isEmpty(data.INTERVIEW_STATUS)){ 
								$('#f13').css("background-color","#f2dede"); 
								$('#f13').addClass('empty');
								}
								else if(data.INTERVIEW_STATUS == 1) {
								$('#f13').css("background-color","#dff0d8");
								$('#f13').addClass('full');
								}
								else if(data.INTERVIEW_STATUS == 2) { 
								$('#f13').css("background-color","#fcf8e3"); 
								$('#f13').addClass('incomplete');
								}
								else {
								$('#f13').css("background-color","#f2dede"); 
								$('#f13').addClass('othis');	
								}
								
                        }
                    });
					
					
	$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: '/legone/survey/surveyform/form14/post',						
                        success: function(data) {
								function isEmpty(v)
									{
										return v === null || v.toString().trim().length === 0;
									}
									
								if(isEmpty(data.INTERVIEW_STATUS)){ 
								$('#f14').css("background-color","#f2dede"); 
								$('#f14').addClass('empty');
								}
								else if(data.INTERVIEW_STATUS == 1) {
								$('#f14').css("background-color","#dff0d8");
								$('#f14').addClass('full'); 
								}
								else if(data.INTERVIEW_STATUS == 2) {
								$('#f14').css("background-color","#fcf8e3"); 
								$('#f14').addClass('incomplete');
								}
								else {
								$('#f14').css("background-color","#f2dede"); 
								$('#f14').addClass('othis');	
								}
								
                        }
                    });
					
	$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: '/legone/survey/surveyform/form15/post',						
                        success: function(data) {
								function isEmpty(v)
									{
										return v === null || v.toString().trim().length === 0;
									}
									
								if(isEmpty(data.INTERVIEW_STATUS)){ 
								$('#f15').css("background-color","#f2dede"); 
								$('#f15').addClass('empty'); 
								}
								else if(data.INTERVIEW_STATUS == 1) {
								$('#f15').css("background-color","#dff0d8");
								$('#f15').addClass('full'); 
								}
								else if(data.INTERVIEW_STATUS == 2) { 
								$('#f15').css("background-color","#fcf8e3"); 
								$('#f15').addClass('incomplete');
								}
								else {
								$('#f15').css("background-color","#f2dede"); 
								$('#f15').addClass('othis');	
								}
								
                        }
                    });
					
	$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: '/legone/survey/surveyform/form16/post',						
                        success: function(data) {
								function isEmpty(v)
									{
										return v === null || v.toString().trim().length === 0;
									}
									
								if(isEmpty(data.INTERVIEW_STATUS)){ 
								$('#f16').css("background-color","#f2dede"); 
								$('#f16').addClass('empty'); 
								}
								else if(data.INTERVIEW_STATUS == 1) {
								$('#f16').css("background-color","#dff0d8");
								$('#f16').addClass('full');
								}
								else if(data.INTERVIEW_STATUS == 2) { 
								$('#f16').css("background-color","#fcf8e3"); 
								$('#f16').addClass('incomplete');
								}
								else {
								$('#f16').css("background-color","#f2dede"); 
								$('#f16').addClass('othis');	
								}
								
                        }
                    });
					
	$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: '/legone/survey/surveyform/form17/post',						
                        success: function(data) {
								function isEmpty(v)
									{
										return v === null || v.toString().trim().length === 0;
									}
									
								if(isEmpty(data.INTERVIEW_STATUS)){ 
								$('#f17').css("background-color","#f2dede"); 
								$('#f17').addClass('empty'); 
								}
								else if(data.INTERVIEW_STATUS == 1) {
								$('#f17').css("background-color","#dff0d8");
								$('#f17').addClass('full');
								}
								else if(data.INTERVIEW_STATUS == 2) { 
								$('#f17').css("background-color","#fcf8e3"); 
								$('#f17').addClass('incomplete');
								}
								else {
								$('#f17').css("background-color","#f2dede"); 
								$('#f17').addClass('othis');	
								}
								
                        }
                    });
	
					
	
	
	
    var data= {};
    data.eacode = A;
    data.hcn = B;
    data.shsn = C;		
			
			$.ajax({
                type: 'POST',
                //dataType: 'json',
                data: JSON.stringify(data),
                    contentType: 'application/json',
                            url: '/legone/survey/surveyform/form11/respondents',						
                            success: function(data) {
							
							for(var i=0;i<data.length;i++){
							$('#RES_NAME').append("<option value="+data[i].MEMBER_CODE+">"+data[i].GIVENNAME+" "+data[i].SURNAME+"</option>");
							}

                          }
                        });
						
						
						
						
});

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
	prevPage();
    }
    else if (e.keyCode == '39') {
	nextPage();
    }
}


function jump(num,length){
	$('#recap').modal('toggle');
	var duration = 0;
		var old_num = $('#btn-group').find('.active-btn').val();
			var new_num = num;
			
			$('#nextbtn').prop('disabled',false);
			
			 $('#page'+old_num).toggle('slide', {
						direction: 'right',
						duration,
						complete:function(){
						$('#btn_page'+old_num).removeClass('active-btn');
							 $('#page'+old_num).clearQueue();
							 $('#page'+old_num).removeClass('active-page');
							
							 $('#page'+new_num).addClass('active-page');
							$('#btn_page'+new_num).addClass('active-btn');
							if(new_num == '1')
							{
								$('#nextbtn').prop('disabled',false);
								$('#prevbtn').prop('disabled',true);
							}
						
						  $('#page'+new_num).toggle('slide', {
								 direction: 'left',
								 duration
							 });
						}
					});
	  var page_view = Number($('.active-page').attr('id').substring(4));
	  
      for(var i=page_view ; i<=length ; i+=5)
      {
      for(var j=0 ; j<=page_view ; j++) 	{	$('#btn_page'+j+'').hide();	}
      for(var j=page_view; j<=page_view+5 ; j++) 	{	$('#btn_page'+j+'').show();	}
      for(var j=page_view+5 ; j<=length ; j++) 	{	$('#btn_page'+j+'').hide();	}
      }
	
	
	};
	
	$('#jump').change(function() {
		
		var y = $('.buttonL').size();
		var duration = 0;
			var old_num = $('#btn-group').find('.active-btn').val();
			if($(this).val() > y ) {
			alert('Error: Inputted number is beyond the last page');
			return false;
			}
			else if($(this).val() == ' ' || $(this).val() == '' || $(this).val() == '  '){
			return false;
			}
			else{ 
			var new_num = $(this).val();
			
			$('#nextbtn').prop('disabled',false);
			
			 $('#page'+old_num).toggle('slide', {
						direction: 'right',
						duration,
						complete:function(){
						$('#btn_page'+old_num).removeClass('active-btn');
							 $('#page'+old_num).clearQueue();
							 $('#page'+old_num).removeClass('active-page');
							
							 $('#page'+new_num).addClass('active-page');
							$('#btn_page'+new_num).addClass('active-btn');
							if(new_num == '1')
							{
								$('#nextbtn').prop('disabled',false);
								$('#prevbtn').prop('disabled',true);
							}
						
						  $('#page'+new_num).toggle('slide', {
								 direction: 'left',
								 duration
							 });
						}
					});
	  var page_view = Number($('.active-page').attr('id').substring(4));
	  
      for(var i=page_view ; i<=y ; i+=5)
      {
      for(var j=0 ; j<=page_view ; j++) 	{	$('#btn_page'+j+'').hide();	}
      for(var j=page_view; j<=page_view+5 ; j++) 	{	$('#btn_page'+j+'').show();	}
      for(var j=page_view+5 ; j<=y ; j++) 	{	$('#btn_page'+j+'').hide();	}
      }
	  }
	});
	

	
	var formL = $('.buttonL').size();
	var duration = 0;
	
	

function prevPage() {

	

	if($('#btn_page1').hasClass('active-btn'))
	{
	$('#prevbtn').prop('disabled',true);
	}
	else{
	$('#prevbtn').prop('disabled',false);
	}

    var old_num = $('#btn-group').find('.active-btn').val();
	var new_num = $('.active-btn').prevAll('.butt').val();
		
		if(new_num == 0)
						{
						e.preventDefault();
    return false;
						}	
		
		 $('#page'+old_num).toggle('slide', {
					duration,
					direction: 'right',
					complete:function(){
					$('#btn_page'+old_num).removeClass('active-btn');
						$('#page'+old_num).clearQueue();
						$('#page'+old_num).removeClass('active-page');
						
						$('#page'+new_num).addClass('active-page');
						$('#btn_page'+new_num).addClass('active-btn');

					  $('#page'+new_num).toggle('slide', {
							 direction: 'left',
							 duration
						 });
					}
				});
				
	  var page_view = Number($('.active-page').attr('id').substring(4));	
      for(var i=page_view ; i<=formL ; i+=5)
      {
      for(var j=0 ; j<=page_view ; j++) 	{	$('#btn_page'+j+'').hide();	}
      for(var j=page_view; j<=page_view+5 ; j++) 	{	$('#btn_page'+j+'').show();	}
      for(var j=page_view+5 ; j<=formL; j++) 	{	$('#btn_page'+j+'').hide();	}
      }

};                    
    
function nextPage() { 

	if($('#btn_page'+formL).hasClass('active-btn'))
	{
	$('#nextbtn').prop('disabled',true);
	}
	else{
	$('#nextbtn').prop('disabled',false);
	}
    var old_num = $('#btn-group').find('.active-btn').val();
	var new_num = $('.active-btn').nextAll('.butt').val();

				if(new_num == $('#btn-group input').length+formL+1)
						{
						e.preventDefault();
    return false;
						}	
				else {
			 $('#page'+old_num).toggle('slide', {
					direction: 'left',
					duration,
					complete:function(){
					$('#btn_page'+old_num).removeClass('active-btn');
						$('#page'+old_num).clearQueue();
						$('#page'+old_num).removeClass('active-page');
						
						$('#page'+new_num).addClass('active-page');
						$('#btn_page'+new_num).addClass('active-btn');
					
					
					
					  $('#page'+new_num).toggle('slide', {
							 direction: 'right',
							 duration
						 });
					}
					
				});
				  }
			
      var page_view = Number($('.active-page').attr('id').substring(4));	
      for(var i=page_view ; i<=formL ; i+=5)
      {
      for(var j=0 ; j<=page_view ; j++) 	{	$('#btn_page'+j+'').hide();	}
      for(var j=page_view ; j<=page_view+5 ; j++) 	{	$('#btn_page'+j+'').show();	}
      for(var j=page_view+5 ; j<=formL ; j++) 	{	$('#btn_page'+j+'').hide();	}
      }

}; 

$('.page').nextAll().prop('hidden',true);
	$('#prevbtn').prop('disabled',true);
	
	$('#nextbtn').on('click', function() {
		duration = 0;	
		var old_num = $('#btn-group').find('.active-btn').val();
		var new_num = $('.active-btn').nextAll('.butt').val();
	
		$('#prevbtn').prop('disabled',false);
			
			 $('#page'+old_num).toggle('slide', {
					duration,
					direction: 'left',
					complete:function(){
					$('#btn_page'+old_num).removeClass('active-btn');
						$('#page'+old_num).clearQueue();
						$('#page'+old_num).removeClass('active-page');
						
						 $('#page'+new_num).addClass('active-page');
						$('#btn_page'+new_num).addClass('active-btn');

						if(new_num == formL)
						{
							$('#nextbtn').prop('disabled',true);
							$('#prevbtn').prop('disabled',false);
						}	
					  $('#page'+new_num).toggle('slide', {
							 duration,
							 direction: 'right'
						 });
					}
				});
	  var page_view = Number($('.active-page').attr('id').substring(4));	
      for(var i=page_view ; i<=formL ; i+=5)
      {
      for(var j=0 ; j<=page_view ; j++) 	{	$('#btn_page'+j+'').hide();	}
      for(var j=page_view ; j<=page_view+5 ; j++) 	{	$('#btn_page'+j+'').show();	}
      for(var j=page_view+5 ; j<=formL ; j++) 	{	$('#btn_page'+j+'').hide();	}
      }
	});
	

	
	$('#prevbtn').on('click', function() {
			var old_num = $('#btn-group').find('.active-btn').val();
			var new_num = $('.active-btn').prevAll('.butt').val();
			$('#nextbtn').prop('disabled',false);
			
			 $('#page'+old_num).toggle('slide', {
						direction: 'right',
						duration,
						complete:function(){
						$('#btn_page'+old_num).removeClass('active-btn');
							$('#page'+old_num).clearQueue();
							$('#page'+old_num).removeClass('active-page');
							
							$('#page'+new_num).addClass('active-page');
							$('#btn_page'+new_num).addClass('active-btn');
							if(new_num == '1')
							{
								$('#nextbtn').prop('disabled',false);
								$('#prevbtn').prop('disabled',true);
							}
						
						  $('#page'+new_num).toggle('slide', {
								 direction: 'left',
								 duration
							 });
						}
					});
	  var page_view = Number($('.active-page').attr('id').substring(4));	
      for(var i=page_view ; i<=formL ; i+=5)
      {
      for(var j=0 ; j<=page_view ; j++) 	{	$('#btn_page'+j+'').hide();	}
      for(var j=page_view; j<=page_view+5 ; j++) 	{	$('#btn_page'+j+'').show();	}
      for(var j=page_view+5 ; j<=formL ; j++) 	{	$('#btn_page'+j+'').hide();	}
      }
	});
	

	$('.butt').on('click',function(){
		
	var duration = 0;
	var old_num = $(this).parent().find('.active-btn').val();
	var new_num = $(this).val();
		
		if(new_num > old_num)
		{
			
			 $('#page'+old_num).toggle('slide', {
					duration,
					direction: 'left',
					complete:function(){
						$('#btn_page'+old_num).removeClass('active-btn');
						$('#page'+old_num).clearQueue();
						$('#page'+old_num).removeClass('active-page');
						
						$('#page'+new_num).addClass('active-page');
						$('#btn_page'+new_num).addClass('active-btn');
					  $('#page'+new_num).toggle('slide', {
							 duration,
							 direction: 'right'
						 });
					}
				});
		}
		else
		{
			 $('#page'+old_num).toggle('slide', {
					duration,
					direction: 'right',
					complete:function(){
					$('#btn_page'+old_num).removeClass('active-btn');
						$('#page'+old_num).clearQueue();
						$('#page'+old_num).removeClass('active-page');
						
						$('#page'+new_num).addClass('active-page');
						$('#btn_page'+new_num).addClass('active-btn');
					  $('#page'+new_num).toggle('slide', {
							 duration,
							 direction: 'left'
						 });
					}
				});
		}
		
		
		if(new_num == $('#btn-group input').length)
			{
				$('#nextbtn').prop('disabled',true);
				$('#prevbtn').prop('disabled',false);
			}
		else if(new_num == '1')
		{
			$('#nextbtn').prop('disabled',false);
			$('#prevbtn').prop('disabled',true);
		}
		else
		{
			$('#nextbtn').prop('disabled',false);
			$('#prevbtn').prop('disabled',false);
		}
		
		$('#btn_start').on('click',function(){
		
		
			$('#btn_page'+old_num).removeClass('active-btn');
			$('#page'+old_num).clearQueue();
			$('#page'+old_num).removeClass('active-page');
						
			$('#page1').addClass('active-page');
			$('#btn_page1').addClass('active-btn');
			if(new_num == '1')
				{
							$('#nextbtn').prop('disabled',false);
							$('#prevbtn').prop('disabled',true);
				}
			
			for(var b=1;b<6;b++) {
			$('#btn_page'+b+'').show();
			}
			for(var b=6;b<formL+1;b++) {
			$('#btn_page'+b+'').hide();
			}
			
		});
		
		$('#btn_end').on('click',function(){
		
		
			$('#btn_page'+old_num).removeClass('active-btn');
			$('#page'+old_num).clearQueue();
			$('#page'+old_num).removeClass('active-page');
						
			$('#page'+formL+'').addClass('active-page');
			$('#btn_page'+formL+'').addClass('active-btn');

			
			for(var b=1;b<formL-4;b++) {
			$('#btn_page'+b+'').hide();
			}
			for(var b=formL-4;b<formL+1;b++) {
			$('#btn_page'+b+'').show();
			}
			
		});
		
	});  
	
	
	
	
	
