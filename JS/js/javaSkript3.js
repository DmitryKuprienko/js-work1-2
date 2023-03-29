function slugify(title) {
  // Change code below this line
  const slug = title.split(" ").join("-").toLowerCase();
  return slug;

  // Change code above this line
}

console.log("test1=>", slugify("Arrays for begginers")); // повертає "arrays-for-begginers"
console.log("test1=>", slugify("English for developer")); // повертає "english-for-developer"
console.log("test1=>", slugify("Ten secrets of JavaScript")); // повертає "ten-secrets-of-javascript"
console.log(
  "test1=>",
  slugify("How to become a JUNIOR developer in TWO WEEKS")
); // повертає "how-to-become-a-junior-developer-in-two-weeks"

//   -------------------------------------------------
const fruits = ["apple", "plum", "pear", "orange", "banana"];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);
// -----------------------------------
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];

const allClients = oldClients.concat(newClients); // Change this line

console.log("test concat=>", allClients);

// -----------------------------------------
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line

  // 1 обєднати масиви
  // 2перевірити довжину
  // 3якщо норм повернути масив
  // 4якщо довгий обрізати і овернути
//   const combinedArray = firstArray.concat(secondArray);
//   if (combinedArray <= secondArray) {
//     return combinedArray;
//   } else {
//     return combinedArray.slice(0, maxLength);
//   } // Change code above this line

const combinedArray = firstArray.concat(secondArray); 

return combinedArray > maxLength ? firstArray.concat(secondArray) : firstArray.concat(secondArray).slice(0, maxLength);
;

} 


console.log("CL1", makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(
  "CL2",
  makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
);
console.log(
  "CL3",
  makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
);
console.log("CL4", makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log("CL5", makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(
  "CL6",
  makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)
);
