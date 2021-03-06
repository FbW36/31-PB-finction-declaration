// 1. Reverse
// Create a function to reverse a number.
// reverse(34532) -> expected output: 23543

function numberReverse(number) {
  number = number.toString().split("").reverse().join("");
  return number * 1;
}
console.log("Number reversed ==>", numberReverse(78934));

// 2. Alphabetical Order
// Create a function to sort a string into alphabetical order. Examples: <<<<<<< HEAD
// alphaOrder("webdev") -> expected output: "bdeevw"
// Note: Assume numbers, symbols and punctuation are not included in the string.

function stringToOrder(string) {
  string = string.split("").sort().join("");
  return string;
}
console.log("stringToOrder ==>", stringToOrder("helloworld"));

// 3. The Greater Numbers
// Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument. Examples:
// findGreatest([3, 4, 5], 4); // -> expected output: 5
//findGreatest([10, 20, 30], 12); //-> expected output: 20, 30
//findGreatest([0, 10, 3], 4); //-> expected output: 10

function findGreatest1(num1, num2) {
  let box = [];
  for (let i = 0; i < 3; i++) {
    if (num1[i] > num2) {
      box.push(num1[i]);
    }
  }
  return box.join(", ");
}
console.log("The greater number or numbers ==>", findGreatest1([3, 4, 5], 4));
console.log(
  "The greater number or numbers ==>",
  findGreatest1([10, 20, 30], 12)
);
console.log("The greater number or numbers ==>", findGreatest1([0, 10, 3], 4));

// 4. Dog Years
// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years.

function dogAge(num1) {
  num1 = num1 * 7;
  return num1;
}
console.log(`Your doggo is ${dogAge(4)} years old in human years!`);

// 5. A Lifetime Supply...
// Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
let age = 80;
function calcSupply(num1, num2) {
  let num3 = (age - num1) * 365 * num2;
  return num3;
}

console.log(
  `You will need ${calcSupply(
    35,
    2
  )} bars of chocolate (2 a day) to last you till the age of ${age}.`
);
console.log(
  `You will need ${calcSupply(
    40,
    3
  )} bars of chocolate (3 a day) to last you till the age of ${age}.`
);

// 6. For the longest word
// Create a function to find the longest word in string. Examples:
// longestWord("this is a web development course") -> expected output: "development"
function longest(string) {
  let longestWord = "";
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    let individualWords = words[i];
    if (individualWords.length > longestWord.length) {
      longestWord = individualWords;
    }
  }
  return `the longest word in this string is ${longestWord}`;
}

console.log(longest("this is a web development course"));

// 7. AEIOU: Vowels
// Create a function that takes a string in its parameters and counts the number of vowels in the string. Examples:
// findVowels("this is a string") -> expected output: 4 vowels found
function howManyVowels(numx) {
  let vowelsAdded = numx.match(/[aeiou]/gi);
  return vowelsAdded === null ? 0 : vowelsAdded.length;
}
console.log("How many vowels => ", howManyVowels("Helloworld") + " vowels!");

// 8. Data Types
// Create a function that detects the data type of the argument passed.
// detectType("hello") -> expected output: type of argument is a string.
// detectType(4) -> expected output: type of argument is a number.
function detectType(type) {
  return typeof type;
}
console.log("Type of argument is a  => ", detectType("value"));

// 9. Count Occurrences
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
// countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3
function countOccurrences(string, letter) {
  let number = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      number += 1;
    }
  }
  return `occurrences of ${letter}: ${number}`;
}
console.log(countOccurrences("this is a string", "i"));

// 10. Counting Letters
// Create a function that counts the number of occurrences of each letter in a string.
// countLetters("tree") -> expected output: t: 1, r: 1, e: 2
function countLetters(str) {
  let howMany = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    howMany[letter] = howMany[letter] + 1 || 1;
  }
  return howMany;
}
console.log(countLetters("javjavjvascrippptt"));
