$(document).ready(function(){
	$('select').on('change', function(){
		var selectValue = $(this).val();
		var selectGroup = $(this).data('group');
		$('select[data-group=' + selectGroup + ']').val(selectValue);
	});
});
