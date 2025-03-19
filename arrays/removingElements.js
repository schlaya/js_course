const numbers = [1, 2, 3, 4];

// End
// deletes the last element of an array
const last = numbers.pop();
// returns the element that was removed
console.log(last);

// Beginning
const first = numbers.shift();
// returns the element that was removed
console.log(first)

// Middle
// two elements beginning form the 
// 2index 2 will be removed
numbers.splice(2, 2)