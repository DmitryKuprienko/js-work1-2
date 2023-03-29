const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
const firstElement1 = fruits[0];
const secondElement1=fruits[1];
const lastElement1 = fruits[fruits.length-1];

console.log( "test1=>", firstElement1)
console.log(secondElement1)
console.log(lastElement1)


fruits[1]="peach";
fruits[3]= "banana";
console.dir(fruits);

const fruitsArrayLength = fruits.length;
console.log(fruitsArrayLength);

const lastElementIndex = fruits.length-1;
console.log(lastElementIndex);
const lastElement2= fruits[lastElementIndex];
console.log(lastElement2);

function getExtremeElements(array) {
    // Change code below this line
   //const firstElement= array[0];
   //const lastElement = array[array.length - 1];
   let newArray
   //newArray = [array[0], array[array.length - 1]];
   return newArray = [array[0], array[array.length - 1]];
  
    // Change code above this line
  }

  console.log( getExtremeElements([1, 2, 3, 4, 5]))  // повертає [1, 5]
console.log( getExtremeElements(["Earth", "Mars", "Venus"]))  // повертає ["Earth", "Venus"]
console.log( getExtremeElements(["apple", "peach", "pear", "banana"]))  // повертає ["apple", "banana"]


function splitMessage(message, delimiter) {
    let words = message.split(delimiter);
    // Change code below this line
 //words= message.split(delimiter);
    // Change code above this line
    return words;
  }

  
  
  console.log(splitMessage("Mango hurries to the train", " "));
  console.log(splitMessage("Mango", ""));
  console.log(splitMessage("best_for_week", "_"));

  function calculateEngravingPrice(message, pricePerWord) {
 
 const numberWordsLine = message.split(" ").length;
 //console.log("numberWordsLine->", numberWordsLine);
const priceEngraving= numberWordsLine * pricePerWord;
  return priceEngraving
 }

 console.log( calculateEngravingPrice("JavaScript is in my blood", 10)) //повертає 50
console.log( calculateEngravingPrice("JavaScript is in my blood", 20)) //повертає 100
console.log( calculateEngravingPrice("Web-development is creative work", 40)) //повертає

function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line
string=array.join(delimiter)


  // Change code above this line
  return string;
}
console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")); 
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], "")); 
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));