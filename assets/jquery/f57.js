// JavaScript Document

	$(document).ready(function(){
		$(document).on('change','.FREQ',function(){
			if( $(this).val() > 0 ){
				$(this).closest("tr").find(".AMNT, .REFP, .WGHT").each(function() {
          $(this).prop('disabled', false);
					$(this).val('').change();
				});
			}else{
				$(this).closest("tr").find(".AMNT, .REFP, .WGHT").each(function() {
          $(this).prop('disabled', true);
					$(this).val(999999).change();
				});
			}
		});

		$(document).on('change','.SPEC',function(){
			if( $(this).val().length >= 3 ){
				$(this).closest("tr").find(".FREQ, .AMNT, .REFP, .WGHT").each(function() {
          $(this).prop('disabled', false);
					$(this).val('');
				});
			}else{
				$(this).closest("tr").find(".FREQ, .AMNT, .REFP, .WGHT").each(function() {
          $(this).prop('disabled', true);
					   $(this).hasClass('FREQ') ? $(this).val(0) : $(this).val(999999);
				});
			}
		});
  });