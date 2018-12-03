var base_url="http://10.10.125.43/legone/";
//var base_url="http://localsurvey/localsurvey/";

	function chkbx_ID(e){
		keyvalue = new Array();
		var eid = e.attr("id");
		idx = eid.lastIndexOf("_");
		varname = eid.substring(4,idx) + "_";
		value = eid.substring(idx+1);
	
		keyvalue.push(varname);
		keyvalue.push(value);
		return keyvalue;
	}

	function checker(e){
        var id_details = chkbx_ID(e);
 		varname = id_details[0];
 		value = id_details[1];

        $(e).addClass("active")
        $(e).addClass("glyphicon glyphicon-check")
        hidden_id = varname;
        $('#' + hidden_id ).val(value);

      }

    function unchecker(e){
    	var id_details = chkbx_ID(e);
 		varname = id_details[0];
        $(e).removeClass("active")
        $(e).removeClass("glyphicon glyphicon-check")
         hidden_id = varname;
        $('#' + hidden_id ).val("");
      }
      

$(document).ready(function (){      
  $('form').submit(function(){
   	$('input:disabled,select').prop('disabled',false);
  });
});  