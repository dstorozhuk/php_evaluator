//@todo wrapp in to "behavior"

var editor = CodeMirror.fromTextArea(document.getElementById("edit-code"), {
lineNumbers: true,
matchBrackets: true,
mode: "application/x-httpd-php",
indentUnit: 2,
indentWithTabs: true,
enterMode: "keep",
tabMode: "shift",
onChange: function(){
		var editorValue = editor.getValue();
		$('#edit-code').val(editorValue);
		},
tabSize: 2
});

var editor2 = CodeMirror.fromTextArea(document.getElementById("edit-body"), {
lineNumbers: true,
matchBrackets: true,
mode: "application/x-httpd-php",
indentUnit: 2,
indentWithTabs: true,
enterMode: "keep",
tabMode: "shift",
onChange: function(){
		var editorValue = editor.getValue();
		$('#edit-body').val(editorValue);
		},
tabSize: 2
});
