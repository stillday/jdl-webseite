$(function () {
    var fileName = "agb.pdf";
    $("#btnShow").click(function () {
        $("#dialog").dialog({
            modal: true,
            title: fileName,
            // width: 540,
            // height: 450,
            buttons: {
                Close: function () {
                    $(this).dialog('close');
                }
            },
            open: function () {
                var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"100%\" height=\"98%\">";
                object += "If you are unable to view file, you can download from <a href = \"{FileName}\">here</a>";
                object += " or download <a target = \"_blank\" href = \"http://get.adobe.com/reader/\">Adobe PDF Reader</a> to view the file.";
                object += "</object>";
                object = object.replace(/{FileName}/g, "asset/" + fileName);
                $("#dialog").html(object);
            }
        });
    });
});