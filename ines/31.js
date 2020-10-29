//1
function reverse(number) {
  number += "";
  return number.split("").reverse().join("");
}
console.log(reverse(112));

//2
function alphaOrder(word) {
  return word.split("").sort().join("");
}
console.log(alphaOrder("webdev"));

//3
function findGreatest(number1, number2) {
  const newArr = [];
  for (i = 0; i <= 2; i++) {
    if (number1[i] > number2) {
      newArr.push(number1[i]);
    }
  }
  return newArr;
}
console.log("3==>", findGreatest([10, 20, 30], 12));

//4
function dogAge(age) {
  return age * 7;
}
console.log(dogAge(4));

//5
function calcSupply(age, amount, expectedMaxAge, favoriteSnack) {
  let daysToGo = (expectedMaxAge - age) * 365;
  let supplyCalc = Math.round(daysToGo * amount);
  return `You will need ${supplyCalc} ${favoriteSnack} (${amount} a day) to last till the age of ${expectedMaxAge}.`;
}

console.log(calcSupply(28, 2.55, 90, "Granola Bars"));

//6
function longestWord(sentence) {
  const sentenceArray = sentence.split(" ");
  let longest = "";
  for (i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i].length > sentenceArray.length) {
      longest = sentenceArray[i];
    }
  }
  return longest;
}
console.log(longestWord("this is a web development course"));

//7
function findVowels(string) {
  const stringArray = string.split("");
  const vowels = [];
  for (i = 0; i < stringArray.length; i++) {
    if (
      stringArray[i] === "a" ||
      stringArray[i] === "e" ||
      stringArray[i] === "i" ||
      stringArray[i] === "o" ||
      stringArray[i] === "u"
    ) {
      vowels.push(stringArray[i]);
    }
  }
  return vowels.length + " vowels found";
}
console.log(findVowels("this is a string"));

//8
function detectType(argument) {
  return typeof argument;
}
console.log(detectType(true));

//9
function countOcurrences(string, letter) {
  const stringArray = string.split("");
  const ocurrences = [];
  for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === letter) {
      ocurrences.push(stringArray[i]);
    }
  }
  return "occurences of i: " + ocurrences.length;
}

console.log(countOcurrences("this is a string", "i"));

//10
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
console.log(countLetters("aaaabbbssgghjd"));
