// #### 1. Reverse
// Create a function to reverse a number.

// Examples:
// * reverse(34532) -> expected output: 23543

function reverse(num1) {
  let toStringSplitRevJoin = num1.toString().split("").reverse().join("");

  return toStringSplitRevJoin;
}
console.log("reverse :>> ", reverse("9087"));

// #### 2. Alphabetical Order
// Create a function to sort a string into alphabetical order.
// Examples:
// <<<<<<< HEAD
// * alphaOrder("webdev") -> expected output: "bdeevw"

// * Note: Assume numbers, symbols and punctuation are not included in the string.

function alphaOrder(string) {
  let alphaOrder = string.split("").sort().join("");

  return alphaOrder;
}

console.log("alphaOrder :>> ", alphaOrder("Miswebos"));

// #### 3. The Greater Numbers
// Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument.
// Examples:
// * findGreatest([3, 4, 5], 4) -> expected output: 5
// * findGreatest([10, 20, 30], 12) -> expected output: 20, 30
// * findGreatest([0, 10, 3], 4) -> expected output: 10

function findGreatest(array, number) {
  let biggerNum = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      //   console.log("array[i] :>> ", array[i]);
      biggerNum.push(array[i]);
    }
  }
  return biggerNum;
}

console.log("findGreatest :>> ", findGreatest([3, 4, 5], 4));
console.log("findGreatest :>> ", findGreatest([10, 20, 30], 12));
console.log("findGreatest :>> ", findGreatest([0, 10, 3], 4));

// #### 4. Dog Years
// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years.

// Example
// * dogAge(4) -> expected output example: "Your doggo is 28 years old in human years!"

function dogAge(input) {
  let doggy = input * 7;
  return `Your doggo is ${doggy} years old in human years!`;
}
console.log("dogAge(8) :>> ", dogAge(8));

// #### 5. A Lifetime Supply...
// Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.

// Examples:
// * calcSupply(25, 2) -> expected output: You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80.
// * calcSupply(40, 3) -> expected output: You will need 43,800 packets of crisps  (3 a day) to last you till the age of 80.

let deadlyAge = 80;

function calcSupply(actualAge, bars) {
  let days = (deadlyAge - actualAge) * 365;
  let total = days * bars;

  return `You will need ${total} bars of chocolate (${bars} a day) to last you till the age of ${deadlyAge}`;
}
console.log("calcSupply(34,3) :>> ", calcSupply(34, 3.9));

// **Bonus - A lifetime supply**
// Accept floating point values for amount per day and round the result.

// #### 6. For the longest word
// Create a function to find the longest word in string.
// Examples:
// * longestWord("this is a web development course") ->  expected output: "development"
// let string = "this is a web development course";

let longestWordStr = "";

function longestWord(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let wordsCheck = words[i].length;

    if (words[i].length > words.length) {
      longestWordStr = words[i];
      return longestWordStr;
    }
  }
}
console.log(longestWord("this is a web development course"));

// #### 7. AEIOU: Vowels
// Create a function that takes a string in its parameters and counts the number of vowels in the string.
// Examples:
// * findVowels("this is a string") -> expected output: 4 vowels found

// * Notes: vowels are "a, e, i, o u".

function findVowels(str) {
  let splitStr = str.split("");
  let vowels = [];

  for (let i = 0; i < splitStr.length; i++) {
    if (
      splitStr[i] == "a" ||
      splitStr[i] == "e" ||
      splitStr[i] == "i" ||
      splitStr[i] == "o" ||
      splitStr[i] == "u"
    ) {
      vowels.push(splitStr[i]);
    }
  }
  console.log("vowels found :>> ", `${vowels.length} vowels found`);
}
findVowels("this is a string");

// findVowels("this is a string");
// #### 8. Data Types
// Create a function that detects the data type of the argument passed.

// Examples:
// * detectType("hello") -> expected output: type of argument is a string.
// * detectType(4) -> expected output: type of argument is a number.

function detectType(target) {
  let typeOfTarget = typeof target;
  console.log("typeOfTarget :>> ", typeOfTarget);
}
detectType(8);
detectType("papapa");
detectType(["i", 0]);
// #### 9. Count Occurrences
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Examples:
// * countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3

function countOccurrences(str, letter) {
  let boxLetters = [];
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      boxLetters.push(str[i]);
    }
  }
  console.log(`Occurrnces of ${letter}: ${boxLetters.length}`);
}

countOccurrences("this is a string", "i");
countOccurrences("radikal people are needed", "e");

// #### 10. Counting Letters
// Create a function that counts the number of occurrences of each letter in a string.

// Examples:
// * countLetters("tree") -> expected output: t: 1, r: 1, e: 2

function countLetters(string) {
  const stringArray = string.split("").sort();
  let counter = 1;
  let newString = "";
  for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i] == stringArray[i + 1]) {
      counter++;
    } else {
      newString = newString + stringArray[i] + ":" + counter + " ";
      counter = 1;
    }
  }
  return newString;
}
console.log(countLetters("suputamadre"));
