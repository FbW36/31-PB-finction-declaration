// 1. Reverse
// Create a function to reverse a number.
let numbers = "123456789";
function reverse(x) {
   let backwards = x.split("").reverse().join("");
    return backwards;
}
console.log(reverse(numbers));

// Examples:

// reverse(34532) -> expected output: 23543
// 2. Alphabetical Order
// Create a function to sort a string into alphabetical order. Examples: <<<<<<< HEAD
let mess = "elkelkaposztasitottalanitottatok"  //long hungarian word
function sort(x) {
    let order = x.split("").sort();
    return order;
}

console.log(sort(mess));
// alphaOrder("webdev") -> expected output: "bdeevw"

// Note: Assume numbers, symbols and punctuation are not included in the string.

// 3. The Greater Numbers
// Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument. Examples:
const random = [1, 4, 17, 66, 54453, 643];
let num = 67;
function findGreatest(arr, num) {
    for(i = 0; i < arr.length; i++) {
        if(arr[i] > num) {
            console.log('This is bigger:', arr[i])
        }
    }
}
findGreatest(random, num);
findGreatest([3, 4, 5], 4);
findGreatest([10, 20, 30], 12);
findGreatest([0, 10, 3], 4);

// 4. Dog Years
// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years.
let myDog = 10;
function doggyYears(x){
    let dogAge = x * 7;
    return dogAge;
}
console.log("Your dog is ", doggyYears(myDog), " in doggy years.");
// Example

// dogAge(4) -> expected output example: "Your doggo is 28 years old in human years!"
// 5. A Lifetime Supply...
// Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
let myAge = 31;
let intake = 1;
function lifeTimeSupply(a, b) {
    restOfTheDays = ((80 - a) * 365) * b;
    return restOfTheDays;
}
console.log("My lifetime supply of beer: ", lifeTimeSupply(myAge, intake));
// Examples:
console.log(lifeTimeSupply(25, 2)); //-> expected output: You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80.
// calcSupply(40, 3) -> expected output: You will need 43,800 packets of crisps (3 a day) to last you till the age of 80.
// Bonus - A lifetime supply Accept floating point values for amount per day and round the result.

// 6. For the longest word
// Create a function to find the longest word in string. Examples:
let sentence = "this is a web development course";
function longestWord(str){
    let strToWords = str.split(" ");
    let theLongestWord = "";
    for (let i = 0; i < strToWords.length; i++) {
        if (strToWords[i].length > theLongestWord.length) {
            theLongestWord = strToWords[i];
        }
    }
    return theLongestWord;
}
console.log(longestWord(sentence));

// longestWord("this is a web development course") -> expected output: "development"
// 7. AEIOU: Vowels
// Create a function that takes a string in its parameters and counts the number of vowels in the string. Examples:

// findVowels("this is a string") -> expected output: 4 vowels found
const vows = ["a", "e", "i", "o", "u"];
let longWord = "elkelkaposztasitottalanitottatok";
function countVows(str) {
    let howMany = 0;
    for (let i = 0; i < longWord.length; i++) {
		for (let y = 0; y < vows.length; y++) {
			if (longWord[i] == vows[y]) {
                howMany += 1;
            }
        }
        
	}
	
	console.log(str.length);
    return howMany;
}

console.log(countVows(longWord));
// Notes: vowels are "a, e, i, o u".

// 8. Data Types
// Create a function that detects the data type of the argument passed.
function dataType(a) {
    whichType = typeof a;
    return whichType
}
console.log(dataType("Data"));
// Examples:

// detectType("hello") -> expected output: type of argument is a string.
// detectType(4) -> expected output: type of argument is a number.
// 9. Count Occurrences
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
let sentence2 = "My cats are loud as heck. helpcc!";
function howManyThatIsHere(str1, str2) {
    theResult = 0;
 for(let i = 0; i < str1.length; i++){
     if (str1[i] == str2) {
        theResult += 1;
    }
}
return theResult;
}
console.log(howManyThatIsHere(sentence2, "c"));

// Examples:

// countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3
// 10. Counting Letters
// Create a function that counts the number of occurrences of each letter in a string.

// Examples:

// countLetters("tree") -> expected output: t: 1, r: 1, e: 2

let newExample = "megszentseghetetlenkedeseitekert";
function letsDoThis(str) {
	// we loop through every letter of the string
	// we check if the letter has already been detected
	// if yes, we add +1 to the counter
    // if no, we create a new counter
    const allLetters = [];
	const allNumbers = [];
	let resultString = "";

    for (let i = 0; i < str.length; i++) {
        if (!allLetters.includes(str[i])) {
            allLetters.push(str[i]);
            allNumbers.push(1);
        } else {
			// allNumbers.push(1);
			// find the index of the letter
			let letterIndex = allLetters.indexOf(str[i]);
			// increment (+1) the number inside the numbers array
			allNumbers[letterIndex] += 1;
        }
	}
	// resultString = arrL[0] : arrN[0], arrL[1] : arrN[1]....
	for (let x = 0; x < allNumbers.length; x++) {
        resultString += `${allLetters[x]} : ${allNumbers[x]}, `;
    }

    return resultString;
}
console.log(letsDoThis(newExample));