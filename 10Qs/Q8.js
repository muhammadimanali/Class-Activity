// Write a function to convert hours to minute

const prompt = require("prompt-sync")();

let hours = prompt("Enter hours: ")

function hrsConvert() {
    let minute = hours * 60
    
    console.log(minute);
}hrsConvert(hours)
