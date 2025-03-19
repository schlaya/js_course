const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

// is the combined of filtered and items, so it 
// will be filtered and mapped in one go
const filteredAndMapped = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n}))
    .filter(obj => obj.value > 1)

// mapps the filtered elements onto a new object
const items = filtered.map(n => {
    // the numbers will be assigned into an object
    // so it will be {value: 1}, {value: 2}, ...
    const obj = { value: n };
    return obj
});

// does the same as above
// if an object gets returned in a one liner
// it has to be in parentheses
const items2 = filtered.map(n => ({ value: n}));

console.log(items)