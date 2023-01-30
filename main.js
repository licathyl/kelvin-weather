// Create a constant variable named kelvin that is equal to 293
const kelvin = 293;

// Create a variable named celsius that subtracts 273 from kelvin
let celsius = kelvin - 273;

// Create a variable named fahrenheit with the correct equation
let fahrenheit = celsius * (9 / 5) + 32;

// Use .floor() method to round down fahrenheit, then save in the fahrenheit variable
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Create a variable named newton and use the correct equation
let newton = celsius * (33 / 100);

// Round down newton using the .floor() method
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
