/* Write a function to calculate area of the circle where radius is input and formula is 
A=pi x square of radius */

const prompt = require("prompt-sync")();

let input = prompt("Enter radius: ")

function area() {
    areaCircle = Math.PI*(Math.pow(input,2))
    console.log(areaCircle);

}area(input)