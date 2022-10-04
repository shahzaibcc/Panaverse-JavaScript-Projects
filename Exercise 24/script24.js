//Tests for equality and inequality with strings

//Example 1:

let user_age = "20";

if(user_age === 20){
    console.log(`Example 1: Tests for equality with strings is "true"`);
}else{
    console.log(`Example 1: Tests for equality with strings is "false"`);
}

//Example 2:
let a = "1";
let b = "2";

if (a !== b){
    console.log(`Example 2: Tests for inequality with strings is "true"`);
}else{
    console.log(`Example 2: Tests for inequality with strings is "false"`);
}

//Tests using the lower case function
//Example 3
let user_name = "Shahzaib";

if(user_name === "Shahzaib"){
    console.log(`Example 3: Strings are equals`);
}else{
    console.log(`Example 3: Strings are not equal`);
}


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Example 4:
let num1 = 4;
let num2 = 4;

if (num1 === num2){
    console.log(`Example 4: Numbers are equal`);
}else{
    console.log(`Example 4: Numbers are not equal`);
}

//Example 5:
let num3 = 23;
let num4 = 25;

if (num3 === num4){
    console.log(`Example 5: Numbers are equal`);
}else{
    console.log(`Example 5: Numbers are not equal`);
}

//Example 6:
if(num4 > num3){
    console.log(`Example 6: ${num4} is greater than ${num3}`);
}else{
    console.log(`Example 6: ${num4} is not greater than ${num3} `);
}

//Example 7:
if(num3 < num4){
    console.log(`Example 7: ${num3} is less than ${num4}`);
}else{
    console.log(`Example 7: ${num3} is not less than ${num4}`);
}

//Example 8:
if(num3 <= num4){
    console.log(`Example 8: ${num3} is less than and equal to ${num4}`);
}else{
    console.log(`Example 8: ${num3} is not less than and equal to ${num4}`);
}

//Example 9:
if(num1 >= num2){
    console.log(`Example 9: ${num1} is greater than and equal to ${num2}`);
}else{
    console.log(`Example 9: ${num1} is not greater than and equal to ${num2}`);
}


//Tests using "and" and "or" operators
//Example 10:

if(num1 == num2 && num3 < num4){
    console.log(`Example 10: All conditions are True for an AND operator.`);
}else{
    console.log(`Example 10: All conditions are not True for an AND operator.`);
}

//Example 11:

if(num1 != num2 && num3 < num4){
    console.log(`Example 11: All conditions are True for an AND operator.`);
}else{
    console.log(`Example 11: All conditions are not True for an AND operator.`);
}

//Example 12: 
if(num1 != num2 || num3 < num4){
    console.log(`Example 12: Any one condition is True for an OR operator.`);
}else{
    console.log(`Example 12: No condition is True for an OR operator.`);
}

//Example 13:
if(num1 != num2 || num3 > num4){
    console.log(`Example 13: Any one condition is True for an OR operator.`);
}else{
    console.log(`Example 13: No condition is True for an OR operator.`);
}

//Test whether an item is in array
//Example 14:

let arr = ["Shahzaib", "Irfan", "Zain"];

if (arr.includes("Shahzaib")){
    console.log(`Example 14: Item found in Array`);
}else{
    console.log(`Example 14: Item doesnot found in Array`);
}

//Test whether an item is not in an array
//Example 15:

let arr2 = ["Shahzaib", "Irfan", "Zain"];

if (arr.includes("Bilal")){
    console.log(`Example 14: Item found in Array`);
}else{
    console.log(`Example 14: Item doesnot found in Array`);
}