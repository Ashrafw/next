export const code1 = `function sumOfEvenFibNum(limit) {
    var sum = 0;
    var fibPrev = 1;
    var fibCurr = 1;
    var count = 1;
  
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
  
  var limit = 100;
  var sum = sumOfEvenFibNum(limit);
  console.log(sum); `;
export const code2 = `function findSharedNumbers(arr1, arr2) {
    var sharedNumbers = [];
    var i = 0;
    var j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        if (sharedNumbers.length === 0 || sharedNumbers[sharedNumbers.length - 1] !== arr1[i]) {
          sharedNumbers.push(arr1[i]);
        }
        i++;
        j++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
  
    return sharedNumbers;
  }
  var array1 = [1, 2, 3, 4, 5];
  var array2 = [3, 4, 5, 6, 7];
  var result = findSharedNumbers(array1, array2);
  console.log(result);`;
export const code3 = `function containEvenNum(number) {

    var numberString = number.toString();
  
  
    for (var i = 0; i < numberString.length; i++) {
      var digit = parseInt(numberString[i]);
  
      // Check odd
      if (digit % 2 !== 0) {
        return false; // Found an odd digit, return false
      }
    }
  
    return true; // No odd digits found, return true
  }
  
  var num1 = 24268;
  console.log(containEvenNum(num1));
  
  var num2 = 133579;
  console.log(containEvenNum(num2));
  `;
export const code4 = `function fourDigitAddition(val) {
    // Convert the digit to a string
    var digit = val.toString();
    if (digit.length === 1) {
      // Calculate the four parts of the expression
      var part1 = Number(digit);
      var part2 = Number(digit + digit);
      var part3 = Number(digit + digit + digit);
      var part4 = Number(digit + digit + digit + digit);
  
      // Calculate the final result
      var result = part1 + part2 + part3 + part4;
  
      return result;
    } else {
      console.log('Error: value should be a single digit ');
      return 'Error: value should be a single digit ';
    }
  }
  
  var value = fourDigitAddition(3);
  console.log(value);
  value = fourDigitAddition(12);
  console.log(value);`;
