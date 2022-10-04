//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.


//Check empty index
let user_names = ["Shahzaib", "Irfan", "", "", "Ahmed"];
for (let i = 0; i < user_names.length; i++) {

    if(user_names[i] == ''){
        console.log(`We need to find some user`);
    }    
}

//Check empty whole list
let user_names1 = [];
if(user_names1 == ''){
    console.log(`We need to find some users`);
}  

