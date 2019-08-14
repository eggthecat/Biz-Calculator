// BUSINESS CALCULATOR
var add = function(number1, number2){
return number1 + number2
}

var subtract = function (number1, number2) {
  return number1 - number2
}

var multiply = function (number1, number2) {
  return number1 * number2
}

var divide = function (number1, number2) {
  return number1 / number2
}


var number1 = parseInt(prompt("Enter a number:"))
var number2 = parseInt(prompt("Enter another number:"))
var result = (add(number1,number2))
var result2 = (subtract(number1,number2))
var result3 = (multiply(number1,number2))
var result4 = (divide(number1,number2))
alert(result + ", " + result2 + ", " + result3 + ", & " + result4);


// BMI Calculator
var bmi = function(number1, number2){
  return number1 / (number2 * 2)
}

var number1 = parseInt(prompt("Enter your weight in kilograms(don't lie):"))
var number2 = parseFloat(prompt("Enter your height in meters:"))

var result = (bmi(number1,number2))
alert(result)
