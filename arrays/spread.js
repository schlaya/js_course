const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second)
// the '...' is called spread, this will spread
// all the elements of each array into the new array
// named combined
const combined = [...first, 'a', ...second, 'b'];

// const copy = combined.slice();
const copy = [...combined];