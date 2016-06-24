$(document).ready(function() {
  $("form#survey").submit(function(event) {
    $("#instructions").hide();
    $("#survey").hide();

    event.preventDefault();
    var nameInput = $("input#name").val();
    var ageInput = parseInt($("#age").val());
    var personalityInput= $("input:radio[name=personality]:checked").val();
    var childrenInput = $("input:radio[name=children]:checked").val();
    var outdoorInput = $("input:radio[name=outdoor]:checked").val();
    var weatherInput = $("input:radio[name=weather]:checked").val();
    var landscapeInput = $("input:radio[name=landscape]:checked").val();
    var drinkInput = $("input:radio[name=drink]:checked").val();

    $(".name").text(nameInput);

    if (ageInput <= 16) {
      $("#disneyland").show();
    } else if (drinkInput === "tea" && landscapeInput === "city") {
      $("#london").show();
    } else if (outdoorInput === "skiing" || weatherInput === "snowy" || landscapeInput === "mountains") {
      $("#switzerland").show();
    } else if (landscapeInput === "desert" || weatherInput === "hot") {
      $("#egypt").show();
    } else if (drinkInput === "wine" || personalityInput === "artsy") {
      $("#florence").show();
    } else if (landscapeInput === "trees" || outdoorInput === "hiking") {
      $("#yellowstone").show();
    } else if (drinkInput === "frozen" && landscapeInput === "ocean" || weatherInput === "tropical") {
      $("#cancun").show();
    } else if (childrenInput === "yes") {
      $("#disneyland").show();
    } else {
      $("#cancun").show();
    }

  });
});
