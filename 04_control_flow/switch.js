// switch case use for checking multiple condition

/* switch (key) {
    case value:
        break;
    default:
        break;
} */

//==========================

// const month = 3

// switch (month) {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

// if it matches the key it will execute all the code afterwards except default
// if it matches key and there is no break it matches further key and will execut and show all code

// break uses for break to control flow

const month = "march";

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  case "april":
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}
