//* 1. Reverse
//? Create a function to reverse a number.
// Examples:
// reverse(34532) -> expected output: 23543
let numberToReverse = 34532;

function numberReverser(number) {
	let numberString = number + "";
	
	let newNumberString = "";

	let length = numberString.length;

	for (let i = length - 1; i >= 0; i--) {
		newNumberString = newNumberString.concat(numberString[i]);
	}
	let reversedNumber = Number(newNumberString);
	return reversedNumber;
}

console.log(`reversed ${numberToReverse}: ${numberReverser(numberToReverse)}`); // 23543


//* 2. Alphabetical Order
//? Create a function to sort a string into alphabetical order. Examples:
// alphaOrder("webdev") -> expected output: "bdeevw"
// Note: Assume numbers, symbols and punctuation are not included in the string.

let stringToSort = "webdev";

function alphabeticalSorter(string) {
	let sortedString = string.split("").sort().join("");
	return sortedString;
}
console.log(alphabeticalSorter(stringToSort));


//* 3. The Greater Numbers
//? Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument. Examples:

function findGreaterNumbers(arr, num) {
	let greaterNumbers = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > num) {
			greaterNumbers.push(arr[i]);
		}
	}
	return greaterNumbers;
}

// console.log(findGreaterNumbers([3, 4, 5], 4)); // output: 5
// console.log(findGreaterNumbers([10, 20, 30], 12)); // output: 20, 30
console.log(findGreaterNumbers([0, 10, 3], 4)); // output: 10


//* 4. Dog Years
//? Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years.

function dogAgeConverter(humanYears) {
	let dogYears = humanYears * 7;
	return `Your doggo is ${dogYears} years old in dog years!`;
}
console.log(dogAgeConverter(4)); // output: "Your doggo is 28 years old in dog years!"

//* 5. A Lifetime Supply...
//? Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
// Bonus - A lifetime supply Accept floating point values for amount per day and round the result.

const maxAge = 80;
let favoriteSnack = "chlorella bar";

function calcSupply(age, dailyAmount) {
	let lifetimeSupply = Math.round((maxAge - age) * 365 * dailyAmount);
	return `You will need around ${lifetimeSupply} ${favoriteSnack}s (${dailyAmount} a day) to last you till the age of ${maxAge}.`;
}

// console.log(calcSupply(25, 2)); // output: You will need around 40150 chlorella bars (2 a day) to last you till the age of 80.
// console.log(calcSupply(40, 3)); // output: You will need around 43800 chlorella bars (3 a day) to last you till the age of 80.
console.log(calcSupply(34, 1.25)); // output: You will need around 20988 chlorella bars (1.25 a day) to last you till the age of 80.


//* 6. For the longest word
//? Create a function to find the longest word in string.

// version A

let stringOfWords = "this is a web development course";

function findTheLongestWord(string) {
	let arrayOfWords = string.split(" ");
	let longestWord = arrayOfWords[0];
	for (let i = 1; i < arrayOfWords.length; i++) {
		if (arrayOfWords[i].length > longestWord.length) {
			longestWord = arrayOfWords[i];
		}
	}
	return longestWord;
}

console.log(findTheLongestWord(stringOfWords));

// version B

let stringyyy = "then print the longest which can be the last one";

function throwTheLongestOne(string) {
	let arrSorted = stringyyy.split(" ").sort(function(a, b) { return a.length - b.length });
	
	return arrSorted[arrSorted.length - 1];
}

console.log(throwTheLongestOne(stringyyy));

// version C

let anotherString = "let us see if I can solve it just with a freaking loop";

function longestWordFinder(string) {

	let currentWord = "";
	let maxWord = "";
	
	for (let i = 0; i < string.length; i++) {
		if (string[i] !== " ") {
			currentWord = currentWord + string[i];
		} else {
			if (currentWord.length > maxWord.length) {
				maxWord = currentWord;
			}
			currentWord = "";
		}
	}
	
	return `${maxWord}, ${maxWord.length} characters long, is the longest word in this string`;
}

console.log(longestWordFinder(anotherString));

//* 7. AEIOU: Vowels
//? Create a function that takes a string in its parameters and counts the number of vowels in the string.
// Examples:
// Notes: vowels are "a, e, i, o u".

function findVowels(string) {
	const vowels = ["a", "e", "i", "o", "u"];
	
	const stringToArray = string.split("");
	
	const vowelsFromTheString = [];
	
	for (let si = 0; si < stringToArray.length; si++) {
		for (let vi = 0; vi < vowels.length; vi++) {
			if (stringToArray[si] === vowels[vi]) {
				vowelsFromTheString.push(stringToArray[si]);
			}
		}
	}

	return `${vowelsFromTheString.length} vowel${vowelsFromTheString.length === 1 ? "" : "s"} found.`;
}

console.log(findVowels("this is a string")); // output: "4 vowels found."


//* 8. Data Types
//? Create a function that detects the data type of the argument passed.

function detectType(dataTypeUnknown) {
	return `Type of ${dataTypeUnknown} is ${typeof(dataTypeUnknown)}.`;
}

console.log(detectType(null)); // Type of null is object.
// console.log(detectType("hello")); // output: Type of "hello" is a string.
// console.log(detectType(4)); // output: Type of 4 is a number.


//* 9. Count Occurrences
//? Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

let stringToUseAsAnExample = "The function should count the number of occurrences of that letter in the string.";
let letterToCount = "o";
function countOccurrences(string, char) {
	let numOfOccurrences = 0;

	for (let i = 0; i < string.length; i++) {
		if (string[i] === char) {
			numOfOccurrences++;
		}
	}

	return `Occurrences of "${char}" in the string: ${numOfOccurrences}.`;
}

console.log(countOccurrences(stringToUseAsAnExample, letterToCount)); // output: Occurrences of "o" in the string: 6.
// console.log(countOccurrences("this is a string", "i")); // output: Occurrences of "i" in the string: 3.


//* 10. Counting Letters
//? Create a function that counts the number of occurrences of each letter in a string.
// Examples:
// countLetters("tree") -> expected output: t: 1, r: 1, e: 2

let stringToCountUniqueLettersIn = "Scooby-Doo, Where Are You!";

function countLetters(string) {
	string = string.toLowerCase();

	const uniqueLetters = [];
	const letterCounters = [];

	for (let i = 0; i < string.length; i++) {

		// a good old regex to exclude any non-alphanumeric characters:
		if (/\W/.test(string[i])) {
			continue;
		}

		if (uniqueLetters.indexOf(string[i]) === -1) {
			uniqueLetters.push(string[i]);
			letterCounters.push(1);
		} else {
			let uniqueLetterIndex = uniqueLetters.indexOf(string[i]);
			letterCounters[uniqueLetterIndex]++;
		}
	}

	let output = "";
	
	for (let n = 0; n < uniqueLetters.length - 1; n++) {
		output += `${uniqueLetters[n]} : ${letterCounters[n]}, `;
	}
	
	return `${output}${uniqueLetters[uniqueLetters.length - 1]} : ${letterCounters[uniqueLetters.length - 1]}`;

}

console.log(countLetters(stringToCountUniqueLettersIn));
