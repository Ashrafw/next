export const code1 = `function sumOfEvenFibonacciNumbers(limit) {
    var sum = 0;
    var fibPrev = 1;
    var fibCurr = 1;
    var count = 2; // Starting count from 2 since we already have f(0) and f(1)
  
    while (count <= limit) {
      var fibNext = fibPrev + fibCurr;
      fibPrev = fibCurr;
      fibCurr = fibNext;
  
      if (fibCurr % 2 === 0) {
        sum += fibCurr;
        count++;
      }
    }
    return sum;
  }
  
  var limit = 10;
  var sum = sumOfEvenFibonacciNumbers(limit);
  console.log(sum); // Output: sum of the first 100 even-valued Fibonacci numbers
  `;
export const code2 = `function findCommonNumbers(arr1, arr2) {
    var commonNumbers = [];
    var i = 0;
    var j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        if (commonNumbers.length === 0 || commonNumbers[commonNumbers.length - 1] !== arr1[i]) {
          commonNumbers.push(arr1[i]);
        }
        i++;
        j++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
  
    return commonNumbers;
  }
  var array1 = [1, 2, 3, 4, 5];
  var array2 = [3, 4, 5, 6, 7];
  var result = findCommonNumbers(array1, array2);
  console.log(result); // Output: [3, 4, 5]
  `;
export const code3 = `function containsOnlyEvenDigits(number) {
    // Convert the number to a string
    var numberString = number.toString();
  
    // Iterate through each digit in the string
    for (var i = 0; i < numberString.length; i++) {
      var digit = parseInt(numberString[i]);
  
      // Check if the digit is odd
      if (digit % 2 !== 0) {
        return false; // Found an odd digit, return false
      }
    }
  
    return true; // No odd digits found, return true
  }
  
  var num1 = 2468;
  console.log(containsOnlyEvenDigits(num1)); // Output: true
  
  var num2 = 13579;
  console.log(containsOnlyEvenDigits(num2)); // Output: false`;
export const code4 = `function calculateValue(X) {
    // Convert the digit to a string
    var digit = X.toString();
  
    // Calculate the four parts of the expression
    var part1 = Number(digit);
    var part2 = Number(digit + digit);
    var part3 = Number(digit + digit + digit);
    var part4 = Number(digit + digit + digit + digit);
  
    // Calculate the final result
    var result = part1 + part2 + part3 + part4;
  
    return result;
  }
  
  var digit = 3;
  var value = calculateValue(digit);
  console.log(value);
  `;
