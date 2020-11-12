// # 31-PB-finction-declaration

// #### 1. Reverse
// Create a function to reverse a number. 

function reverse() {
    let randomNumbers = Math.floor(Math.random() * 34532) + 1;
    let array = randomNumbers.toString().split("");
    array.reverse();
    let joinArray = parseInt(array.join(""));
    return joinArray;
}
console.log("1. Reverse ==> " + reverse());

// #### 2. Alphabetical Order
// Create a function to sort a string into alphabetical order. 
// * Note: Assume numbers, symbols and punctuation are not included in the string.  

function alphaOrder(string) {
    let sortString = string.split("").sort();
    let joinString = sortString.join("");
    return joinString;
}
console.log("2. Alphabetical Order ==> " + alphaOrder("webdev"));

// #### 3. The Greater Numbers
// Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument. 
// Examples: 
// * findGreatest([3, 4, 5], 4) -> expected output: 5
// * findGreatest([10, 20, 30], 12) -> expected output: 20, 30
// * findGreatest([0, 10, 3], 4) -> expected output: 10
let result = [];
function findGreatest(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > number) result.push(array[i]);
    }
    return result.join(", ")
}
console.log("3. The Greater Numbers ==> " + findGreatest([10, 20, 30], 12)); // 20, 30

// #### 4. Dog Years
// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years. 
function dogAge(number) {
    return `Your doggo is ${number * 7} years old in human years!`
}
console.log('4.', dogAge(12)); // Your dog would be 84 years old if he was a human


// #### 5. A Lifetime Supply...
// Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. 
function calcSupply(age, amount) {
    let supply = (120 - age) * 365 * amount;
    return `You will need ${Math.round(supply).toFixed(2)} apples (${amount} a day) to last you till the age of 120.`;
}
console.log("5.", calcSupply(28, 2)); // You will need 67160.00 apples (3 a day) to last you till the age of 120.

// **Bonus - A lifetime supply**
// Accept floating point values for amount per day and round the result. 

// #### 6. For the longest word
// Create a function to find the longest word in string. 
function longestWord(string) {
    let array = string.split(" ")
    let result = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > result.length) {
            result = array[i];
        }
    }
    return result;
}
console.log("6. For the longest word ==>", longestWord("this is a web development course"));

// #### 7. AEIOU: Vowels
// Create a function that takes a string in its parameters and counts the number of vowels in the string. 
function findVowels(string) {
    let vowels = "AaEeIiOoUu";
    let totalVowels = 0;
    for (i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            totalVowels++;
        }
    }
    return totalVowels;
}
console.log("7. For the longest word ==>", findVowels("this is a web development course")); // 11

// #### 8. Data Types
// Create a function that detects the data type of the argument passed. 
function detectType(dataType) {
    return typeof dataType
}
console.log(`8. For the longest word ==> type of argument is a ${detectType("hello")}`); // For the longest word ==> string

// #### 9. Count Occurrences 
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string. 
function countOccurrences(string, letter) {
    let occurrences = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) occurrences++
    }
    return occurrences
}
console.log(`9. Count Occurrences ==> ${countOccurrences("this is an example", "i")}`);


// #### 10. Counting Letters
// Create a function that counts the number of occurrences of each letter in a string. 
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
console.log(`10. Counting Letters ==> ${countLetters("anna")}`);