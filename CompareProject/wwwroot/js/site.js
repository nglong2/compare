// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// init onload document
document.addEventListener("DOMContentLoaded", function () {
    home.init();
});

//init observer function



var home = {
    init: function () {
        CKEDITOR.replace('editor1', {
            autoGrow_onStartup: true,
            height: 300,
        });
        CKEDITOR.replace('editor2', {
            contentsCss: '/css/site.css',
            autoGrow_onStartup: true,
            height: 300,
        });
    }
    ,
    clickLoad: function () {
        var editor1 = CKEDITOR.instances.editor1;
        var editor2 = CKEDITOR.instances.editor2;


        if (editor1 && editor2) {

            editor2.setData(editor1.getData());
        } else {
            alert('CKEditor not available');
        }

    },
    clickCompare: function () {
        var editor1 = CKEDITOR.instances.editor1;
        var editor2 = CKEDITOR.instances.editor2;

        if (editor1 && editor2) {
            let output = htmldiff(editor1.getData(), editor2.getData());
            editor2.setData(output);
        } else {
            alert('CKEditor not available');
        }
    },
    clickLastPhase: function () {
       
        var editor2 = CKEDITOR.instances.editor2;

        if (editor2) {
            
            editor2.setData(editor2.getData().replace(/<del[^>]*>(.*?)<\/del>/gi, ''));
        } else {
            alert('CKEditor not available');
        }
    }

}