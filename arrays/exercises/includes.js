const numbers = [1, 2, 3, 4];

console.log(numbers.includes(5));

// My solution
function includes(array, searchElement) {
    for (let i = 0; i < array.length; i++)
        if (array[i] === searchElement)
            return true;
}

// Mosh's Solution
function includesMosh(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
}