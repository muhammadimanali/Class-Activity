/* Write a function to convert age (in years) to the days.
Assume that there are 365 days in 1 years */

const prompt = require("prompt-sync")();

let age = prompt("Enter your age: ")

function convAge () {
    ageDays = age * 365
    console.log(`Your age in days is ${ageDays} days`);
}convAge()