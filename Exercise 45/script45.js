//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.

function car(manufacturer, model, ...options){
    let car = {
        manufacturer: manufacturer,
        model: model,
        options: options
    }
    return car;
}

let car1 = car("Toyota", "Corolla", "Color: White", "Transmission: Automatic");
let car2 = car("Honda", "Civic", "Color: Black", "Transmission: Manual");
let car3 = car("Suzuki", "Cultus", "Color: Red", "Transmission: Automatic");

console.log(car1);
console.log(car2);
console.log(car3);

