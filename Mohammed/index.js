
// 1- REVERSING A NUMBER

// SOLUTION 1

let number1 = 234;
//let reminder = 0;
//let reverse = 0;

let reverseNum = number1 => 
{
    let reverse = 0;
    
    for (let i=0; i<3; i++ )
    {
        let reminder = number1 % 10;
        reverse = (reverse * 10) + reminder;
        number1 = parseInt(number1 / 10);
    }
    
    return reverse;
}

console.log(`First Solution: The reverse of the number ${number1} is ==> ${reverseNum(number1)}`);


// SOLUTION 2

let number = 735;

function reverseNumber(number)
{
    let reversedNo = Number( number.toString().split("").reverse().join("") );

    return reversedNo;
}

console.log(`Second Solution: The reverse of the number ${number} is ==> ${reverseNumber(number)}`);

/* let number = 735;
function reverseNumber(number)
{
    // CONVERTS NUMBER INTO STRING
    let numAsStr = number.toString();
    console.log(numAsStr, typeof numAsStr);
    
    // CONVERTS STRING INTO ARRAY
    let strToArray = numAsStr.split("");
    console.log(strToArray);
    
    // REVERSE THE ARRAY ELEMENTS
    strToArray.reverse();
    console.log(strToArray);

    // CONVERTS ARRAY INTO STRING
    let reversedStr = strToArray.join("");
    console.log(reversedStr, typeof reversedStr);

    // CONVERT STRING INTO NUMBER
    /* let strToNum = parseInt(reversedStr); */
   /*  let strToNum = Number(reversedStr);
    console.log(strToNum, typeof strToNum);

    return strToNum;
}
console.log(`The reverse of the number ${number} is ==> ${reverseNumber(number)}`);
 */

// ====================================================

// 2-

let originalStr = 'webdev';

let sortString = function(originalStr)
{
    
    let sortedStr = originalStr.split('').sort().join('');

    return sortedStr;
}

console.log(`The alphabitical order of the string '${originalStr}' is ==> ${sortString(originalStr)}`);

// ====================================================

// 3-

let myArr = [10, 15, 5, 80, 100, 50];
let secondArgNo = 20;

function findGreatestNo(myArr, secondArgNo)
{
    let theGreatersNo = [];

    for (let i = 0; i <= myArr.length-1; i++)
    {
        if ( myArr[i] > secondArgNo)    
        {
            theGreatersNo.push(myArr[i]);
        }
    }

    return(theGreatersNo);
}

console.log(`[${myArr}] ==> ${findGreatestNo(myArr, secondArgNo)}`);

// =============================================================

// 4-

let humanAge = 30;

let getDogAge = function(humanAge)
{
    return (humanAge * 7);
}

console.log(`The dog is ${getDogAge(humanAge)} years old regarding human years`);

//===================================================

// 5-

let currentAge =40;
let untilAge = 80;

let neededAmountOfSnacks = 3;

const yearsOfNeeds = untilAge - currentAge;

let snackConsumption = (yearsOfNeeds, neededAmountOfSnacks) =>
{
    let consumptionCalculation = yearsOfNeeds * 365 * neededAmountOfSnacks;
    
    return consumptionCalculation;
}

console.log(`You are currently at the age of ${currentAge} and you need ${neededAmountOfSnacks} piece of snacks a day until you are at the age of ${untilAge}, therefore, you need ${snackConsumption(yearsOfNeeds, neededAmountOfSnacks)} pieces of snacks in total`);

// ====================================================

// 6-

let strOfWords = "this is a web development course";
let arrOfWords = strOfWords.split(" ");
console.log(arrOfWords.length-1);

console.log(arrOfWords);

let getTheLongestWordInString = arrOfWords =>
{
    let tempStr ="";

    for (let i=0; i<arrOfWords.length-1; i++)
    {
        //console.log(arrOfWords.length-1);
        for (let j=i+1; j<arrOfWords.length; j++)
        {
            //console.log(strOfWords.length);
            if (arrOfWords[i].length > arrOfWords[j].length)
            {
                tempStr= arrOfWords[i];
            } 
            else
            {
                tempStr = arrOfWords[j];
            }
        }
    }
    
    return tempStr;
}

console.log(`The longest word in the string "${strOfWords}" is ==> ${getTheLongestWordInString(arrOfWords)}`);

// ==========================================================

// 7-

let myString = "this is a string";
let vowels = "aeiou";

function countVowels(myString)
{
    let vowelsCounter=0;

    for (let i=0; i<myString.length; i++)
    {
        if (vowels.includes(myString[i]))
            {
                vowelsCounter +=1;
            }
    }

    return vowelsCounter;
}

console.log(`The number of vowel letters inside "${myString}" is ==> ${countVowels(myString)}`);

// =========================================================

// 8-

let arg = 3;

let checkTypeOfArgument = function(arg)
{
    return typeof arg;
};

console.log(`The type of ${arg} is ==> ${checkTypeOfArgument(arg)}`);

// ===============================================================

// 9-

let strOriginal = "hello worlds!";
let ch = 'l';

let countOccurrence = (strOriginal, ch) =>
{
    let occurrenceCounter = 0;
    for (i=0; i<strOriginal.length; i++)
    {
        if (strOriginal[i].includes(ch))
        {
            occurrenceCounter +=1;
        }
    }

    return occurrenceCounter;
} 

console.log(`The letter ${ch} occurs ${countOccurrence(strOriginal, ch)} times in the string "${strOriginal}"`);

// =============================================================

// 10-

let theStr= 'tree';

let countLetterOccurrence = function(theStr)
{
    let lettersCounter;
    for (let i=0; i<theStr.length; i++)
    {
        lettersCounter = theStr.split(theStr[i]).length -1;
        console.log(`${theStr[i]}; ${lettersCounter} \n`);
    }
};

countLetterOccurrence(theStr); 
