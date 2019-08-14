// BUSINESS CALCULATOR
// Business (or back-end) logic
var add = function(number1, number2){
return number1 + number2;
};

var subtract = function (number1, number2) {
  return number1 - number2;
};

var multiply = function (number1, number2) {
  return number1 * number2;
};

var divide = function (number1, number2) {
  return number1 / number2;
};
// BUSINESS CALCULATOR
// Interface (or front-end) logic
$(document).ready(function(){
  $("form#add").submit(function(Event){
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    alert(add(number1, number2));
  })
});
