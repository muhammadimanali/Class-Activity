// Write a function to convert minute to seconds

const prompt = require("prompt-sync")();

let minute = prompt("Enter a number: ")

function secConvert() {
    let seconds = minute * 60
    
    console.log(seconds);
}secConvert(minute)

