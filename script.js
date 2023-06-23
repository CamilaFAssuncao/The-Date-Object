//Exercise 1

// Find the timezones of :

// Anchorage (USA) UTC -8 2023-06-23T11:00-08:00
// Reykjavik (Iceland) UTC +0 2023-06-23T11:00+00:00
// Saint-Petersburg (Russia) UTC +3 2023-06-23T11:00+03:00
// Brussels  (Belgium) UTC +2 2023-06-23T11:00+02:00

// And display the date and time of these cities along with the time and date of Brussels.

const currentLocalDate = new Date();

// all three clocks represent current time
let usa = new Date(); // current moment
let iceland = new Date();
let russia = new Date();
let belgium = new Date();

// for outputting, adjust them
// leave clock1 in UTC
usa.setHours(usa.getHours() - 8); // UTC-8
iceland.setHours(iceland.getHours() + 0); // UTC+0
russia.setHours(russia.getHours() + 3);

// now for display, use these values:
const belgiumHours = belgium.getUTCHours();
const belgiumMinutes = belgium.getUTCMinutes();
const belgiumSeconds = belgium.getUTCSeconds();

const usaHours = usa.getUTCHours();
const usaMinutes = usa.getUTCMinutes();
const usaSeconds = usa.getUTCSeconds();

const icelandHours = iceland.getUTCHours();
const icelandMinutes = iceland.getUTCMinutes();
const icelandSeconds = iceland.getUTCSeconds();

const russiaHours = russia.getUTCHours();
const russiaMinutes = russia.getUTCMinutes();
const russiaSeconds = russia.getUTCSeconds();

// Display the values on the page

document.querySelector(".belgium").textContent = `${belgiumHours}:${belgiumMinutes}:${belgiumSeconds}`;
document.querySelector(".usa").textContent = `${usaHours}:${usaMinutes}:${usaSeconds}`;
document.querySelector(".iceland").textContent = `${icelandHours}:${icelandMinutes}:${icelandSeconds}`;
document.querySelector(".russia").textContent = `${russiaHours}:${russiaMinutes}:${russiaSeconds}`;


//Exercise 2

// Using timestamps, find how many days have passed since the date of your birth.

// Write a function to find how many days have passed since any point in time (after 1970).

//Number of days since my birthday
// const referenceDate = new Date('1991-08-20');

// // Calculate milliseconds in a year
// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// // Divide Time with a year
// const currentDate = new Date();
// const timeDifference = currentDate.getTime() - referenceDate.getTime();
// let days = Math.round(timeDifference / day);

// document.getElementById("date").innerHTML = days;

