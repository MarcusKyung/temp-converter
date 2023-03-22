window.onload = function() {
  function convertC(number1) {
    return (number1 * 1.8) + 32 
  }

  function convertF(number1) {
    return (number1 - 32) * .5556
  }
  const number1 = parseInt(prompt("Enter a temperature"));

  let cel = document.querySelector("#cToF");
  cel.onclick = function() {
    window.alert("Your C temperature in Farenheit is " + convertC(number1));
  };

  let far = document.querySelector("#fToC");
  far.onclick = function() {
    window.alert("Your F temperature in Celsius is " + convertF(number1));
  };
};