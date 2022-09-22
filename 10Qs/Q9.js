/* Write a function to print factorial of number n. If n = 5, then factorial of 5 is
5*4*3*2*1. If the factorial of 10 is 10*9*8*7*6*5*4*3*2*1 */

const prompt = require("prompt-sync")();

let n = prompt("Enter number, n: ")
let fact = 1

function factorial () {
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
        console.log(`The factorial of ${n} is ${fact}.`);
}factorial()