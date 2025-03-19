const numbers = [1, 2, 3];

for (let number of numbers)
    console.log(number);

// this function will be executed for
// each element of the array
numbers.forEach((number, index) => console.log(index, number))