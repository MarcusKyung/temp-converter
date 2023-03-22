// To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.

function convert(number1) {
  return (number1 * 1.8) + 32
  
}

const number1 = parseInt(prompt("Enter a temperature in Celsius"));

window.alert("Your temperature in Farenheit is " + convert(number1));