const numbers = [1, 2, 3];

const joined = numbers.join(',')
// logs the items and a ,
console.log(joined)

const message = 'This is my first message';
// splits at every space
const parts = message.split(' ')
console.log(parts)

// combines all parts together with a - in between
const combined = parts.join('-');