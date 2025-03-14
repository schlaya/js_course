// for-in
const person = {
    name: 'Liam',
    age: '18'
};
// use for in to iterate over the properties of an object
for (let key in person)
    console.log(key, person);

const colors = ['green', 'blue', 'red']
// use for of to iterate trough an array
for (let color of colors)
    console.log(color);