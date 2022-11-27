'use strict'
let editor;
window.onload = function () {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript")
    console.log('marcos')
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

console.log('marcos medenou')