
const numbers = [1, 2, 3, 1, 4];

// returns 0 because the number 1 is 
// located at the index 0
console.log(numbers.indexOf(1))

// returns last index of 1
console.log(numbers.lastIndexOf(1))

// checks if the index of 1 is not 
// equal to -1 
console.log(numbers.indexOf(1) !== -1);
// does the same
console.log(numbers.includes(1))