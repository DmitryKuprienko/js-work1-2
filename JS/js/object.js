const apartment1 = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    },
};

// console.log(apartment1.owner.name);
// -----------------------------------------------------------------------------------------------
const apartment2 = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment2;
const aptDescr = apartment2;
const aptPrice = apartment2;
const aptTags = apartment2;
// console.log(aptRating.rating);
// console.log(aptDescr.descr);
// console.log(aptPrice.price);
// console.log(aptTags.tags);
// Change code above this line
// -------------------------------------------------------

const apartment3 = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    },
};

// Change code below this line
apartment3.price = 5000;
apartment3.rating = 4.7;
apartment3.owner.name = "Henry Sibola";
apartment3.tags.push("trusted");

// console.log(apartment3);
// ----------------------------------------------------------------------------------
const apartment4 = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment4 in the city center",
    rating: 4.7,
    price: 5000,
    tags: ["premium", "promoted", "top", "trusted"],
    owner: {
        name: "Henry Sibola",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    },
};
apartment4.area = 60;
apartment4.rooms = 3;
apartment4.location = {};
apartment4.location.country = "Jamaica";
apartment4.location.city = "Kingston";
// Change code below this line
// console.log(apartment4);
// =----------------------------

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
    // Change code below this line
    name,
    price,
    image,
    tags,
    // Change code above this line
};
// console.log(product.tags);
// -----------------------------------------------------------------------------------------------------
const apartment5 = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};
const keys1 = [];
const values1 = [];
// Change code below this line

for (const key in apartment5) {
    keys1.push(key);
    values1.push(apartment5[key]);
    // console.log("властивість обєкта-> ", key);
    // console.log("значення властивості->", apartment5[key]);
}

// console.log(keys1, values1);
// ----------------------------------------------------------------------------------
// Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.
const keys2 = [];
const values2 = [];
const advert1 = {
    service: "apt",
};

const apartment6 = Object.create(advert1);
apartment6.descr = "Spacious apartment6 in the city center";
apartment6.rating = 4;
apartment6.price = 2153;
// console.log("newObject->", apartment6);
// console.log( "apartmen6->" ,Object.keys(apartment6))
for (const key in apartment6) {
    if (apartment6.hasOwnProperty(key)) {
        keys2.push(key);
        values2.push(apartment6[key]);
        // console.log("властивість обєкта-> ", key);
        // console.log("значення властивості->", apartment6[key]);
    }
}
// console.log(keys2, values2);
// --------------------------------------------------
// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object.
//Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

function countProps1(object) {
    let propCount1 = 0;

    // Change code below this line
    const arraykeys = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            // console.log("key-->", key);
            arraykeys.push(key);
            propCount1 = arraykeys.length;
        }
    }
    // Change code above this line

    return propCount1;
}

// console.log(countProps1({ name: "Mango", age: 2 })); // 2
// console.log(countProps1({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
// ------------------------------------------------------------------------------------------------
// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
//  і додай в масив values всі значення його властивостей.

const apartment7 = {
    descr: "Spacious apartment7 in the city center",
    rating: 4,
    price: 2153,
};

const values = [];
// Change code below this line
const keys = Object.keys(apartment7);

for (const key of keys) {
    // console.log("key->", key)
    // console.log("values->", apartment7[key])
    values.push(apartment7[key]);
}
// console.log("values=>", values);
// console.log("apartment7->", keys);
// -------------------------------------------------

// Виконай рефакторинг функції countProps(object),
// використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

function countProps2(object) {
    // Change code below this line
    let propCount = 0;

    propCount = Object.keys(object).length;
    // console.log(keys)
    // propCount=keys;
    // for (const key in object) {
    //   if (object.hasOwnProperty(key)) {
    //     propCount += 1;
    //   }
    // }

    return propCount;
    // Change code above this line
}

//   console.log( countProps2({}) )// 0
//   console.log( countProps2({ name: "Mango", age: 2 }) )// 2
//   console.log( countProps2({ mail: "poly@mail.com", isOnline: true, score: 500 }) )// 3

//   ---------------------------------------------------------------------------
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника,
//  а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
// Використовуй змінну totalSalary для зберігання загальної суми зарплати.
// 1 витягнути з обьєкта суми ЗП і записати в ммасив
// 2 перебрати масив додаючи 1 елемент до другого

// function countTotalSalary(salaries) {
//     let totalSalary = 0;

//     const arrayValues = Object.values(salaries);
//     for (const val of arrayValues) {
//         totalSalary += val;
//     }

//     return totalSalary;
// }

// console.log(countTotalSalary({}));// повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));// повертає 330
// console.log( countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) );//повертає 400

// ---------------------------------------------------
// переберання масиву обьєктів

const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (let color of colors) {
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
}

//   console.log(hexColors,rgbColors)
// ----------------------------------------------------
// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.
// Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price).
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

//1 перебрати масив до обєктів
//2 створити масив значень
//3 якщо значення Є в масиві значень з пункту 2 то вивести ціну з обьекта
//4 якщо масив не містить отриманош значення вивести нал
const products1 = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
    let priceProduct = null;

    for (const product of products1) {
        const arrayValues = Object.values(product);
        if (arrayValues.includes(productName)) {
            // console.log(product.price)

            priceProduct = product.price;
            break;
        }

        // console.log("немає в масиві=>" , arrayValues)
    }

    return priceProduct;
}

// console.log(getProductPrice("Radar")); // 1300.
// console.log(getProductPrice("Grip")); // 1200.
// console.log(getProductPrice("Scanner")); // 2700.
// console.log(getProductPrice("Droid")); // 400.
// console.log(getProductPrice("Engine")); // null.
// --------------------------------------------------------

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
//  Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
//  Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

//1 перебрати пасив на обєкти
//2 перевірити чи в обьєкті є така властивість якщо немає нічого не робити
//3 якщо є записати в масив значеня властивості

const products2 = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
    let arrayNameValues = [];
    for (const product of products2) {
        const arrayKey = Object.keys(product);
        if (arrayKey.includes(propName)) {
            arrayNameValues.push(product[propName]);
        }
    }
    return arrayNameValues;
}

// console.log(getAllPropValues("name"));// повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity"));// повертає [4, 3, 7, 9]
// console.log(getAllPropValues("price"));// повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category"));// повертає []
// -------------------------------------------------------------------------------
// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару.
// Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    // Change code below this line
    let totapPrice = 0;
    for (const product of products) {
        if (productName === product["name"]) {
            
            totapPrice = product["price"] * product.quantity
        }
    }

    return totapPrice;
}

console.log(calculateTotalPrice("Blaster")); // 0
console.log(calculateTotalPrice("Radar")); // 5200
console.log(calculateTotalPrice("Droid")); // 2800
console.log(calculateTotalPrice("Grip")); // 10800
console.log(calculateTotalPrice("Scanner")); // 8100
