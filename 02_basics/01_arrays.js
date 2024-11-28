// array
// Array is collection of multiple items under a single variable name
// JS arrays are resizable and can contain a mixof different data types: const myArr = [1, 1, 2, 3, 4, 5, true, "riya"]
// inside bracket it is called elements
// JS arrays are not associative arrays, cannot access: console.log(myArr["one"]);
// must be accessed using nonnegative integers (or their respective string form) as indexes: console.log(myArr[0]);
// zero based indexed

// shallow copy is like heap
// deep copy is like stack

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1]);

//Array methods

// myArr.push(6)               // .push() add value in the last in array
// myArr.push(7)

// myArr.pop()                 // .pop() remove last value in array

// myArr.unshift(9)            // .unshift add first value in array

// myArr.shift()               // .shift remove first value in array

// console.log(myArr.includes(9));         // boolean type: true or false
// console.log(myArr.indexOf(19));         // can ask for index: if the value is not in the array it will show -1 value for the index
// console.log(myArr.indexOf(3));

const newArr = myArr.join();

// console.log(myArr);          //typeof object
// console.log(newArr);         //typeof string
// console.log(typeof newArr);

// slice, splice

// slice: return a copy of a section of an array nd doesn't manipulate original array

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);

// splice: manipulate original array

const myn2 = myArr.splice(1, 3);

console.log("C", myArr);
console.log(myn2);
