$(document).ready(function() {
  $("form#survey").submit(function() {
    $("#instructions").remove();
    event.preventDefault();
    var nameInput = $("input#name").val();
    var ageInput = parseInt($("#age").val());
    var personalityInput= $("input:radio[name=personality]:checked").val();
    var childrenInput = $("input:radio[name=children]:checked").val();
    var pastimeInput = $("input:radio[name=pastime]:checked").val();
    var weatherInput = $("input:radio[name=weather]:checked").val();
    var landscapeInput = $("input:radio[name=landscape]:checked").val();
    var drinkInput = $("input:radio[name=drink]:checked").val();

    $(".name").text(nameInput);

    if (ageInput <= 16 || childrenInput === "yes") {
      $("#disneyland").show();
    } else if (drinkInput === "tea") {
      $("#london").show();
    }



// Hide all of the top materials
//add picture to each destination
//get the name to be inserted into response

//all of the locations still needing to be assigned
//    $("#cancun").show();
//    $("#yellowstone").show();
//    $("#egypt").show();
//    $("#london").show();
//    $("#florence").show();
//    $("#switzerland").show();


  });
});
