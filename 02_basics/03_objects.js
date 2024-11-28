// -------------  objects --------------------

/* 
=> it can declare two ways: Object Literals and Constructor Function 
=> Constructor Function create singleton object: a software design pattern that restricts a class to a single instance

==>   Singleton
=> Object.create  // Constructor Method

=> singleton won't create if you are declaring with object literal */

//-------------- object liteals

const mySym = Symbol("key1"); // declare symbol

const JsUser = {
  name: "Riya",
  "full name": "Riya Gandhi",
  [mySym]: "mykey1", // how to make key and value for symbol
  age: 18,
  location: "Jaipur",
  email: "riya@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// ways of accessing objects key's value: .notation

// console.log(JsUser.email)                 // ok to use because if you have given key as string "" this will not able to access
// console.log(JsUser.full name)             // see the example
// console.log(JsUser["email"]);             // Good way to practice (another way of doing)
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);             // print symbol in object

JsUser.email = "riya@chatgpt.com"; // way of changing or override the values in object
// Object.freeze (JsUser)                      // freeze or locked the object for not changing value
JsUser.email = "riya@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

// console.log(JsUser.greeting);           // if the object.freeze is present it will give you undefined
// console.log(JsUser.greeting);         // if the object.freeze is not present it will give you [Function (anonymous)]

// console.log(JsUser.greeting());       // if the object.freeze is present it will give you error: JsUser.greeting is not a function
console.log(JsUser.greeting()); // if the object.freeze is not present it will give you Hello JS user undefined

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greetingTwo());
