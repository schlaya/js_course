const numbers = [1, 2, 3]

// .every() checks all elements for a certain condition
// if it checks out returns true
const allPositive = numbers.every(function(value) {
    return value >= 0;
});

console.log(allPositive);

// .some() checks elements for a certain condition 
// if one checks out returns true
const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive);