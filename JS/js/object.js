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
const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment;
const aptDescr = apartment;
const aptPrice = apartment;
const aptTags = apartment;
console.log(aptRating.rating);
console.log(aptDescr.descr);
console.log(aptPrice.price);
console.log(aptTags.tags);
// Change code above this line
