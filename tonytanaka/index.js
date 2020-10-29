// 1
function reverseNumber(a) {
  return a.toString().split("").reverse("").join("");
}
console.log(reverseNumber(34532));

// 2
function sortAlphabets(text) {
  return text.split("").sort().join("");
}
console.log(sortAlphabets("webdev"));

// 3
const box = [];
function findGreatest(arr1, arr2) {
  for (i = 0; i <= 3; i++) {
    if (arr1[i] > arr2) {
      box.push(arr1[i]);
    }
  }
  return box;
}
console.log(findGreatest([3, 4, 5], 4));
//console.log(findGreatest([10, 20, 30], 12));
//console.log(findGreatest([0, 10, 3], 4));

// 4
function dogsAge(age) {
  return age * 7;
}
console.log(dogsAge(5));

// 5
function lifeTimeSupply(age, amount) {
  return Math.round((80 - age) * 365 * amount);
}
console.log(lifeTimeSupply(25.4, 2));
console.log(lifeTimeSupply(40.2, 3.2));

// 6
let chosenWord = "";
function longestWord(phrase) {
  let wordArr = phrase.split(" ");
  for (i = 0; i < wordArr.length; i++) {
    if (chosenWord.length < wordArr[i].length) {
      chosenWord = wordArr[i];
    }
  }
  return chosenWord;
}
console.log(longestWord("this is a web development course"));

// 7
function findVowels(str) {
  let numberVowels = 0;
  let strArr = str.split("");
  for (i = 0; i <= strArr.length; i++) {
    if (
      strArr[i] == "a" ||
      strArr[i] == "e" ||
      strArr[i] == "i" ||
      strArr[i] == "o" ||
      strArr[i] == "u"
    ) {
      numberVowels += 1;
    }
  }
  return numberVowels;
}
console.log(findVowels("this is a string that was given in the exercise"));

// 8
function detectType(a) {
  return typeof a;
}
console.log(detectType(undefined));
console.log(detectType([3, 2], 9, "aaa"));
console.log(detectType("12343"));
console.log(detectType(12343));
console.log(detectType(null));
console.log(detectType(true));

// 9
function countOccurrences(str, letter) {
  let counter = 0;
  let strArr = str.split("");
  for (i = 0; i <= str.length; i++) {
    if (str[i] == letter) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countOccurrences("this is a string", "i"));
console.log(
  countOccurrences(
    "the brown fox does something that I don't remember now, but he mentions a lazy dog",
    "e"
  )
);

// 10
function countLetter(str) {
  return str.split("").length;
}

console.log(countLetter("tree"));
