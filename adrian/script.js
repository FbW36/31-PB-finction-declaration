//1
function reverse(number) {
  let stringedNumber = number.toString();
  let result = "";
  for (let i = 0; i < stringedNumber.length; i++) {
    result += stringedNumber[stringedNumber.length - 1 - i];
  }
  return Number(result);
}
// console.log(reverse(34532));

//2
function sortString(str) {
  return str.split("").sort().join("");
}
// console.log(sortString("webdev"));

//3
function findGreatest(array, number) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) resultArray.push(array[i]);
  }
  return resultArray;
}
// console.log(findGreatest([10, 20, 30], 12));

//4
function calcDogAge(number) {
  return `Your doggo is ${number * 7} years old in human years!`;
}
// console.log(calcDogAge(4));

//5
function calcSupply(age, amount) {
  return `You will need ${Math.round(
    (80 - age) * 365 * amount
  )} packets of crisps (3 a day) to last you till the age of 80.`;
}
// console.log(calcSupply(25, 2));

//6
// Faster solution
function findLongestWord(string) {
  let result = "";
  let tempResult = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      if (tempResult.length > result.length) {
        result = tempResult;
      }
      tempResult = "";
    } else {
      tempResult += string[i];
    }
  }

  return result;
}
/* Slow solution 
function findLongestWord(string) {
  let array = string.split(" ");
  let result = array[0].length;
  for (let i = 1; i <= array.length - 1; i++) {
    if (array[i].length > result) {
      result = array[i];
    }
  }
  return result;
} */
// console.log(findLongestWord("this is a web development course here"));
//7
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
// console.log(findVowels("this is a string"));
//8
function detectType(dataType) {
  return typeof dataType;
}
// console.log(detectType("hello"));

//9
function countOcurrences(string, letter) {
  let ocurrences = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) ocurrences++;
  }
  return ocurrences;
}
// console.log(countOcurrences("this is a string", "i"));

//10
function countLetters(string) {
  let letterCount = {};
  for (let i = 0; i < string.length; i++) {
    if (letterCount[string[i]] === undefined) {
      letterCount[string[i]] = 1;
    } else {
      letterCount[string[i]]++;
    }
  }
  return letterCount;
}
console.log(countLetters("tree"));
