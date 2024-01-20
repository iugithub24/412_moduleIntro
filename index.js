const result = require('./Distance');

console.log(`${30} feet is ${result.calculate('feet', 30)} meters.`);
console.log(`${30} meters is ${result.calculate('meters', 30)} feet.`);
console.log(`${30} miles is ${result.calculate('miles', 30)} kilometers.`);
console.log(`${30} kilometers is ${result.calculate('kilometers', 30)} miles.`);