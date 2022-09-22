// Write a function to print first 'n' fibonacci numbers. In fibonacci sequence, next number is the sum
//  of previous 2 number. First 2 number in sequence are constant. 0, 1 is constant in fibonacci sequence
//   0,1,1,2,3,5,8,13,21,34,55,89, ...

const prompt = require("prompt-sync")();

let n = prompt("Enter your number, n: ")

function listFibonacci(n) {
    for (var fibonacci = [0, 1], i = 1; i < n; i++) 
      fibonacci.push(fibonacci[i] + fibonacci[i - 1])

    return fibonacci
  }
console.log( listFibonacci(n) )