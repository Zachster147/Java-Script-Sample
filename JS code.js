const a = Math.random();
console.log(a);


Math.random() * (highestNumber - lowestNumber) + lowestNumber

const b = Math.random() * (10-1) + 1
console.log(b);
console.log(`Random value between 1 and 10 is ${b}`);
//Gwapo ko
// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

// generating a random number
const c = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${c}`);