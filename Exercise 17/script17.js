//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.//
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guests = ["Shahzaib", "Irfan", "Hamza", "Ali", "Ahmed"];
// console.log(`I cordially invite ${guests[0]} to the dinner held at my residence tomorrow at 8pm`);
// console.log(`I cordially invite ${guests[1]} to the dinner held at my residence tomorrow at 8pm`);
// console.log(`I cordially invite ${guests[2]} to the dinner held at my residence tomorrow at 8pm`);
// console.log(`I cordially invite ${guests[3]} to the dinner held at my residence tomorrow at 8pm`);
// console.log(`I cordially invite ${guests[4]} to the dinner held at my residence tomorrow at 8pm`);

console.log(`As Miss ${guests[2]} couldn't make it to join us at dinner. `);

guests.splice(2, 1, "Sami"); //Replacing not available guests with new guest
// console.log(`I cordially invite ${guests[0]} to the dinner held at my residence tomorrow at 8pm`);
// console.log(`I cordially invite ${guests[1]} to the dinner held at my residence tomorrow at 8pm`);
// console.log(`I cordially invite ${guests[2]} to the dinner held at my residence tomorrow at 8pm`);
// console.log(`I cordially invite ${guests[3]} to the dinner held at my residence tomorrow at 8pm`);
// console.log(`I cordially invite ${guests[4]} to the dinner held at my residence tomorrow at 8pm`);

console.log(
  `As I found a bigger dinner table I may invite some more guests in dinner.`
);

guests.unshift("Rumaisa"); //adding new guest at the start of the array.
// console.log(guests);

guests.splice(3, 0, "Azlan"); //adding new guest in the middle of the array.
console.log(guests);

guests.push("Amina"); //adding new guests at the end of array
console.log("After Append new guest list is: " + guests);

console.log(
  `I cordially invite ${guests[0]} to the dinner held at my residence tomorrow at 8pm`
);
console.log(
  `I cordially invite ${guests[1]} to the dinner held at my residence tomorrow at 8pm`
);
console.log(
  `I cordially invite ${guests[2]} to the dinner held at my residence tomorrow at 8pm`
);
console.log(
  `I cordially invite ${guests[3]} to the dinner held at my residence tomorrow at 8pm`
);
console.log(
  `I cordially invite ${guests[4]} to the dinner held at my residence tomorrow at 8pm`
);
console.log(
  `I cordially invite ${guests[5]} to the dinner held at my residence tomorrow at 8pm`
);
console.log(
  `I cordially invite ${guests[6]} to the dinner held at my residence tomorrow at 8pm`
);
console.log(
  `I cordially invite ${guests[7]} to the dinner held at my residence tomorrow at 8pm`
);

console.log("I can only invite 2 people for dinner.");
// console.log(guests);

let guest1 = guests.pop();
let guest2 = guests.pop();
let guest3 = guests.pop();
let guest4 = guests.pop();
let guest5 = guests.pop();
let guest6 = guests.pop();

console.log(`${guest1}, sorry I can't invite you to the dinner.`);
console.log(`${guest2}, sorry I can't invite you to the dinner.`);
console.log(`${guest3}, sorry I can't invite you to the dinner.`);
console.log(`${guest4}, sorry I can't invite you to the dinner.`);
console.log(`${guest5}, sorry I can't invite you to the dinner.`);
console.log(`${guest6}, sorry I can't invite you to the dinner.`);

console.log(guests);
console.log(`${guests[0]}, you are still invited`);
console.log(`${guests[1]}, you are still invited`);

guests.pop();
guests.pop();
console.log(guests);


// let guest1 = guests.pop();
// console.log(`${guest1}, sorry I can't invite you to dinner `);
