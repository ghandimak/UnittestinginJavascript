function processNumbers(jsonData) {
    // Extract the "numbers" property from the JSON object
    const { numbers } = jsonData;
  
    // Calculate the maximum number using Math.max() function
    const maxNumber = Math.max(...numbers);
  
    // Calculate the total sum using the reduce() function
    const sum = numbers.reduce((acc, num) => acc + num, 0);
  
    // Create an object containing the maximum number and the total sum
    const result = {
      maxNumber,
      sum,
    };
  
    // Return the result object
    return result;
  }
  
  module.exports = processNumbers;