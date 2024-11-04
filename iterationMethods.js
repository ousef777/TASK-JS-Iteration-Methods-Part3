const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

// 1) Write a `filterHighTemperatures` function that returns a new array containing temperatures greater than or equal to 25 degrees Celsius.
function filterHighTemperatures(temps) {
  // Your code here
  return temps.filter((value, index, array) => value >= 25);
}

// Write a `filterLowTemperatures` function that returns a new array containing temperatures less than 20 degrees Celsius.
function filterLowTemperatures(temps) {
  // Your code here
  return temps.filter((value, index, array) => value < 20);
}

// Write a `convertCelsiusToFahrenheit` function that converts the entire list of temperatures to Fahrenheit, and return it. Use the formula (Celsius * 9/5) + 32.
function convertCelsiusToFahrenheit(temps) {
  // Your code here
  return temps.map((value, index, array) => (value * 9 / 5) + 32);
}

// Write a `labelTemperatures` function that returns a new array that labels each temperature as either:
// "Warm" for temperatures >=25,
// "Mild" for temperatures between 20 and 24,
// "Cool" for temperatures <20
function labelTemperatures(temps) {
  // Your code here
  function mark(value, index, array) {
    if (value >= 25) return "Warm";
    if (value >= 20) return "Mild";
    else return "Cool";
  }
  return temps.map(mark);
}

// Write a `getMaxTemperature` function that calculates and return the highest temperature of the month.
function getMaxTemperature(temps) {
  // Your code here
  return Math.max.apply(null, temps);
}

// Write a `getMinTemperature` function that calculates and return the lowest temperature of the month.
function getMinTemperature(temps) {
  // Your code here
  return Math.min.apply(null, temps);
}

module.exports = {
  filterHighTemperatures,
  filterLowTemperatures,
  convertCelsiusToFahrenheit,
  labelTemperatures,
  getMaxTemperature,
  getMinTemperature,
};
