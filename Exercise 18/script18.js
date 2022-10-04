//Wania --> 02 Oct 2022



let places = ["Zurich", "Bavaria", "Venice", "Amsterdam", "Rome", "Dubrovnik"];

console.log("Array in its Orginal Order: " + places);

//let sortArray = places; //it is not good way to copy an array

//Copying a places Array:
let placesCopy = [];
for (let i = 0; i < places.length; i++) {
  placesCopy[i] = places[i];
}

// console.log(places);
// console.log(placesCopy);

//sorting a copy array:
placesCopy.sort();
console.log("Copy Array After Sorting: " + placesCopy);
console.log("Original Array: " + places);

//print array in reverse order
placesCopy.reverse();
console.log("Copied Array in reverse order: " + placesCopy);
console.log("Original Array: " + places);

//Reverse the order of my list: i.e original list
places.reverse();
console.log("Reverse the order of my list: " + places);
//Reverse again
places.reverse();
console.log("Reverse 2nd time to make it back to original: " + places);
//sorting my list:
places.sort();
console.log("My list has been sorted and changed: " + places);
//sort to change it into reverse alphabetical order
places.reverse();
console.log("My list in reverse alphabetical order: " + places);
