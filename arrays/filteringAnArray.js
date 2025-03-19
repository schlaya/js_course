const numbers = [1, -1, 2, 3]

// filters the array for elements that are 
// greater or equal to zero
// n is the same as value but when we use n
// for Number it looks compacter / shorter
const filtered = numbers.filter(n => n >= 0);

console.log(filtered)