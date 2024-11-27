let score = "riya"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33aabc" => NaN (Not a Number)
// true => 1; false => 0
// null => 0
// undefined => NaN
// "riya" => NaN


let isLoggedIn = "riya"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "riya" => ture


let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);  Addition
// console.log(2-2);  Subtraction
// console.log(2*2);  Multiplication
// console.log(2**3); Exponentiation
// console.log(2/3);  Division
// console.log(2%3);  Modulus (Remainder)


let str1 = "hello"
let str2 = " riya"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( 3 + 4 * 5 % 3);    // not good way of writing
// console.log( (3 + 4) * 5 % 3);  // sill not good but you can use parentheses


// console.log(+true);    //not good way of writing. Not preferable
// console.log(+"");      //not good way of writing. Not preferable

let num1, num2, num3        //not good way of writing. Not preferable
num1 = num2 = num3 = 2 + 2  //not good way of writing. Not preferable

let gameCounter =100
gameCounter++;    // ++gameCounter;
console.log(gameCounter);


//prefix and postfix operations:

// *********************** postfix *********************** 

let x = 3;                          //first y is assigning. The value so y is 3.  y = x
const y = x++;                      //then x is incrementing. The value of x is 4.   x++ = 3+1 = 4

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"      

//so in postfix (operator after operand (x++)) operator will increments and returns the value before incrementing 



// *********************** prefix *********************** 



let a = 3;                          //first a is incrementing. The value of is 4.  a++ = 1+3 = 4
const b = ++a;                      //then b is initializing . The value of b is 4.   b = a

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

//so in prefix (operator after operand (++x)) operator will increments and returns the value after incrementing 

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

