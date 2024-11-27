// console.log(2 > 1);      2 is greater than 1
// console.log(2 >= 1);     2 is greater than or equal to 1
// console.log(2 < 1);      2 is less than 1
// console.log(2 <= 1);     2 is less than  or equal to 1
// console.log(2 == 1);     2 is equal to  1
// console.log(2 != 1);     2 is not equal to  1


// console.log("2" > 1);        //true
// console.log("02" > 1);       //true

// console.log(null > 0);      //false       
// console.log(null < 0);      //false
// console.log(null >= 0);     //true
// console.log(null <= 0);     //true
// console.log(null == 0);     //false
// console.log(null != 0);     //true

// conversions to avoid to use are null and undefined.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is that an equality check == and compaisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false


// console.log(undefined > 0);      //false       
// console.log(undefined < 0);      //false
// console.log(undefined >= 0);     //false
// console.log(undefined <= 0);     //false
// console.log(undefined == 0);     //false
// console.log(undefined != 0);     //true


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// == convertion happenes but === won't do conversion and with that check value strictly as well its datatype.

// === (strict check)
//  === not only check value but strictly check value as well check datatype. 
console.log("2" === 2);
