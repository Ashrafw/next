export const sumOfEvenFibNum = (limit: string) => {
  var sum = 0;
  var fibPrev = 1;
  var fibCurr = 1;
  var count = 1;
  var nth = 2;

  while (count <= parseInt(limit)) {
    var fibNext = fibPrev + fibCurr;
    fibPrev = fibCurr;
    fibCurr = fibNext;
    nth++;
    if (fibCurr % 2 === 0) {
      sum += fibCurr;
      count++;
    }
  }
  var seq = fibonacciSequence(nth);
  return { sum, seq };
};
function fibonacciSequence(n: number) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    var sequence = [1, 1];
    for (var i = 2; i < n; i++) {
      var nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
    return sequence;
  }
}
/////////////////////////////////////////////////////////

export function findSharedNumbers(arr1: number[], arr2: number[]) {
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
// var array1 = [1, 2, 3, 4, 5];
// var array2 = [3, 4, 5, 6, 7];
// var result = findSharedNumbers(array1, array2);
// console.log(result);

/////////////////////////////////////////////////////////

export function containEvenNum(number: string) {
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

// var num1 = 24268;
// console.log(containEvenNum(num1));

// var num2 = 133579;
// console.log(containEvenNum(num2));

/////////////////////////////////////////////////////////

export function fourDigitAddition(val: string) {
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
    console.log("Error: value should be a single digit");
    return "Error: value should be a single digit";
  }
}

// var value = fourDigitAddition(3);
// console.log(value);
// value = fourDigitAddition(12);
// console.log(value);
