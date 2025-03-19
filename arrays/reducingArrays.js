const numbers = [1, -1, 2, 3];

let sum = 0;
// loops trough the array and adds each value to sum
for (let n of numbers)
    sum += n;

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum1 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});