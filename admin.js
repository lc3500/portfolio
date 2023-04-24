function displayAddForm() {
    $("#addFormDiv").fadeToggle();
    $("#backdrop").fadeToggle();
}

function displayViewDiv() {
    $("#viewProjDiv").fadeToggle();
    $("#backdrop").fadeToggle();
}


$(document).ready(function() {
    //add form showing and hiding
    $("#addFormButt").click(displayAddForm);
    $("#addFormX").click(displayAddForm);
    
    $("#viewProjButt").click(displayViewDiv);
    $("#viewProjX").click(displayViewDiv);

});