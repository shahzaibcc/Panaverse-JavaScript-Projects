//Alien Colors #3: Turn your if-else chain
//If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.

let alien_color = "yellow";

if (alien_color === "green") {
  console.log(`Player has earned 5 points`);
} else if (alien_color === "yellow") {
  console.log(`Player has earned 10 points`);
} else if (alien_color === "red") {
  console.log(`Player has earned 15 points`);
}

// Write three versions of this program, 
//making sure each message is printed for the appropriate color alien.

let alien_color1 = "green";
let alien_color2 = "yellow";
let alien_color3 = "red";

if(alien_color1 === "green"){
    console.log(`Player has earned 5 points`);
}

if(alien_color2 === "yellow"){
    console.log(`Player has earned 10 points`);
}

if(alien_color3 === "red"){
    console.log(`Player has earned 15 points`);
}