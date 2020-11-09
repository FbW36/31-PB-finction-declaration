//1. Create a function to reverse a number. 
function reverseNum(number){
    number = number + "";
    return number.split("").reverse().join("");
}
console.log("reversed number ==>", reverseNum(123456789)) ; // 987654321

// 1 - Create the function 
// 2 - Number + ""  ; makes the numbers into strings
// 3 - return number and split(""); it between every string
// 4 - reverse() the order 
// 5 - join(""); 

//🦔 🦔 🦔 🦔 🦔 🦔 🦔 

//2. Create a function to sort a string into alphabetical order. 
function alphaOrder(string){
    string = string.split("");
    return string.sort().join("").replace(/,/g, "") ; 
}
console.log("Alphabetical Order ==>", alphaOrder("webdev")) ; // bdeevw

//3. Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument. 
let arrNum = [100, 20, 3] ;
let number = 10 ;

function findGreatest(arrNum, number){
   let greatest = [] ; 
   for(let i = 0; i < arrNum.length; i++){
       if(arrNum[i] > number){
           console.log("greatest ==>", arrNum[i]);
           greatest.push(arrNum[i]);
       }
   }
   if(greatest.length === 0){
       console.log(number);
       return number
   }
   return greatest; 
}
console.log("Find Greatest ==>", findGreatest(arrNum, number)) ;

//4. Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years. 
function dogAge(age){
    return `Your doggo is ${age * 7} in human years` ;
}
console.log("dogAge ==>", dogAge(2)) ;

//5. Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. 
let myMaxAge = 80 ;
let myFavoriteSnack = "Snickers" ;
function lifeTimeOfSnickers(age, dailyAmount){
    let supply = (myMaxAge - age) * 365 * dailyAmount ;
    return `I will need ${supply} ${myFavoriteSnack} to last until age of ${myMaxAge}!` ; 
}
console.log("lifeTimeOfSnickers ==>", lifeTimeOfSnickers(30, 4)) ; // I will need 73000 Snickers to last until age of 80!

//6. Create a function to find the longest word in string.
let string = "Hi, can you find the longest word in this string hfsehfdfsfsfs";

function findLongestWord(string){
    let arrString = string.split(" ");
    let longestWord = "" ; 
    for(let i = 0; i < arrString.length; i++){
        //console.log(arrString[i].length) 
        if(arrString[i].length > longestWord.length) {
            longestWord = arrString[i] ; 
        }
    }    
    return longestWord ;
}
console.log("longest word ==>", findLongestWord(string)) ;

//7.Create a function that takes a string in its parameters and counts the number of vowels in the string.
let vowelsList = "aeiouAEIOU";
let myString = "this is my string of words";

function countMyString(string){
    let number = 0 ;
    for(let i = 0; i < myString.length; i++){
        for(let s = 0; s < vowelsList.length; s++){
            if(myString[i] == vowelsList[s]) {
                number += 1; 
            }
        }
    }
    console.log(string.length) ;
    return number;
}

console.log("Vowels ==>", countMyString(myString)) ; // 5 vowels are found 

// 8) Create a function that detects the data type of the argument passed. 
function findDataType(x){
    typeOf = typeof x ; 
    return typeOf ;
}
console.log("dataType ==>", findDataType("Hello")); // string
console.log("dataType ==>", findDataType(7)); // number

// 9) Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string. 
let string2 = "Merry chritmas and a happy new year" ;

function countSameLetter(string, letter){
    number = 0 ;
    for(let i = 0; i < string.length; i++){
        if(string[i] == letter) {
            number += 1 ; 
        }
    }
    return number ; 
}
console.log("same letter ==>", countSameLetter(string2, "a")) ; // a is occuring 5 times 

// 10) Create a function that counts the number of occurrences of each letter in a string. 
// expexted output t:1 r:1 e:2

function countLetters(string) {
    let letters = {};
  
    for (let i = 0; i < string.length; i++) {
      const currentLetter = string[i];
//console.log(currentLetter);
/*
t
r
e
e
*/
      if (currentLetter in letters) {
        letters[currentLetter] += 1;
      } else {
        letters[currentLetter] = 1;
      }
//console.log(letters)
/*
        { t: 1 }
r
{ t: 1, r: 1 }
e
{ t: 1, r: 1, e: 1 }
e
{ t: 1, r: 1, e: 2 }
*/
    }
    return letters;
  }
  
console.log(countLetters("tree")); // { t: 1, r: 1, e: 2 }



