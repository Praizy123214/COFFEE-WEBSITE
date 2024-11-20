// Define the first function and assign it to a variable
const Kelechi = function (param1, param2, param3, param4, param5) {
  // Step 2a: Define a variable as "param1 + param2"
  let variable = param1 + param2;

  // Step 2b: Define another variable as "param4 + 2"
  let secondVariable = param4 + 2;

  // Step 2c: Conditional logic
  if (1 <= param5) {
    variable = param2 + param5; // Reassign variable
    return variable;
  } else if (variable === param1 + param2) {
    variable = 2 + 2; // Reassign variable
    return Dave(param1, param2, param3, param4, param5);
  }

  return variable;
};

// Call the function using the variable with 5 arguments
let result = Kelechi(10, 20, 30, 40, 12);

// Display the result using console.log
console.log("Kelechi is:", result);

// Define the second function
const Balance = function (param1, param2, param3, param4, param5) {
  // Step 3a: Return a value of your choice
  return "This is the second function's result.";
};

// Define the third function
const Dave = function (param1, param2, param3, param4, param5) {
  // Step 3a: Return a value of your choice
  return "This is the Dave result.";
};

// Example usage of the second and third functions
let secondResult = Balance(1, 2, 3, 4, 5);
let thirdResult = Dave(2, 3, 2, 3, 5);

// Display results of the second and third functions
console.log("The result from Balance is:", secondResult);
console.log("The result from Dave is:", thirdResult);
