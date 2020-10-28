// Create a function to reverse a number.

function reverseNumber(number) {
  if (typeof 1 === typeof number) {
    number = number.toString();
    numberArr = number.split("");
    numberArr.reverse();
    reverseNum = numberArr.join("");
    reverseNum = reverseNum * 1;
    return reverseNum;
  } else {
    return `${number} is not a number!`;
  }
}

console.log(reverseNumber(647));

// Create a function to sort a string into alphabetical order.

//! this idea was a lot of fun! if you can solve it using that idea id love to know how

// function toAlphabeticalOrder(string) {
//   if (typeof "" === typeof string) {
//     string = string.toLowerCase();

//     for (let x = 0; x <= string.length - 1; x++) {
//       const stringArr = [];
//       const forgetThis = [];
//       toCheck = string[x];
//       console.log(toCheck);
//       if (toCheck.charCodeAt() >= 97 && toCheck.charCodeAt() <= 122) {
//         stringArr.push(toCheck);
//         console.log(stringArr);
//       } else {
//         forgetThis.push(toCheck);
//       }
//     }
//   }
//}
//   else {
//     return `${string} is not a string`;
// }
// console.log(toAlphabeticalOrder("Hello"));

//! end cool idea

function orderLetter(word) {
  wordArr = word.split("");
  wordArr.sort();
  output = wordArr.join("");
  return output;
}

console.log(orderLetter("hekki"));

// Create a function which accepts two arguments, an array of numbers and a number.The function should return the elements of the array which are greater than the second argument.
//! dont really understand this second argument bit
function findGreatest(arr1, num1) {
  let arr1Greatest = 0;
  for (let i = 0; i < 3; i++) {
    if (arr1[i] > arr1Greatest) {
      arr1Greatest = arr1[i];
    }
  }

  if (arr1Greatest > num1) {
    return arr1Greatest;
  } else {
    return num1;
  }
}

console.log(findGreatest([8, 9, 3], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

// Create a function which calculates how old a dog is in doggie years.The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years.

function toDoggieYears(age) {
  return age * 7;
}

console.log(toDoggieYears(8));

// Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.

function lifetimeSupply(age, amountPerDay) {
  let maxAge = 80;
  let sum = maxAge - Math.round(age);
  console.log(sum);
  let amountPerYear = 365 * amountPerDay;
  console.log(amountPerYear);
  let supply = amountPerYear * sum;
  return supply;
}

console.log(lifetimeSupply(25, 2));

// Create a function to find the longest word in string.
function longestWord(string) {
  if (typeof "" === typeof string) {
    stringArr = string.split(" ");
    let longest = "";
    for (let i = 0; i < stringArr.length; i++) {
      if (stringArr[i].length > longest.length) {
        longest = stringArr[i];
      }
    }
    return longest;
  } else {
    return `this is not a string`;
  }
}

console.log(longestWord("we will rock you"));

// Create a function that takes a string in its parameters and counts the number of vowels in the string.
function howManyVowels(string) {
  if (typeof "" === typeof string) {
    const vowels = "aAeEiIoOuU";
    let numOfVowels = 0;
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        numOfVowels++;
      }
    }
    return numOfVowels;
  } else {
    return ` this is not a string`;
  }
}

console.log(`howManyVowels ==> `, howManyVowels("this is a string"));

// Create a function that detects the data type of the argument passed.
function whatDataType(dataType) {
  if (typeof "" === typeof dataType) {
    return `Type of argument is a string`;
  } else if (typeof 4 === typeof dataType) {
    return `Type of argument is a number`;
  } else if (typeof true === typeof dataType) {
    return `Type of argument is a boolean`;
  } else if (typeof undefined === typeof dataType) {
    return `Type of argument is a undefined`;
  } else {
    return `Type of argument is a null`;
  }
}

console.log(whatDataType(NaN));

// Create a function that accepts two arguments: a string and a letter.The function should count the number of occurrences of that letter in the string.
function countOccurrence(string, letter) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrence("this is a string", "i"));

// Create a function that counts the number of occurrences of each letter in a string.
function countLetterOccurance(string) {
  stringArr = string.split("");
  const letterArr = [];
  const numberArr = [];
  for (let i = 0; i < stringArr.length; i++) {
    if (letterArr.includes(stringArr[i]) === false) {
      let count = 0;
      for (let x = 0; x < stringArr.length; x++) {
        if (stringArr[i] === stringArr[x]) {
          count++;
        }
      }
      letterArr.push(`${stringArr[i]}`);
      numberArr.push(`: ${count}`);
    }
  }

  const output = [];
  for (let y = 0; y < letterArr.length; y++) {
    output.push(letterArr[y].concat(numberArr[y]));
  }

  return output.join(" ");
}

console.log(countLetterOccurance("helllllllo"));
