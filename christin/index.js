//1.Reverse
// Create a function to reverse a number.
//Examples:reverse(34532) -> expected output: 23543

function numberReverse() {
  let numbers = 84337;
  let array = numbers.toString().split("");
  array.reverse();
  let joinArray = parseInt(array.join(""));
  return joinArray;
}
console.log(numberReverse());

// 2. Alphabetical Order
//Create a function to sort a string into alphabetical order.Examples: <<<<<< < HEAD

//alphaOrder("webdev") -> expected output: "bdeevw"

//Note: Assume numbers, symbols and punctuation are not included in the string.

function getAlphabeticalOrder() {
  let string = "development";
  let sortString = string.split("");
  sortString.sort();
  let joinString = sortString.join("");
  return joinString;
}

console.log(getAlphabeticalOrder());

//? 3. The Greater Numbers
//?Create a function which accepts two arguments, an array of numbers and a number.The function should return the elements of the array which are greater than the second argument.Examples:*/

//findGreatest([3, 4, 5], 4) -> expected output: 5
//findGreatest([10, 20, 30], 12) -> expected output: 20, 30
//findGreatest([0, 10, 3], 4) -> expected output: 10

let box = [];

function getGreatestNumber(numb2, startNum) {
  for (let i = 0; i > 3; i++) {
    if (numb2[i] > startNum) {
      box.push(numb2[i]);
    }
  }
  return box;
}

console.log(getGreatestNumber([10, 12, 27], 12));

//? 4. Dog Years
//Create a function which calculates how old a dog is in doggie years.The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years.

//Example

//dogAge(4) -> expected output example: "Your doggo is 28 years old in human years!"

function calcDogYears(age) {
  let humanYears = age * 7;
  return `you Doggy is ${humanYears} old in human.`;
}

console.log(calcDogYears(8));

//? 5. A Lifetime Supply...
// Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.

//Examples:
// calcSupply(25, 2) -> expected output: You will need 40, 150 bars of chocolate/
/*(2 a day) to last you till the age of 80.
calcSupply(40, 3) -> expected output: You will need 43, 800 packets of crisps(3 a day) to last you till the age of 80.*/

function calcSupply(age, amount) {
  const maxAge = 70;

  let supply = (maxAge - age) * 365 * amount;
  return Math.round(supply);
}

console.log(calcSupply(30, 0.9));

// Bonus - A lifetime supply Accept floating point values for amount per day and round the result.

// --------------------------------

//? 6. For the longest word
// Create a function to find the longest word in string.Examples:
//longestWord("this is a web development course") -> expected output: "development"

function getLongestWord(string) {
  //let string = "We will rocking you";
  let stringArray = string.split(" ");
  let longestString = "";

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longestString.length) {
      longestString = stringArray[i];
    }
  }
  return longestString;
}

console.log(getLongestWord("We will rocky you"));

// let longestWord = Math.max(stringArray.length);
// console.log(longestWord);

//?7. AEIOU: Vowels
//Create a function that takes a string in its parameters and counts the number of vowels in the string.Examples:

//findVowels("this is a string") -> expected output: 4 vowels found
//Notes: vowels are "a, e, i, o u".

function getVowels(song) {
  const vowels = "aAeEiIoOuU";
  let counts = 0;
  for (let i = 0; i < song.length; i++) {
    if (vowels.includes(song[i])) {
      counts++;
    }
  }
  return counts;
}
console.log(getVowels("I ve been looking for freedom"));

//? 8. Data Types
//Create a function that detects the data type of the argument passed.

// Examples:

//detectType("hello") -> expected output: type of argument is a string.//detectType(4) -> expected output: type of argument is a number.

function getDataType(input) {
  let dataType = typeof input;
  return `Type of argument is ${dataType}`;
}

console.log(getDataType("vier"));

//9. Count Occurrences
//Create a function that accepts two arguments: a string and a letter.The function should count the number of occurrences of that letter in the string.
/* Examples:

 countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3*/

function getOccurences(song2, letter) {
  let letterInSong = 0;
  for (let i = 0; i < song2.length; i++)
    if (letter === song2[i]) {
      letterInSong++;
    }
  return letterInSong;
}

console.log(getOccurences("rack city bitch", "b"));

//10. 10. Counting Letters
// Create a function that counts the number of occurrences of each letter in a string.

//Examples:
//countLetters("tree") -> expected output: t: 1, r: 1, e: 2

function getAmountLetters(word) {
  let letterAmount = 0;
  let letters;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i]) {
      letterAmount++;
      return `${word[i]}: ${letterAmount}`;
    }
  }
}
console.log(getAmountLetters("marie"));
