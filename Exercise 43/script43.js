//Unchanged Magicians: Start with your work from Exercise 41. 
//Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//Copy of Exercise 42

function show_magicians(magicians){
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

let magicians = ["Shahzaib", "Irfan", "Ahmed", "Bisma", "Amna"];

function make_great(magicians){
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians[i] = `The Great ${magicians[i]}`;
    }
    return great_magicians;
}

let great_magicians = make_great(magicians);

show_magicians(magicians);
show_magicians(great_magicians);

