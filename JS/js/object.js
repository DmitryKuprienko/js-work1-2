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

console.log(apartment1.owner.name);
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
console.log(aptRating.rating);
console.log(aptDescr.descr);
console.log(aptPrice.price);
console.log(aptTags.tags);
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
const keys = [];
const values = [];
const advert = {
    service: "apt",
};

const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;
// console.log("newObject->", apartment);

for (const key in apartment) {
    if (apartment.hasOwnProperty(key)) {
        keys.push(key);
        values.push(apartment[key]);
        // console.log("властивість обєкта-> ", key);
        // console.log("значення властивості->", apartment5[key]);
    }
}
// console.log(keys, values);

// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object.
//Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

function countProps(object) {
    let propCount = 0;

    // Change code below this line
    const arraykeys = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            // console.log("key-->", key);
            arraykeys.push(key);
            propCount = arraykeys.length;
        }
    }
    // Change code above this line

    return propCount;
}

console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
