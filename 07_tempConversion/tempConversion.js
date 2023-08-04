const convertToCelsius = function(num) {

  let celsius = (num - 32) * 5 / 9

  console.log(celsius.toFixed(1));
  
  return parseFloat(celsius.toFixed(1))
  
};

// convertToCelsius(75);

const convertToFahrenheit = function(num) {
  
  let fahrenheit = num * 9 / 5 + 32 
  
  console.log(fahrenheit.toFixed(1));
  
  return parseFloat(fahrenheit.toFixed(1))

};

// convertToFahrenheit(23.9);

// To celsius : x °F ≘ (x − 32) × 5/9 °C

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
