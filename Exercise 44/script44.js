//Sandwiches: Write a function that accepts an array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.

function make_sandwich(...items){
    console.log(`You ordered a sandwich with ${items}`);
}

make_sandwich("Cheese", "Tomato", "Onion", "Lettuce", "Mayo");
make_sandwich("Cheese", "Tomato", "Onion", "Lettuce", "Mayo", "Ketchup");
make_sandwich("Cheese", "Tomato", "Onion", "Lettuce", "Mayo", "Ketchup", "Mustard");





