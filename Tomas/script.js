let log = console.log;

// Create a function to reverse a number.
let numbers = "34532";
function reverseNumbers(string) {
  let numbersReversed = string.split("").reverse().join("");
  return numbersReversed;
}
log("numbers reversed -->", reverseNumbers(numbers));

// Create a function to sort a string into alphabetical order
let str = "webdev";
function orderAlphabetically(string) {
  let reorderedStr = string.split("").sort().join("");
  return reorderedStr;
}
log("string in alphabetical order -->", orderAlphabetically(str));

// Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument
const numArr = [3, 4, 5, 2, 101, 0, -89, 98];
function findGreatest(arr, num) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      log("Greater then num:", arr[i]);
    }
  }
}
findGreatest(numArr, 4);

// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age
let ageOfTheDog = 9;
function calcDogAge(age) {
  let realToDoggy = age * 7;
  return realToDoggy;
}
log(`Your dog feels like he's ${calcDogAge(ageOfTheDog)}.`);

// Create a function to calculate how much you'll need for a lifetime supply of your favorite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age
function calcSupply(myAge, SPD) {
  let lifetimeSupply = (80 - myAge) * 365 * SPD;
  return lifetimeSupply;
}

log(`You need ${calcSupply(30, 3)} snickers to make it through your life.`);

// Create a function to find the longest word in string
let aRhyme = "America I've given you all and now I'm nothing";
let longestWord = "";
function giveLongestWord(str) {
  let strToArr = str.split(" ");
  for (i = 0; i < strToArr.length; i++) {
    if (longestWord.length < strToArr[i].length) {
      longestWord = strToArr[i];
    }
  }
  return longestWord;
}
console.log(giveLongestWord(aRhyme));

// Create a function that takes a string in its parameters and counts the number of vowels in the string
let someVowels = "The end is the beginning is the end";
let vowels = [];
function returnVowels(str) {
  const strToArr = str.toLocaleLowerCase().split("");
  for (i = 0; i < strToArr.length; i++) {
    if (
      strToArr[i] === "a" ||
      strToArr[i] === "e" ||
      strToArr[i] === "i" ||
      strToArr[i] === "o" ||
      strToArr[i] === "u"
    ) {
      vowels.push(strToArr[i]);
    }
  }
  log("count of vowels ==>", vowels.join("").length);
}
returnVowels(someVowels);

// Create a function that detects the data type of the argument passed
let toCheck = NaN;
function checkTypeOf(myVar) {
  let dataType = typeof myVar;
  return dataType;
}
log("data type ==>", checkTypeOf(toCheck));

// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string
let aRhyme2 = "America stop pushing I know what I’m doing.";
let letters = [];
function countLetters(str1, str2) {
  const strToArr = str1.toLocaleLowerCase().split("");
  for (i = 0; i < strToArr.length; i++) {
    if (str2 === strToArr[i]) {
      letters.push(strToArr[i]);
    }
  }
  log(letters.length);
}
countLetters(aRhyme2, "i");

// Create a function that counts the number of occurrences of each letter in a string
let stringhh = "Mississippi";
function countLetters(str) {
  const strToArr = str.toLowerCase().split("").sort();
  let counter = 1;
  let result = "result = ";
  for (i = 0; i < strToArr.length; i++) {
    if (strToArr[i] == strToArr[i + 1]) {
      counter++;
    } else {
      result = result + `${strToArr[i]}: ${counter} | `;
      counter = 1;
    }
  }
  return result;
}
console.log(countLetters(stringhh));
