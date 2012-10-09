$(function(){
	$('.block-php_evaluator').dialog({title: 'Execute php code', position: ['right','top'], resizable: true, dialogClass: 'php-eval-dialog'});

	var storage = $("div");
	$('.php-eval-dialog .ui-dialog-titlebar').dblclick(function(){
		var phpEvalDialogheight = $('.php-eval-dialog').height();
		
		if(phpEvalDialogheight!=35){		
			$.data(storage, "phpEvalDialogheightOld", phpEvalDialogheight);			
			$('.php-eval-dialog').animate({
				height: 35,
			});

		}else {
			$('.php-eval-dialog').animate({
				height: $.data(storage, "phpEvalDialogheightOld"),
			});

		}
	});
	if($('#edit-code').val() ==  "<?php\n"){
		$('.php-eval-dialog .ui-dialog-titlebar').trigger('dblclick');	
	}
	$('input#edit-submit').click(function(){
		//return false; //bag
	});
	
	$('input#edit-reset').click(function(){
		editor.setValue("<?php\n");
		editor.setCursor({line: 1, ch: 1});
		return false;
	});
});