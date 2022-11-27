'use strict'
let editor;
document.getElementById('editor').style.fontSize='18px';
window.onload = function () {
    editor = ace.edit("editor");
    // editor.setTheme("ace/theme/dracula");
    editor.setTheme("ace/theme/twilight");
    editor.session.setMode("ace/mode/javascript");
    // editor.resize();
    // editor.session.setTabSize(4);
    // editor.setHighlightActiveLine(true);
}

function execute() {
    $.ajax({
        url:("editeur_mezrn_js.php"),
        method: "POST",      
        data: {
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        }, 
        success: function (response) {
            $(".output").text(response)
        }
    })
}