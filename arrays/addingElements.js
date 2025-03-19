const numbers = [3, 4];
// a constant does not stop us from modifying it

// End 
numbers.push(5, 6)

// Beginning
numbers.unshift(1, 2)

// Middle
// 2 is at which position it should start, 
// 0 is how many items it should delete
// the following are the entries which will be added
numbers.splice(2, 0, 'a', 'b')