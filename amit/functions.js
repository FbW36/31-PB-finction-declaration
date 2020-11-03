// reverse(34532) -> expected output: 23543

let num = 34532;
function reverse1() {
  let numArr = num.toString().split("").reverse().join("");
  return Number(numArr);
}
console.log("result1=", typeof reverse1()); // it was string I convert it to Number with this return Number(numArr)
console.log("result1=", reverse1());

// 2 alphaOrder("webdev") -> expected output: "bdeevw"
let str = "webdev";

function exm2() {
  let strN = str.split("").sort().join("");
  return strN;
}
console.log("result2=", exm2());

// 3 findGreatest([3, 4, 5], 4) -> expected output: 5
let p1 = [3, 4, 5];
let p2 = 4;

function greatest(para, para2) {
  const p3 = [];
  for (let i = 0; i < para.length; i++) {
    if (para2 < para[i]) {
      p3.push(para[i]);
    }
  }
  return p3.join(); // method join() turn an array into string
}
console.log(greatest(p1, p2));

// 4 Dog Years

function dogsAge(number) {
  return `Your doggo is ${number * 7} years old in human years!`;
}
console.log(dogsAge(4));

// 5 A Lifetime Supply...
let age = 28;
let supply = 2;
let constAge = 80;

function myNeeds(age, supply) {
  let perYearNeeds = age * (supply * 365);
  let restAge = 80 - age;
  return Math.round(perYearNeeds * restAge);
}

console.log(myNeeds(28, 2)); // 1

// 3 another way

// function findG(nums, secnum) {
//   nums > secnum
//     ? console.log("its", nums)
//     : nums < secnum
//     ? console.log("its", secnum)
//     : console.log("same");
// }
// findG([3, 10, 17], 4);

// function greatest(num1, num2) {
//   let size = 0;
//   for (let i = 0; i < 3; i++) {
//     if (num1[i] > size) {
//       size = num1[i];
//     }
//   }
//   return size > num2 ? size : num2;
// }
// console.log("for loop =", greatest([2, 5, 7], 4));

// console.log(indword);

//--------------------
// 6 longest word of "this is a web development course"

let strOne = "this is a web development course";

function largestOne(bigOne) {
  let emt = " ";
  let separet = bigOne.split(" ");
  // console.log(separet);
  for (i = 0; i < separet.length; i++) {
    if (separet[i].length > emt.length) {
      emt = separet[i];
    }
  }
  return emt;
}

console.log(largestOne(strOne));

// 7 findVowels:
//("this is a string") -> expected output: 4 vowels found

let myString = "this is a string";

function findVowels(string) {
  let vowels = "aeiouAEIOU";
  let totalVowels = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      totalVowels++;
    }
  }
  return totalVowels;
}
console.log(findVowels(myString));

// 8 detectType
//("hello") -> expected output:
//type of argument is a string.

let subject = "hello";
function detectType(mySubject) {
  console.log(typeof mySubject);
}

detectType(subject);

// 9 countOccurrences("this is a string", "i") ->
// expected output: occurrences of i: 3

function countOccurrences(string, letter) {
  let occNumber = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      occNumber++;
    }
  }
  return occNumber;
}
console.log("occurrences of i =", countOccurrences("this is a string", "i"));

// 10. countLetters("tree") ->
//expected output: t: 1, r: 1, e: 2
