//31-PB-finction-declaration
//Print your answers to the console.
//1. Reverse

//Create a function to reverse a number.

//Examples:

    //reverse(34532) -> expected output: 23543
    function reverse_number(x) {
        x = x + ""
        return x.split("").reverse().join("");
      }
      
      console.log("Input 12344, Output => ", reverse_number(12344));

//2. Alphabetical Order

//Create a function to sort a string into alphabetical order. Examples: <<<<<<< HEAD
//alphaOrder("webdev") -> expected output: "bdeevw"
//Note: Assume numbers, symbols and punctuation are not included in the string.
function alphabetOrder (y){
    y = y + ""
    return y.split("").sort().join("")
}
console.log("input 'webdev', output => ", alphabetOrder('webdev'))

//3. The Greater Numbers
//Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument. Examples:
    //findGreatest([3, 4, 5], 4) -> expected output: 5
    //findGreatest([10, 20, 30], 12) -> expected output: 20, 30
    //findGreatest([0, 10, 3], 4) -> expected output: 10

    function findGreatest(arrNums, num) {
        let arr = []
        for(let i=0; i < arrNums.length; i++){
            if(arrNums[i] > num){
                arr.push(arrNums[i])
            }
        }
        return arr.join(",");
        //nums > num ? console.log("1st",nums) :
        //num > nums ? console.log("2nd", num) : console.log("same")
      }
      console.log(findGreatest([3, 4, 5], 4))
      console.log(findGreatest([10, 20, 30], 12))
      console.log(findGreatest([0, 10, 3], 4))


//4. Dog Years

//Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years.
      
//Example
      
//dogAge(4) -> expected output example: "Your doggo is 28 years old in human years!"
function dogAge(x) {
    
    return x * 7;
  }
  
  console.log("Your Doggo is", dogAge(2)+ " years old in human years!");

//5. A Lifetime Supply...
//Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
  
//Examples:
  
//calcSupply(25, 2) -> expected output: You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80.
//calcSupply(40, 3) -> expected output: You will need 43,800 packets of crisps (3 a day) to last you till the age of 80.
function supply(age,perDay){
    let totalAge = 80
    let howMuch = (perDay * 365) * (totalAge - age)
    let compiler = `You will need ${howMuch} of your favorite snack to last you till the age of ${totalAge}`
    console.log(compiler)
}
supply(40,3)

//6. For the longest word
//Create a function to find the longest word in string. Examples:

//longestWord("this is a web development course") -> expected output: "development"

function findLongestWord(str) {
      let longestWord = "";
      let words = str.split(" ")
     for( let i = 0; i < words.length; i++){
         let individualWords = words[i]
         //console.log(individualWords)
         if(individualWords.length > longestWord.length){
             longestWord = individualWords;
             //console.log(longestWord)
         }
          }
          return `the longest word in this string is ${longestWord} with ${longestWord.length} letters`;
     }
    console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

 
  //7. AEIOU: Vowels

// Create a function that takes a string in its parameters and counts the number of vowels in the string. Examples:
//findVowels("this is a string") -> expected output: 4 vowels found
//Notes: vowels are "a, e, i, o u".
function howManyVowels (z){
    
    let vowelsQuantity = z.match(/[aeiou]/gi).length;
    return vowelsQuantity
}
console.log("How many vowels => ", howManyVowels('aaaaaaaagggggg') + " vowels!")

//8. Data Types
//Create a function that detects the data type of the argument passed.
//Examples:
//detectType("hello") -> expected output: type of argument is a string.
//detectType(4) -> expected output: type of argument is a number.
function detectType(z){
    return typeof(z)
}
console.log("Type of argument is a  => ", detectType(true))

//9. Count Occurrences
//Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
//Examples:
//countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3
function countOcurrences(string,letter){
    let letter_number = 0
    for( let position = 0; position < string.length; position++){
        if(string.charAt(position) == letter){
            letter_number += 1;
        }
    }
    return letter_number
}
console.log(`occurrences: ${countOcurrences('cindy','c')}`)

//10. Counting Letters
//Create a function that counts the number of occurrences of each letter in a string.
//Examples:
//countLetters("tree") -> expected output: t: 1, r: 1, e: 2
const count = function(str) {
    let empty = {};
    for(let i = 0; i < str.length; i++) {
      const currentLetter = str.charAt(i);
      empty[currentLetter] = empty[currentLetter] + 1 || 1;
    }
    return empty;
  }
  console.log(count("tree"));