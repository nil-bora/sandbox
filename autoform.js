var autoForm = function() {
	var fish = 'asdadsSD',
		fishEmail = 'test@test.com';
	
	$('textarea').val(fish);
	$('input').each(function(i) {
		if($(this).attr('name') == 'email')
			$(this).val(fishEmail);
		else
			$(this).val(fish);
	})
};
autoForm();
