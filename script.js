
//sets time
var currentDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(currentDay);

//event listener for save button. 
$(document).ready(function(){
    $("button").click(function() {
        // gets the text value
        var task = $(this).siblings()[1].value;
        var id = $(this).siblings()[1].getAttribute('id');
        localStorage.setItem(id, task);
    });
    //saves text area to local storage
    var h09Task = localStorage.getItem("h09");
    var h10Task = localStorage.getItem("h10");
    var h11Task = localStorage.getItem("h11");
    var h12Task = localStorage.getItem("h12");
    var h13Task = localStorage.getItem("h13");
    var h14Task = localStorage.getItem("h14");
    var h15Task = localStorage.getItem("h15");
    var h16Task = localStorage.getItem("h16");
    var h17Task = localStorage.getItem("h17");
    var h18Task = localStorage.getItem("h18");
    //calls necessary saved values to from local storage.
    $("#h09").val(h09Task);
    $("#h10").val(h10Task);
    $("#h11").val(h11Task);
    $("#h12").val(h12Task);
    $("#h13").val(h13Task);
    $("#h14").val(h14Task);
    $("#h15").val(h15Task);
    $("#h16").val(h16Task);
    $("#h17").val(h17Task);
    $("#h18").val(h18Task);


});

//sets the necessary colour block based on hour of day. 
var elements = $(".time-block");
var today = new Date();
var h = today.getHours();


for (i = 0; i < elements.length; i++) {
    var t = parseInt(elements[i].getAttribute("data-hour"));

    if (h < t) {
        elements[i].classList.add('future');
        elements[i].classList.remove('past');
        elements[i].classList.remove('present');
    }  else if (h > t) {
        elements[i].classList.add('past');
        elements[i].classList.remove('future');
        elements[i].classList.remove('present');
    } else if (h === t) {
        elements[i].classList.add('present');
        elements[i].classList.remove('future');
        elements[i].classList.remove('past');
    } else if (h > 16 && h < 9) {
        elements[i].classList.add('future');
        elements[i].classList.remove('past');
        elements[i].classList.remove('present');
    }
}

