const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);        // Won't merge but it will be in array inside array

// console.log(marvel_heros);           // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);

// concat:  Combine two or more arrays. This method returns a new arrya without modifying any existing arrys

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);                  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//Spread operator:

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

// flat: returns a new array with all sub-array elements concatenated into it recursively up t the specified depth

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);

console.log(Array.isArray("Riya"));
console.log(Array.from("Riya")); //convert into array
console.log(Array.from({ name: "riya" })); // will give you empty array : need to give keys or values to get arrays

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // .of will return a new array from a set of elements
