//example 1
let car = "BMW";

// console.log("Is car == 'subaru'? I predict True.");

// console.log(car == "subaru");

if (car === "BMW") {
  console.log("Example 1: I predict true");
  console.log(car == "BMW");
} else {
  console.log("I predict false");
}

//example 2

let age = 20;
if (age >= 18) {
  console.log("Example 2: Age > 18: I predicted True");
} else {
  console.log("Example 2: Age is not > 18: I predicted false");
}

//example 3

let time = 10;
if (time <= 10) {
  console.log("Example 3: Good Morning");
} else {
  console.log("Example 3: Good After Morning");
}

//exampe 4

let admin = "Shahzaib";
if (admin == "Shahziab") {
  console.log("Example 4: Access Allowed! ");
  console.log(`Example 4: ${admin == "Shahzaib"}`);
} else {
  console.log("Example 4: Access Denied! ");
  console.log(`Example 4: ${admin == "Shahzaib"}`);
}

//example 5
let favouriteWriter = "Elif Shafak";
if (favouriteWriter == "Elif Shafak") {
  console.log("Example 5: Writer is Elif: I predicted true");
  console.log(favouriteWriter == "Elif Shafak");
} else {
  console.log("Example 5: I predicted false");
  console.log(favouriteWriter == "Elif Shafak");
}

//example 6

let user_age = 10;
if (age === 18) {
  console.log(`Example 6: Your predicted age: ${user_age} is true`);
} else {
  console.log(`Example 6: Your predicted age: ${user_age} is false`);
}

//example 7
let mobile = "samsung";
if (mobile == "huawei") {
  console.log(`Example 7: Your predicted mobile: ${mobile} is true`);
} else {
  console.log(`Example 7: Your predicted mobile: ${mobile} is false`);
}

//example 8
let certification = "blockchain";
if (certification == "metaverse") {
  console.log(`Example 8: You predicted course: ${certification} is true`);
} else {
  console.log(`Example 8: You predicted course: ${certification} is false`);
}

//example 9
let weather = "rainy";
if (weather == "sunny") {
  console.log(`Example 9: You predicted weather: ${weather} is true`);
} else {
  console.log(`Example 9: You predicted weather: ${weather} is false`);
}

//example 10
let user_numbers = 200;
if(user_numbers == 500){
  console.log(`Example 10: Notify admin, 'I predicted true'`);
}else{
  console.log(`Example 10: Donot notify admin, 'I predicted false'`);
}
