var params = {	text: 'asdadsSD',
				email: 'test@test.com',
				phone: '+380931111111',
				defaults: 'asdadsSD111'
			};
var autoForm = function(params) {
	
	
	   $('textarea').val(params.defaults);
	   $('input').each(function(i) {
	   	     	   
	   	   if(params[$(this).attr('name')])
	   	  	 $(this).val(params[$(this).attr('name')]);
	   	   else
	   	   	 $(this).val(params.defaults);
	   	   
	   });
	
};
autoForm(params);
