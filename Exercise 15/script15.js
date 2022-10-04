//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guests = ["Shahzaib", "Irfan", "Hamza", "Ali", "Ahmed"];
console.log(`I cordially invite ${guests[0]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[1]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[2]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[3]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[4]} to the dinner held at my residence tomorrow at 8pm`);

//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log(`As ${guests[2]} couldn't make it to join us at dinner. `);

//Print a second set of invitation messages, one for each person who is still in your list.
guests.splice(2, 1, "Sami");

//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`I cordially invite ${guests[0]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[1]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[2]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[3]} to the dinner held at my residence tomorrow at 8pm`);
console.log(`I cordially invite ${guests[4]} to the dinner held at my residence tomorrow at 8pm`);


