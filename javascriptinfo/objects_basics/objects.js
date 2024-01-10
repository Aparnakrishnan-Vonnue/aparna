let user = new Object(); //or
let user1 = {}; //This creates an empty object. [object literal]
// console.log(user, user1);

//key value pairs

let newUser = {
  name: "Aparna", //key value pair in an object
  age: 30, //trailing or hanging comma
  "like birds": true,
};

newUser.isAdmin = true;

// delete newUser.age;
// console.log(newUser);
// console.log(newUser["like birds"]);

// console.log(newUser.name);

//

let userOne = {
  name: "John",
  age: 30,
};

let key = ("What do you want to know about the user?", "age");
// console.log(userOne[key]);

let fruit = "apple";
let bag = {};

bag[fruit] = 5;

// console.log(bag)
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let userTwo = makeUser("John", 30);
