
$("p").click(function () {
    alert("I am a handsome guy!!!!!!!!!!!!!!!!!!");
});



$("button").click(function () {

    var tempId = document.getElementById("searchID").value;

    if ( tempId > 0 && tempId < 11 ){
        $("div2").remove(".divTableRow");

        $(function () {
            $.ajax({
                type: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts',
                data: { userId: tempId },
                dataType: 'json',
                success: function (data) {
                    $.each(data, function(index, element) {
                        $("#jsonTable").append($("<p>").html(element.id));
                        var divRow = $("<div2>").addClass("divTableRow");
                        var divCellId = $("<div2>").addClass("divTableCell").html(element.id);
                        var divCellTitle = $("<div2>").addClass("divTableCell").html(element.title);
                        var divCellBody = $("<div2>").addClass("divTableCell").html(element.body);
                        divRow.append( divCellId, divCellTitle, divCellBody );
                        $(".divTableBody").append(divRow);
                    });
                }
            });
        });

    } // if ( tempId > 0 && tempId < 11 )
    else {

        alert ("The user ID is not maching.");
    } //  else

});

$(function () {
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: 'json',
        success: function (data) {
            $.each(data, function(index, element) {
                $("#jsonTable").append($("<p>").html(element.id));
                var divRow = $("<div2>").addClass("divTableRow");
                var divCellId = $("<div2>").addClass("divTableCell").html(element.id);
                var divCellTitle = $("<div2>").addClass("divTableCell").html(element.title);
                var divCellBody = $("<div2>").addClass("divTableCell").html(element.body);
                divRow.append( divCellId, divCellTitle, divCellBody );
                $(".divTableBody").append(divRow);
            });
        }
    });
});



