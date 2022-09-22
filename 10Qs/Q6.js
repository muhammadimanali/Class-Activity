/* Write a function to calculate area of rectangle where width and height of the 
rectangle are input */

const prompt = require("prompt-sync")();

let height = prompt("Height: ")
let width = prompt("Width: ")

function areaRectangle () {
    area = width * height
    console.log(`Area of rectangle of height: ${height} and width: ${width} is ${area}m`);
}areaRectangle()