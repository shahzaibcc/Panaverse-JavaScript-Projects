//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guests = ["Shahzaib", "Irfan", "Hamza", "Ali", "Ahmed"];
console.log(`I cordially invite ${guests[0]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[1]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[2]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[3]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[4]} to the dinner held at my residence tomorrow at 8pm`);


console.log(`As Miss ${guests[2]} couldn't make it to join us at dinner. `);

guests.splice(2, 1, "Sami");  //Replacing not available guests with new guest   
console.log(`I cordially invite ${guests[0]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[1]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[2]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[3]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[4]} to the dinner held at my residence tomorrow at 8pm`);

console.log(`As I found a bigger dinner table I may invite some more guests in dinner.`);

guests.unshift("Nawaz"); //adding new guest at the start of the array.
// console.log(guests);

guests.splice(3, 0, "Bakir"); //adding new guest in the middle of the array.
// console.log(guests);

guests.push("Fatima"); //adding new guests at the end of array
console.log("After Append new guest list is: " +guests);

console.log(`I cordially invite ${guests[0]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[1]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[2]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[3]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[4]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[5]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[6]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[7]} to the dinner held at my residence tomorrow at 8pm`);


