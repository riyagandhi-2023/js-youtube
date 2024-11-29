// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello world!"
for (const greets of greetings) {
    //console.log(`Each char is ${greets}`);
}

// Maps:
/*
 Map is an object holds collections of key-value pairs 
 and remembers the original insertion order of the keys.

*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
}


//--------------------------------------


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}

//output error: myObject is not iterable

//======== OR ==============//

const myObject1 = {
    "game1": 'NFS',
    "game2": 'Spiderman'
}

for (const [key, value] of myObject1) {
    console.log(key, ':-', value);
}

//output error: myObject1 is not iterable


// ==> object can be iterable but different way