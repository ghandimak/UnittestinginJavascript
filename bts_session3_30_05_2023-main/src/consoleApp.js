const helloWorldFunction = require("./helloWorld.js");

// Call/Invoke the function
const response = helloWorldFunction();

// Log the response in the console
const text = JSON.stringify(response);
console.log(text);
