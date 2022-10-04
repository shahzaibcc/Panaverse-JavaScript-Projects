//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var person = "Shahzaib Asif";
console.log(person.toLowerCase());
console.log(person.toUpperCase());

//Title Case
let str = person.toLowerCase().split(' ');
for(let i = 0; i<str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    
}
 console.log(str.join(" "));

