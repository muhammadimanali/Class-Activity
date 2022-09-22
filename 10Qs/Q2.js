// Write a function to print all odd numbers till n

const n = 10

function printOdd() {
    for (let i=0; i<=n; i++) {
      if(i % 2 !== 0) {
        console.log(i);
      }
    }
  }printOdd(n)