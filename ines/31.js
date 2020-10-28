//1
function reverse(number){
	number += "";
	return number.split("").reverse().join("");
}
console.log(reverse(112));

//2
function alphaOrder(word){
    return word.split("").sort().join("");
}
console.log(alphaOrder("webdev#*"));

//3 
function findGreatest(number1,number2){
    const newArr = [];
    for(i=0;i<=2;i++){
        if(number1[i]>number2){
            newArr.push(number1[i])
        }
    }
    return newArr;
}
console.log("3==>",findGreatest([10, 20, 30], 12));

//4
function dogAge(age){
    return age*7;
}
console.log(dogAge(4));

//5
function calcSupply(age, amount, expectedMaxAge,favoriteSnack){
    let daysToGo = (expectedMaxAge - age) *365 ;
    let supplyCalc = Math.round((daysToGo*amount));
    return `You will need ${supplyCalc} ${favoriteSnack} (${amount} a day) to last till the age of ${expectedMaxAge}.`;
}

console.log(calcSupply(28,2.55,90,"Granola Bars"));

//6
function longestWord (sentence){
    const sentenceArray = sentence.split(" ");
    let longest = "";
    for(i=0;i<sentenceArray.length;i++){
        if(sentenceArray[i].length > sentenceArray.length){
            longest = sentenceArray[i];
        }
    }
    return longest;
 }
 console.log(longestWord("this is a web development course"));

   /* let sentence = "this is a web development course"; 
    const newSenteceArray = [];
    const sentenceArray = sentence.split(" ");
    for(i=0;i<sentenceArray.length;i++){
        newSenteceArray.push(sentenceArray[i]);
    }
    console.log(newSenteceArray);*/

