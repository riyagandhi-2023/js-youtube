const name = "riya"
const repoCount = 50

// console.log(name + repoCount + " Value");   // do not recommend to use this syntax

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  
//This is called string interpolation (using back ticks (``)).


const gameName = new String('riya-rg-com');

//console.log(typeof gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);


//console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('g'));


const newString = gameName.substring(0,4);     //don't take -negative value
// console.log(newString);

// const anothoerString = gameName.slice(-6,4);
const anothoerString = gameName.slice(0,4);
console.log(anothoerString);

const newStringOne = "   riya   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://riya.com/riya%20gandhi"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));


console.log(gameName.split('-'));
