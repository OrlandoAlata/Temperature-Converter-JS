function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function describeTemperature(celsius) {
  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else if (celsius >= 40) {
    return "very hot";
  }
}

let fahrenheitInput = prompt("Enter any sort of temperature in Fahrenheit:");
let fahrenheit = Number(fahrenheitInput);
let celsius = convertToCelsius(fahrenheit);
let description = describeTemperature(celsius);

alert(
  `${fahrenheit} F comes out to ${celsius.toFixed(
    1
  )} C, that is ${description}!!`
);
