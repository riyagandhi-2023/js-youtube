// Dates

// The locale of GitHub Codespaces may not match your system's locale, leading to different formatting for dates and times.
// The Date object uses the system's timezone settings by default.  
// In GitHub Codespaces, the environment may be set to UTC (Coordinated Universal Time), which could differ from your local timezone.

let myDate = new Date()
// console.log(myDate);                               // 2024-11-28T00:36:02.656Z
// console.log(myDate.toString());                    // Thu Nov 28 2024 00:34:34 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());                // Thu Nov 28 2024
// console.log(myDate.toISOString());                 // 2024-11-28T00:37:07.717Z
// console.log(myDate.toJSON());                      // 2024-11-28T00:37:34.748Z
// console.log(myDate.toLocaleDateString());          // 11/28/2024
// console.log(myDate.toLocaleString());              // 11/28/2024, 12:38:55 AM
// console.log(myDate.toLocaleTimeString());          // 12:39:22 AM
// console.log(myDate.toTimeString());                // 00:39:47 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString());                 // Thu, 28 Nov 2024 00:43:18 GMT

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());



//show your system local timezone

const options = { timeZone: 'America/New_York', dateStyle: 'full', timeStyle: 'long' };
// console.log(new Intl.DateTimeFormat('en-US', options).format(myDate));         
// Wednesday, November 27, 2024 at 7:54:21 PM EST

// console.log(myDate.toLocaleString('en-US'));                    //  11/28/2024, 1:02:56 AM




// Time

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

//`${newDate.getDay()} an the time`

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'America/New_York',

}));






