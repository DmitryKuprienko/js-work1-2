// const start = 3;
// const end = 7;

// for (let i = start ; i <= end; i+= 1 ) { // Change this line
//   console.log(i);
// }
// ---------------------------
// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа.
// 1 функція отримує максимальне число

// починаючи з нуля переберає всі числа якщо воно менше ніж максимальне  то додає його

function calculateTotal(number) {
    let sum = 0;
    for (let index = 0; index < number; index += 1) {
        sum += index;
    }
    return sum;
}
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());
// -----------------------------------------------

// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

const fruits = ["apple", "plum", "pear", "orange"];

for (let i = 0; i < fruits.length; i += 1) {
    // Change this line
    // console.log(i)
    const fruit = fruits[i]; // Change this line
    //   console.log(fruit);
}

// ----------------------------------------------------
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел,
// і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total,
//  яка повертається як результат роботи функції.

function calculateTotalPrice1(order) {
    let total = 0;

    for (let index = 0; index < order.length; index++) {
        total += order[index];
    }
    return total;
}

// console.log(calculateTotalPrice1([12, 85, 37, 4]));
// console.log(calculateTotalPrice1([164, 48, 291]));
// console.log(calculateTotalPrice1([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice1([78, 544, 765,23, 654,2342]));

// ------------------------------------------------
// Напиши функцію findLongestWord(string), яка приймає довільний рядок,
//  що складається тільки зі слів, розділених пробілом (параметр string),
//   і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
    // 1рядок роздилити на слова
    // 2перебрать масив
    // перевірити довжину кожного слова

    const arrayWords = string.split(" ");
    let maxLengthWord = "";

    for (let index = 0; index < arrayWords.length; index++) {
        // console.log(arrayWords[index])
        if (maxLengthWord.length < arrayWords[index].length) {
            //   console.log("do=>", maxLengthWord);
            maxLengthWord = arrayWords[index];
            //   console.log("doun", maxLengthWord);
        }
    }

    return maxLengthWord;
}

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// -------------------------------------------------------
// Доповни код функції createArrayOfNumbers(min, max) таким чином,
//  щоб вона повертала масив усіх цілих чисел від значення min до max.

function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
    // цикл зрівняти число чи воно більше максимального якщо ні то записати в масив
    // якщо так завершити цикл
    for (let index = min; index <= max; index++) {
        numbers.push(index);
    }

    // Change code above this line
    return numbers;
}

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers(1, 4));
// В циклі for використовувався метод push
// -------------------------------------------------------------------
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і
// повертає новий масив, в якому будуть тільки ті елементи масиву numbers,
// які більші за значення параметра value (число).

// 0створити куди замисувати новий масив
//1перебрати по елементно масив
// 2 якщо число більше записати в масив
// 3 якщо меньше пропустити

function filterArray1(numbers, value) {
    let newArray = [];
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] > value) {
            newArray.push(numbers[index]);
        }
    }
    return newArray;
}

// console.log(filterArray1([1, 2, 3, 4, 5], 3))
// console.log(filterArray1([1, 2, 3, 4, 5], 4))
// console.log(filterArray1([1, 2, 3, 4, 5], 5))
// console.log(filterArray1([12, 24, 8, 41, 76], 38))
// console.log(filterArray1([12, 24, 8, 41, 76], 20))
// -----------------------------------------

function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];
    const newArray = fruits.includes(fruit);
    return newArray; // Change this line
}

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));
//--------------------------------------------
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2,
//і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

//1 перебрати один із масивів
// ящо є в масиві пропустити якщо немає записати
function getCommonElements(array1, array2) {
    const doubledElemArray = [];

    for (let index = 0; index < array1.length; index++) {
        const element = array1[index];
        if (array2.includes(element)) {
            doubledElemArray.push(element);
            console.log("yes Array", element);
        }
    }
    return doubledElemArray;
}

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([10, 20, 30, 40, 24, 12, 27, 3], [4, 30, 17, 10, 40, 12, 8, 3, 36, 27]));
// ---------------------------------------------------
//Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.
function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
    for (const orde of order) {
        total += orde;
    }
    // for (let i = 0; i < order.length; i += 1) {
    //   total += order[i];
    // }

    // Change code above this line
    return total;
}

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// ----------------------------
// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

function filterArray(numbers, value) {
    // Change code below this line
    const filteredNumbers = [];
    for (const number of numbers) {
        if (number > value) {
            filteredNumbers.push(number);
        }
    }

    // for (let i = 0; i < numbers.length; i += 1) {
    //   const number = numbers[i];

    //   if (number > value) {
    //     filteredNumbers.push(number);
    //   }
    // }

    return filteredNumbers;
    // Change code above this line
}

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних
// чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

function getEvenNumbers(start, end) {
    // Change code below this line
    const arrayEvenNumbers = [];
    for (let index = start; index <= end; index++) {
        if (index % 2 === 0) {
            arrayEvenNumbers.push(index);
        }
    }
    return arrayEvenNumbers;
    // Change code above this line
}

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));

// ------------------------------------------------
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

function findNumber(start, end, divisor) {
    // Change code below this line
    for (let i = start; i < end; i += 1) {
        if (i % divisor === 0) {
            console.log("1", i);
            return i;
        }
        console.log("2", i);
    }

    return;
    // Change code above this line
}
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

// -----------------------------------------------------

// Напиши функцію includes(array, value), яка робить те саме,
// що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value,
//  повертаючи true, якщо присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна використовувати
// метод масив.includes(значення).
//1перебрати масив
//2 на кожній ітерації провірити чи входе значення

function includes(array, value) {
    // return array.includes(value);
    for (const arr of array) {
        if (arr === value) {
            return true;
        }
    }
    return false;
}

console.log(includes([1, 2, 3, 4, 5], 3)); // true
console.log(includes([1, 2, 3, 4, 5], 17)); // false
console.log(
    includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
); // true
console.log(
    includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
); // false
console.log(includes(["apple", "plum", "pear", "orange"], "plum")); // true
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); // false
