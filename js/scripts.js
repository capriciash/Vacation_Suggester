$(document).ready(function() {
  $("form#survey").submit(function() {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var ageInput = parseInt($("#age").val());
    var personalityInput= $("#personality").val();
    var childrenInput = $("#children").val();
    var pastimeInput = $("#pastime").val();
    var weatherInput = $("#weather").val();
    var landscapeInput = $("#landscape").val();
    var drinkInput = $("#drink").val();

    $("#name").text(nameInput);

    if (ageInput <= 16 || childrenInput === "yes") {
      $("#disneyland").show();
      }

// Hide all of the top materials
//add picture to each destination

//all of the locations still needing to be assigned
//    $("#cancun").show();
//    $("#yellowstone").show();
//    $("#egypt").show();
//    $("#london").show();
//    $("#florence").show();
//    $("#switzerland").show();


  });
});
